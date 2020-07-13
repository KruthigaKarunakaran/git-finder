import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import axios from "axios";
import Search from "./components/users/Search";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const response = await axios.get(
  //     `https://api.github.com/users?since=135?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: response.data, loading: false });
  // }

  searchUser = async (text) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log('response.data',response.data)
    this.setState({ users: response.data.items, loading: false });
  }

  clearUsers = () => {
    this.setState({users : []})
  }

  render() {
    const {users,loading} = this.state
    return (
      <div className="App">
        <Navbar />
        <Search searchUser = {this.searchUser} clearUsers = {this.clearUsers} showClear = {users.length > 0 ? true : false}/>
        <div className="container">
          <User loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
