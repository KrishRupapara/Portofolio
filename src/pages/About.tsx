import Icon from "../components/Icon";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import Img from "../../public/about-me.jpg";

export default function About() {
  return (
    <div
      className="flex items-center justify-between gap-10 mb-20 text-lg tracking-wider pt-28"
      id="About"
    >
      <div className="lg:w-1/2">
        <h1 className="mb-6 text-4xl cursor-pointer underline-txt">About me</h1>
        <ul>
          <li>I'm a frontend developer 👨‍💻 and life long learner🚀! </li>
          <li>
            I'm passionate about making websites and creating visually appealing
            art to the world. I like making websites that feels user friendly.
            I'm a minimalist who loves react and music more than life.
          </li>
          <li>
            I'm currently studying in DAIICT, Gandhinagar. As a student and an
            eager learner, I like to learn about new technologies and improve my
            skills by making websites.
          </li>
        </ul>

        <h1 className="pb-1 mt-20 mb-2 text-3xl underline-txt">
          Currently learning :
        </h1>
        <Icon link="https://nodejs.org/en" icon={faNode} size="2x" />
      </div>
      <img
        src={Img}
        alt="About me"
        width={500}
        className="shadow-2xl rounded-3xl image shadow-slate-600"
      />
    </div>
  );
}
