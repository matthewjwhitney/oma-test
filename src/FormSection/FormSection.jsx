import React, { Component } from "react";
import "./formSection.scss";

class FormSection extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_test");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
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
                    <p>{this.state.data}</p>
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
