import React from "react";
import styles from "./Profile.module.scss";

export default function Profile() {
  return (
    <div className={styles.container}>
      <img
        className={styles.profileImage}
        src={require(`../../images/joeProfile.jpeg`)}
        alt="joe-perkins-profile"
      ></img>
      <p>Joseph Perkins</p>
      <p>email.gmail.com</p>
      <div>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>linkedIn</p>
      </div>
    </div>
  );
}
