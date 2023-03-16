import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import React from 'react';
import Homebrewtify from './pages/Homebrewtify';
import WebPlayer from './pages/WebPlayer';
import WebPlayerSearch from './pages/WebPlayerSearch';
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
        element: <WebPlayer />,
        children: [
          {
            path: '',
            element: <WebPlayerHome />,
          },
          {
            path: 'search',
            element: <WebPlayerSearch />,
          },
        ],
      },
    ],
  },
]);

export default router;
