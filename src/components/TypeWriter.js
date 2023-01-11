import TypewriterComponent from "typewriter-effect";

import React from "react";

const TypeWriter = () => {
  return (
    <TypewriterComponent
      onInit={(typewriter) => {
        typewriter.changeDelay(50).typeString("Welcome to my site. ").start();
      }}
    />
  );
};

export default TypeWriter;
