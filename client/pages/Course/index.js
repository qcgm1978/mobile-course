import React from 'react';
import Header from 'components/Header';
import List from 'components/List/List';
import data from './COURSES'

const listItems = [
  { title: 'One' },
  { title: 'Two' },
  { title: 'Three' },
  { title: 'Four' }
];

export default () => (
  <article className="women">
    <Header title="Course" className="header-red" />
    <List items={data}  />
  </article>
);
