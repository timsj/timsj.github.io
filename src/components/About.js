import React from "react";
import druid from "../assets/druid.jpeg";

const About = () => {
  return (
    <div className="section">
      <div className="about-grid">
        <div className="about-text">
          <p style={{ marginTop: "0" }}>
            I'm a hobbyist software developer and licensed civil engineer by
            trade, based in Dallas, TX. My career so far has largely been
            focused on the design and rehabilitation of public water
            infrastructure, including pump stations and large-diameter pipelines
            for a variety of municipal clients in Texas.
          </p>
          <p>
            When the COVID-19 pandemic kept me at home, I began to code more
            frequently in my free time, developing my skills and building
            projects that intrigued me. I'm especially interested about web
            development and design where it intersects with the civil &
            environmental engineering industry.
          </p>
          <p>
            Outside of my web development and engineering interests, I enjoy
            traveling and spending time in nature on backpacking trips. You can
            also find me watching NBA games (go Mavs!), playing board games, and
            spending time with family.
          </p>
        </div>
        <div className="about-img-container">
          <img
            src={druid}
            alt="In front of the Druid Arch in Canyonlands National Park, Utah, USA"
          />
          <div className="caption">
            <p>
              &#128205; Druid Arch
              <br /> Canyonlands National Park <br /> Utah, USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
