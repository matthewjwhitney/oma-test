import React, { Component } from "react";
import "./footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content level">
          <div className="level-item level-left">
            <p>
              Looking for information on licenses, recreation and AZGFD news?{" "}
              <a>Visit our main site 》</a>
              <br />
              Copyright © 2018, Arizona Game and Fish Department. All Rights
              reserved. <a>Privacy Policy 》</a>
            </p>
          </div>
          <div className="level-item level-right">
            <span className="icon is-large">
              <a>
                <i className="fab fa-2x fa-facebook" />
              </a>
            </span>
            <span className="icon is-large">
              <a>
                <i className="fab fa-2x fa-twitter" />
              </a>
            </span>
            <span className="icon is-large">
              <a>
                <i className="fab fa-2x fa-youtube" />
              </a>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
