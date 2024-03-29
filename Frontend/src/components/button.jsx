import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
};
const variants = {
  fill: {
    teal_A700: "bg-teal-A700 text-white-A700",
    blue_gray_100: "bg-blue_gray-100",
  },
  outline: {
    teal_A700: "border-teal-A700 border-2 border-solid",
  },
};
const sizes = {
  xs: "h-[40px] px-[35px] text-lg",
  sm: "h-[45px]",
  md: "h-[60px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "teal_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["teal_A700", "blue_gray_100"]),
};

export default Button;
