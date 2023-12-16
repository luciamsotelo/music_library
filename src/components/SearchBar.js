import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

import React, {useState} from 'react'

function SearchBar() {
    const {handleSearch, searchInputElement} = useContext(SearchContext)

    return (
        <form>
            <input ref={searchInputElement} type="text" placeholder="Search Here" />
            <button onClick={(e) => handleSearch(e, searchInputElement.current.value)}>Submit</button>
        </form>
    )
}


export default SearchBar

