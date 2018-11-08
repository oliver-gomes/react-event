import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49586.84800513972!2d-77.13686659060122!3d39.0340607863659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85bcffbaeb5678bf!2sThe+Coffee+Place!5e0!3m2!1sen!2sus!4v1541719119125"
        width="100%"
        height="500px"
        frameborder="0"
        allowFullScreen
      />
    </div>
  );
};

export default Location;
