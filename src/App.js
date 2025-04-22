import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Main from "./pages/Main";
import Bill from "./pages/Bill";
import OrderHistory from "./pages/OrderHistory";
import Coupon from "./pages/Coupon";
import Events from "./pages/Events";
import DetailDescription from "./pages/DetailDescription";
import Recall from "./pages/Recall";
import Notification from "@components/Main/Notification";
import OptionModal from "./pages/OptionModal";

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

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
`;

export default function App() {
  const [menuList, setMenuList] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showsShoppingCart, setShowsShoppingCart] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState("");
  const [loadingError, setLoadingError] = useState(null);

  const fetchMenuData = async () => {
    try {
      const response = await fetch("http://localhost:8000/data");

      if (!response.ok) {
        throw new Error("Failed to fetch data"); // 에러 발생 시
      }

      const data = await response.json();

      setMenuList(data);
      setActiveCategoryId(data.categories[0].id); // 기본 카테고리 설정
    } catch (error) {
      setLoadingError(error.message); // 에러 메시지 저장
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  if (loadingError) {
    return <div>Error: {loadingError}</div>;
  }

  return (
    <>
      <GlobalStyles />
      <Router>
        {menuList ? (
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  showsShoppingCart={showsShoppingCart}
                  setShowsShoppingCart={setShowsShoppingCart}
                  activeCategoryId={activeCategoryId}
                  setActiveCategoryId={setActiveCategoryId}
                  setNotificationText={setNotificationText}
                  setIsOpenNotification={setIsOpenNotification}
                  menuList={menuList}
                  selectedOptions={selectedOptions}
                />
              }
            />
            <Route path="orderHistory" element={<OrderHistory />} />
            <Route path="bill" element={<Bill />} />
            <Route
              path="menuDetail/:id"
              element={
                <DetailDescription
                  setNotificationText={setNotificationText}
                  setIsOpenNotification={setIsOpenNotification}
                  menuList={menuList}
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                  setShowsShoppingCart={setShowsShoppingCart}
                />
              }
            />
            <Route
              path="callStaff"
              element={
                <Recall
                  setNotificationText={setNotificationText}
                  setIsOpenNotification={setIsOpenNotification}
                  items={menuList.serviceItems}
                />
              }
            />
            <Route
              path="eventList"
              element={
                <Events eventList={menuList.event} setTitle={setEventTitle} />
              }
            />
            <Route
              path="eventList/coupon"
              element={
                <Coupon
                  title={eventTitle}
                  setNotificationText={setNotificationText}
                  setIsOpenNotification={setIsOpenNotification}
                />
              }
            />
            <Route
              path="cartOption"
              element={<OptionModal selectedOptions={selectedOptions} />}
            />
          </Routes>
        ) : (
          <LoadingMessage>Loading...</LoadingMessage>
        )}
      </Router>

      {isOpenNotification && (
        <Notification
          isOpenNotification={isOpenNotification}
          setIsOpenNotification={setIsOpenNotification}
        >
          {notificationText}
        </Notification>
      )}
    </>
  );
}