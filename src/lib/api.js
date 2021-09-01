//import axios from "axios";
const BASEURL = "https://crudcrud.com/api/94e21df53872444bb964ff7fbecd0be9";

export const apiGetTask = () => {
  const url = BASEURL + "/tasks" ;

  /* return axios.get(url)
    .then(res => res.json()); */

  return fetch(url)
    .then(response => response.json());
};

export const apiAddTask = (task) => {
  const url = BASEURL + "/tasks/";

  const request = {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  };

  return fetch(url, request)
    .then(response => response.json());

};

export const apiUpdateTask = (id, task) => {
  const url = BASEURL + "/tasks/" + id;

  const request = {
    method: 'PUT',
    body: JSON.stringify(task),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  };

  return fetch(url, request)
    .then(response => response.json())
};

export const apiDeleteTask = (id) => {
  const url = BASEURL + "/tasks/" + id;

  const request = { method: 'DELETE' };

  return fetch(url, request)
    .then(response => response.json())
};