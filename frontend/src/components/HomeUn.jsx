import React from "react";

const HomeUn = () => {
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">簡介</h1>
            <p className="col-md-8 fs-4">
              8592交易網提供了一個安全的環境給大家交易各種在遊戲中取得的寶物，希望可以透過這學期所學的內容為大家打造出一個友善的平台
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              關於我們
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>成為買家</h2>
              <p>您可以在這裡找到所有市面上的大型遊戲，並依據您所選擇的遊戲購買遊戲內的虛擬貨品。</p>
              <button className="btn btn-outline-light" type="button">
                登入或註冊
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>成為賣家</h2>
              <p>賣家可以免費刊登自己的商品，並安全的與買家進行交易，並且不需要任何的手續費。</p>
              <button className="btn btn-outline-secondary" type="button">
                登入或註冊
              </button>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">&copy; 2022 RulerChen</footer>
      </div>
    </main>
  );
};

export default HomeUn;
