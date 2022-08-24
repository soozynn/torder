import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import imagePrevButtonSrc from "../assets/prevButton.svg";
import MenuInformation from "../components/DetailDescription/MenuInformation";
import OptionList from "../components/DetailDescription/OptionList";
import { addMenuToCart } from "../features/menu/menuSlice";
import { getProductDescription } from "../components/utils/util";

const DetailDescriptionContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  overflow: scroll;
  z-index: 10;
`;

const MenuImageWrapper = styled.div`
  position: relative;
  box-shadow: inset 0 0 12.375vw 0 rgb(0 0 0 / 5%);
`;

const MenuImage = styled.div`
  width: 100vw;
  height: 47.5vw;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  background-image: ${(props) => `url(${props.src})`};
`;

const PrevButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  width: 100%;
  height: 18.5vw;
  padding: 4.85vw 0 0 3.125vw;
  background-color: unset;
  border: none;
  box-shadow: 0 0.375vw 0.75vw 0 transparent;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4),
    hsla(0, 0%, 49%, 0)
  );
  box-sizing: border-box;
`;

const PrevIcon = styled.img`
  width: 4.9vw;
  height: 3.35vw;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3vw 5vw 0;
  box-sizing: border-box;
`;

const MenuName = styled.p`
  font-family: "NotoSerifKR-bold";
  font-size: 4.25vw;
  letter-spacing: -0.10625vw;
  line-height: 130%;
`;

const MenuDescription = styled.p`
  padding: 1.75vw 0 3.75vw;
  box-sizing: border-box;
  border-bottom: 0.125vw solid #dfdfdf;
  line-height: 1.5em;
  font-size: 2.5vw;
  color: #606060;
  letter-spacing: -0.0625vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100vw;
  left: 0;
  bottom: 0;
  font-size: 4.25vw;
  font-weight: 700;
  letter-spacing: -0.125vw;
`;

const BackButton = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27.5vw;
  height: 13.75vw;
  background-color: #999;
  color: #fff;
`;

const OrderButton = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13.75vw;
  flex: 1;
  background-color: #b51900;
  color: #fff;
`;

export default function DetailDescription({
  setNotificationText,
  setIsOpenNotification,
  menuList,
  selectedOptions,
  setSelectedOptions,
  setShowsShoppingCart,
}) {
  // const [optionsRequire, setOptionsRequire] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredMenu = menuList.goods.filter((menu) => menu.id === id);
  const {
    name,
    image,
    price,
    soldOut,
    description,
    optionGroups,
    orderMaxQuantity,
    orderMinQuantity,
  } = filteredMenu[0];

  const [quantity, setQuantity] = useState(
    !orderMinQuantity ? 1 : orderMinQuantity
  );

  const handleClickPrevButton = () => {
    navigate(-1);
  };

  const handleClickOrderButton = () => {
    if (soldOut) {
      setNotificationText("품절 된 상품입니다.");
      setIsOpenNotification(true);
      return;
    }

    // if (optionsRequire.includes(false)) {
    //   setNotificationText("필수 옵션을 모두 선택해주세요.");
    //   setIsOpenNotification(true);
    //   return;
    // }

    dispatch(
      addMenuToCart({
        id,
        name,
        price,
        count: quantity,
        time: new Date().toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        orderMinQuantity,
        orderMaxQuantity,
        option: selectedOptions,
      })
    );
    setNotificationText(`${quantity}개의 상품을 담았습니다.`);
    setIsOpenNotification(true);
    navigate(-1);
    setShowsShoppingCart(true);
  };

  const handleClickPlusButton = () => {
    if (orderMaxQuantity > 0 && quantity >= orderMaxQuantity) {
      setIsOpenNotification(true);
      setNotificationText(`최대 주문 수량이 ${orderMaxQuantity}개 입니다.`);
      return;
    }

    setQuantity((prev) => prev + 1);
  };

  const handleClickMinusButton = () => {
    if (!orderMaxQuantity && quantity === 1) return;
    if (quantity <= orderMinQuantity) {
      if (!orderMaxQuantity) return;
      setIsOpenNotification(true);
      setNotificationText(`최소 주문 수량이 ${orderMinQuantity}개 입니다.`);
      return;
    }

    setQuantity((prev) => prev - 1);
  };

  return (
    <DetailDescriptionContainer>
      <MenuImageWrapper>
        <PrevButton onClick={handleClickPrevButton}>
          <PrevIcon alt="prev" src={imagePrevButtonSrc} />
        </PrevButton>
        <MenuImage alt="menu" src={image} />
      </MenuImageWrapper>

      <DescriptionContainer>
        <MenuName>{name}</MenuName>
        <MenuDescription>
          {getProductDescription(description)
            .split("<br />")
            .map((text, index) => (
              <React.Fragment key={index}>
                {text}
                <br />
              </React.Fragment>
            ))}
        </MenuDescription>
      </DescriptionContainer>

      <MenuInformation
        soldOut={soldOut}
        price={price}
        quantity={quantity}
        handleClickPlusButton={handleClickPlusButton}
        handleClickMinusButton={handleClickMinusButton}
        maxQuantity={orderMaxQuantity}
      />

      <div>
        {!soldOut && optionGroups.length > 0 && (
          <OptionList
            options={optionGroups}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            setNotificationText={setNotificationText}
            setIsOpenNotification={setIsOpenNotification}
            price={price}
            // setOptionsRequire={setOptionsRequire}
          />
        )}
      </div>

      <ButtonContainer>
        <BackButton onClick={handleClickPrevButton}>뒤로가기</BackButton>
        {soldOut ? (
          <OrderButton onClick={handleClickOrderButton}>
            SOLD OUT / {(price * quantity).toLocaleString()}원
          </OrderButton>
        ) : (
          <OrderButton onClick={handleClickOrderButton}>
            {quantity}개 담기 / {(price * quantity).toLocaleString()}원
          </OrderButton>
        )}
      </ButtonContainer>
    </DetailDescriptionContainer>
  );
}

DetailDescription.propTypes = {
  setNotificationText: PropTypes.func.isRequired,
  setIsOpenNotification: PropTypes.func.isRequired,
};
