import React, { useCallback, useRef, useEffect } from 'react';

const stopAllSound = () => {
  const sounds = document.getElementsByTagName('audio');
  for (var i = 0; i < sounds.length; i++) sounds[i].pause();
};

const Phonetic = ({ ipa, sound, children, ...rest }) => {
  const audioRef = useRef(null);
  const playSound = useCallback(() => {
    stopAllSound();
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }, [sound]);
  return (
    <div className="phonetic">
      <span>{ipa}</span>
      <div onClick={playSound} className="sound">
        <img src="/img/sound.png"></img>
      </div>
      <div className="popup">
        <div className="popup-content">{children}</div>

        <audio ref={audioRef} src={sound} className="audio">
          Your browser does not support the audio element.
        </audio>
      </div>

      <style jsx>{`
        .phonetic {
          border: 1px solid lightgray;
          width: 40px;
          height: 40px;
          text-align: center;
          vertical-align: middle;
          line-height: 40px;
          white-space: nowrap;
          font-size: 16px;
          position: relative;
          margin-right: 8px;
        }
        .phonetic:hover {
          background: #dbdbdb;
        }
        .sound {
          position: absolute;
          right: 0;
          top: 0;
          opacity: 0;
          padding: 8px;
          width: 100%;
          height: 100%;
          z-index: 1;
          cursor: pointer;
          background: #797979;
        }
        .sound img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .popup {
          position: absolute;
          bottom: 0px;
          left: -200px;
          display: none;
        }
        .popup-content {
          margin-bottom: 44px;
          background: white;
          flex-direction: column;
          padding: 8px;
          border: 0.5px solid #797979;
          box-shadow: 3px 3px 8px #efefef;
          overflow-y: auto;
          width: auto;
          height: auto;
          min-width: 400px;
          min-height: 100px;
          pointer-events: all;
          text-align: left;
          vertical-align: top;
          font-size: 14px;
          line-height: 16px;
        }
        .audio {
          display: none;
        }
        .phonetic:hover .popup {
          display: flex;
        }
        .phonetic:hover .sound {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Phonetic;
