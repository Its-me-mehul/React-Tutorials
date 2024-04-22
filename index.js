import React from 'react';
import ReactDOM from 'react-dom/client';

const app = React.createElement(
  'h1',
  { id: 'heading' },
  'Hey, Its my first tutorial on react'
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
