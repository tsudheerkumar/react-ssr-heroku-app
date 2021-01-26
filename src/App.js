import React from 'react';
import loadable from '@loadable/component';
import './App.css';

const Home = loadable(() => import('./Home'));

const App = (props) => (<Home {...props} />);
export default App;
