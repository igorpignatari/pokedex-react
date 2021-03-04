import React from "react";
import styled from "styled-components";

const StatusBar = styled.div`
  height: 4px;
  background: #eff1f7;
  border-radius: 7px;
  div {
    height: 4px;
    border-radius: 7px;
    background: #9bcc50;
    width: 50%;
  }
`;
const StatusInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.7rem;
  margin-bottom: 0.5rem;
  span {
    color: #021448;
  }
`;
export const StatusBarInfo = ({ baseStatus, nameStatus }) => {
  const barPercent = Math.floor((baseStatus * 100) / 500);
  return (
    <>
      <StatusInfo>
        <span>{nameStatus}</span>
        <span>{baseStatus}/500</span>
      </StatusInfo>
      <StatusBar>
        <div style={{ width: `${barPercent}%` }} />
      </StatusBar>
    </>
  );
};
