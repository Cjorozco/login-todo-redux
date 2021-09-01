import {
  apiAddTask,
  apiDeleteTask, apiGetTask, apiUpdateTask
} from '../lib/api';

const initialState = {
  tasks: []
};

const GET_TASKS = 'GET_TASKS';
const ADD_TASK = 'ADD_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

const getTasks = (tasks) => ({ type: GET_TASKS, payload: tasks });
const addTask = (task) => ({ type: ADD_TASK, payload: task });
const updateTask = (task) => ({ type: UPDATE_TASK, payload: task });
const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });

export const fetchGetTask = () => {
  return (dispatch) => {
    apiGetTask()
      .then(res => {
        dispatch(getTasks(res));
      })
      .catch(res => {
        console.log(res);
      })
  }
};

export const fetchAddTask = (task) => {
  return (dispatch) => {
    apiAddTask(task)
      .then(res => {
        dispatch(addTask(res));
      })
      .catch(res => {
        console.log(res)
      })
  }
};

export const fetchUpdateTask = (id, task) => {
  return (dispatch) => {
    apiUpdateTask(id, task)
      .then(res => {
        dispatch(updateTask(res));
      })
      .catch(res => {
        console.log(res);
      })
  }
};

export const fetchDeleteTask = (id) => {
  return (dispatch) => {
    apiDeleteTask(id)
      .then(res => {
        dispatch(deleteTask(id));
      })
      .catch(res => {
        console.log(res);
      })
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return { ...state, tasks: action.payload };
    case ADD_TASK:
      console.log(ADD_TASK, action);
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.map(
            (task) => task.id === action.payload.id ?
              action.payload
              : task
          )
        ]
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter(task => task.id !== action.payload)]
      }
    default:
      return { ...state };
  }
}