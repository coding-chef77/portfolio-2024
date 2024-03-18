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
        backgroundColor: "#f0f0f0",
        color: "#000",
        boxShadow: "0px 0px 10px 2px rgba(0, 85, 170, 0.5)",
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
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  max-width: 500px;
  margin: 0 auto;
`;

const CardHeader = styled.div`
  padding: 10px;
  background-color: 
  cursor: pointer;

  h2 {
    font-size: 36px;
  }
`;

const CardContent = styled.div`
  padding: 10px;
  max-width: 600px;
  margin: auto;
  background-color: rgba(34, 139, 34, 0.8);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: 80vh;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 5px;
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
  font-size: 1.5rem;

  &:hover,
  &:focus {
    color: #d3d3d3;
    outline: none;
  }

  @media (max-width: 768px) {
    top: 5px;
    right: 5px;
    font-size: 1.25rem;
  }
`;

const KompetanseSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const KompetanseTitle = styled.h4`
  font-size: 1.75rem;
  color: #f5f5f5;
  font-weight: bold;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #d8d8d8;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const KompetanseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListTitle = styled.h4`
  flex-basis: 100px;
  flex-basis: 100%;
  flex-shrink: 0;
  font-size: 1.1rem;
  color: #f5f5f5;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: left;
  padding: 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const KompetanseList = styled.ul`
  padding-left: 0;
  line-height: 1.6;
  flex-grow: 1;
  column-count: 1; // Default to one column
  column-gap: 20px;

  li {
    list-style-type: none;
  }

  @media (min-width: 768px) {
    column-count: 2; // Use two columns on larger screens
  }
`;
