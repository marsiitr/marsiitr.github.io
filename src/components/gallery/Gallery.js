import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Gallery() {
  const [images, setImages] = useState([]);
  const folderId = process.env.REACT_APP_FOLDER_ID;
  const apiKey = process.env.REACT_APP_API_KEY;


  useEffect(() => {
    fetch(
      `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&key=${apiKey}&fields=files(id,name)`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const imageUrls = data.files.map(
          (file) => `https://lh3.googleusercontent.com/d/${file.id}=s1000`
        );
        // console.log(imageUrls);
        setImages(imageUrls);
        // console.log("images", images);
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry columnsCount={4} gutter="10px">
          {images.map((image, i) => (
            <img key={i} src={image} style={{ width: "100%", display: "block" }} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Gallery;
