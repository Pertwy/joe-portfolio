import React from "react";
import styles from "./Modal.module.scss";

export default function Modal({ closeModal, modalImage }) {
  return (
    <div className={styles.modal}>
      <div className={styles.closeBox} onClick={() => closeModal()}>
        X
      </div>
      {modalImage !== "" && (
        <img
          className={styles.modalImage}
          src={require(`../../images/${modalImage}`)}
          alt="joe-perkins-profile"
        ></img>
      )}
    </div>
  );
}
