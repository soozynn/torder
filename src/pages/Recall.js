import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import Header from "../components/shared/Header";
import OptionItem from "../components/Recall/OptionItem";
import { orderOptions } from "../features/menu/menuSlice";

const RecallContainer = styled.div`
  overflow: hidden;
`;

const OnlyStaffCallModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const StaffCallText = styled.p`
  margin-bottom: 2vw;
  font-size: 8vw;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.4vw;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 13.75vw;
`;

const StaffButton = styled.button`
  width: 32.5vw;
  height: 11.5vw;
  border-radius: 1.25vw;
  background-color: ${(props) => (props.color ? "#b51900" : "#999")};
  color: #fff;
  font-size: 4.25vw;
  font-weight: 500;
  letter-spacing: -0.2125vw;
  opacity: 0.95;
`;

const StaffOptionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 11.875vw);
`;

const OptionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding-top: 3.75vw;
  overflow-y: scroll;
  box-sizing: border-box;
`;

const StaffButtonsWrapper = styled.div`
  display: flex;
  gap: 2.5vw;
  margin-top: 2.75vw;
`;

const OnlyStaffButton = styled.button`
  width: 50%;
  background-color: #2f2a26;
  border: none;
  font-weight: 500;
  font-size: 4.25vw;
  color: #fff;
`;

const OrderButton = styled.button`
  width: 50%;
  border: none;
  background-color: ${(props) => (props.active ? "#ab240f" : "#999")};
  font-weight: 500;
  font-size: 4.25vw;
  color: #fff;
`;

export default function Recall({
  setNotificationText,
  setIsOpenNotification,
  items,
}) {
  const [isCallStaff, setIsCallStaff] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickOnlyStaffCallButton = () => {
    setIsCallStaff(true);
  };

  const handleClickOrderButton = () => {
    if (!checkedOptions.length) {
      setNotificationText("옵션을 선택해주세요.");
      setIsOpenNotification(true);
    } else {
      navigate("/orderHistory", { replace: true });
      setNotificationText("선택하신 항목을 요청하였습니다.");
      setIsOpenNotification(true);
      dispatch(
        orderOptions({
          option: checkedOptions,
          price: 0,
          time: new Date().toLocaleTimeString(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
        })
      );
    }
  };

  const handleClickNoButton = () => {
    setIsCallStaff(false);
  };

  const handleClickYesButton = () => {
    setIsCallStaff(false);
    dispatch(
      orderOptions({
        option: [{ name: "직원호출", count: 1 }],
        price: 0,
        time: new Date().toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      })
    );

    navigate("/", { replace: true });
    setNotificationText("직원을 호출하였습니다.");
    setIsOpenNotification(true);
  };

  const handleClickOption = (optionName) => {
    const findOption = checkedOptions.find(
      (option) => option.name === optionName
    );

    if (findOption) {
      setCheckedOptions(
        checkedOptions.filter((option) => option.name !== optionName)
      );
    } else {
      setCheckedOptions((prev) => [...prev, { name: optionName, count: +1 }]);
    }
  };

  return (
    <RecallContainer>
      {isCallStaff && (
        <OnlyStaffCallModal>
          <StaffCallText>직원을</StaffCallText>
          <StaffCallText>호출 하겠습니까?</StaffCallText>
          <StaffButtonsWrapper>
            <StaffButton onClick={handleClickNoButton}>아니요</StaffButton>
            <StaffButton color="red" onClick={handleClickYesButton}>
              예
            </StaffButton>
          </StaffButtonsWrapper>
        </OnlyStaffCallModal>
      )}
      <Header title="직원호출" />
      <StaffOptionListContainer>
        <OptionListWrapper>
          {items.map((option) => (
            <OptionItem
              key={option.id}
              title={option.name}
              onClick={() => handleClickOption(option.name)}
              checkedOptions={checkedOptions}
              setCheckedOptions={setCheckedOptions}
              setNotificationText={setNotificationText}
              setIsOpenNotification={setIsOpenNotification}
            />
          ))}
        </OptionListWrapper>
        <ButtonsWrapper>
          <OnlyStaffButton onClick={handleClickOnlyStaffCallButton}>
            직원만 호출
          </OnlyStaffButton>
          <OrderButton
            active={checkedOptions.length > 0}
            onClick={handleClickOrderButton}
          >
            요청하기
          </OrderButton>
        </ButtonsWrapper>
      </StaffOptionListContainer>
    </RecallContainer>
  );
}

Recall.propTypes = {
  setNotificationText: PropTypes.func.isRequired,
  setIsOpenNotification: PropTypes.func.isRequired,
};
