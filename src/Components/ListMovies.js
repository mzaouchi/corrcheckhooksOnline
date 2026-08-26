import CardMovie from "./CardMovie"

const ListMovies=({movies,search, njoum})=>{

    var x = movies.filter((el,i,t)=> el.title.toLowerCase().includes(search.toLowerCase()) && el.rating >= njoum)
    return(
        <div className="containerCard">
            {
                x.length == 0 ?

                <h1>Ma3anech aflem</h1>

                :

                x.map((el,i,t)=> <CardMovie el={el}/>)
            }
        </div>
    )
}

export default ListMovies