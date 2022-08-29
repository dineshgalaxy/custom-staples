import React from "react";
const Img = ({src,alt})=><img src={src} alt={alt}></img>

Img.defaultProps = {
    src:"logo.png",
}
export default Img;