import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  position: absolute;
  width: 100%;
  height: 18.5vw;
  background-color: unset;
  border: none;
  box-shadow: 0 0.375vw 0.75vw 0 transparent;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4),
    hsla(0, 0%, 49%, 0)
  );
  padding: 4.85vw 0 0 3.125vw;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
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
  font-size: 2.5vw;
  color: #606060;
  letter-spacing: -0.0625vw;
  padding: 1.75vw 0 3.75vw;
  box-sizing: border-box;
  border-bottom: 0.125vw solid #dfdfdf;
  line-height: 1.5em;
`;

const ButtonContainer = styled.div`
  position: fixed;
  width: 100vw;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  font-size: 4.25vw;
  font-weight: 700;
  letter-spacing: -0.125vw;
`;

const BackButton = styled.p`
  width: 27.5vw;
  background-color: #999;
  color: #fff;
  height: 13.75vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderButton = styled.p`
  flex: 1;
  background-color: #b51900;
  color: #fff;
  height: 13.75vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function DetailDescription({
  setNotificationText,
  setIsOpenNotification,
}) {
  const [option, setOption] = useState([]);
  const [isCheckedRequiredOption, setIsCheckedRequiredOption] = useState(false);
  const { menu } = useSelector((state) => state.menu);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredMenu = menu.goods.filter((menu) => menu.id === id);
  const {
    name,
    image,
    price,
    soldOut,
    description,
    optionGroups,
    orderMaxQuantity,
    orderMinQuantity,
    showsShoppingCart,
    setShowsShoppingCart,
  } = filteredMenu[0];

  const [quantity, setQuantity] = useState(
    !orderMinQuantity ? 1 : orderMinQuantity
  );

  const handleClickPrevButton = () => {
    navigate(-1);
  };

  const handleClickOrderButton = () => {
    if (soldOut) {
      setIsOpenNotification(true);
      return;
    }

    if (!isCheckedRequiredOption) {
      setNotificationText("필수 옵션을 모두 선택해주세요");
      setIsOpenNotification(true);
      return;
    }

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
        option,
      })
    );
    setNotificationText(`${option.length}개의 상품을 담았습니다`);
    setIsOpenNotification(true);
    navigate(-1);
    setShowsShoppingCart(!showsShoppingCart);
  };

  const handleClickPlusButton = () => {
    if (quantity >= orderMaxQuantity) {
      setIsOpenNotification(true);
      setNotificationText(`최대 주문 수량이 ${orderMaxQuantity}개 입니다.`);
      return;
    }

    setQuantity((prev) => prev + 1);
  };

  const handleClickMinusButton = () => {
    if (quantity <= orderMinQuantity) {
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
            soldOut={soldOut}
            setOption={setOption}
            setNotificationText={setNotificationText}
            setIsOpenNotification={setIsOpenNotification}
            setIsCheckedRequiredOption={setIsCheckedRequiredOption}
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
