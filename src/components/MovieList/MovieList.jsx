import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './MovieList.css';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        Axios.get(`https://api.themoviedb.org/3/movie/${type ? type : "upcoming"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(response => {
                const data = response.data.results;
                setMovieList(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "UPCOMING").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList
