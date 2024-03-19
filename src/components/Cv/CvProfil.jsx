import styled from "styled-components";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const CvProfil = ({ profilData, openOverlay }) => {
  const renderOverlayContent = () => (
    <CardContent>
      <CloseButton onClick={() => openOverlay(null)}>
        <FaTimes size={24} />
      </CloseButton>
      <ProfilTitle>Profil</ProfilTitle>
      <IntroText>
        <p id="profileDescription">{profilData.profileDescription}</p>
      </IntroText>

      <OmMeg>
        <OmMegTitle>Om meg</OmMegTitle>
        <p>{profilData.omMeg}</p>
      </OmMeg>

      <Referanser>
        <ReferanserTitle>Referanser</ReferanserTitle>
        <p>{profilData.referanser}</p>
      </Referanser>
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
        <h2>Profil</h2>
      </CardHeader>
    </ProfilCard>
  );
};

export default CvProfil;

const ProfilCard = styled(motion.div)`
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  max-width: 500px;
  margin: 0 auto;
`;

const CardHeader = styled.div`
  padding: 10px;
  background-color: rgba(255, 215, 0, 0.8); // Match the yellow background
  cursor: pointer;

  h2 {
    font-size: 36px;
    color: #1a1a1a; // Dark grey, similar to ErfaringsTitle
  }
`;

const CardContent = styled.div`
  padding: 10px;
  max-width: 600px;
  margin: auto;
  background-color: rgba(255, 215, 0, 0.8); // Match the yellow background
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: 90vh;

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

  &:hover,
  &:focus {
    color: #d3d3d3; // Similar hover effect as in ErfaringsTitle
    outline: none;
  }

  @media (max-width: 768px) {
    top: 5px;
    right: 5px;
    font-size: 1.25rem;
  }
`;

const IntroText = styled.article`
  p {
    color: #4d4d4d;
  }
`;

const ProfilTitle = styled.h3`
  font-size: 1.75rem;
  color: #1a1a1a; // Similar to ErfaringsTitle
  font-weight: bold;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #1a1a1a; // Solid line, similar to ErfaringsTitle
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const OmMeg = styled.article`
  padding: 15px 0;
  margin-bottom: 20px;

  p {
    margin-top: 10px;
    color: #4d4d4d; // Medium grey, similar to paragraph in Template
  }
`;

const OmMegTitle = styled.h4`
  font-size: 1.1em;
  color: #000; // Black, similar to headers in Template
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const Referanser = styled.article`
  background-color: rgba(204, 162, 0, 0.8);

  // Similar to CardContent background
  padding: 15px;
  margin-top: 20px;
  border-radius: 8px;

  p {
    color: #4d4d4d; // White, for contrast
    line-height: 1.6;
    margin-bottom: 15px;
  }
`;

const ReferanserTitle = styled.h4`
  font-size: 1.1em;
  color: #1a1a1a; // White, similar to ProfilTitle
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.5rem 0;
  border-bottom: 2px solid #1a1a1a; // Solid line for separation
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;
