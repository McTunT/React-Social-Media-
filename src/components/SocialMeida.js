import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";

class SocialMedia extends Component {
  render() {
    return (
      <div className="social">
        <a href="facbook" className="btn">
          <i>
            <FontAwesomeIcon className="media" icon={["fab", "facebook-f"]} />
          </i>
        </a>
        <a href="twitter" className="btn">
          <i>
            <FontAwesomeIcon className="media" icon={["fab", "twitter"]} />
          </i>
        </a>
        <a href="line" className="btn">
          <i>
            <FontAwesomeIcon className="media" icon={["fab", "line"]} />
          </i>
        </a>
        <a href="instagram" className="btn">
          <i>
            <FontAwesomeIcon className="media" icon={["fab", "instagram"]} />
          </i>
        </a>
        <a href="youtube" className="btn">
          <i>
            <FontAwesomeIcon className="media" icon={["fab", "youtube"]} />
          </i>
        </a>
      </div>
    );
  }
}

export default SocialMedia;
