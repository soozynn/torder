import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 13.25vw;
  height: 100%;
  gap: ${(props) => (props.gap ? props.gap : "1.45vw")};
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

const Icon = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const IconText = styled.p`
  margin-bottom: 3vw;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: 2.25vw;
  letter-spacing: -0.1375vw;
`;

const CountBox = styled.p`
  width: 4.125vw;
  height: 4.125vw;
  border-radius: 0.625vw;
  background-color: #ab240f;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: 2.625vw;
  text-align: center;
  line-height: 4.125vw;
  color: #fff;
`;

export default function Item({
  src,
  title,
  gap,
  cartList,
  onClick,
  width,
  height,
}) {
  return (
    <ItemContainer onClick={onClick} gap={gap}>
      {src ? (
        <IconWrapper>
          <Icon src={src} alt="navbar-icon" width={width} height={height} />
        </IconWrapper>
      ) : (
        <IconWrapper>
          <CountBox>
            {cartList.reduce(
              (accumulator, object) => accumulator + object.count,
              0
            )}
          </CountBox>
        </IconWrapper>
      )}
      <IconText>{title}</IconText>
    </ItemContainer>
  );
}

Item.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
  gap: PropTypes.string,
  cartList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    })
  ),
  onClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
};
