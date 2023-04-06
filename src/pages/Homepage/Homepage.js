import styled from "styled-components";
import images from "./images";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: space-between;
`;
const Homepage = () => {
  return (
    <Container>
      <div className="carousel">
        <div className="inner-carousel">
          {images.map((image) => {
            return (
              <div className="item" key={image}>
                <img src={image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Homepage;
