import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./pages/ProjectPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

// Data
import data from "./data/projects.json";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/projects/">
            <Projects data={data} />
          </Route>
          <Route exact path="/projects/:id">
            <ProjectDetailPage data={data} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
