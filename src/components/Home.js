import React from "react";
import {loadTasks, loadUsers} from '../store'
import {connect} from 'react-redux'
const Home = ({tasks, users}) => {
    return(
        <div>
            The average number of tasks per user { tasks.length/ users.length}
        </div>
    )
}
const mapState = (state)=>{
    return{
        users: state.users,
        tasks: state.tasks
    }
}
export default connect(mapState)(Home)