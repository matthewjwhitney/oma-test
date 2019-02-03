import React, { Component } from "react";
import axios from "axios";
import "./formSection.scss";

class FormSection extends Component {
  state = {
    fullName: "",
    email: "",
    subscribe: false,
    nameError: null,
    emailError: null
  };

  handleFullNameChange = event => {
    this.setState({ fullName: event.target.value }, () => {
      this.validateFullName();
    });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value }, () => {
      this.validateEmail();
    });
  };

  validateFullName = () => {
    const { fullName } = this.state;
    this.setState({
      fullNameError:
        fullName.length > 3 ? null : "Name must be longer than 3 characters"
    });
    console.log(this.state);
  };

  validateEmail = () => {
    const { email } = this.state;
    this.setState({
      emailError:
        email.length > 3 ? null : "Email must be longer than 3 characters"
    });
  };

  handleSubmit = event => {
    (this.state.emailError === null || this.state.fullnameError === null) &&
      event.preventDefault();
    this.putDataToDB();
  };

  putDataToDB = () => {
    axios
      .post("http://localhost:3000/api/putData", {
        fullName: this.state.fullName,
        email: this.state.email,
        subscribe: this.state.subscribe
      })
      .then(this.setState({ fullName: "", email: "", subscribe: false }))
      .then(document.getElementById("register-form").reset())
      .then(alert(`Thanks for signing up!`));
  };

  render() {
    console.log(this.state);
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
                    <form id="register-form" onSubmit={this.handleSubmit}>
                      <div className="field is-grouped">
                        <div className="control is-expanded">
                          <input
                            id="fullName"
                            className={`input ${
                              this.state.fullNameError ? "is-invalid" : ""
                            }`}
                            type="name"
                            placeholder="Enter Full Name"
                            value={this.state.fullName}
                            onChange={this.handleFullNameChange}
                            onBlur={this.validateFullName}
                          />
                          <p class="help is-danger">
                            {this.state.fullNameError}
                          </p>
                        </div>
                      </div>
                      <div className="field is-grouped">
                        <div className="control is-expanded">
                          <input
                            id="email"
                            className={`input ${
                              this.state.emailError ? "is-invalid" : ""
                            }`}
                            type="email"
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            onBlur={this.validateEmail}
                          />
                          <p class="help is-danger">{this.state.emailError}</p>
                        </div>
                      </div>
                      <div className="field is-grouped">
                        <label className="checkbox">
                          <input
                            type="checkbox"
                            onChange={e =>
                              this.setState({ subscribe: e.target.value })
                            }
                          />{" "}
                          Yes, I want to sign up to receive e-newsletters from
                          the Arizona Game and Fish Department.
                        </label>
                      </div>
                      <div className="control">
                        <button
                          type="submit"
                          className="button is-centered is-large is-fullwidth is-uppercase"
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
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
