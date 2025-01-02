import axios from "axios";

export default axios.create({
  // Create a shortcut for the link to avoid repetition
  baseURL: "https://dummyjson.com/products",
});
