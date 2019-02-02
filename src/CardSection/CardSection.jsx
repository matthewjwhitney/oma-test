import React, { Component } from "react";
import "./cardSection.scss";
import * as birdIcon from "../assets/bird-icon.png";

class CardSection extends Component {
  render() {
    return (
      <section id="card-section" className="hero is-fullheight has-bg-img">
        <div className="hero-head">
          <div className="container has-text-centered">
            <h1 className="title has-text-white is-uppercase has-margin-top">
              We're Keeping Arizona's Wildlife Wild
            </h1>
          </div>
        </div>

        <div className="hero-body">
          <div className="container">
            <div className="card has-max-width is-pulled-left">
              <div className="card-image has-text-centered has-margin-top">
                <figure>
                  <img
                    src={birdIcon}
                    alt="bird-icon"
                    className="has-max-height"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content has-text-centered">
                  <hr />
                  <p className="title is-uppercase">Success Stories</p>
                  <hr />
                  <p>
                    From restoring populations to creating safer habitats, see
                    how we're making a difference.
                  </p>
                  <a
                    href="#"
                    className="button is-uppercase is-large is-fullwidth"
                  >
                    Read Our Stories
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CardSection;
