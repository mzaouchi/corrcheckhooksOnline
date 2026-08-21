import CardMovie from "./CardMovie"

const ListMovies=({movies})=>{
    return(
        <div className="containerCard">
            {
                movies.map((el,i,t)=> <CardMovie el={el}/>)
            }
        </div>
    )
}

export default ListMovies