import React from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom";
import Calendar from "./container/Calendar";
import AppBar from "./container/AppBar";
import TaskList from "./container/TaskList";

function App() {
  return (
    <div className="App">
      <AppBar/>
      <Switch>
        <Route exact path="/" component={Calendar}/>
        <Route exact path="/task" component={TaskList} />
      </Switch>
    </div>
  );
}

export default App;
