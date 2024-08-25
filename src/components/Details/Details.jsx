import { useState, useEffect } from 'react';
import Cast from '../Cast';
import './Details.css';
import { useParams } from 'react-router-dom';
import DetailsBanner from '../DetailsBanner';


function Details () {

    let [details, setDetails] = useState([]);

    const {id} = useParams();

    useEffect(()=>{

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&append_to_response=credits,videos`).then((res)=>{
            return res.json();

        }).then((res)=>{
            setDetails(res);
           
        })
    },[])

    return (
        <div>
             <DetailsBanner details={details} />
            <h2> Cast</h2>
            {details.credits ? <Cast cast={details.credits.cast.slice(0,8)} /> : null}
        </div>
    )
}

export default Details;