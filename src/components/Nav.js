import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

const mapState = (state)=> {
    return {
      tasks: state.tasks,
      users: state.users
    };
  };
  export default connect(mapState)(Nav);