import React from "react";

const Button = ({ bgColor, color, size, text, borderRadius, onclick }) => {
  return (
    <button
      onClick={onclick}
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-5 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
