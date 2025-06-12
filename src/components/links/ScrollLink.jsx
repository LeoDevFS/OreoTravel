import React from "react";
import {Link} from'react-scroll'

function ScrollLink({ to, name, className, children, extraPops={}}) {
  return (
    <>
      <Link to={to} smooth={true} duration={500} {...extraPops} className={className}>
        {name}
        {children}
      </Link>
    </>
  );
}

export default ScrollLink;
