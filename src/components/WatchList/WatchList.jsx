// import MovieContext from "../Context/MovieContext";
// import { useContext, useState } from "react";
import { useState } from "react";
import WatchListCard from "../WatchListCard";
import './WatchList.css';
import { useDispatch, useSelector } from 'react-redux';

function WatchList() {

    let [search, setSearch] = useState("");
    // let {watchlist, setWatchList, deleteFromWatchList} = useContext(MovieContext);

    const dispatch = useDispatch();

    function handleSearch (e){

        setSearch(e.target.value);
    }

    const watchlist = useSelector(state => {
        
        return state.watchlist;
      })

    function handleAscendingSort() {
        let sortAsc = watchlist.sort((movieObjA, movieObjB)=>{

            return movieObjA.vote_average - movieObjB.vote_average
        });

        // setWatchList([...sortAsc]);

        dispatch({type: 'SET_WATCHLIST', payload: sortAsc})
    }

    function handleDescendingSort() {

        let sortDesc = watchlist.sort((movieObjA, movieObjB)=>{

            return movieObjB.vote_average - movieObjA.vote_average
        });

        // setWatchList([...sortDesc]);

        dispatch({type: 'SET_WATCHLIST', payload: sortDesc})

    }

    return (
       <div className="watchlist">

        <button onClick={handleAscendingSort}>Asc Sort</button>
        <button onClick={handleDescendingSort}>desc Sort</button>
        <input onChange={handleSearch} value={search} />

         {watchlist.filter((item)=>{

            return item.title.toLowerCase().includes(search.toLowerCase())

         }).map(function(item){

            return <WatchListCard item={item} key={item.id} />
        })}
       </div>
    )

}

export default WatchList;