import styled from "styled-components";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const CvUtdanning = ({ utdanningData, openOverlay }) => {
  const renderOverlayContent = () => {
    if (utdanningData.length === 0) {
      return <p>No education data available.</p>;
    }

    return (
      <CardContent>
        <CloseButton onClick={() => openOverlay(null)}>
          <FaTimes size={24} />
        </CloseButton>
        <UtdanningTitle>Utdanning</UtdanningTitle>
        {utdanningData.map((edu, index) => (
          <TemplateUtdanning key={index}>
            <header>
              <h4>{edu.title}</h4>
              <div>
                <time dateTime={edu.startDate}>{edu.startDate}</time>
                <span>-</span>
                <time dateTime={edu.endDate}>{edu.endDate}</time>
              </div>
            </header>
            <p>{edu.description}</p>
          </TemplateUtdanning>
        ))}
      </CardContent>
    );
  };

  return (
    <ProfilCard
      whileHover={{
        scale: 1.01,
        backgroundColor: "#f0f0f0",
        color: "#000",
        border: "2px solid #0055aa",
        boxShadow: "0px 0px 10px 2px rgba(0, 85, 170, 0.5)",
      }}
      onClick={() => openOverlay(renderOverlayContent())}
    >
      <CardHeader>
        <h2>Utdanning</h2>
      </CardHeader>
    </ProfilCard>
  );
};

export default CvUtdanning;

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
  overflow-y: auto; // Enable vertical scrolling
  max-height: 90vh; // Adjust the height as needed

  @media (max-width: 768px) {
    max-width: 90%; // Smaller max-width on smaller screens
    padding: 5px; // Less padding on smaller screens
  }
`;

const UtdanningTitle = styled.h3`
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

const TemplateUtdanning = styled.div`
  padding: 15px 0;
  border-radius: 5px;
  margin-bottom: 20px;

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  h3 {
    margin-top: 25px;
  }

  h4 {
    font-weight: bold;
    font-size: 1.1em;
    margin: 0 0 2px 0;
  }

  p {
    margin-top: 10px;
  }

  span {
    color: #888;
  }
`;
