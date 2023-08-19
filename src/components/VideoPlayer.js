// components/videoPlayer.js

function VideoPlayer({ videoId, caption }) {
  return (
    <div className="video-container max-w-xl mx-auto md:rounded-lg">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?controls=0`}
        title={caption}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="video-player mx-auto"
      ></iframe>

      <style jsx>{`
      @media screen and (max-width: 560px) {
        .video-player {
          width: 400px;
          height: 244px;
        }  
      }
        
      `}</style> 
    </div>
  );
}

export default VideoPlayer;
