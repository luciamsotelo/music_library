import React from 'react'
import GalleryItem from './GalleryItem'

const Gallery = (props) => {
    const results = props.data.result.read()


    const display = results.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery