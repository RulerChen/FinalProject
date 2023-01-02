import instance from "../api.jsx";

class AuthService {
  login(email, password) {
    return instance.post("/user/login", { email, password });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(username, email, password) {
    return instance.post("user/register", {
      username,
      email,
      password,
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
