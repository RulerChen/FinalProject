import axios from "../api";

class CardService {
  findGameCard(game) {
    return axios.get("/cards", { params: { game } });
  }
  addGameCard(game, category, price, url, title, intro, detail, stock, username, account, goodAccount, goodPassport, cardPoint) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(
      "/cards",
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
        goodPassport,
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
