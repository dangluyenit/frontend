import styled from "styled-components";
import "./slide.css";
// import { AnimatePresence, motion } from "framer-motion";
// import { images } from "../../assets/index";
import img from "../../assets/technology.gif";
const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: max-content;
  position: absolute;
  top: 25%;
  left: 5vw;
`;
const Content = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
`;
const Title = styled.h2`
  letter-spacing: 2px;
`;
const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #4bb6b7;
  background-color: #4bb6b7;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  margin: 10px;
  width: max-content;
  padding: 12px 80px;
  letter-spacing: 1px;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
  cursor: pointer;
`;
const Image = styled.img`
  position: absolute;
  left: 40vw;
`;

// const variants = {
//   initial: {
//     x: 200,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: "ease-in",
//   },
//   exit: {
//     x: -200,
//     opacity: 0,
//     transition: "ease-in",
//   },
// };

const Homepage = () => {
  // const [index, setIndex] = useState(0);

  // function nextStep() {
  //   if (index === images.length - 1) {
  //     setIndex(0);
  //     return;
  //   }
  //   setIndex(index + 1);
  // }
  // setTimeout(nextStep, 4000);
  return (
    <Container>
      <Div>
        <Content>Bạn đã sẵn sàng để học chưa?</Content>
        <Title>
          Các khóa học tốt nhất <br></br> bạn sẽ tìm thấy ở đây
        </Title>
        <Button>Bắt đầu nào!</Button>
      </Div>
      <Image src={img} alt="" />
      {/* <div className="inner-carousel">
        <AnimatePresence initial={false}>
          <motion.img
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            src={images[index]}
            alt=""
            className="item"
            key={images[index]}
          />
        </AnimatePresence>
      </div> */}
    </Container>
  );
};

export default Homepage;
