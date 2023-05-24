import React from "react";
import styled from "styled-components";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

function Score() {
  const data = {
    labels: ["5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: "purple",
      },
    ],
  };
  return (
    <ScoreCard>
      <CardContent>
        <Chart>
          <Line data={data} height={400} width={600} />
        </Chart>
        <ScoreText>Điểm</ScoreText>
      </CardContent>
    </ScoreCard>
  );
}
const ScoreCard = styled.div`
  height: 70vh;
  width: 40vw;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
  cursor: pointer;
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
  color: black;
  font-weight: bold;
`;
export default Score;
