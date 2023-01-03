import axios from "../api";

class CardService {
  findGameCard(game) {
    return axios.get("/cards", { params: { game } });
  }
  findHistory(account) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(
      "/cards/history",
      { account },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
  addGameCard(game, category, price, url, title, intro, detail, stock, username, account, goodAccount, goodPassword, cardPoint) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(
      "/cards/add",
      {
        game,
        category,
        price,
        url,
        title,
        intro,
        detail,
        stock,
        username,
        account,
        goodAccount,
        goodPassword,
        cardPoint,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
}

export default new CardService();
