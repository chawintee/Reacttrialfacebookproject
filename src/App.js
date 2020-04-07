import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import logInPage from './login/logInPage';


function App() {
  return (
    <div>

      <Switch>
        



        <Route path="/home"></Route>
        <Route exact path="/" component={logInPage}/>
      </Switch>
    </div>
  );
}

export default App;
