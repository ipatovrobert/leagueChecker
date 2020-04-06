import React, {useEffect} from 'react'
import Navbar from '../layout/Navbar'
import Search from '../layout/Search'

const Home = () => {
    useEffect(
        () => {
            document.getElementById('myVideo').play();
        },
        [],
    )
    return (
        <div className='container'>
            <video autoplay muted loop id="myVideo">
                <source src={require('../../img/zed.webm')} type="video/webm"></source>
            </video>
            <Navbar />
            <Search />
        </div>
    )
}

export default Home
