import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import React from 'react';
import Homebrewtify from './pages/Homebrewtify';
import WebPlayerHome from './pages/WebPlayerHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Homebrewtify />,
      },
      {
        path: 'open',
        element: <WebPlayerHome />,
      },
    ],
  },
]);

export default router;
