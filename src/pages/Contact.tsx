import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Icon from "../components/Icon";

export default function Contact() {
  return (
    <div className="mt-20" id="Contact">
      <h1 className="mb-2 text-3xl">Contact me 👇</h1>
      <div className="flex items-center">
        <Icon
          link="mailto:krishrupapara01@gmail.com"
          icon={faEnvelope}
          size="2x"
        />
        <h1 className="ml-2 text-2xl">krishrupapara01@gmail.com</h1>
      </div>
    </div>
  );
}
