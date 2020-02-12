import React from "react";
import "./App.css";
import NavPanel from "./components/NavPanel";
import HeaderPanel from "./components/HeaderPanel";
import ContentPanel from "./components/ContentPanel";
import NavBottomPanel from "./components/NavBottomPanel";
import KazusPanel from "./components/KazusPanel";
//ReactRouter
import { BrowserRouter as Router, Route } from "react-router-dom";

function Site() {
  return (
    <Router>
      <div className="Site">
        <NavPanel />
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <HeaderPanel />
              <ContentPanel />
              <NavBottomPanel />
            </div>
          )}
        />
        <Route path="/index.html" exact render={() => <KazusPanel />} />
      </div>
    </Router>
  );
}

export default Site;
