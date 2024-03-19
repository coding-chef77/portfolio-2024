import styled from "styled-components";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const CvErfaring = ({ erfaringData, openOverlay }) => {
  const renderOverlayContent = () => (
    <CardContent>
      <CloseButton onClick={() => openOverlay(null)}>
        <FaTimes size={24} />
      </CloseButton>
      <ErfaringsTitle>Erfaring</ErfaringsTitle>
      {erfaringData.map((job, index) => (
        <Template className="jobTemplate" key={index}>
          <header>
            <h4>{job.title}</h4>
            <div>
              <time dateTime={job.startDate}>{job.startDate}</time>
              <span>-</span>
              <time dateTime={job.endDate}>{job.endDate}</time>
            </div>
          </header>
          <p>{job.description}</p>
        </Template>
      ))}
    </CardContent>
  );

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
        <h2>Erfaring</h2>
      </CardHeader>
    </ProfilCard>
  );
};

export default CvErfaring;

const ProfilCard = styled(motion.div)`
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  max-width: 500px;
  margin: 0 auto;
`;

const CardHeader = styled.div`
  padding: 10px;
  background-color: rgba(255, 215, 0, 0.8);
  cursor: pointer;

  h2 {
    font-size: 36px;
    color: #1a1a1a;
  }
`;

const CardContent = styled.div`
  padding: 10px;
  max-width: 600px;
  margin: auto;
  background-color: rgba(255, 215, 0, 0.8);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto; // Enable vertical scrolling
  max-height: 90vh; // Adjust the height as needed

  @media (max-width: 768px) {
    max-width: 90%; // Smaller max-width on smaller screens
    padding: 5px; // Less padding on smaller screens
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

const ErfaringsTitle = styled.h3`
  font-size: 1.75rem;
  color: #1a1a1a; // Slightly lighter than pure black for the title
  font-weight: bold;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #1a1a1a; // Matching the title color
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const Template = styled.article`
  padding: 15px 0;
  border-radius: 5px;
  margin-bottom: 20px;

  header {
    h4 {
      font-weight: bold;
      font-size: 1.1em;
      margin: 0 0 2px 0;
      color: #000; // Keep important headers in pure black
    }

    time,
    span {
      color: #333; // Dark grey for less emphasis
    }
  }

  p {
    margin-top: 10px;
    color: #4d4d4d; // Medium grey for body text, easier on the eyes
  }
`;
