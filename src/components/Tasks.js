import React from 'react';
import {connect} from 'react-redux';

const Tasks = ({ tasks, users }) => {

    return(
        <div>
            {
                users.map( user => {
                    return(
                        <li key={user.id}>
                            {user.firstName}({tasks.filter(task => task.userId === user.id).length}) 
                            <ul>
                                {
                                    tasks.filter(task => task.userId === user.id).map(task => {
                                        return (
                                            <li key={task.id}>
                                                {task.name}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                        
                    )
                })
            }
            {/* {tasks.map((task)=>{
                const user = users.find( user => user.id === task.userId)
                console.log('the user is ', user)
                return(
                    <li key={ task.id }>
                    { task.name }
                    <br />
                    ( { user ? user.firstName : '' } )
                  </li>
                )
            })} */}
        </div>
    )

}

const mapState = (state)=>{
    return {
        tasks: state.tasks,
        users: state.users
    }
}

export default connect(mapState)(Tasks)

