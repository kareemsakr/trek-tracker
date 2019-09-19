import axios from "axios";
import { AsyncStorage } from "react-native";

export default axios.create({
  baseURL: "https://ab7fdb69.ngrok.io",
  headers: {
    Authorization: `Bearer ${AsyncStorage.getItem("token")}`
  }
});
