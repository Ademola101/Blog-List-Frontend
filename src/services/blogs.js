import axios from 'axios'
const baseUrl = '/api/blog'


let token = null

const setToken = (newToken) => {
  // save the token during login . to be sent  in create function
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}


const create = async(newBlog) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newBlog, config)
  return response.data
}

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.data

}

const remove = async(id) => {
  const config = {
    headers: { Authorization: token },
  }
  const response  = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}

const blogServices = {
  setToken,
  update,
  create,
  getAll,
  remove
}

export default blogServices