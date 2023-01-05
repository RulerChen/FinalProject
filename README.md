# [111-1] Web programmin 111-1 Final Project

## Group 34 8592 交易網

1. [Demo 影片連結](https://)
2. [Render](https://finalproject-u4ak.onrender.com)
3. 用途: 希望可以透過本學期所學的網路技術打造一個安全且方便的交易網站
4. 使用框架:

   - 前端:
     1. antd
     2. bootstrap
     3. react-bootstrap
     4. react-router-dom
     5. react-icon
     6. styled-components
     7. axios
   - 後端:

     1. babel
     2. bcrypt
     3. express
     4. joi
     5. jsonwebtoken
     6. passport
     7. passport-jwt
     8. passport-oauth20
     9. nodemen

   - 資料庫:

     1. mongoDB

   - 雲端:
     1. Render
     2. Docker

5.專題製作心得:

- 陳彥廷:
  這是我第一次獨立從無到有生出一個專案來，在過程中我遇到了非常多的難題，
  同時也學習到了許多上課不曾教到的知識，像是後端的 bcrypt 驗證系統，
  以及 jsonwebtoken 的驗證方式等等，雖然因為期末報告太多的關係，
  導致許多預想的功能並沒能完善，例如原本要做的 Oauth 的 Google 登入等等，
  造成了一些遺憾，但總體來說我還是學習到了許多東西。
  最後我要感謝跟我同組的電神幫我解決許多難題，讓我可以事半功倍。
- 余祐徵:
  在這一次的專題中，我主要負責的是前端的頁面，學到了很多作業中沒有使用過的 antd, bootstrap components, 也是第一次嘗試在 db 中存放圖片。其中也學到了 react-router 中各種函數的使用方式。
  最後感謝我的電神夥伴完成了整個登入、驗證系統，沒有他就不會有這個網頁。

### 安裝方式

1. 在根目錄下，輸入 `install:prod` ，安裝前後端的 `node_modules`
2. 在 `.env.defaults`輸入環境變數，可以參考

```
MONGO_URL=mongodb+srv://RulerChen:show123456@cluster0.7rghxok.mongodb.net/?retryWrites=true&w=majority
PASSPORT_SECRET=secret
GOOGLE_ID=499672912438-oiso5m6e0v4d32cn1lg2nlu1b1r1dv13.apps.googleusercontent.com
GOOGLE_SECRET=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
SECRET=mysecret
```

3. 分別輸入 `yarn start` 和 `yarn server` 來開啟前後端

### 功能

1. 註冊及登入系統 (使用 `bcrypt` 加密，並使用 `jsonwebtoken` 來驗證)
2. 商品上架功能
3. 交易功能
