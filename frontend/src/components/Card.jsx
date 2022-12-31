import React from "react";
// import { Tabs } from 'antd';
import Tabs from "./Tab";
const Card = (id) => {
  //get uel from db
  //id = 英雄聯盟LOL, ...
  //schema Card: id, text, url

  return (
    <div className="container">
      <Tabs id={id} />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card">
            <img src="https://cdngarenanow-a.akamaihd.net/games/lol/2022/11/340x224_12.22.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://cdngarenanow-a.akamaihd.net/games/lol/2022/11/340x224_12.22.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://cdngarenanow-a.akamaihd.net/games/lol/2022/11/340x224_12.22.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://cdngarenanow-a.akamaihd.net/games/lol/2022/11/340x224_12.22.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
