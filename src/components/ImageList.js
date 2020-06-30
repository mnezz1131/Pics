import "./ImageList.css"
import React from "react";
import ImageCard from "./ImageCard"

const ImageList = props => {
    // console.log(images)

//   const images =  props.images.map((image) => {
    
//     return <img alt={image.description} key={image.id} src={image.urls.regular} />

//     }) SAME AS


    const images =  props.images.map((image) => {
    
        return <ImageCard key={image.id} image ={image} />
    
        })
    

    return <div className = "image-list">{images}</div>;
};

export default ImageList;
