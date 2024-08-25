import { Link} from "react-router-dom"
import MovieLogo from '../../Assets/MovieLogo.png'
import './NavBar.css';

function NavBar(){

    return (
        <div className="nav-bar">
            <Link to="/" className="nav-bar-item"> <img src={MovieLogo} className="logo-img" alt="logo-img" /> </Link>
            <Link to="/" className="nav-bar-item">Movies</Link>
            <Link to="/watchlist" className="nav-bar-item"> Watchlist</Link>
        </div>
    )
}

export default NavBar;