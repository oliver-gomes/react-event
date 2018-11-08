import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49623.63474610376!2d-77.15359630582671!3d38.98160471663261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cbb76a24022d%3A0x26b279f76a2bcd0d!2sBethesda%2C+MD!5e0!3m2!1sen!2sus!4v1541719004155"
        width="100%"
        height="500px"
        frameborder="0"
        allowFullScreen
      />
    </div>
  );
};

export default Location;
