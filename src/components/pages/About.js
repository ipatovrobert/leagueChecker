import React, { useEffect, useRef } from 'react'
import Navbar from '../layout/Navbar'
import gsap from 'gsap';

const About = () => {
    let title = useRef(null);
    let paragraph = useRef(null);

    useEffect(
        () => {
            document.getElementById('myVideo').play();
            gsap.from(title, {opacity: 0, duration: 4, x: 500});
            gsap.from(paragraph, {opacity: 0, duration: 4, y: 500});
        },
        //eslint-disable-next-line
        [],
    )
    return (
        <div className='container'>
            <video autoPlay muted loop id="myVideo">
                <source src={require('../../img/sion.webm')} type="video/webm"></source>
            </video>
            <Navbar />
            <div className='about'>
                <h1 ref={ el => title = el}>About us</h1>
                <p ref={el => paragraph = el}>2020 EUNE LEAGUE CHECKER isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</p>
            </div>
        </div>
    )
}

export default About
