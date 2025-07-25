import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ParticlesComponent from '../particles.js';

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const folderId = process.env.REACT_APP_FOLDER_ID;
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Debug: Log environment variables
        console.log('Environment variables check:');
        console.log('folderId:', folderId);
        console.log('apiKey:', apiKey ? 'Present' : 'Missing');
        console.log('All env vars:', process.env);
        
        // Correct Google Drive API query format
        // Try multiple query variations if one fails
        const queries = [
          `'${folderId}' in parents and mimeType contains 'image/'`,
          `'${folderId}' in parents and mimeType contains 'image'`,
          `parents in '${folderId}' and mimeType contains 'image/'`
        ];
        
        let query = queries[0]; // Start with the first query
        const encodedQuery = encodeURIComponent(query);
        
        const url = `https://www.googleapis.com/drive/v3/files?q=${encodedQuery}&key=${apiKey}&fields=files(id,name,mimeType)`;
        
        console.log('Fetching from URL:', url);
        
        const response = await fetch(url);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`HTTP ${response.status}: ${errorData.error?.message || 'Unknown error'}`);
        }
        
        const data = await response.json();
        console.log('API Response:', data);
        
        if (data.files && data.files.length > 0) {
          const imageUrls = data.files.map(
            (file) => `https://lh3.googleusercontent.com/d/${file.id}=s1000`
          );
          setImages(imageUrls);
        } else {
          console.log('No images found in the folder');
          setImages([]);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (folderId && apiKey) {
      fetchImages();
    } else {
      setError('Missing folder ID or API key in environment variables');
      setLoading(false);
    }
  }, [folderId, apiKey]);

  if (loading) {
    return (
      <div>
        <ParticlesComponent id="tsparticles" />
        <div style={{ textAlign: 'center', padding: '50px' }}>
          Loading images...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <ParticlesComponent id="tsparticles" />
        <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div>
      <ParticlesComponent id="tsparticles" />
      {images.length > 0 ? (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={4} gutter="10px">
            {images.map((image, i) => (
              <img 
                key={i} 
                src={image} 
                alt={`Gallery image ${i + 1}`}
                style={{ width: "100%", display: "block" }} 
                onError={(e) => {
                  console.error(`Failed to load image: ${image}`);
                  e.target.style.display = 'none';
                }}
              />
            ))}
          </Masonry>
          
        </ResponsiveMasonry>
      ) : (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          No images found in the folder.
        </div>
      )}
    </div>
  );
}

export default Gallery;