import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useHook } from "../hooks/useHook";
import Tabs from "./Tab";
import CardService from "../services/card.service";

import lolImage from "../pics/bg1.jpg";
import emptyPage from "../pics/undraw_new_year_2023_pfnc.svg";
const tabArray = ["帳號", "點數卡"];
const Card = (game) => {
  const { displayStatus } = useHook();
  const [tabState, setTabState] = useState("0"); // tabArray[tabState] = current tag
  const [allCardData, setAllCardData] = useState([]); // all cards of that game
  const [cards, setCards] = useState([]); // rendering
  const [mouseIn, setMouseIn] = useState(false);
  const [loading, setLoading] = useState(true);

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
    setLoading(true);
    if (allCardData) {
      setCards(
        allCardData.filter((item) => {
          return item.category === tabArray[tabState];
        })
      );
      setLoading(false);
    }
  }, [tabState, allCardData]);

  //game changed, getting data from backend
  useEffect(() => {
    setLoading(true);
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
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {cards.length === 0 && loading===false && (
          <div className="text-center">
            <h1>還沒有商品上架~</h1>
            <img src={emptyPage} />
          </div>
        )}
        {cards.map((item, index) => (
          <div className="col" key={index}>
            <div className="card">
              {/* todo: add default images to each game. */}
              <Link to={`/detail/${item._id}`} state={item}>
                <img
                  height={259}
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
