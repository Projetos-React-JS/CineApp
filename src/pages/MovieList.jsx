import { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import Movies from "../components/Movies/Movies";


export default function MovieList(){

    const [filmes, setFilmes] = useState([])
    const [isLoading, setIsLoading] = useState(false);

        useEffect(() => { 
        setIsLoading(true);
        setTimeout(() => {
         fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=en-US&page=1')
         .then(response => response.json())
         .then(data => {setFilmes(data.results);
          setIsLoading(false);})
         .catch(err => console.error(err));
        }, 3000);
        },[])

    return(
       <>
         <h1 className="dark:text-gray-400 text-3xl mb-6">Lista de Filmes</h1>
         {isLoading ? 
         <>
         <p className="mb-2">Carregando...</p>
         <Spinner className="h-12 w-12" />
         </>
          : null}
          <Movies filmes = {filmes} />
       </>
    )
}