import React from 'react';
import { connect } from 'react-redux';

const UserTasks = ({ users, tasks, match })=> {

//why can't i access object after filter?
  return (
    <div>
        <div>{users.filter(user => user.id === match.params.id*1).map(user => {
            return(
                <h3>{user.firstName}'s Tasks</h3>
            )
        })}</div>
    
      {
        tasks.filter(task => task.userId === match.params.id*1).map( task => {
          const user = users.find( user => user.id === task.userId);
          return (
            <li key={ task.id }>
              { task.name }
              <br />
              ( { user ? user.firstName : '' } )
            </li>
          );
        })
      }
    </div>
  );
};

export default connect( state => state )(UserTasks);