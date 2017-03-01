import React from 'react';
import Header from 'components/Header';
import List from 'components/List/List';
import Dashboard from './components/Dashboard'
import data from '../Course/COURSES'


export default () => (
  <Dashboard courses={data} notFromHome={true} route="group"/>
);
