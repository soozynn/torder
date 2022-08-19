import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ItemContainer = styled.div`
  width: 13.25vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : "1.45vw")};
`;

const IconWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
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
  count,
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
          <CountBox>{count}</CountBox>
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
  count: PropTypes.number,
  onClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
};
