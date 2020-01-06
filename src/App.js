import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import MainHeader from "./Components/MainHeader/MainHeader";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import InstructorInfo from "./Components/Instructors/InstructorInfo/InstructorInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MainHeader />
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/author" exact component={InstructorInfo} />
        </Router>
      </div>
    );
  }
}

export default App;
