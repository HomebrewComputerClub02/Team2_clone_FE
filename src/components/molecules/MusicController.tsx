import { useEffect, useRef, useState } from 'react';
import PlayList from './Queue';
import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { GlobalPlay, GlobalTracks, GlobalTracksIndex } from '../../stores/atom';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const MusicController = () => {
  //글로벌 트랙
  const [isplaying, setisplaying] = useRecoilState(GlobalPlay);
  const [globalIndex, setGlobalIndex] = useRecoilState(GlobalTracksIndex);
  const [tracks, setTracks] = useRecoilState(GlobalTracks);
  const index = useRecoilValue(GlobalTracksIndex);
  console.log('tracks', tracks);
  console.log('index', index);
  //songdata 받아오기
  //toggleplay
  //현재 재생중인 song
  const [currentSong, setCurrentSong] = useState<any>(tracks[globalIndex]);

  const audioElem = useRef<any>();

  //
  //toggleplay
  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  //
  const onPlaying = () => {
    //오디오 전체 길이 duration
    const duration = audioElem.current.duration;

    //현재 재생중인 시각
    const ct = audioElem.current.currentTime;
    //오디오 볼륨
    const volume = audioElem.current.volume * 100;
    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
      volume,
    });
  };
  return (
    <Wrapper>
      <audio
        ref={audioElem}
        onTimeUpdate={onPlaying}
        controls
        style={{ display: 'none' }}
      >
        <source src={currentSong.musicLink} type="audio/mpeg" />
      </audio>
      <PlayList
        songs={tracks}
        setSongs={setTracks}
        isplaying={isplaying}
        setisplaying={setisplaying}
        audioElem={audioElem}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </Wrapper>
  );
};

export default MusicController;
