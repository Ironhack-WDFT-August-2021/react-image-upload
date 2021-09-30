import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dropzone from "./pages/Dropzone";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <div className='App'>
      <nav>
        <NavLink to='/movies/add'> Add a movie the standard way 🙈</NavLink>
      </nav>
      <nav>
        <NavLink to='/movies/dropzone'> Add a movie using Dropzone 🪂</NavLink>
      </nav>

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/movies/add' component={AddMovie} />
        <Route exact path='/movies/dropzone' component={Dropzone} />
      </Switch>
    </div>
  );
}

export default App;