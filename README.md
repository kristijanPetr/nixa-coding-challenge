# Nixa Coding Challenge

## Getting Started

### Demo Version: http://nixa-app.server.pkristijan.xyz

### Prerequisites

What things you need to install the software and how to install them

```
node >= 8
npm && yarn
```

### Installing

This will install node dependencies for both server and react-app

```
npm run init
```

Alternative run `npm install && cd ./app && npm install`

- Run Dev version

  ```
  npm run dev
  ```

- Run Production version

  ```
  npm run production
  ```

Open in browser http://localhost:4000

## Running the tests

```
npm run test
```

# Time Slots testing feature

TimeSlots array has been altered a little bit.
Instead of original array bellow , data is been stored in db.json file under `/scheduled` so changing startTime, endTime will reflect how timeSlots are shown on Scheduling Activities.

- New data structure

```
    {
      "name": "Weights",
      "logo": "/static/media/icn_weights.c2141e59.svg",
      "date": "03/13/2019",
      "startTime": "17:41",
      "endTime": "19:11",
      "timestamp": 1552431600000,
      "id": 4
    }
```

- Original Array

```
{
  "Monday": [
    {
      "Start": "8:30",
      "End": "11:00"
    },
    {
      "Start": "12:00",
      "End": "15:00"
    }
  ],
  "Wednesday": [
    {
      "Start": "10:00",
      "End": "13:00"
    },
    {
      "Start": "15:00",
      "End": "20:00"
    }
  ],
 ...

}
```

## Authors

- **Kristijan Petrovski** - _Initial work_ - [kristijanPetr](https://github.com/kristijanPetr)
- email: petrovski.k@gmail.com
