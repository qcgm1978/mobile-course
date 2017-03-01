import React from 'react';
import {Router, browserHistory} from 'react-router/es6';
import App from 'containers/App';
function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}
function loadRoute(cb) {
  return (module) => cb(null, module.default);
}
const routes = {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('pages/Home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
      
    },
    {
      path: 'interactive',
      getComponent(location, cb) {
        System.import('pages/Interactive')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
      
    },
    {
      path: 'course',
      getComponent(location, cb) {
        System.import('pages/Course')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'course1',
      getComponent(location, cb) {
        System.import('pages/Home/section')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'group/course/:id',
      getComponent(location, cb) {
        System.import('pages/Home/section1')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
  ]
};
export default () => <Router history={browserHistory} routes={routes}/>;
