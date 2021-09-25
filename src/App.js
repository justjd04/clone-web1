import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router> */}
    </div>
  );
};

export default App;
