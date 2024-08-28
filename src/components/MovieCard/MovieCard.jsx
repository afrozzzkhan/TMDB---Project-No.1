import './MovieCard.css';
import { Link } from 'react-router-dom';
// import MovieContext from '../Context/MovieContext';
// import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieCard({movie}){

    const dispatch = useDispatch();

    const watchlist = useSelector(state => {

        return state.watchlist;
    })

    // let {watchlist,handleAddToWatchList,deleteFromWatchList} = useContext(MovieContext);

    function doesContain(){

        for(let i=0; i<watchlist.length; i++){

            if(watchlist[i].id===movie.id){
                return true;
            }
        }

        return false;
    }

    function addToWatchList (){
        // handleAddToWatchList(movie);

        dispatch({type:'ADD_TO_WATCHLIST' , payload :movie});
    }

    function deleteFWatchList(){
        // deleteFromWatchList(movie);

        dispatch({type:'REMOVE_FROM_WATCHLIST' , payload :movie});
    }

    return (
        <div className="movie-card">

            <div className="movie-card-img">
                
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
            </div>

            <Link to={`/details/${movie.id}`}>

                    Details 
            </Link>
              

            <div className="movie-card-title">
                {movie.title}
            </div>
            
            {doesContain() ? (<button onClick={deleteFWatchList}>Remove to watchlist</button>) : (<button onClick={addToWatchList} >Add to watchlist</button>) }
        </div>
    )
}

export default MovieCard;