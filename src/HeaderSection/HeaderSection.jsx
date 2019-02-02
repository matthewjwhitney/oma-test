import React, { Component } from "react";
import "./headerSection.scss";
import * as logo from "../assets/logo.png";

class HeaderSection extends Component {
  render() {
    return (
      <section id="header-section" className="hero is-fullheight has-bg-img">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img src={logo} alt="Logo" className="logo has-margin-left" />
                </a>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar">
                  <a className="navbar-item is-active">Conserve & Protect</a>
                  <a className="navbar-item">Stories</a>
                  <a className="navbar-item">Our Experts</a>
                  <a className="navbar-item">Programs</a>
                  <span className="navbar-item">
                    <a className="button is-inverted">
                      <span>Donate</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container">
            <div className="card has-max-width is-pulled-right">
              <div className="card-content">
                <div className="content has-text-centered">
                  <hr />
                  <p className="title is-uppercase">Conserve & Protect</p>
                  <hr />
                  <p>
                    Arizona Game and Fish Department manages over 800 species of
                    wildlife, preserving these incredible animals for future
                    generations.
                  </p>
                  <a href="#" className="button is-uppercase is-large">
                    Our Mission
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

export default HeaderSection;
