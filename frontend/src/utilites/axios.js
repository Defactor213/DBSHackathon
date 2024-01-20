import axios from "axios";

const url = "http://localhost:8000";

const getRequest = async (path) => {
	try {
		const response = await axios.get(`${url}/${path}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		return response.data;
	} catch (error) {
		// Handle error
		console.error("Error making GET request:", error);
		throw error;
	}
};

const postRequest = async (path, data) => {
	try {
		const response = await axios.post(`${url}/${path}`, data, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		return response.data;
	} catch (error) {
		// Handle error
		console.error("Error making POST request:", error);
		throw error;
	}
};

const patchRequest = async (path, data) => {
	try {
		const response = await axios.patch(`${url}/${path}`, data, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		return response.data;
	} catch (error) {
		// Handle error
		console.error("Error making POST request:", error);
		throw error;
	}
};
export { getRequest, postRequest,patchRequest };
