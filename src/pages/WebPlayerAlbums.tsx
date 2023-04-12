import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import AlbumSection from '../components/molecules/AlbumSection';
import Section from '../components/molecules/Section';
import { followAlbumsApi } from '../remote.tsx/collection';
interface Data {
  data: Array<Item>;
  type: string;
}
interface Item {
  albumId: string;
  albumName: string;
  singerName: string;
  singerId: string;
  imgUrl: string;
  releaseDate: string;
}
const GridData = {
  title: '앨범',
  body: [
    {
      imgSrc:
        'https://i.scdn.co/image/ab67616d00001e02580ac3ad7dfc81e509171120',
      title: 'BORN PINK',
      titleLink: '/album',
      artist: ['BLACKPINK'],
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab67616d00001e021a8e7c237aca188a1e314af3',
      title: '4TH WALL',
      titleLink: '/album',
      artist: ['Ruel'],
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab67616d00001e029d28fd01859073a3ae6ea209',
      title: "NewJeans 1st EP 'New Jeans'",
      titleLink: '/album',
      artist: ['NewJeans'],
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab67616d00001e02edf5b257be1d6593e81bb45f',
      title: 'Ditto',
      titleLink: '/album',
      artist: ['NewJeans'],
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab67616d00001e02d70036292d54f29e8b68ec01',
      title: "NewJeans 'OMG'",
      titleLink: '/album',
      artist: ['NewJeans'],
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab67616d00001e02278d6cf14513bd97cb580fe7',
      title: 'VIBE (feat. Jimin of BTS)',
      titleLink: '/album',
      artist: ['태양', '지민'],
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab67616d00001e025e8286ff63f7efce1881a02b',
      title: 'on the street (with J. Cole)',
      titleLink: '/album',
      artist: ['j-hope', 'J. Cole'],
      artistLink: '/artist',
    },
  ],
};

const WebPlayerAlbums = () => {
  const [albums, setAlbums] = useState<Data | null>(null);

  useLayoutEffect(() => {
    followAlbumsApi().then((res) => {
      setAlbums(res.data);
    });
  }, []);

  return (
    <AlbumSection
      data={albums as Data}
      dataNum={10}
      show={false}
      color={'white'}
    />
  );
};

export default WebPlayerAlbums;
