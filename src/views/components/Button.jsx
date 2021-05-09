import classNames from "classnames";
import React from "react";

export const Button = ({ children, onClick, disabled }) => {
  const className = classNames(
    "border-gray-300 bg-gray-50 border-solid border py-1 px-3 rounded-md shadow-sm",
    {
      "opacity-50 cursor-default": disabled,
    }
  );
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};
