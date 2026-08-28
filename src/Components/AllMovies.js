import AddMovie from "./AddMovie"
import FilterMovies from "./FilterMovies"
import ListMovies from "./ListMovies"

const AllMovies=({setMovies,setNjoum,setSearch,movies,search,njoum})=>{
    return(
        <div>
            <FilterMovies setSearch={setSearch} setNjoum={setNjoum} search={search} njoum={njoum}/>
            <AddMovie movies={movies} setMovies={setMovies}/>
            <ListMovies movies={movies} search={search} njoum={njoum}/>
        </div>
    )
}

export default AllMovies