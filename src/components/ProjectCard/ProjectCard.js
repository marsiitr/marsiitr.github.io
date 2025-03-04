import React from 'react';
import "./ProjectCard.css";

const ProjectCard = ({ image, title, description, price, duration, creatorImage, creatorName }) => {
  return (
      <div className="nft">
        <div className="main">
          <img
            className="tokenImage"
            src={image}
            alt="NFT"
          />
          <h2>{title}</h2>
          <p className="description">
            {description}
          </p>
          <div className="tokenInfo">
            <div className="duration">
              <ins>◷</ins>
              <p>{duration}</p>
            </div>
          </div>
          <hr />
          <div className="creator">
            <div className="wrapper">
              <img
                src={creatorImage}
                alt="Creator"
              />
            </div>
            <p>
              <ins>Creation of</ins> {creatorName}
            </p>
          </div>
        </div>
      </div>
  );
};

export default ProjectCard;