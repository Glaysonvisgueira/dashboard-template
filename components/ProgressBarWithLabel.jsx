import React from "react";
import styled from "styled-components";

const WrapperProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 8px;
  background-color: #dadada;
  border-radius: 20px;
  //padding: 2px;

  .progress-line {
    background-color: #000000;
    width: ${(props) => props.percent}%;
    height: 100%;
    border-radius: 20px;
  }
`;

const PercentText = styled.span`
  font-weight: 900;
  color: #000;
  font-size: 16px;

  @media (max-width: 900px) {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-bottom: 5px;
`;

const Title = styled.span`
  font-weight: 300;
  font-size: 12px;
  color: #8f8f8f;

  @media (max-width: 900px) {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export default function ProgressBarWithText(props) {
  return (
    <WrapperProgressBar>
      <TitleContainer>
        <Title>{props.title}</Title>
        <Title>
          {props.actualValue}/{props.valueTotal}
        </Title>
      </TitleContainer>
      <ProgressBar percent={props.percent}>
        <div className="progress-line" />
      </ProgressBar>
    </WrapperProgressBar>
  );
}
