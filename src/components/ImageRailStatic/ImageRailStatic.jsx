import styles from "./ImageRailStatic.module.scss";

export default function ImageRailStatic({
  railNumber,
  railImages,
  handleModal,
}) {
  return (
    <div className={`imageRail`}>
      {railImages.map((image) => {
        return (
          <img
            key={`${image}-${railNumber}`}
            //onClick={() => handleModal(image)}
            className={styles.railImage}
            src={require(`../../images/${image}`)}
            alt={image}
          ></img>
        );
      })}
    </div>
  );
}
