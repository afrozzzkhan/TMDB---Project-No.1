import { createContext } from "react";

const MovieContext = createContext({
    watchList : {},
    setWatchList: () => {},
    handleAddToWatchList : () => {},
    deleteFromWatchList : () => {}
});

export default MovieContext;