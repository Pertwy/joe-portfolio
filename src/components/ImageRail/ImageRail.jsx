import { useRef, useEffect, useState } from "react";
import styles from "./ImageRail.module.scss";

export default function ImageRail({ railNumber, railImages, handleModal }) {
  const ref = useRef(null);
  const [containerHeight, setHeight] = useState(100 + "%");
  const [animationState, setPlay] = useState("paused");
  useEffect(() => {
    console.log(ref);
    if (ref.current) {
      setHeight(ref.current.scrollHeight + "px");
      setPlay("running");
    }
  }, []);

  //console.log(containerHeight);

  return (
    <div
      className={`${styles.dFlex} ${styles[`rail${railNumber}`]}`}
      ref={ref}
      onMouseEnter={() => setPlay("paused")}
      onMouseLeave={() => setPlay("running")}
      style={{
        height: `${containerHeight}`,
        animationPlayState: animationState,
      }}
    >
      {railImages.map((image) => {
        return (
          <img
            key={`${image}-${railNumber}`}
            onClick={() => handleModal(image)}
            className={styles.railImage}
            src={require(`../../images/${image}`)}
            alt={image}
          ></img>
        );
      })}
    </div>
  );
}
