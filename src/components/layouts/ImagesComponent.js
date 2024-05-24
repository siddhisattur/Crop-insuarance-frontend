import React from "react";

export const ImageComponent = ({ ImageSrc, ImageAlt, width, height, ImageClassName }) => {
    return (
        <div>
            <img
                src={ImageSrc}
                alt={ImageAlt}
                className={`img-fluid ${ImageClassName}`} // Add img-fluid class here
                style={{ width: width, height: height }}
            />
        </div>
    );
}
