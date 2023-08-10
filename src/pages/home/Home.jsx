import React, { useState, useEffect } from 'react'
import Axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Home.css';
import { Link } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
const Home = () => {

    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {

        Axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(response => {
                let data = response.data;
                setUpcoming(data.results)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div className='poster'>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={4}
                infiniteLoop={true}
                showStatus={false}>
                {
                    upcoming.map(movie => (
                        <Link style={{ textDecorationLine: "none", color: 'white' }} to={`/movie/${movie.id}`}>
                            <div className='posterImage'>
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                            </div>
                            <div className="posterImage__overlay">
                                <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                                <div className="posterImage__runtime">
                                    {movie ? movie.release_date : ""}
                                    <span className="posterImage__rating">
                                        {movie ? movie.vote_average : ""}
                                        <i className="fas fa-star" />{" "}
                                    </span>
                                </div>
                                <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                            </div>
                        </Link>
                    ))
                }
            </Carousel>
            <MovieList />
        </div>
    )
}

export default Home
