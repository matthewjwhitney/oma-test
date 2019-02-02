import React, { Component } from "react";
import "./formSection.scss";

class FormSection extends Component {
  render() {
    return (
      <section id="form-section" className="hero is-fullheight has-bg-img">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="card has-max-width column">
                <div className="card-content">
                  <div className="content">
                    <hr />
                    <p className="title is-uppercase has-text-centered">
                      Stay in Touch
                    </p>
                    <hr />
                    <div className="field is-grouped">
                      <div className="control is-expanded">
                        <input
                          className="input"
                          type="name"
                          placeholder="Enter Full Name"
                        />
                      </div>
                    </div>
                    <div className="field is-grouped">
                      <div className="control is-expanded">
                        <input
                          className="input"
                          type="email"
                          placeholder="Enter Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="field is-grouped">
                      <label className="checkbox">
                        <input required type="checkbox" /> Yes, I want to sign
                        up to receive e-newsletters from the Arizona Game and
                        Fish Department.
                      </label>
                    </div>
                    <div className="control">
                      <button className="button is-centered is-large is-fullwidth is-uppercase">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FormSection;
