import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";
const headers = {
  "Content-Type": "application/json"
}

export const getPosts = async () => {
  try {
    const posts = await axios.get(`${baseUrl}/posts`, headers);
    return posts;
  } catch (error) {
    return error.message;
  }
}