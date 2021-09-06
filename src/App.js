import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/admin"></Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
