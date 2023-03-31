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
import WebPlayerSection from './pages/WebPlayerSection';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

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
          {
            path: 'section',
            element: <WebPlayerSection />,
          },
        ],
      },
      {
        path: 'login',
        element: <LogIn onLoginSuccess={() => window.location.reload()} />,
      },
      {
        path: 'signup',
        element: <SignUp onSignupSuccess={() => window.location.reload()} />,
      },
    ],
  },
]);

export default router;
