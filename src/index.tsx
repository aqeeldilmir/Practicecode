import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Tweet from '../src/components/tweet';
ReactDOM.render(
  <Tweet name="aqeel" text="hell world" />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
