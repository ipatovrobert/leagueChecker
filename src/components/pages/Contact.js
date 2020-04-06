import React, { useEffect } from 'react'
import Navbar from '../layout/Navbar'

const Contact = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        alert('Message sent');
    }

    useEffect(
        () => {
            document.getElementById('myVideo').play();
        },
        //eslint-disable-next-line
        []
    )

    return (
        <div className='container'>
            <video autoPlay muted loop id="myVideo">
                <source src={require('../../img/ryze.webm')} type="video/webm"></source>
            </video>
            <Navbar />
            <div class='contact'>
                <h1>Contact Us</h1>
                <form onSubmit={onSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input for='name' type='text' required></input>
                    <label htmlFor='summonerName'>Summoner Name</label>
                    <input for='summonerName' type='text' required></input>
                    <label htmlFor='email'>Email</label>
                    <input for='email' type='email' required></input>
                    <label htmlFor='Subject'>Subject</label>
                    <input for='Subject' type='text' required></input>
                    <label htmlFor='message'>Message</label>
                    <textarea for='message' type='textarea' required></textarea>
                    <input type='submit'></input>
                </form>
            </div>
        </div>
    )
}

export default Contact
