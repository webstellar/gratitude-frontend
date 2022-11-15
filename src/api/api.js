import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

export const signIn = (formData) => API.post("/api/v1/login", formData);
export const signUp = (formData) =>
  API.post("/api/v1/register", formData, config);
