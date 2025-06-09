import React from "react";

function ScrollLink({ to, name, className, children }) {
  return (
    <>
      <a href={to} className={className}>
        {name}
        {children}
      </a>
    </>
  );
}

export default ScrollLink;
