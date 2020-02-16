import React from 'react';

// Create a stateless component that displays an individual image from Flickr, using data passed as props from the parent (PhotoContainer)
const Photo = props => {
    let url = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;
    console.log(url);
    return(
        <li>
            <img src={url} alt="" />
        </li>
    );
}
export default Photo;