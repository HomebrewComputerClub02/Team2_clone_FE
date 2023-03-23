import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import React from 'react';
import Homebrewtify from './pages/Homebrewtify';
import WebPlayer from './pages/WebPlayer';
import WebPlayerSearch from './pages/WebPlayerSearch';
import WebPlayerHome from './pages/WebPlayerHome';
import WebPlayerAlbum from './pages/WebPlayerAlbum';
import WebPlayerArtist from './pages/WebPlayerArtist';
import WebPlayerGenre from './pages/WebPlayerGenre';

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
          {
            path: 'album',
            element: <WebPlayerAlbum />,
          },
          {
            path: 'artist',
            element: <WebPlayerArtist />,
          },
          {
            path: 'genre',
            element: <WebPlayerGenre />,
          },
        ],
      },
    ],
  },
]);

export default router;
