import React from "react";
import styled from "styled-components";

const ExplainButton = styled.button``;

export default function Label({ name = "메뉴설명" }) {
  return <ExplainButton type="button">{name}</ExplainButton>;
}
