import React from "react";

const sizes = {
  xs: "text-lg font-normal",
  s: "text-2xl font-normal md:text-[22px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export default Text;
