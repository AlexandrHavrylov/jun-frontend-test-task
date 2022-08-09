import styled from "@emotion/styled";
import { GiFinishLine } from "react-icons/gi";

export const TrackWrapper = styled.div`
  margin-top: 30px;
  padding: 10px;
  box-shadow: 13px 21px 172px 16px rgba(0, 0, 0, 0.36);
  width: 1240px;
`;
export const RaceStrip = styled.li`
  border: 1px black solid;
  border-radius: 30px;
  width: 1050px;
  text-align: center;
  padding: 10px;
  background-color: #adf6ad;
  position: relative;
`;

export const Horse = styled.div`
  width: 32px;
  height: 32px;
  border: 1px black solid;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 2px;
  transform: translateX(${(props) => props.value}px);
  transition: transform 1005ms linear;
`;

export const HorseName = styled.span``;

export const FinishLine = styled(GiFinishLine)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 28px;
  top: 38px;
`;
