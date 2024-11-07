import React from "react";
import img1 from "./GalleryImages/img1.jpg";
import img2 from "./GalleryImages/img2.jpg";
import img3 from "./GalleryImages/img3.jpg";
import img4 from "./GalleryImages/img4.jpg";
import img5 from "./GalleryImages/img5.jpg";
import img6 from "./GalleryImages/img6.jpg";
import img7 from "./GalleryImages/img7.jpg";
import img8 from "./GalleryImages/img8.jpg";
import img9 from "./GalleryImages/img9.jpg";
import img10 from "./GalleryImages/img10.jpg";

const Gallery = () => {
  return (
    <div className="gallery_container">
      <h1>Gallery</h1>
      <p className="gallery_text">
        Welcome to our gallery! At Christ The Messiah Church, we believe that
        every gathering, celebration, and act of service is a reflection of
        God’s love among us. This collection of photos captures the joy, unity,
        and spirit of our church community—moments of worship, fellowship, and
        outreach that bring us closer to God and one another. As you explore
        these images, we hope you’ll feel a glimpse of the warmth and faith that
        fill our church home.
      </p>

      <div className="gallery_imgs">
        <img src={img1} className="galleryImages" />
        <img src={img2} className="galleryImages" />
        <img src={img3} className=" span-2" />
        <img src={img4} className="galleryImages" />
        <img src={img5} className="galleryImages" />
        <img src={img6} className="galleryImages" />
        <img src={img7} className="galleryImages" />
        <img src={img8} className=" span-2" />
        <img src={img9} className=" span-2" />
        <img src={img10} className=" span-2" />
      </div>
    </div>
  );
};

export default Gallery;
