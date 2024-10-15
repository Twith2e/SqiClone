import "./index.css";
// import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
  return (
    <div className="container hero-container">
      <div className="row">
        <div className="col-6 py-5">
          <h1 className="hero-text">Study to become a global talent</h1>
          <p>
            Learn new tech skills using a world-class curriculum from top
            industry experts in an accredited institution.
          </p>
          <button className="btn btn-primary ms-3">Start now</button>
        </div>
        <div className="col-5">
          <img
            className="hero-img"
            src="src/assets/bg-header-sqi-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
