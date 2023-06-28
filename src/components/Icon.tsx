import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface IconProps {
  link: string;
  icon: IconProp;
  size: "xs" | "lg" | "2x" | "3x" | "4x" | "5x";
  className?: HTMLAnchorElement["className"];
  onClick?: Function;
}

import { MouseEventHandler } from "react";

const Icon: FC<IconProps> = ({ link, icon, size, className, onClick }) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (onClick) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <a href={link} target="_blank" className={className} onClick={handleClick}>
      <FontAwesomeIcon
        icon={icon}
        className="cursor-pointer icon-hover"
        size={size}
      />
    </a>
  );
};

export default Icon;
