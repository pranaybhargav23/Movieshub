
import React from 'react';


const YoutubeVideo = () => {
   

  return (
    <div>
      <iframe
          className="video-element"
          src={`https://www.youtube.com/embed/T6DJcgm3wNY`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
    </div>
  );
};


export default YoutubeVideo;