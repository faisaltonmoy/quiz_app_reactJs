import { useRef } from "react";
import classes from "../styles/MiniPlayer.module.css";

export default function MiniPlayer({ title, id }) {
  //const [status, setStatus] = useState(false);
  const buttonRef = useRef();

  const videoUrl = `https://www.youtube.com/embed/${id}`;

  // function toggleMiniPlayer() {
  //   if (!status) {
  //     buttonRef.current.classList.remove(classes.floatingBtn);
  //     setStatus(true);
  //   } else {
  //     buttonRef.current.classList.add(classes.floatingBtn);
  //     setStatus(false);
  //   }
  // }

  return (
    <div
      className={`${classes.miniPlayer}`}
      // className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      //onClick={toggleMiniPlayer}
    >
      {/* <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniPlayer}
      >
        {" "}
        close{" "}
      </span> */}
      {/* <img className={classes.player}  src={image} alt="Alt Tag" /> */}
        <iframe  
        className={classes.player} 
        width="400px"
        height="224px"
        src={videoUrl}
        title={title}
        allowFullScreen
      ></iframe>
      {/* <p>{title}</p> */}
    </div>
  );
}
