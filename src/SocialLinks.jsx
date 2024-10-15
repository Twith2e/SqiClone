import {
  faFacebookF,
  faTwitter,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";

export default function SocialLinks() {
  return (
    <ul className="social-links d-flex flex-column p-0">
      <li className="list-unstyled px-3 py-2" style={{ background: "#3a579a" }}>
        <a href="">
          <FontAwesomeIcon style={{ color: "#fff" }} icon={faFacebookF} />
        </a>
      </li>
      <li className="list-unstyled px-3 py-2" style={{ background: "#279deb" }}>
        <a href="">
          <FontAwesomeIcon style={{ color: "#fff" }} icon={faTwitter} />
        </a>
      </li>
      <li className="list-unstyled px-3 py-2" style={{ background: "#127bb6" }}>
        <a href="">
          <FontAwesomeIcon style={{ color: "#fff" }} icon={faLinkedinIn} />
        </a>
      </li>
    </ul>
  );
}
