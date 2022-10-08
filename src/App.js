import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatBot from "./components/ChatBot";
import Popup from "./components/Popup";
import PriceModal from "./components/PriceModal";
import Form from "./components/Form";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Popup />
          <PriceModal />
          <ChatBot />

          <Switch>
            <Route exact path="/">
              <News key="general" country="in" />
            </Route>
            <Route exact path="/general">
              <News key="general" country="in" category="general" />
            </Route>
            <Route exact path="/business">
              <News key="business" country="in" category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" country="in" category="entertainment" />
            </Route>
            <Route exact path="/Health">
              <News key="Health" country="in" category="Health" />
            </Route>
            <Route exact path="/science">
              <News key="science" country="in" category="science" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" country="in" category="technology" />
            </Route>

            <Route exact path="/buy">
              <Form />
            </Route>
            <Route exact path="/main">
              <News />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
