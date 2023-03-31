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
import WebPlayerCollection from './pages/WebPlayerCollection';
import WebPlayerAlbums from './pages/WebPlayerAlbums';
import WebPlayerPlaylists from './pages/WebPlayerPlaylists';
import WebPlayerArtists from './pages/WebPlayerArtists';
import WebPlayerTracks from './pages/WebPlayerTracks';
import WebPlayerPlaylist from './pages/WebPlayerPlaylist';

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
          {
            path: 'playlist',
            element: <WebPlayerPlaylist />,
          },
          {
            path: 'collection',
            element: <WebPlayerCollection />,
            children: [
              {
                path: 'playlists',
                element: <WebPlayerPlaylists />,
              },
              {
                path: 'albums',
                element: <WebPlayerAlbums />,
              },
              {
                path: 'artists',
                element: <WebPlayerArtists />,
              },
              {
                path: 'tracks',
                element: <WebPlayerTracks />,
              },
            ],
          },
        ],
      },
      {
        path: 'login',
        element: <LogIn />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
