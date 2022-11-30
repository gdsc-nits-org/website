import React from 'react';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';
import { useEffect } from 'react';
import { useRef } from 'react';

const IntroHomeTest = () => {

    const myRef = useRef(null)

    useEffect(()=>{
        myRef.current.addEventListener('load', function (e) {
            // 4. configure the interactivity library
            create({
              mode: 'scroll',
              player: '#firstLottie',
              actions: [
                {
                  visibility: [0, 1],
                  type: 'seek',
                  frames: [0, 100],
                },
              ],
            });
          });
    })

  return (
    <div>
      <div style={{ height: '400px' }}></div>
        <lottie-player
          ref={myRef} // 2. set the reference for the player
          id="firstLottie"
        //   controls
          mode="normal"
          src="https://assets2.lottiefiles.com/packages/lf20_g7dnFTvMeQ.json"
          style={{ width: '320px' }}
        ></lottie-player>
    </div>
  )
}

export default IntroHomeTest
