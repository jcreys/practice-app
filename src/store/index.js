import axios from "axios";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {createLogger} from 'redux-logger'
import thunkMiddleware from "redux-thunk";

//action types
const SET_TASKS = "SET_TASKS";
const SET_USERS = "SET_USERS";

//action creator
const setTasks = (tasks) => ({ type: SET_TASKS, tasks });
const setUsers = (users) => ({ type: SET_USERS, users });
//thunk creators
export const loadTasks = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/tasks");
    dispatch(setTasks(response.data));
  };
};
export const loadUsers = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/users");
    dispatch(setUsers(response.data));
  };
};

//reducers
const tasks = (state = [], action) => {
  if (action.type === SET_TASKS) return action.tasks;
  return state;
};

const users = (state = [], action) => {
  if (action.type === SET_USERS) return action.users;
  return state;
};

const reducer = combineReducers({
  users: users,
  tasks: tasks,
});
const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(reducer, middleware);

export default store;
