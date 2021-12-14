import axios from "../axios"

const getAll = () => {
  return axios.get("/tasks")
}

const get = (id) => {
  return axios.get(`/tasks/${id}`)
}

const create = (data) => {
  return axios.post("/tasks", data)
}

const update = (id, data) => {
  return axios.put(`/tasks/${id}`, data)
}

const remove = (id) => {
  return axios.delete(`/tasks/${id}`)
}

const removeAll = () => {
  return axios.delete(`/tasks`)
}

const findByTitle = (title) => {
  return axios.get(`/tasks?title=${title}`)
}

const TaskService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
}

export default TaskService
