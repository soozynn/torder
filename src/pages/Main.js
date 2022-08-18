import React, { useState } from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar/index";
import Header from "../components/Header/index";
import Error from "../components/Error/index";
import mockData from "../mock.json";

const NavbarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 93.3594vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 15vh;
  border-top-left-radius: 6.25vw;
  border-top-right-radius: 6.25vw;
  background-color: #fff;
  box-sizing: border-box;
  transform: translateY(0);
  transition: transform 1s;
`;

export default function Main() {
  const [data, setData] = useState({ ...mockData });

  return (
    <>
      {data ? (
        <>
          <Header store={data.store} table={data.table} />
          <NavbarWrapper>
            <Navbar />
          </NavbarWrapper>
        </>
      ) : (
        <Error />
      )}
    </>
  );
}
