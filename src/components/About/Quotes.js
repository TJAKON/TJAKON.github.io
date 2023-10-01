import React from "react";
import Typewriter from "typewriter-effect";

function Quotes() {
  return (
    <Typewriter
      options={{
        wrapperClassName : "Quotes",
        cursorClassName : "Quotes",
        strings: [
          "Fight for your dreams, People's dreams have no end",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Quotes;
