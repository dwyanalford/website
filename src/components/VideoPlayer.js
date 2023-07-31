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
        className=""
    ></iframe>


      <p className="">{caption}</p>
    </div>
  );
}

export default VideoPlayer;
