// components/videoPlayer.js
import styles from '@/styles/Projects.module.css';

function VideoPlayer({ videoId, caption }) {
  return (
    <div className={styles.videoPlayerContainer}>
      <iframe 
        width="560" 
        height="315" 
        src={`https://www.youtube.com/embed/${videoId}`} 
        alt={caption}
        title={caption}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className={styles.videoPlayer}
    ></iframe>


      <p className={styles.videoCaption}>{caption}</p>
    </div>
  );
}

export default VideoPlayer;
