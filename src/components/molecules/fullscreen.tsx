import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import React from 'react';
function MusicFullScreen() {
  const handle = useFullScreenHandle();

  return (
    <div>
      <FullScreen className="full-screen" handle={handle}>
        <button onClick={handle.enter}>전체화면 전환</button>
        <button onClick={handle.exit}>전체화면 해제</button>
        <h1>전체화면 테스트</h1>
      </FullScreen>
    </div>
  );
}

export default MusicFullScreen;
