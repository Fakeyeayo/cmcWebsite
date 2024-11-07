import React from "react";
import img1 from "../resources/img1.jpg";
import img2 from "../resources/img2.jpg";
import img3 from "../resources/img3.jpg";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div className="about_header">
        <h2>Who we are</h2>
        <p>
          We are Believers cleansed with the Atoning Blood of the Lamb (Jesus
          Christ). We are glad to share the Good News of Salvation while we
          earnestly await the Second Coming of Christ, for that is our divinely
          assigned mandate. We also strongly believe in the Promises of
          blessings, prosperity, gifts of the Holy Spirit, divine health and
          deliverance guaranteed us as we earnestly seek the Kingdom of God and
          its righteousness.
        </p>
      </div>

      <div className="about_sections">
        <div className="about_section1">
          <h2>Our Mission</h2>
          <p>Getting people saved, nurtured, and equipped for Heaven.</p>
          <img src={img1} className="about_img1" />
        </div>
        <img src={img3} className="about_img3" />

        <div className="about_section2">
          <h2>Who We Are</h2>
          <p>
            Christ The Messiah Church has been a spiritual anchor in the for
            over 23 years. Founded in 2001, our church family is passionate
            about sharing God’s love, teaching the Gospel, and making a
            difference in the lives of our members and the community. We are a
            place where people of all ages and backgrounds come together to grow
            in their faith and serve others.
          </p>
        </div>

        <img src={img2} className="about_img2" />
      </div>

      <div className="about_section3">
        <h1>Worship Services</h1>
        <h3>Join Us in Worship</h3>
        <p>
          Experience a meaningful connection with God through worship. Our
          services are designed to help you grow in your faith and connect with
          others. Each Sunday, we gather for worship, prayer, and teaching that
          is rooted in the Bible and applicable to everyday life.
        </p>
        <p>Service Times: Sundays at 9:00 AM to 12:00 PM</p>
        <p>Children’s Service: Available during 11:00 AM Service</p>
        <p>Location: 92, Adetokunbo Ademola Crescent (Olumawu College).</p>
      </div>
    </div>
  );
};

export default About;
