import React from "react";
import dynamic from "next/dynamic";

const ArrowRight = dynamic(() => import("./icons/arrow_right.svg"));
const ArrowUpRight = dynamic(() => import("./icons/arrow_up_right.svg"));
const Logo = dynamic(() => import("./icons/logo.svg"));
const Hiring = dynamic(() => import("./icons/hiring.svg"));

export type IconType = "ArrowRight" | "ArrowUpRight" | "Logo" | "Hiring";

type IconProps = {
  name: IconType | undefined;

  className?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement> | undefined;
};

const Icon: React.FC<IconProps> = ({ name }) => {
  if (!name) {
    return null;
  }

  const icons = {
    ArrowRight,
    ArrowUpRight,
    Logo,
    Hiring,
  };

  const CurrentIcon = icons[name];

  return <CurrentIcon />;
};

export default Icon;
