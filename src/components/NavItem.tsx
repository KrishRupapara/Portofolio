import { FC } from "react";

interface NavItemProps {
  id: string;
  setExtendNav: Function;
}

const NavItem: FC<NavItemProps> = ({ setExtendNav, id }) => {
  return (
    <li>
      <a href={id} className="link-css" onClick={() => setExtendNav(false)}>
        {id.substring(1)}
      </a>
    </li>
  );
};

export default NavItem;
