import React from "react";

const sizes = {
  s: "text-2xl font-bold md:text-[22px]",
  xs: "text-lg font-semibold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export default Heading;
