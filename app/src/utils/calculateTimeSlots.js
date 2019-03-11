const moment = require('moment');

const START_TIME = '08:00';
const END_TIME = '22:00';
const DURATION = 30;

const scheduled = [
  {
    start: '8:30',
    end: '11:00'
  },
  {
    start: '12:00',
    end: '15:00'
  },
  {
    start: '16:10',
    end: '18:00'
  },
  {
    start: '20:00',
    end: '22:00'
  }
];

function isBefore(start, end) {
  let startTime = new moment(start, 'HH:mm');
  let endTime = new moment(end, 'HH:mm');

  return moment(startTime).isSameOrBefore(endTime);
}

export const findFreeSpots = duration => {
  if (scheduled.length === 0) {
    return getStepTimesRange(START_TIME, END_TIME, duration);
  }
  let freeSpots = [];
  let head = scheduled[0].start;
  let tail = scheduled[scheduled.length - 1].end;
  if (isBefore(START_TIME, head)) {
    freeSpots.push(...getStepTimesRange(START_TIME, head, duration));
  }

  for (let i = 1; i < scheduled.length; i++) {
    let endTimePrev = scheduled[i - 1].end;
    let startTimeCur = scheduled[i].start;
    freeSpots.push(...getStepTimesRange(endTimePrev, startTimeCur, duration));
  }

  if (isBefore(tail, END_TIME)) {
    freeSpots.push(...getStepTimesRange(tail, END_TIME, duration));
  }

  return freeSpots;
};

function getStepTimesRange(startTimeIn, endTimeIn, duration) {
  let startTime = new moment(startTimeIn, 'HH:mm');
  let endTime = new moment(endTimeIn, 'HH:mm');

  if (moment.duration(endTime.diff(startTime)).asMinutes() < duration) {
    return [];
  }
  let tracks = [];
  while (isBefore(startTime, endTime)) {
    if (
      isBefore(
        new moment(startTime, 'HH:mm').add(duration, 'minutes'),
        endTimeIn
      )
    ) {
      //   console.log('Track', startTime.format('HH:mm'), 'endTimeIn', endTimeIn);
      tracks.push(startTime.toString());
    }

    startTime = new moment(startTime, 'HH:mm').add(duration, 'minutes');
  }
  return tracks;
}

export const get7DaysRange = () => {
  let dates = [];
  let currDate = moment();
  for (let i = 1; i <= 7; i++) {
    if (i === 1) {
      dates.push(
        new moment(currDate)
          .add(i, 'days')
          .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
          .unix() * 1000
      );
    } else if (i === 7) {
      dates.push(
        new moment(currDate)
          .add(i, 'days')
          .set({ hour: 23, minute: 59, second: 59, millisecond: 0 })
          .unix() * 1000
      );
    } else {
      dates.push(new moment(currDate).add(i, 'days').unix() * 1000);
    }
  }
  console.log(dates);
  return dates;
};
