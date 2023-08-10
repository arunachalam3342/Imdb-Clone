import React, { useEffect, useState } from 'react'
import "./Movie.css";
import { useParams } from 'react-router-dom';
import Axios from 'axios';
const Movie = () => {

    const [current, setCurrent] = useState();
    const { id } = useParams();

    useEffect(() => {
        getData();
        window.scrollTo(0, 0);
    }, [])

    const getData = () => {
        Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(response => {
                const data = response.data;
                setCurrent(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${current ? current.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${current ? current.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{current ? current.original_title : ""}</div>
                        <div className="movie__tagline">{current ? current.tagline : ""}</div>
                        <div className="movie__rating">
                            {current ? current.vote_average : ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{current ? "(" + current.vote_count + ") votes" : ""}</span>
                        </div>
                        <div className="movie__runtime">{current ? current.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{current ? "Release date: " + current.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                current && current.genres
                                    ?
                                    current.genres.map(genre => (
                                        <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                    ))
                                    :
                                    ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{current ? current.overview : ""}</div>
                    </div>

                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    current && current.homepage && <a href={current.homepage} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    current && current.imdb_id && <a href={"https://www.imdb.com/title/" + current.imdb_id} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    current && current.production_companies && current.production_companies.map(company => (
                        <>
                            {
                                company.logo_path
                                &&
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Movie
