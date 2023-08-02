import ImageRail from "./components/ImageRail/ImageRail";
import Profile from "./components/Profile/Profile";
import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
export default function App() {
  const railImagesOne = [
    "kitten-settle.png",
    "new-kitten.jpeg",
    "puppies-kittens.jpg",
    "roar-cat.avif",
    "yawn-kitty.webp",
  ];

  const railImagesTwo = [
    "kitten-settle.png",
    "new-kitten.jpeg",
    "puppies-kittens.jpg",
    "roar-cat.avif",
    "yawn-kitty.webp",
  ];

  const railImagesThree = [
    "kitten-settle.png",
    "new-kitten.jpeg",
    "puppies-kittens.jpg",
    "roar-cat.avif",
    "yawn-kitty.webp",
  ];

  const [modalState, setModalState] = useState(false);
  const [modalImage, setModalImage] = useState("");

  function handleModal(image) {
    console.log(image);
    setModalState(true);
    setModalImage(image);
  }

  return (
    <div className="App">
      <Profile />
      {modalState && (
        <Modal closeModal={() => setModalState()} modalImage={modalImage} />
      )}
      <div className="containerr">
        <ImageRail
          railNumber={"One"}
          railImages={railImagesOne}
          handleModal={handleModal}
        />
        <ImageRail
          railNumber={"Two"}
          railImages={railImagesTwo}
          handleModal={handleModal}
        />
        <ImageRail
          railNumber={"Three"}
          railImages={railImagesThree}
          handleModal={handleModal}
        />
      </div>
    </div>
  );
}
