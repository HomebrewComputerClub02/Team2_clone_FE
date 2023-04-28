import React, { useEffect, useRef, useState } from 'react';
import {
  AiFillPlayCircle,
  AiFillPauseCircle,
  AiOutlineHeart,
} from 'react-icons/ai';
import { TiArrowShuffle } from 'react-icons/ti';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { MdOutlineFilterFrames } from 'react-icons/md';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { BASE_URL, musicId } from '../../stores/SampleData';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { GlobalPlay, GlobalTracks, GlobalTracksIndex } from '../../stores/atom';

export interface MusicProfileProps {
  ImgSrc: string;
  artist: string;
  song: string;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const ItemDiv = styled.div`
  background-color: #181818;
  padding: 16px;
  position: relative;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #282828;
    > div > div {
      opacity: 1;
      bottom: 8px;
      transition: all 0.3s ease;
    }
  }
`;
export const ImgDiv = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
  position: relative;
`;
export const ButtonDiv = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  z-index: 3;
  right: 8px;
  bottom: 0px;
  opacity: 0;
  transition: all 0.3s ease;
  &:hover {
    > button {
      transform: scale(1.1);
      transition: all 0.3s ease;
    }
  }
`;

export const PlayButton = styled.button`
  background: transparent;
  width: 100%;
  height: 100%;
  border: none;
  position: relative;
  padding: 0px;
  cursor: pointer;
`;
export const BlackDiv = styled.div`
  width: 0;
  height: 0;
  border-bottom: 9.6px solid transparent;
  border-top: 9.6px solid transparent;
  border-left: 15.3px solid black;
  border-right: 15.3px solid transparent;
  position: absolute;
  top: 50%;
  left: 69.6%;
  transform: translate(-50%, -50%);
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;
export const ProgressBarWrapper = styled.div`
  width: 100%;
  background: rgba(119, 119, 119, 0.781);
  height: 5px;
  border-radius: 30px;
  cursor: pointer;
`;

export const ProgressBar = styled.div`
  width: 0;
  height: 100%;
  background: #1cd760;
  border-radius: 30px;
`;

function MusicController({ ImgSrc, artist, song }: MusicProfileProps) {
  const now_playing = useRef<any>();
  const track_art = useRef<any>();
  const track_name = useRef<any>();
  const track_artist = useRef<any>();

  //btns
  const next_btn = useRef<any>();
  const prev_btn = useRef<any>();

  const progressBarRef = useRef<any>();
  const volume_slider = useRef<any>();
  const curr_time = useRef<any>();
  const total_duration = useRef<any>();
  const randomIcon = useRef<any>();
  const curr_track = useRef<any>();

  // let track_index = 0;
  // let isPlaying = false;
  // let isRandom = false;
  // let updateTimer: any;

  //music profile functions
  const [isLiked, setIsLiked] = useState<boolean>();
  const [isPhotoExpand, setPhotoExpand] = useState(false);
  //좋아요를 이미 누른 노래면
  useEffect(() => {
    //좋아요 조회 api
    setIsLiked(true);
  }, []);
  const likeSong = async () => {
    axios
      .post(`${BASE_URL}/like/${musicId}`, null, {
        headers: {
          Authorization: localStorage.getItem('jwtToken'),
        },
        withCredentials: true,
      })
      .then((res: any) => {
        console.log('successfully liked');
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const toggleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      //좋아요 api보냄
      likeSong();
    } else {
      setIsLiked(false);
    }
  };
  const togglePhoto = () => {
    setPhotoExpand((prev) => !prev);
  };

  //functions
  //updateTimer는 타이머의 아이디 입니다.
  const [isPlaying, setIsPlaying] = useRecoilState(GlobalPlay);
  const [track, setTrack] = useRecoilState<any>(GlobalTracks);
  const [index, setIndex] = useRecoilState<number>(GlobalTracksIndex);
  const [isRandom, setIsRandom] = useState<boolean>(false);
  const [currentSong, setCurrentSong] = useState<any>(track[index]);

  const loadTrack = (index: number) => {
    reset();
    setCurrentSong({ ...track[index], progress: 0 });
    curr_track.current.src = currentSong?.musicLink;
    curr_track.current.load();

    // track_art.style.backgroundImage =
    //   'url(' + music_list[track_index].img + ')';
    // track_name.textContent = music_list[track_index].name;
    // track_artist.textContent = music_list[track_index].artist;
    // now_playing.textContent =
    //   'Playing music ' + (track_index + 1) + ' of ' + music_list.length;
    //재생이 완료되면 다음 트랙을 로드 한다.
    curr_track.current.addEventListener('ended', nextTrack);
    // random_bg_color();
  };

  const reset = () => {
    curr_track.current.src = '';
    curr_time.current.textContent = '00:00';
    total_duration.current.textContent = '00:00';
  };

  //updateTimer에 있는 시간단위 마다 update를 실행 시켜주는 함수.
  const onPlaying = () => {
    //오디오 전체 길이 duration
    const duration = curr_track.current.duration;

    //현재 재생중인 시각
    const ct = curr_track.current.currentTime;
    //오디오 볼륨
    const volume = curr_track.current.volume * 100;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
      volume,
    });

    let seekPosition = 0;
    if (!isNaN(curr_track.current.duration)) {
      //현재 음원에서 위치를 탐색한다.
      seekPosition = ct * (100 / duration);

      //현재 음원에서의 현재 위치를 분과 초 단위로 쪼갠다.
      let currentMinutes = Math.floor(ct / 60);
      let currentSeconds = Math.floor(ct - currentMinutes * 60);

      //현재 음원 길이를 분과 초 단위로 쪼갠다.
      let durationMinutes = Math.floor(duration / 60);
      let durationSeconds = Math.floor(duration - durationMinutes * 60);

      //시간을 계산해서 보여준다.
      if (currentSeconds < 10) {
        currentSeconds = Number('0' + currentSeconds);
      }
      if (durationSeconds < 10) {
        durationSeconds = Number('0' + durationSeconds);
      }
      if (currentMinutes < 10) {
        currentMinutes = Number('0' + currentMinutes);
      }
      if (durationMinutes < 10) {
        durationMinutes = Number('0' + durationMinutes);
      }

      curr_time.current.textContent = currentMinutes + ':' + currentSeconds;
      total_duration.current.textContent =
        durationMinutes + ':' + durationSeconds;
    }
  };
  console.log('global', track);
  console.log('index', index);
  console.log('cs', currentSong);
  console.log('isRandom', isRandom);
  const nextTrack = () => {
    if (index < track.length - 1 && isRandom === false) {
      setIndex(index + 1);
      setCurrentSong({ ...track[index], progress: 0 });
    } else if (index < track.length - 1 && isRandom === true) {
      const random_index = Number.parseInt(
        String(Math.random() * track.length),
      );
      setIndex(random_index);
      setCurrentSong({ ...track[index], progress: 0, asdf: 'fuck you' });
    } else {
      setIndex(0);
      setCurrentSong({ ...track[index], progress: 0 });
    }
    loadTrack(index);
    playTrack();
  };

  const prevTrack = () => {
    if (index > 0) {
      setIndex(index - 1);
      setCurrentSong({ ...track[index], progress: 0 });
    } else {
      setIndex(track.length - 1);
      setCurrentSong({ ...track[index], progress: 0 });
    }
    loadTrack(index);
    playTrack();
  };

  //togglePlay
  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
    isPlaying ? pauseTrack() : playTrack();
  };

  const playTrack = () => {
    setIsPlaying(true);
    curr_track.current.play();
    // track_art.classList.add('rotate');
    // wave.classList.add('loader');
    // playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
  };

  function pauseTrack() {
    setIsPlaying(false);
    curr_track.current.pause();
    // track_art.classList.remove('rotate');
    // wave.classList.remove('loader');
    // playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
  }

  function toggleRandom() {
    isRandom ? pauseRandom() : playRandom();
  }
  function playRandom() {
    setIsRandom(true);
  }
  function pauseRandom() {
    setIsRandom(false);
  }

  //프로그레스 바로 음원 위치 조정하기
  const checkProgress = (e: any) => {
    //clientWidth속성은 인라인 요소나 CSS 상에 존재하지 않는 요소에 대해서는 0을 나타내고, 그렇지 않다면 엘리먼트의 내부 너비를 픽셀로 나타냅니다.
    const width = progressBarRef.current.clientWidth;
    //offsetX 는 변두리와의 x축 차이값
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;

    //audio currentTime속성으로 divprogress에 맞춰 변경함
    curr_track.current.currentTime = (divprogress / 100) * currentSong.length;
  };
  //처음 로드 할때 음원을 넣어주는 함수.
  useEffect(() => {
    loadTrack(index);
  }, []);

  //toggleplay
  useEffect(() => {
    if (isPlaying) {
      curr_track.current.play();
    } else {
      curr_track.current.pause();
    }
  }, [isPlaying]);

  return (
    <Wrapper>
      {/* music profile */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '33.3vw',
          position: 'relative',
        }}
      >
        <ItemDiv>
          <ImgDiv>
            <Img src={ImgSrc} />
            <ButtonDiv>
              <PlayButton>
                <KeyboardArrowUpIcon
                  sx={{
                    fontSize: '48px',
                  }}
                  onClick={togglePhoto}
                />
              </PlayButton>
            </ButtonDiv>
          </ImgDiv>
        </ItemDiv>
        {isPhotoExpand && (
          <Img
            src={ImgSrc}
            style={{
              width: '200px',
              height: '200px',
              position: 'absolute',
              top: '-200px',
              left: '10px',
              zIndex: '200',
            }}
          ></Img>
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            margin: '20px',
            alignItems: 'start',
            width: '100px',
            height: '50%',
          }}
        >
          <Link to="album/asdfasdfasdfasdf">
            <p style={{ color: '#eeeeee', fontSize: '14px' }}>{song}</p>
          </Link>
          <Link to="artist/asdfasdfasdfasdf">
            <p style={{ color: '#eeeeee', fontSize: '12px' }}>{artist}</p>
          </Link>
        </div>
        <div
          style={{
            display: 'flex',
            width: '60px',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '30px',
          }}
        >
          <div onClick={toggleLike}>
            {!isLiked ? (
              <FavoriteBorderIcon
                style={{
                  cursor: 'pointer',
                  color: '#eeeeee',
                  fontSize: '20px',
                }}
              />
            ) : (
              <FavoriteIcon
                style={{
                  cursor: 'pointer',
                  color: '#1CD760',
                  fontSize: '20px',
                }}
              />
            )}
          </div>
          <MdOutlineFilterFrames
            color="#EEEEEE"
            size={'20px'}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
      {/* end */}
      <div className="slider_container" style={{ width: '33.3vw' }}>
        <audio ref={curr_track} onTimeUpdate={onPlaying} />
        <div className="current-time" ref={curr_time}>
          00:00
        </div>
        <ProgressBarWrapper onClick={checkProgress} ref={progressBarRef}>
          <ProgressBar
            // 여기서 re-rendering이 일어남, 노래에 맞춰 시간이 그려짐
            style={{ width: `${currentSong.progress}%` }}
          ></ProgressBar>
        </ProgressBarWrapper>
        <div className="total-duration" ref={total_duration}>
          00:00
        </div>
      </div>

      <div className="slider_container">
        <i className="fa fa-volume-down" ref={volume_slider}></i>
        <input
          type="range"
          min="1"
          max="100"
          value="99"
          className="volume_slider"
        />
        <i className="fa fa-volume-up"></i>
      </div>
      <div onClick={toggleRandom} style={{ background: 'blue' }}>
        {!isRandom ? (
          <TiArrowShuffle size={30} style={{ color: 'red' }} />
        ) : (
          <TiArrowShuffle size={30} style={{ color: 'yellow' }} />
        )}
      </div>
      <div onClick={prevTrack} style={{ background: 'blue' }}>
        <BiSkipPrevious size={30} style={{ color: 'red' }} />
      </div>
      <div onClick={togglePlay} style={{ background: 'blue' }}>
        {isPlaying ? (
          <AiFillPauseCircle size={30} style={{ color: 'red' }} />
        ) : (
          <AiFillPlayCircle size={30} color={'red'} />
        )}
      </div>
      <div onClick={nextTrack} style={{ background: 'blue' }}>
        <BiSkipNext size={30} style={{ color: 'red' }} />
      </div>
      <div className="repeat-track">
        <i className="fa fa-repeat fa-2x" title="repeat"></i>
      </div>
    </Wrapper>
  );
}

export default MusicController;
