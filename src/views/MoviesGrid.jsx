
import getAllTrailers from "../functions/getAllTrailer";
import { MoviesCard } from "./MoviesCard";
import style from "./moviesGrid.module.css";
import React from "react";

function MoviesGrid(){
    const [Trailers, setTrailers] = React.useState([]);

    function actualizarEstadoTrilers(){
        getAllTrailers().then((Trailers) => {
            setTrailers(Trailers);
        });
    }

        React.useEffect(() =>{
        actualizarEstadoTrilers();

    },[])

    return(
        <ul className={style.moviesGrid}>
            {Trailers.map((Trailer)=>(
               <MoviesCard Trailer={Trailer} />
            ))}
        </ul>
    );
}

export default MoviesGrid;