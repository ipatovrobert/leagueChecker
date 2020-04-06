import React, {useState, useRef, useEffect} from 'react'
import gsap from 'gsap';
import { withRouter } from 'react-router-dom';

const Search = (props) => {

    const [summoner, setSummoner] = useState('');

    let heading = useRef(null);
    let paragraph = useRef(null);
    let form = useRef(null);
    let label = useRef(null);

    const onChange = e => {
        setSummoner(e.target.value)
    }
    const onSubmit = e => {
        e.preventDefault();
        console.log(summoner);

        setSummoner('');

        props.history.push(`/summoner/${summoner}`);
        
    }

    useEffect(
        () => {
            gsap.from(heading, {opacity: 0, x: 350, duration: 1, delay: 0.5, ease: 'power1'});
            gsap.from(paragraph, {opacity: 0, y: -50, duration: 1,  delay: 0.6, ease: 'power1'});
            gsap.from(form, {opacity:0, y: 50, duration: 1,  delay: 0.7, ease: 'power1'});
            gsap.from(label, {opacity: 0, x: -350, duration: 1,  delay: 0.8, ease: 'power1'});

        },
        [],
    )
    return (
        <div className='search'>
            <div className='centering'>
                <h1 className='search-heading' ref={el => {heading = el}}>Check your summoner name</h1>
                <p className='search-paragraph' ref={el => {paragraph = el}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>

                <p className='search-paragraph mg-top' ref={el => {label = el}}>Enter your summoner name</p>
                <form onSubmit={onSubmit} ref={el => {form = el}}>
                    <input type='text' name='text' value={summoner} onChange={onChange} required/>
                    <input type='submit' name='submit' value='Check'/>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Search);
