import React, { useState } from "react";
import HorizontalRail from "../HorizontalRail/HorizontalRail";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function HomePage() {
  const [hoverImageIndex, setHoverImageIndex] = useState(null);

  const allImages = [
    "hollywood.jpg",
    "unpublished.png",
    "unapologetic.png",
    "bananas.jpg",
    "sex-with-a-gun.jpg",
    "hiring.jpg",
    "metamorphisis-one.jpg",
    "metamorphisis-two.jpg",
    "sketches-1.jpg",
    "sketches-2.jpg",
    "sketches-3.jpg",
    "sketches-4.jpg",
    "sketches-5.jpg",
    "sketches-6.jpg",
  ];

  return (
    <div>
      <Header />
      <HorizontalRail
        railImages={allImages}
        hoverImageIndex={hoverImageIndex}
        setHoverImageIndex={setHoverImageIndex}
      />
      <Footer />
    </div>
  );
}

export default HomePage;
