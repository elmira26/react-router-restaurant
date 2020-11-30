import React from "react";

import "./site.css";
import map from "./map";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function Contact() {
  return (
    <div className="contact-container">
      <div className="map-div">
        <Router>
          <Switch>
            <Route path="/Contact" exact component={map} id="app" />
          </Switch>
        </Router>
      </div>
      <div className="address">
        <h3>Visit us:</h3> M. Valéry FRONTERE Appartement 12 Escalier C
        Résidence Les Tilleuls 1 impasse de l Eglise 01090 FRANCHELEINS FRANCE
      </div>
    </div>
  );
}

export default Contact;
