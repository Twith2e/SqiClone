import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <nav className="nav-bar d-flex justify-content-between align-items-center border-bottom fixed-top bg-white">
      <div>
        <img className="nav-img" src="src/assets/SQI.jpg" alt="sqi-logo" />
      </div>
      <div>
        <ul className="d-flex gap-4">
          <li className="list-unstyled d-flex gap-2 align-items-center">
            <a className="text-decoration-none" href="">
              About
            </a>
            <FontAwesomeIcon
              style={{ fontSize: "10px" }}
              icon={faChevronDown}
            />
          </li>
          <li className="list-unstyled d-flex gap-2 align-items-center">
            <a className="text-decoration-none" href="">
              Programmes
            </a>
            <FontAwesomeIcon
              style={{ fontSize: "10px" }}
              icon={faChevronDown}
            />
          </li>
          <li className="list-unstyled d-flex gap-2 align-items-center">
            <a className="text-decoration-none" href="">
              Admissions
            </a>
            <FontAwesomeIcon
              style={{ fontSize: "10px" }}
              icon={faChevronDown}
            />
          </li>
          <li className="list-unstyled d-flex gap-2 align-items-center">
            <a className="text-decoration-none" href="">
              E-Portal
            </a>
            <FontAwesomeIcon
              style={{ fontSize: "10px" }}
              icon={faChevronDown}
            />
          </li>
          <li className="list-unstyled d-flex gap-2 align-items-center">
            <a className="text-decoration-none" href="">
              SQI Scholarship
            </a>
            <FontAwesomeIcon
              style={{ fontSize: "10px" }}
              icon={faChevronDown}
            />
          </li>
          <li className="list-unstyled d-flex gap-2 align-items-center">
            <a className="text-decoration-none" href="">
              News
            </a>
            <FontAwesomeIcon
              style={{ fontSize: "10px" }}
              icon={faChevronDown}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
