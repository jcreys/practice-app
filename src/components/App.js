import React, { Component } from "react";
import Nav from "./Nav";
import { loadTasks, loadUsers } from "../store";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Tasks from "./Tasks";
import Home from "./Home";
import Users from "./Users";
// import Tasks from './Tasks'
import UserTasks from './UserTasks'
class App extends Component {
  componentDidMount() {
    this.props.loadTasks();
    this.props.loadUsers();
  }
  render() {
    return (
      <div>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/users" exact component={Users} />
        <Route path="/users/:id" exact component={UserTasks} />
        <Route path="/tasks" component={Tasks} />
      </div>
    );
  }
}
const mapDispatch = (dispatch) => {
  return {
    loadTasks: () => {
      dispatch(loadTasks());
    },
    loadUsers: () => {
      dispatch(loadUsers());
    },
  };
};

export default connect(null, mapDispatch)(App);
