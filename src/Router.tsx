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
import WebPlayerQueue from './pages/WebPlayerQueue';
import WebPlayerAlbumPlayList from './pages/WebPlayerAlbumPlayList';
import WebPlayerArtistPlayList from './pages/WebPlayerArtistPlayList';

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
            children: [
              {
                path: ':albumId',
                element: <WebPlayerAlbumPlayList />,
              },
            ],
          },
          {
            path: 'artist',
            element: <WebPlayerArtist />,
            children: [
              {
                path: ':artistId',
                element: <WebPlayerArtistPlayList />,
              },
            ],
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
            path: 'queue',
            element: <WebPlayerQueue />,
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
        element: <LogIn onLoginSuccess={() => console.log('success')} />,
      },
      {
        path: 'signup',
        element: <SignUp onSignupSuccess={() => window.location.reload()} />,
      },
    ],
  },
]);

export default router;
