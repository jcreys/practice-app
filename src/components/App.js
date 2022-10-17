import React, { Component } from "react";
import Nav from "./Nav";
import {loadTasks, loadUsers} from '../store'
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';
import Home from './Home'
// import Tasks from './Tasks'
// import UserTasks from './UserTasks'
class App extends Component {
    componentDidMount(){
        this.props.loadTasks()
        this.props.loadUsers()
    }
  render() {
    return (
    <div> 
        <Nav />
    </div>
   );
  }
}
const mapDispatch = (dispatch) => {
    return {
        loadTasks: ()=>{
            dispatch(loadTasks())
        },
        loadUsers: ()=>{
            dispatch(loadUsers())
        }
    }
}

export default connect(null,mapDispatch)(App)