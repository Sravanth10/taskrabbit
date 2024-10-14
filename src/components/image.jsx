import React, { useState } from "react";
import './image.css'
function Image() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="img">
            <h2>Add Image:</h2>
            <input className="" type="file" onChange={handleChange} />
            <img src={file} />
        </div>
    );
}

export default Image;