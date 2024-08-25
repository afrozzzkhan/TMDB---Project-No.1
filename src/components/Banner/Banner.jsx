import './Banner.css';
import { useState,useEffect } from 'react';
function Banner() {

    let [film, setFilm] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=766d2d6220e8db331beee00459b205ce`).then((res) => {
          return res.json();
        }).then((res) => {

          let id = Math.floor(Math.random()*20);

          setFilm(res.results[id]);
        })
      }, []);

    return (
            

        <div className='banner'>

            <div className='banner-img'>
               <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} />
            </div>

            <div className='banner-title'>
                {film.title}
            </div>
        </div>
    )
}

export default Banner;