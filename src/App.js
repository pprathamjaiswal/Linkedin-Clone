import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import Login from "./Components/Login";
import Header from "./Components/Header";
import Feed from './Components/Feed';
import { getUserAuth } from './actions';
import { connect } from 'react-redux';

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Login />
          </Route>
          <Route path={"/Feed"}>
            <Header />
            <Feed />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);