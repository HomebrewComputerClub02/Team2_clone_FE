import React, { useRef, useState } from 'react';
import { TbMicrophone2 } from 'react-icons/tb';
import { MdQueueMusic } from 'react-icons/md';
import { BsVolumeUpFill } from 'react-icons/bs';
import { BiDevices } from 'react-icons/bi';
import { ImEnlarge2 } from 'react-icons/im';
import styles from './AudioPlayer.module.css';
import MusicFullScreen from './fullscreen';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

function MusicExtension() {
  const handle = useFullScreenHandle();
  const progressBar = useRef<any>(); // reference our progress bar
  const changeRange = () => {
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width');
  };
  const [isFullScreen, setIsFullScreen] = useState(false);
  const toggleFullScreen = () => {
    setIsFullScreen((prev) => !prev);
    if (isFullScreen) {
      return handle.enter;
    } else {
      return handle.exit;
    }
  };
  console.log(isFullScreen);
  return (
    <FullScreen className="full-screen" handle={handle}>
      <TbMicrophone2
        size={'20px'}
        style={{ marginInline: '10px', color: '#EEEEEE' }}
        className={styles.extensionButtons}
      />
      <MdQueueMusic
        size={'20px'}
        style={{ marginInline: '10px', color: '#EEEEEE' }}
        className={styles.extensionButtons}
      />
      <BsVolumeUpFill
        size={'20px'}
        style={{ marginInline: '10px', color: '#EEEEEE' }}
        className={styles.extensionButtons}
      />
      <BiDevices
        size={'20px'}
        style={{ marginInline: '10px', color: '#EEEEEE' }}
        className={styles.extensionButtons}
      />
      <input
        type="range"
        className={styles.progressBar}
        defaultValue="0"
        ref={progressBar}
        onChange={changeRange}
        style={{ width: '120px' }}
      />
      <ImEnlarge2
        size={'15px'}
        style={{ marginInline: '10px', color: '#EEEEEE' }}
        className={styles.extensionButtons}
        onClick={handle.enter}
      />
    </FullScreen>
  );
}

export default MusicExtension;
