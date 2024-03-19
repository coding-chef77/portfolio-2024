import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import myImage from "../../../public/hero.webp";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <ImageWrapper>
      <Wrapper>
        <HeroContainerWrapper>
          <Heading>🌉 En Kokks Reise til IT-verden 👋</Heading>
          <HeroText>
            Hei! Mitt navn er Heine Günther. Fra kreativ kokk til
            teknologientusiast – nå en engasjert IT-profesjonell basert i Oslo.
            Sammen kan vi utvikle gode løsninger!
          </HeroText>
          <StyledButton
            to="/contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Kontakt Meg
          </StyledButton>
        </HeroContainerWrapper>
      </Wrapper>
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.3)
    ),
    url(${myImage});
  background-size: cover;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const HeroContainerWrapper = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%; /* Adjusts the width on screens smaller than 768px */
  }
`;

const Heading = styled.h1`
  text-shadow: 3px 4px 0 rgba(0, 0, 0, 0.2);
  font-size: 52px; // Original font size for larger screens
  margin-bottom: 32px;
  line-height: 1.05;

  @media (max-width: 768px) {
    font-size: 32px; // Reduced font size for smaller screens
  }

  @media (max-width: 375px) {
    // Specifically targeting iPhone X screen size
    font-size: 28px; // Even smaller font size for very small screens like iPhone X
    line-height: 1.1; // Adjusting line height to prevent clipping
    margin-bottom: 24px; // Reducing bottom margin
  }
`;

const HeroText = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 48px;
`;

const StyledButton = styled(motion(RouterLink))`
  padding: 10px 20px;
  background-color: #ffd700; // Your chosen button color
  color: black; // Text color
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: #ccac00; // A darker yellow for hover
  }
`;

export default HomePage;
