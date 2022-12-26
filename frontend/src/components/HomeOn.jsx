import React from "react";

import "../css/carousel.css";

import bg1 from "../pics/bg1.jpg";
import bg2 from "../pics/bg2.jpg";
import bg3 from "../pics/bg3.jpg";
import pic1 from "../pics/safe.svg";
import pic2 from "../pics/simple.svg";
import pic3 from "../pics/fast.svg";

const HomeOn = () => {
  return (
    <main>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={bg1} alt="" width="100%" className="bd-placeholder-img" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>英雄聯盟 LOL</h1>
                <p>全球第一多人連線遊戲，挑戰你的電子競技夢想！</p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    了解更多
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={bg2} alt="" width="100%" className="bd-placeholder-img" />
            <div className="container">
              <div className="carousel-caption">
                <h1>Valorant</h1>
                <p>以角色為核心的5對5戰略射擊遊戲</p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    了解更多
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={bg3} alt="" width="100%" className="bd-placeholder-img" />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Garena 傳說對決</h1>
                <p>Garena 首款MOBA 競技手遊。讓你隨時開團不受拘束，任何時候想玩就玩，即刻創造傳說、來場頂尖對決！</p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    了解更多
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4">
            <img src={pic1} alt="" width="140" height="140" className="bd-placeholder-img rounded-circle" />
            <h2 className="fw-normal">安全</h2>
            <p>8592 交易網可以為您提供安全的交易環境，讓您不用擔心資安外洩問題</p>
            <p>
              <a className="btn btn-secondary" href="#">
                關於我們 &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img src={pic2} alt="" width="140" height="140" className="bd-placeholder-img rounded-circle" />
            <h2 className="fw-normal">簡潔</h2>
            <p>網站的外觀由 Bootstrap 和 React 打造而成，不含多餘廣告</p>
            <p>
              <a className="btn btn-secondary" href="#">
                關於我們 &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img src={pic3} alt="" width="140" height="140" className="bd-placeholder-img rounded-circle" />
            <h2 className="fw-normal">方便</h2>
            <p>網站操作設計直觀，不需任何多餘操作即可購買及上架所需商品</p>
            <p>
              <a className="btn btn-secondary" href="#">
                關於我們 &raquo;
              </a>
            </p>
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>
      <footer className="container">
        <p className="float-end">
          <a href="#">Back to top</a>
        </p>
        <p>&copy; 2022 RulerChen</p>
      </footer>
    </main>
  );
};

export default HomeOn;
