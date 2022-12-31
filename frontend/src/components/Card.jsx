import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../api";
import Tabs from "./Tab";
import { Link } from "react-router-dom";

const tabArray = ["遊戲幣", "帳號", "點數卡"];
const Card = (id) => {
  const [tabState, setTabState] = useState("0");
  //get uel from db
  //id = lol, ...
  //schema Card: id, text, url
  const [cards, setCards] = useState([]);
  const handleQuery = async () => {
    const {
      data: { cardData },
    } = await axios.get("/cards", {
      params: {
        id,
      },
    });
  };
  // useEffect(()=>{
  //   console.log(tabState)
  // },[tabState])
  useEffect(() => {
    handleQuery();
  }, []);

  return (
    <div className="container">
      <Tabs
        id={id}
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
        {cards.map((item) => (
          <div className="col">
            <div className="card">
              <img src={item.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="col">
          <div className="card">
            <img
              src="https://cdngarenanow-a.akamaihd.net/games/lol/2022/11/340x224_12.22.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://cdngarenanow-a.akamaihd.net/games/lol/2022/11/340x224_12.22.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://cdngarenanow-a.akamaihd.net/games/lol/2022/11/340x224_12.22.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://cdngarenanow-a.akamaihd.net/games/lol/2022/11/340x224_12.22.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default Card;
