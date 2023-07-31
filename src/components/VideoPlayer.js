// components/videoPlayer.js

function VideoPlayer({ videoId, caption }) {
  return (
    <div className="">
      <iframe 
        width="560" 
        height="315" 
        src={`https://www.youtube.com/embed/${videoId}`} 
        alt={caption}
        title={caption}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        className="video-player mx-auto"
    ></iframe>


      <p className='text-center pt-4'>{caption}</p>
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
