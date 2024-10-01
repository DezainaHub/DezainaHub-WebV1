import axios from "axios";
const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: "http://localhost:5050/api",
  timeout: 5000,
  headers: { Authorization: `Bearer ${token}` },
  // hello
});

export default instance;
