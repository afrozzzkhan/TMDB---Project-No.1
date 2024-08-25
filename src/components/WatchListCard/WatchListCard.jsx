import { useDispatch } from 'react-redux';

function WatchListCard({item, deleteFromWatchList}) {

    const dispatch = useDispatch();
    
    function deleteFWatchList(){
        // deleteFromWatchList(item);
        dispatch({type: 'REMOVE_FROM_WATCHLIST', payload: item})
    }

    return (
        <div className="watchlist-card">

            <div className="watchlist-card-img">
                
                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
            </div>  

            <div> {item.title}
                
            </div> 

            <div> {item.vote_average}
            </div>

            <div className="watchlist-card-delete" onClick={deleteFWatchList}>
            Delete    
            </div>      
        </div>
    )
}

export default WatchListCard;