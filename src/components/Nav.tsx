import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import { useState } from "react";
import NavItem from "./NavItem";

export default function Nav() {
  const [extendNav, setExtendNav] = useState(false);
  if (window.innerWidth > 768 && extendNav === true)
    setExtendNav((curr) => !curr);

  return (
    <nav
      className={
        (extendNav === true ? "navOpen" : "navbar") +
        " fixed top-0 z-40 w-full bg-bgPrimary"
      }
    >
      <div className="flex items-center justify-between w-11/12 h-16 py-5 mx-auto mt-4 ">
        <h1 className="py-2 pl-3 pr-2 mr-2 text-4xl font-bold text-black transition-colors duration-200 bg-white rounded-full hover:text-primary hover:bg-black">
          K.
        </h1>
        <ul className="flex items-center gap-4 text-lg font-light list-none text-primary">
          <NavItem id="#Home" setExtendNav={setExtendNav} />
          <NavItem id="#About" setExtendNav={setExtendNav} />
          <NavItem id="#Projects" setExtendNav={setExtendNav} />
          <NavItem id="#Contact" setExtendNav={setExtendNav} />
        </ul>
        <Icon
          link="null"
          icon={extendNav ? faXmark : faBars}
          size="2x"
          className="btn"
          onClick={() => setExtendNav((curr) => !curr)}
        />
      </div>
    </nav>
  );
}
