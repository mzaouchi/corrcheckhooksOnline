import { Rating } from "@mui/material"
import { useState } from "react"
import { Button } from "react-bootstrap"

const FilterMovies=({setSearch, setNjoum, search, njoum})=>{ 

    const resetFilter=()=>{
        setSearch("")
        setNjoum(0)
    }

    return(
        <div>
            <input value={search} type="text" onChange={(e)=> setSearch(e.target.value)}/>
            <Rating value={njoum} onChange={(e)=> setNjoum(e.target.value)}/>
            <Button onClick={resetFilter}  variant="outline-warning">Reset</Button>
        </div>
    )
}

export default FilterMovies