import React from "react";
import styles from "./HorizontalRail.module.scss";

function HorizontalRail({ railImages, hoverImageIndex, setHoverImageIndex }) {
  function returnHeight(index) {
    if (hoverImageIndex === null) {
      return index % 2 === 0 ? "60%" : "60%";
    } else {
      if (hoverImageIndex === index) {
        return "100%";
      } else {
        const hoverEvenOrOdd = hoverImageIndex % 2;
        return index % 2 === hoverEvenOrOdd ? "55%" : "55%";
      }
    }
  }

  return (
    <div className={styles.horizontalScroll}>
      {railImages.map((image, index) => {
        return (
          <img
            key={`${image}`}
            className={styles.railImage}
            onMouseEnter={() => setHoverImageIndex(index)}
            onMouseLeave={() => setHoverImageIndex(null)}
            src={require(`../../images/${image}`)}
            alt={image}
            style={{
              height: `${returnHeight(index)}`,
              transition: "all 0.5s",
            }}
          ></img>
        );
      })}
    </div>
  );
}

export default HorizontalRail;
