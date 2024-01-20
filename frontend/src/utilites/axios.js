import axios from "axios";

const url = 'http://localhost:8000'

const getRequest = async (path) => {
  try {
    const response = await axios.get(`${url}${path}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }

}

const postRequest = async (path, data) => {
  try {
    console.log(url + path)
    const response = await axios.post(`${url}${path}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    // You may want to rethrow the error or handle it appropriately based on your application's requirements
    throw error;
  }
};

const patchRequest = async (path, data) => {
  try {
    const response = await axios.patch(`${url}${path}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    // You may want to rethrow the error or handle it appropriately based on your application's requirements
    throw error;
  }
};

const delRequest = async (path) => {
  try {
    const response = await axios.delete(`${url}${path}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export {
  getRequest,
  delRequest,
  postRequest,
  patchRequest
}