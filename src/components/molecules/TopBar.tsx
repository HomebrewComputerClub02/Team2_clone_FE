import React from 'react';
import { Link } from 'react-router-dom';
import { TopBarContainer } from '../../styled';

function TopBar() {
  return (
    <TopBarContainer>
      <Link to="/">Spotify</Link>
      <Link to="/">Spotify</Link>
      <Link to="/">Spotify</Link>
      <Link to="/">Spotify</Link>
      <Link to="/">Spotify</Link>
    </TopBarContainer>
  );
}

export default TopBar;
