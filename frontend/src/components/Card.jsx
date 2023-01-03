import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useHook } from "../hooks/useHook";
import Tabs from "./Tab";
import CardService from "../services/card.service";

import lolImage from "../pics/bg1.jpg";

const tabArray = ["帳號", "點數卡"];
const Card = (game) => {
  const { displayStatus } = useHook();
  const [tabState, setTabState] = useState("0"); // tabArray[tabState] = current tag
  const [allCardData, setAllCardData] = useState([]); // all cards of that game
  const [cards, setCards] = useState([]); // rendering
  const [mouseIn, setMouseIn] = useState(false);

  const handleQuery = async () => {
    CardService.findGameCard(game)
      .then((response) => {
        setAllCardData(response.data.cardData);
      })
      .catch((error) => {
        displayStatus({ type: "error", msg: error.response.data });
      });
  };

  //tag or game changed, reselecting cards
  useEffect(() => {
    if (allCardData) {
      setCards(
        allCardData.filter((item) => {
          return item.category === tabArray[tabState];
        })
      );
    }
  }, [tabState, allCardData]);

  //game changed, getting data from backend
  useEffect(() => {
    handleQuery();
  }, [game]);

  const changePage = () => {};

  return (
    <div className="container">
      <Tabs
        game={game}
        tabArray={tabArray}
        activeKey={tabState}
        setTabState={setTabState}
      />
      <Link to="/addCard" className="nav-link">
        <button className="btn btn-primary btn-lg" type="button">
          上架商品
        </button>
      </Link>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {cards.map((item, index) => (
          <div className="col" key={index}>
            <div className="card">
              {/* todo: add default images to each game. */}
              <Link to={`/detail/${item._id}`} state={item}>
                <img
                  src={item.url ? item.url : lolImage}
                  loading="lazy"
                  className="card-img-top"
                  onMouseEnter={() => {
                    setMouseIn(true);
                  }}
                  onMouseLeave={() => {
                    setMouseIn(false);
                  }}
                  style={
                    mouseIn ? { cursor: "pointer" } : { cursor: "default" }
                  }
                  onClick={changePage}
                />
              </Link>

              <div className="card-body">
                <h4>{`NT$ ${item.price}`}</h4>
                <h5 className="card-title">
                  {`[${tabArray[tabState]}] ` + item.title}
                </h5>
                <p className="card-text">{item.intro}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
