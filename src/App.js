import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import DetailsNews from "./Components/DetailsNewsPage/DetailsNews";
import AddNews from "./Components/AddNews/AddNews";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import { AuthProvider } from "./Components/contexts/AuthContext";
import PrivateRoute from "./Components/Authentication/PrivateRoute";
import Categories from "./Components/Categories/Categories";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin">
            <AddNews></AddNews>
          </PrivateRoute>
          <Route path="/fullnews/:id">
            <DetailsNews></DetailsNews>
          </Route>
          <PrivateRoute path="/categories">
            <Categories></Categories>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
