import React from 'react'
import './Header.css';
import Image from "./logo512.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='headerLeft'>
                <Link to='/Imdb-Clone'><img className='header_icon' src={Image} alt="LOGO" /></Link>
                <Link to='/Imdb-Clone/movies/popular' style={{ textDecorationLine: 'none' }}><span>Popular</span></Link>
                <Link to='/Imdb-Clone/movies/top-rated' style={{ textDecorationLine: 'none' }}><span>Top Rated</span></Link>
                <Link to='/Imdb-Clone/movies/upcoming' style={{ textDecorationLine: 'none' }}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header
