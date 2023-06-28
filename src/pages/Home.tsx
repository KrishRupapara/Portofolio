import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Icon from "../components/Icon";

export default function Home() {
  return (
    <div className="flex flex-col justify-center" id="Home">
      <h1 className="text-4xl whitespace-nowrap">Hello, I'm Krish.</h1>
      <h1 className="text-6xl">
        I'm a student
        <span className="block"> & a frontend web developer.</span>
      </h1>
      <div className="flex gap-5 mt-3 ml-1l">
        <Icon
          link="https://www.linkedin.com/in/krish-rupapara-6a0832280/"
          icon={faLinkedin}
          size="2x"
        />
        <Icon
          link="https://github.com/KrishRupapara"
          icon={faGithub}
          size="2x"
        />
      </div>
    </div>
  );
}
