import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Bill from "./pages/Bill";
import OrderHistory from "./pages/OrderHistory";
import Events from "./pages/Events";
import DetailDescription from "./pages/DetailDescription";

const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, button, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    scrollbar-width: none;
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
  font-family: "NotoSerifKR";
  src: url("https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/fonts/NotoSerifKR-Regular.woff2")
    format("woff2");
}
`;

export default function App() {
  const [showsShoppingCart, setShowsShoppingCart] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/orderHistory" element={<OrderHistory />} />
          <Route path="/bill" element={<Bill />} />
          <Route
            path="/menuDetail:id"
            element={
              <DetailDescription
                showsShoppingCart={showsShoppingCart}
                setShowsShoppingCart={setShowsShoppingCart}
              />
            }
          />
          {/* <Route path="/recall" element={<Recall/>} /> */}
          <Route path="/events" element={<Events />} />
          <Route
            path="/"
            element={
              <Main
                showsShoppingCart={showsShoppingCart}
                setShowsShoppingCart={setShowsShoppingCart}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}
