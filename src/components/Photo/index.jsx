import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import './index.scss' 

const Img = ({author, photoUrl}) => {
    console.log(photoUrl);
    return (
        <figure>
            <p className='img-container'><img src={photoUrl} alt="photo" className='img-item'/></p>
            <figcaption className='img-description'>Фото: {author} </figcaption>
        </figure>
    )
}

export default Img;