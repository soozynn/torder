import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import Header from "../components/shared/Header";
import imagePrevButtonSrc from "../assets/prevButton.svg";

const TermsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 12vw;
  background-color: #f8f8f8;
  padding: 2.625vw 16.75vw 2.625vw 2.5vw;
  box-sizing: border-box;
`;

const TermsText = styled.p`
  margin-left: ${(props) => (props.margin ? "2.75vw" : "")};
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: 2.5vw;
  color: #999;
  letter-spacing: -0.0625vw;
`;

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 17.9688vh;
  padding: 0 5vw;
  box-sizing: border-box;
`;

const EventDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.1719vh;
  height: 70%;
`;

const GuideText = styled.p`
  font-family: notosans;
  font-size: 2.1875vh;
`;

const Line = styled.div`
  width: 100%;
  height: 0.125vw;
  background-color: #dfdfdf;
  margin: 1.25vw 0;
  box-sizing: border-box;
`;

const CouponTitle = styled.span`
  font-weight: 700;
  color: ${(props) => props.color && "red"};
`;

const NumberPadWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const PhoneNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 63.75vw;
  height: 75vw;
`;

const NumberTitle = styled.p`
  font-size: 3.5vw;
  height: 4.375vw;
  color: #333;
`;

const NumberInput = styled.div`
  width: 63.75vw;
  height: 10.625vw;
  margin: 3.75vw 0 1.375vw;
  font-size: 8.5vw;
  font-weight: 700;
  color: ${(props) => (props.active ? "#000000" : "#999")};
`;

const NumberLine = styled.div`
  width: 63.75vw;
  border-bottom: 0.375vw solid #b5b5b5;
`;

const KeypadWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 80vw;
  height: 55vw;
  margin-top: 3vw;
`;

const Number = styled.div`
  width: 3.875vw;
  height: 8.125vw;
  font-size: 6.5vw;
  color: #999;
  padding: 3.75vw;
  transition: color 0.5s ease;
`;

const RemoveIcon = styled.img`
  width: 59.677;
  height: 40.784;
`;

const ResetKeyPad = styled.div`
  width: 11.625vw;
  font-size: 4.625vw;
  color: #999;
  padding: 3.75vw;
  transition: color 0.2s ease;
`;

const ReceiveCouponButtonWrapper = styled.div`
  margin-top: 3.9063vh;
  height: 100%;
`;

const ReceiveCouponButton = styled.button`
  letter-spacing: -0.2125vw;
  width: 90vw;
  height: 11.5vw;
  background-color: ${(props) => (props.active ? "#ab240f" : "#999")};
  border: 0.125vw solid #999;
  border-radius: 1.875vw;
  font-size: 4.25vw;
  font-weight: 700;
  color: #fff;
  margin-top: 8vw;
  margin-bottom: 1.25vw;
`;

export default function Coupon({
  title,
  setNotificationText,
  setIsOpenNotification,
}) {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [activeCouponButton, setActiveCouponButton] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [enteredNumber, setEnteredNumber] = useState([]);
  const navigate = useNavigate();

  const handleClickNumber = (event) => {
    let num = event.target.textContent;

    if (enteredNumber.length === 4) {
      num = `-${num}`;
    }
    setEnteredNumber((prev) => [...prev, num]);
  };

  const handleClickReceiveCouponButton = () => {
    if (enteredNumber.length < 8) {
      setNotificationText("잘못된 휴대전화 번호입니다.");
      setIsOpenNotification(true);
      navigate(-2);
      return;
    }

    // 핸드폰 번호로 쿠폰 쏘아주는 로직
    setNotificationText("해당 번호로 쿠폰 및 이벤트 정보를 발송하였습니다.");
    setIsOpenNotification(true);
    navigate(-2);
  };

  useEffect(() => {
    if (enteredNumber.length === 8) {
      setActiveCouponButton(true);
      setDisabled(true);
    } else {
      setActiveCouponButton(false);
      setDisabled(false);
    }
  }, [enteredNumber.length]);

  return (
    <>
      <Header title={title.replaceAll("/", " ")} />
      <TermsWrapper>
        <TermsText>
          ※ 본인은 만 18세 이상이며 이용약관, 개인정보 수집 및 이용 개인정보제공
          내용을
        </TermsText>
        <TermsText margin>확인하였으며 동의합니다.</TermsText>
      </TermsWrapper>
      <BannerWrapper>
        <EventDescription>
          <GuideText>휴대폰번호를 입력해주세요!</GuideText>
          <GuideText>
            해당 번호로{" "}
            <CouponTitle>
              {title.split("/")[0].includes("타다")
                ? `${title.split("/")[0]}[택시]`
                : title.split("/")[0]}
            </CouponTitle>
            <CouponTitle color="red">
              {" "}
              {title.split("/")[0].includes("토스")
                ? `10,000${title.split("/")[1].slice(-1)} 쿠폰`
                : title.split("/")[1]}
            </CouponTitle>
            을 보내드립니다.
          </GuideText>
        </EventDescription>
        <Line />
      </BannerWrapper>

      <NumberPadWrapper>
        <PhoneNumberContainer>
          <NumberTitle>휴대폰번호</NumberTitle>
          <NumberInput disabled={disabled} active={enteredNumber.length > 0}>
            010-
            {enteredNumber.map((number) => number)}
          </NumberInput>
          <NumberLine />
          <KeypadWrapper>
            {number.map((num, index) => (
              <Number key={index} onClick={(e) => handleClickNumber(e)}>
                {num}
              </Number>
            ))}
            <ResetKeyPad onClick={() => setEnteredNumber([])}>
              Reset
            </ResetKeyPad>
            <Number disabled={disabled} onClick={(e) => handleClickNumber(e)}>
              0
            </Number>
            <div onClick={() => setEnteredNumber((prev) => prev.slice(0, -1))}>
              <RemoveIcon alt="prev-remove" src={imagePrevButtonSrc} />
            </div>
          </KeypadWrapper>
        </PhoneNumberContainer>
        <ReceiveCouponButtonWrapper>
          <ReceiveCouponButton
            active={activeCouponButton}
            onClick={handleClickReceiveCouponButton}
          >
            동의하고 쿠폰받기
          </ReceiveCouponButton>
        </ReceiveCouponButtonWrapper>
      </NumberPadWrapper>
    </>
  );
}

Coupon.propTypes = {
  title: PropTypes.string.isRequired,
};
