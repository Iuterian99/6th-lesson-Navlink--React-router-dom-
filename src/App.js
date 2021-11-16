import "./App.css";
import { NavLink, Switch, Route } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

// Pages
import Home from "./Pages/Home/Home";
import Posts from "./Pages/Posts/Posts";

function App() {
  return (
    <>
      <div className="container d-flex justify-content-center mt-3">
        <h4 className="h4 me-4 border border-info bg-dark">
          <NavLink
            activeClassName="text-white border border-info bg-success"
            to="/"
            exact
          >
            Home
          </NavLink>
        </h4>
        <h4 className="h4 border border-info bg-dark">
          <NavLink
            activeClassName="text-white border border-info bg-success"
            to="/posts/1"
          >
            Posts
          </NavLink>
        </h4>
      </div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/posts/:id" component={Posts} />
      </Switch>
    </>
  );
}

export default App;
