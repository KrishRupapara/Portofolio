import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Icon from "./Icon";

export default function Footer() {
  return (
    <div className="flex items-center w-full h-16 py-4 mt-10 border-t bg-bgPrimary">
      <div className="flex items-center justify-between w-11/12 mx-auto">
        <div className="text-lg text-white">Made with ❤️ by Krish Rupapara</div>
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
    </div>
  );
}
