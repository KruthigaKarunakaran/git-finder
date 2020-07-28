import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import SingleUser from "./components/users/SingleUser"
import axios from "axios";
import Search from "./components/users/Search";
import AlertJs from "./components/layout/AlertJs";
import About from "./components/pages/About"

class App extends Component {
  state = {
    users: [],
    user : {},
    loading: false,
    alert: null,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const response = await axios.get(
  //     `https://api.github.com/users?since=135?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: response.data, loading: false });
  // }

  getUser = async (username) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users/${username}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log("response.data", response.data);
    this.setState({ user: response.data, loading: false });
  }

  searchUser = async (text) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log("response.data", response.data);
    this.setState({ users: response.data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [] });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <AlertJs alert={this.state.alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    searchUser={this.searchUser}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <div className="container">
                    <User loading={loading} users={users} />
                  </div>
                </Fragment>
              )}
            />
          </Switch>
          <Switch>
            <Route exact path="/about" component={About}/>
            <Route exact path = '/user/:login' render={props => (
              <SingleUser {...props} getUser = {this.getUser} user={this.state.user} loading={loading}/>
            )}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
