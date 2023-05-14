import React from "react";
import styled from "styled-components";
import { IoStatsChart } from "react-icons/io5";
function Score() {
  return (
    <ScoreCard>
      <CardContent>
        <Chart>
          <IoStatsChart />
        </Chart>
        <ScoreText>Score</ScoreText>
      </CardContent>
    </ScoreCard>
  );
}
const ScoreCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: #6100d4;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
`;
const CardContent = styled.div`
  margin: 1rem;
`;
const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;
const ScoreText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;
export default Score;
