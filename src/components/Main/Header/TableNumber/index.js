import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TableNumberContainer = styled.div`
  width: 17.5vw;
  height: 7.99875vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Spoqa Han Sans Neo, "sans-serif";
`;

const Content = styled.div`
  width: 100%;
  text-align: right;
  color: #fff;
`;

const Text = styled.p`
  font-size: 1.75vw;
`;

const Number = styled.p`
  width: 22.625vw;
  letter-spacing: -0.2vw;
  font-size: 4vw;
  font-weight: 700;
`;

export default function TableNumber({ table }) {
  const { title } = table;

  return (
    <TableNumberContainer>
      <ContentWrapper>
        <Content>
          <Text>Table NO.</Text>
          <Number>{title}</Number>
        </Content>
      </ContentWrapper>
    </TableNumberContainer>
  );
}

TableNumber.propTypes = {
  table: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
