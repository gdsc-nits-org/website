import React from 'react'
import { create } from '@lottiefiles/lottie-interactivity';
import '@lottiefiles/lottie-player'
import { useEffect } from 'react';
import { useRef } from 'react';
import './Static_scroll.scss'
import { useState } from 'react';

const Static_scroll = () => {

    const myRef = useRef(null)

    useEffect(() => {
        
        myRef.current.addEventListener('load', (e) => {
            document.querySelector('#firstLottie').shadowRoot.querySelector('#animation > svg').setAttribute('style', 'top: 30%; position: sticky; height: 400px');
            create({
                mode:'scroll',
                player: '#firstLottie',
                container:'static_scroll',
                actions: [
                    {
                        visibility: [0, 0.167],
                        type: 'stop',
                        frames: [10],
                    },

                    // Demo for controlling

                    // {
                    //     visibility: [0.167, 0.33],
                    //     type: 'stop',
                    //     frames: [200, 300],
                    // },
                    // {
                    //     visibility: [0.666, 0.833],
                    //     type: 'stop',
                    //     frames: [325],
                    // },
                    {
                        visibility: [0.167, 1],
                        type: 'seek',
                        frames: [10,480],
                    },
                ],
            });
        });
    }, [])


    // Second Option as an alternative

    // const [scrolled,setScrolled] = useState(0)
    // useEffect(()=>{
    //     window.addEventListener('scroll',()=>{
    //         setScrolled(document.documentElement.scrollTop)
    //         console.log(scrolled);
    //     })
    // })

return (
    <div id='static_scroll' style={{height:'100%'}}>
        <lottie-player
          ref={myRef} // 2. set the reference for the player
          id="firstLottie"
          mode="normal"
        //   src="https://assets5.lottiefiles.com/packages/lf20_D3Jkbk4bHd.json"
          src="/static_scroll.json"
          style={{ width: '320px' }}
        ></lottie-player>

        {/* HTML for alternative */}

        {/* <div id="progress">
        {parseInt(scrolled/700)===0?'GDSC':parseInt(scrolled/700)===1?'WEB':parseInt(scrolled/700)===2?'UI/UX':parseInt(scrolled/700)===3?'android':parseInt(scrolled/700)===4?'flutter':parseInt(scrolled/700)===5?'CLOUD':''}
        </div>
        <div className="line" style={{left:parseInt(scrolled/700)*200}}>

        </div> */}

        
    </div>
)
}

export default Static_scroll
