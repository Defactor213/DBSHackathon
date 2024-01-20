import axios from "axios";

const url = 'https://dbshackaton.free.beeceptor.com'

const getRequest = async (path, ) => {
  const response = await axios.get(`${url}${path}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  return response.data
}

export {
  getRequest
}