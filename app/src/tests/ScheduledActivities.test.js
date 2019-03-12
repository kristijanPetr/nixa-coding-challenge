import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ScheduledActivities from '../components/ScheduledActivities';

const mockData = [
  {
    name: 'Hiking',
    logo: '/static/media/icn_hiking.fa259032.svg',
    date: '03/19/2019',
    startTime: '20:00',
    endTime: '21:30',
    timestamp: 1552950000000,
    id: 6
  },
  {
    name: 'Hiking',
    logo: '/static/media/icn_hiking.fa259032.svg',
    date: '03/13/2019',
    startTime: '17:11',
    endTime: '17:41',
    timestamp: 1552493519000,
    id: 1
  },
  {
    name: 'Weights',
    logo: '/static/media/icn_weights.c2141e59.svg',
    date: '03/13/2019',
    startTime: '08:45',
    endTime: '09:30',
    timestamp: 1552431600000,
    id: 2
  },
  {
    name: 'Spinning',
    logo: '/static/media/icn_spin.0ff7c39a.svg',
    date: '03/13/2019',
    startTime: '09:30',
    endTime: '11:00',
    timestamp: 1552431600000,
    id: 3
  },
  {
    name: 'Weights',
    logo: '/static/media/icn_weights.c2141e59.svg',
    date: '03/13/2019',
    startTime: '17:41',
    endTime: '19:11',
    timestamp: 1552431600000,
    id: 4
  },
  {
    name: 'Spinning',
    logo: '/static/media/icn_spin.0ff7c39a.svg',
    date: '03/13/2019',
    startTime: '13:00',
    endTime: '15:00',
    timestamp: 1552431600000,
    id: 5
  }
];
describe('ScheduledActivities', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <ScheduledActivities data={mockData} />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
