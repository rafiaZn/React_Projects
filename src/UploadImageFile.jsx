import React from 'react'
import { useState } from 'react';

export default function UploadImageFile() {
    const [file,setFile] = useState(null)
    const handleChange=(e)=>{
        const selectedImage= e.target.files[0];
        setFile(selectedImage)
    }
  return (
    <div>
      <input type='file' accept='image/*' onChange={handleChange}/>
      { file && <img src={URL.createObjectURL(file)} alt="image uploaded" />}
    </div>
  )
}
