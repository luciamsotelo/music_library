import React, { useState, Fragment, useRef, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import { SearchContext } from './context/SearchContext'
import { createResource as fetchData } from "./components/helper"

function App() {
    let [data, setData] = useState(null)
    let searchInputElement= useRef("")
    
    const handleSearch = (e, term) => {
        e.preventDefault()
        if (term) {
            setData(fetchData(term))
        }
    }
    const renderGallery = () => {
        return data ? (
            <Suspense fallback={<h1>Loading...</h1>}>
                <Gallery data = {data}/>
            </Suspense>
        ) : ""

    }

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={
                        <Fragment>
                            <SearchContext.Provider value={
                                {
                                    searchInputElement, 
                                    handleSearch
                                }
                            }>
                                <SearchBar/>
                                {renderGallery()}

                            </SearchContext.Provider>
                        </Fragment>
                    } />
                    <Route path="/album/:id" element={<AlbumView />} />
                    <Route path="/artist/:id" element={<ArtistView />} />
                </Routes>
            </Router>
        </div>
    )
    
}

export default App;




