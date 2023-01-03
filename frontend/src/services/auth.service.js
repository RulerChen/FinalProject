import axios from "../api.jsx";

class AuthService {
  login(email, password) {
    return axios.post("/user/login", { email, password });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(username, email, password) {
    return axios.post("user/register", {
      username,
      email,
      password,
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
  pay(account, buyerPay, sellerGain, fee, _id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.put(
      "/user/pay",
      {
        account,
        buyerPay,
        sellerGain,
        fee,
        _id,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
}

export default new AuthService();
