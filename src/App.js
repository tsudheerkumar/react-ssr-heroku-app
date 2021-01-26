import React from 'react';
import loadable from '@loadable/component';
import './App.css';

const Home = loadable(() => import('./Home'));

export default (props) => <Home {...props} />;
