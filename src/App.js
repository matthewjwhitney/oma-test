import React, { Component } from "react";
import "./App.scss";
import HeaderSection from "./HeaderSection";
import CardSection from "./CardSection";
import FormSection from "./FormSection";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderSection />
        <CardSection />
        <FormSection />
        <Footer />
      </div>
    );
  }
}

export default App;
