import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const BillContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
  z-index: 1;
`;

export default function Bill() {
  return <BillContainer></BillContainer>;
}
