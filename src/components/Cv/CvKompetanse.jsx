import styled from "styled-components";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const CvKompetanse = ({ kompetanseData, openOverlay }) => {
  const renderOverlayContent = () => (
    <CardContent>
      <CloseButton onClick={() => openOverlay(null)}>
        <FaTimes size={24} />
      </CloseButton>
      <KompetanseSection>
        <KompetanseTitle>Kompetanse</KompetanseTitle>

        <KompetanseContainer>
          <KompetanseList>
            <ListTitle>Faglig</ListTitle>
            <ul>
              {kompetanseData.faglig.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </KompetanseList>
        </KompetanseContainer>
        <KompetanseContainer>
          <KompetanseList>
            <ListTitle>Personlig</ListTitle>
            <ul>
              {kompetanseData.personlig.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </KompetanseList>
        </KompetanseContainer>
        <KompetanseContainer>
          <KompetanseList>
            <ListTitle>Språk</ListTitle>
            <ul>
              {kompetanseData.spraak.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </KompetanseList>
        </KompetanseContainer>
      </KompetanseSection>
    </CardContent>
  );

  return (
    <ProfilCard
      whileHover={{
        scale: 1.01,
        backgroundColor: "#ffd700",
        color: "#000",
        border: "2px solid #ffd700",
      }}
      onClick={() => openOverlay(renderOverlayContent())}
    >
      <CardHeader>
        <h2>Kompetanse</h2>
      </CardHeader>
    </ProfilCard>
  );
};

export default CvKompetanse;

const ProfilCard = styled(motion.div)`
  border: 1px solid #ffd700;
  border-radius: 5px;
  overflow: hidden;
  max-width: 500px;
  margin: 0 auto;
`;

const CardHeader = styled.div`
  padding: 10px;
  background-color: rgba(255, 215, 0, 0.9);
  cursor: pointer;

  h2 {
    font-size: 36px;
    color: #1a1a1a;
  }
`;

const KompetanseSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  @media (min-width: 375px) {
    flex-direction: column;
  }
`;

const CardContent = styled.div`
  padding: 10px;
  max-width: 600px;
  margin: auto;
  background-color: rgba(255, 215, 0, 0.9);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: 80vh;

  @media (max-width: 375px) {
    max-width: 95%; // Increase width for smaller screens
    padding: 15px; // Slightly increase padding for better readability
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #fff;

  &:hover,
  &:focus {
    color: #ffd700;
    outline: none;
  }

  @media (max-width: 375px) {
    top: 5px;
    right: 5px;
    font-size: 1.5rem; // Slightly increase for better touch interaction
  }
`;

const KompetanseTitle = styled.h4`
  font-size: 1.75rem;
  color: #000;
  font-weight: bold;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #000;
  text-align: center;

  @media (max-width: 375px) {
    font-size: 1.65rem; // Adjust font size for consistency
  }
`;

const KompetanseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListTitle = styled.h4`
  font-size: 1.1rem;
  color: #000;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: left;

  @media (max-width: 375px) {
    text-align: center;
    font-size: 1.05rem; // Fine-tune font size for small screens
  }
`;

const KompetanseList = styled.ul`
  padding-left: 0;
  line-height: 1.6;
  flex-grow: 1;

  @media (min-width: 375px) {
    column-count: 2; // Use two columns for larger screens
    column-gap: 20px;
  }

  @media (max-width: 375px) {
    column-count: 1; // Stick to one column for smaller screens
  }

  li {
    list-style-type: none;
    color: #333;
  }
`;
