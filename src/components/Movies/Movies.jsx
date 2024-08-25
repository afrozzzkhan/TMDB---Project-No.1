import { useState, useEffect, memo } from 'react';
import MovieCard from '../MovieCard';
import './Movies.css';
import Pagination from '../Pagination';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  
  function handleNext() {
    if (pageNo === 500) return;
    setPageNo(pageNo + 1);
  }

  function handlePrevious() {
    if (pageNo === 1) return;
    setPageNo(pageNo - 1);
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`).then((res) => {
      return res.json();
    }).then((res) => {
      console.log(res);
      setMovies(res.results);
    })
  }, [pageNo]);
  return (
    <>
      <h1>Trending Movies</h1>
      
        <div className='card-parent'>

        {
          movies.map((movie) => {
            return (<MovieCard movie={movie} key={movie.id}  />)
          })
        }
        </div>

        <Pagination
        handleNext={handleNext}
        handlePrevious = {handlePrevious}
        pageNumber={pageNo}
      />
      
      
    </>
  )
}

export default Movies;