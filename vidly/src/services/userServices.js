import http from "./httpServices";
import { apiUrl } from "../config.json";

const url = apiUrl + "/users";

export function register(user) {
  return http.post(url, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}

export default {
  register
};
