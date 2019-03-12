const moment = require('moment');

const START_TIME = '08:00';
const END_TIME = '22:00';

function isBefore(start, end) {
  let startTime = new moment(start, 'HH:mm');
  let endTime = new moment(end, 'HH:mm');

  return moment(startTime).isSameOrBefore(endTime);
}

export const findFreeSpots = (scheduledActivities, duration) => {
  if (scheduledActivities.length === 0) {
    return getStepTimesRange(START_TIME, END_TIME, duration);
  }
  let freeSpots = [];
  let head = scheduledActivities[0].startTime;
  let tail = scheduledActivities[scheduledActivities.length - 1].endTime;
  if (isBefore(START_TIME, head)) {
    freeSpots.push(...getStepTimesRange(START_TIME, head, duration));
  }

  for (let i = 1; i < scheduledActivities.length; i++) {
    let endTimePrev = scheduledActivities[i - 1].endTime;
    let startTimeCur = scheduledActivities[i].startTime;
    freeSpots.push(...getStepTimesRange(endTimePrev, startTimeCur, duration));
  }

  if (isBefore(tail, END_TIME)) {
    freeSpots.push(...getStepTimesRange(tail, END_TIME, duration));
  }
  // console.log('Free Spots', freeSpots);
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
      tracks.push(startTime.format('HH:mm'));
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
      let date = new moment(currDate)
        .add(i, 'days')
        .set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
      dates.push({
        timestamp: date.unix() * 1000,
        date: date.format('MM/DD/YYYY')
      });
    } else if (i === 7) {
      let date = new moment(currDate)
        .add(i, 'days')
        .set({ hour: 23, minute: 59, second: 59, millisecond: 0 });
      dates.push({
        timestamp: date.unix() * 1000,
        date: date.format('MM/DD/YYYY')
      });
    } else {
      let date = new moment(currDate).add(i, 'days');
      dates.push({
        timestamp: date.unix() * 1000,
        date: date.format('MM/DD/YYYY')
      });
    }
  }
  console.log(dates);
  return dates;
};
