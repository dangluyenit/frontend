import styled from "styled-components";
export const Container = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftInfo = styled.div`
  flex: 0 0 calc(40% - 20px);
  max-width: 0 0 calc(50% - 20px);
  width: 100%;
  height: 60vh;
  padding: 20px;
  margin-top: 100px;
  margin-left: 50px;
  background: transparent;
  box-shadow: 0px 0px 30px 1px rgba(156, 156, 156);
  border-radius: 20px;
`;
export const RightInfo = styled.div`
  flex: 0 0 calc(60% - 20px);
  max-width: 0 0 calc(50% - 20px);
  width: 100%;
  height: 70%;
  padding: 20px;
  margin-top: 100px;
  background: transparent;
  border-radius: 20px;
  margin-left: 30px;
  box-shadow: 0px 0px 30px 1px rgba(156, 156, 156);
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .profile_img {
    width: 200px;
    height: 200px;
    background: transparent;
    border-radius: 50%;
    border: 10px solid gray;
  }
`;
export const CardBody = styled.div`
  margin-top: 10px;
`;

export const Table = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  font-size: 20px;
  padding: 5px 10px;
  color: #000;
`;
