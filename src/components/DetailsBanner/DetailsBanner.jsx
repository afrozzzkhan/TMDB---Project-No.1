import './DetailsBanner.css'
function DetailsBanner ({details}) {

    return (

        <div className="details-banner">

            <div className="details-img">

            <img src={`https://image.tmdb.org/t/p/original/${details.poster_path}`} />
            </div>

            <div className='details-banner-title'>
            {details.videos && <a href={`https://www.youtube.com/watch?v=${details.videos.results[1].key}`} target="_blank">Watch Trailer</a>}
            </div>
        </div>
    );

}

export default DetailsBanner;