import React, { Component } from "react";
import axios from "axios";
import "./formSection.scss";

class FormSection extends Component {
  state = {
    fullName: "",
    email: "",
    subscribe: false
  };

  putDataToDB = () => {
    console.log(this.state.fullName);
    axios.post("http://localhost:3000/api/putData", {
      fullName: this.state.fullName,
      email: this.state.email,
      subscribe: this.state.subscribe
    });
  };

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
                          onChange={e =>
                            this.setState({ fullName: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="field is-grouped">
                      <div className="control is-expanded">
                        <input
                          className="input"
                          type="email"
                          placeholder="Enter Email"
                          onChange={e =>
                            this.setState({ email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="field is-grouped">
                      <label className="checkbox">
                        <input
                          required
                          type="checkbox"
                          onChange={e =>
                            this.setState({ subscribe: e.target.value })
                          }
                        />{" "}
                        Yes, I want to sign up to receive e-newsletters from the
                        Arizona Game and Fish Department.
                      </label>
                    </div>
                    <div className="control">
                      <button
                        onClick={() => this.putDataToDB()}
                        className="button is-centered is-large is-fullwidth is-uppercase"
                      >
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
