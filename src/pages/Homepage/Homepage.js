import styled from "styled-components";
import "./slide.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { images } from "../../assets/index";
const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  /* left: 20%; */
  button {
    color: ${({ theme }) => theme.button};
  }
`;
// const images = [
//   "https://img.freepik.com/premium-photo/cloud-computing-connecting-technology-devices_24623-826.jpg?w=826",
//   "https://img.freepik.com/premium-photo/3d-business-man-wear-vr-glasses-conference-technology-metaverse-data-conference_554821-1518.jpg?w=740",
//   "https://img.freepik.com/premium-photo/3d-social-media-platform-online-social-communication-applications-concept-emoji-webpage-search-icons-chat-chart-with-smartphone-3d-rendering_73903-550.jpg?w=740",
//   "https://img.freepik.com/premium-photo/3d-cartoon-background-illustration_724579-10.jpg?w=826",
//   "https://img.freepik.com/premium-photo/3d-render-computer-with-mail-message_261703-71.jpg?w=740",
//   "https://img.freepik.com/premium-photo/concept-distance-work-study-communication-comfortable-conditions-home-cartoon-character-sits-is-resting-chair-watching-video-laptop-3d-illustration_325164-1182.jpg?w=900",
//   "https://img.freepik.com/premium-photo/3d-model-workplace-with-computer-lamp-succulent-glass-coffee_722522-127.jpg?w=826",
//   "https://img.freepik.com/premium-photo/working-laptops-computers-home-3d-illustration_1375-2986.jpg?w=740",
// ];
const variants = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: "ease-in",
  },
  exit: {
    x: -200,
    opacity: 0,
    transition: "ease-in",
  },
};

const Homepage = () => {
  const [index, setIndex] = useState(0);

  function nextStep() {
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }
  // function prevStep() {
  //   if (index === 0) {
  //     setIndex(images.length - 1);
  //     return;
  //   }
  //   setIndex(index - 1);
  // }
  setTimeout(nextStep, 4000);
  return (
    <Container>
      <div className="inner-carousel">
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
      </div>
      {/* <button className="prevButton" onClick={prevStep}>
        <BsArrowLeftCircle />
      </button>
      <button className="nextButton" onClick={nextStep}>
        <BsArrowRightCircle />
      </button> */}
    </Container>
  );
};

export default Homepage;
