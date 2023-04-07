import React, { useEffect, useRef } from 'react';
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsSkipEndCircleFill,
  BsFillSkipEndCircleFill,
} from 'react-icons/bs';
import styled from 'styled-components';

import { IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeOff } from 'react-icons/io';

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  color: rgb(218, 218, 218);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: black;
`;

const VolumeWrapper = styled.div`
  width: 160px;
  background: rgba(119, 119, 119, 0.781);
  height: 5px;
  border-radius: 30px;
  cursor: pointer;
`;

const ProgressBarWrapper = styled.div`
  width: 100%;
  background: rgba(119, 119, 119, 0.781);
  height: 5px;
  border-radius: 30px;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  width: 0;
  height: 100%;
  background: #1cd760;
  border-radius: 30px;
`;

const Div1 = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Div2 = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayList = ({
  audioElem,
  isplaying,
  setisplaying,
  currentSong,
  setCurrentSong,
  songs,
}: any) => {
  const progressBarRef = useRef<any>();
  const volumeBarRef = useRef<any>();

  //toggle 재생
  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  //프로그레스 바로 음원 위치 조정하기
  const checkProgress = (e: any) => {
    //clientWidth속성은 인라인 요소나 CSS 상에 존재하지 않는 요소에 대해서는 0을 나타내고, 그렇지 않다면 엘리먼트의 내부 너비를 픽셀로 나타냅니다.
    const width = progressBarRef.current.clientWidth;
    //offsetX 는 변두리와의 x축 차이값
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;

    //audio currentTime속성으로 divprogress에 맞춰 변경함
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  //저번 음원 버튼
  const skipBack = () => {
    //현재 음원의 위치를 알아냄
    const index = songs.findIndex((x: any) => x.title == currentSong.title);
    if (index == 0) {
      //만약 지금 재생중인게 첫 음원이면 지금 음원을 초기화
      setCurrentSong(songs[songs.length - 1]);
    } else {
      //처음이 아니면 이전곡으로
      setCurrentSong(songs[index - 1]);
    }
    audioElem.current.currentTime = 0;
  };

  //다음 음원 버튼
  const skiptoNext = () => {
    //지금 음원 위치
    const index = songs.findIndex((x: any) => x.title == currentSong.title);

    if (index == songs.length - 1) {
      //마지막이면 처음으로
      setCurrentSong(songs[0]);
    } else {
      //아니면 그냥 다음으로
      setCurrentSong(songs[index + 1]);
    }
    audioElem.current.currentTime = 0;
  };

  //볼륨 조절
  const checkVolume = (e: any) => {
    const width = volumeBarRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divVolume = (offset / width) * 100;
    //오디오 플레이어의 볼륨을 조절함
    audioElem.current.volume = divVolume / 100;
  };
  useEffect(() => {
    console.log(currentSong.volume);
    if (currentSong.progress == 100) {
      console.log('재생완료');
      skiptoNext();
    }
  }, [currentSong]);
  return (
    <Wrapper>
      <div>
        <p>{currentSong.title}</p>
      </div>
      <Div1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '30px',
          }}
        >
          <BsFillSkipStartCircleFill onClick={skipBack} />
          {isplaying ? (
            <BsFillPauseCircleFill onClick={PlayPause} />
          ) : (
            <BsFillPlayCircleFill onClick={PlayPause} />
          )}
          <BsFillSkipEndCircleFill onClick={skiptoNext} />
        </div>
        <ProgressBarWrapper onClick={checkProgress} ref={progressBarRef}>
          <ProgressBar
            // 여기서 re-rendering이 일어남, 노래에 맞춰 시간이 그려짐
            style={{ width: `${currentSong.progress}%` }}
          ></ProgressBar>
        </ProgressBarWrapper>
      </Div1>
      <Div2>
        <IoMdVolumeHigh />
        <VolumeWrapper onClick={checkVolume} ref={volumeBarRef}>
          <ProgressBar
            // 여기서 re-rendering이 일어남, 노래에 맞춰 시간이 그려짐
            style={{ width: `${currentSong.volume}%` }}
          ></ProgressBar>
        </VolumeWrapper>
      </Div2>
    </Wrapper>
  );
};

export default PlayList;
