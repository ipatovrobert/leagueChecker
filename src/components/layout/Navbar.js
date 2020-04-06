import React, {useRef, useEffect} from 'react'
import gsap, {TimelineLite} from 'gsap';
import { Link } from 'react-router-dom';

const Navbar = () => {

    let tl = new TimelineLite();
    let navTitle = useRef(null);
    let navLinks = ['About', 'Contact'];
    let navLinksAnim = [];

    useEffect(
        () => {
            gsap.from(navTitle, {opacity: 0, duration: 0.5, y: -200, x: 100, scaleX: 3.05, scaleY: 3.05, ease: "power2"});
            tl.staggerFrom(navLinksAnim, 0.5, { opacity: 0, x: -100, scaleX: 3.05, scaleY: 3.05}, 0.1);

        },
        //eslint-disable-next-line
        [],
    )
    return (
        <ul className='navbar'>
            <li ref={el => {navTitle = el}} className='navbar-title'><Link to='/'>League Checker</Link></li>
            <div className='fr'>
                {navLinks.map(link => <li key={link} ref={
                    linkNode => navLinksAnim.push(linkNode)
                } 
                className='navbar-link'><Link to={`/${link}`}>{link}</Link></li>)}
            </div>
        </ul>
    )
}

export default Navbar
