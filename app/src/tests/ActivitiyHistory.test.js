import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ActivityHistory from '../components/ActivityHistory';

const mockData = [
  {
    name: 'Hiking',
    desc: 'TORREY PINES',
    bgImg: '/static/media/hiking@2x.cc9e518b.png',
    logo: '/static/media/icn_hiking.fa259032.svg',
    date: '03/10/2019',
    time: '15:05',
    trackedTime: '0:3',
    timestamp: 1552226708845,
    id: 1
  },
  {
    name: 'Surfing',
    desc: 'OCEAN BEACH',
    bgImg: '/static/media/surfing@2x.ed502d78.png',
    logo: '/static/media/icn_surfing.8f01c192.svg',
    date: '03/10/2019',
    time: '15:05',
    trackedTime: '0:1',
    timestamp: 1552226736182,
    id: 2
  },
  {
    name: 'Weights',
    desc: 'HEAVY WEIGHTS',
    bgImg: '/static/media/weights@2x.b5299319.png',
    logo: '/static/media/icn_weights.c2141e59.svg',
    date: '03/10/2019',
    time: '15:05',
    trackedTime: '0:0',
    timestamp: 1552226738433,
    id: 3
  },
  {
    name: 'Spinning',
    desc: 'ROUND AND ROUND',
    bgImg: '/static/media/spinning@2x.f1ef8e0e.png',
    logo: '/static/media/icn_spin.0ff7c39a.svg',
    date: '03/10/2019',
    time: '15:05',
    trackedTime: '0:5',
    timestamp: 1552226747280,
    id: 4
  },
  {
    name: 'Surfing',
    desc: 'OCEAN BEACH',
    bgImg: '/static/media/surfing@2x.ed502d78.png',
    logo: '/static/media/icn_surfing.8f01c192.svg',
    date: '03/10/2019',
    time: '15:29',
    trackedTime: '0:3',
    timestamp: 1552228173405,
    id: 5
  },
  {
    name: 'Hiking',
    desc: 'TORREY PINES',
    bgImg: '/static/media/hiking@2x.cc9e518b.png',
    logo: '/static/media/icn_hiking.fa259032.svg',
    date: '03/10/2019',
    time: '18:15',
    trackedTime: '0:3',
    timestamp: 1552238132188,
    id: 6
  },
  {
    name: 'Surfing',
    desc: 'OCEAN BEACH',
    bgImg: '/static/media/surfing@2x.ed502d78.png',
    logo: '/static/media/icn_surfing.8f01c192.svg',
    date: '03/11/2019',
    time: '13:01',
    trackedTime: '0:7',
    timestamp: 1552305700391,
    id: 7
  }
];
describe('ScheduledActivities', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <ActivityHistory data={mockData} />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
