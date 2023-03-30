import React from 'react';
import styled from 'styled-components';
import ArtistSection from '../components/molecules/ArtistSection';

const GridData = {
  title: '아티스트',
  body: [
    {
      imgSrc:
        'https://i.scdn.co/image/ab6761610000f178d63cdcec79b1864df268c7bf',
      title: '태양',
      titleLink: '/album',
      artist: ['아티스트'],
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab6761610000f178c9690bc711d04b3d4fd4b87c',
      title: 'BLACKPINK',
      titleLink: '/album',
      artist: ['아티스트'],
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab6761610000f1786199c3c2f414880e2b9077a9',
      title: 'NewJeans',
      titleLink: '/album',
      artist: ['아티스트'],
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab6761610000f1785bf330a57b9dcffd8f7b2c14',
      title: 'Red Velvet',
      titleLink: '/album',
      artist: ['아티스트'],
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab6761610000f1788944c8aec8db82f35980b191',
      title: 'TWICE',
      titleLink: '/album',
      artist: ['아티스트'],
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab6761610000f178fb6c0b7b6918dca92be0ed75',
      title: 'LE SSERAFIM',
      titleLink: '/album',
      artist: ['아티스트'],
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab6761610000f1785cc0fe13b5a96e40814f1670',
      title: 'Ruel',
      titleLink: '/album',
      artist: ['아티스트'],
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab6761610000f178cd016d0a0783a321312e1733',
      title: '너드커넥션',
      titleLink: '/album',
      artist: ['아티스트'],
      artistLink: '/artist',
    },
  ],
};

const WebPlayerArtists = () => {
  return (
    <ArtistSection data={GridData} dataNum={10} show={false} color={'white'} />
  );
};

export default WebPlayerArtists;
