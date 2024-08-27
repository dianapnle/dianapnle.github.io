import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "FullStack Developer 👩‍💻",
              "Dog Mom of 2 🐶",
              "Passionate Dancer 💃",
              "Self-Care Enthusiast 😊"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type
