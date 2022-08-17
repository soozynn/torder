import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";

const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  p {
    margin: 0;
    padding: 0;
  }

// font-family: "Spoqa Han Sans Neo";
@import url("//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css");

@font-face {
  font-family: "mapoflower";
  src: url("https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/fonts/MapoFlowerIsland.otf")
    format("opentype");
}

@font-face {
  font-family: "NotoSerifKR-bold";
  src: url("https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/fonts/NotoSerifKR-Bold.woff2")
    format("woff2");
}

@font-face {
  font-family: "NotoSerifKR-semibold";
  src: url("https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/fonts/NotoSerifKR-SemiBold.woff2")
    format("woff2");
}

@font-face {
  font-family: "NotoSerifKR-light";
  src: url("https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/fonts/NotoSerifCJKkr-ExtraLight-subset.woff2")
    format("woff2");
}

@font-face {
  font-family: "NotoSerifKR";
  src: url("https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/fonts/NotoSerifKR-Regular.woff2")
    format("woff2");
}
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          {/* <Route path="/order" element={<Order/>} />
          <Route path="/bill" element={<Bill/>} />
          <Route path="/recall" element={<Recall/>} />
          <Route path="/events" element={<Events/>} /> */}
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}
