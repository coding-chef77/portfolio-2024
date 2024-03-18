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
      <article>
        <p id="profileDescription">{profilData.profileDescription}</p>
      </article>

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

// Styled Components
const ProfilCard = styled(motion.div)`
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  max-width: 500px;
  margin: 0 auto;
`;

const CardHeader = styled.div`
  padding: 10px;
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

const ProfilTitle = styled.h3`
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

const OmMeg = styled.article`
  p {
    margin-bottom: 30px;
  }
`;
const OmMegTitle = styled.h4`
  font-size: 1.5rem;
  color: #f5f5f5;
  font-weight: bold;
  margin-bottom: 1rem;
  padding: 0.5rem 0rem;
  border-bottom: 2px solid #d8d8d8;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    font-size: 1.35rem;
  }
`;

const ReferanserTitle = styled.h4`
  font-size: 1.5rem;
  color: #e6e6e6; // Lighter shade for differentiation
  font-weight: bold;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px dashed #d8d8d8; // Dashed line for a subtle difference
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); // Slightly deeper shadow for emphasis
  @media (max-width: 768px) {
    font-size: 1.35rem;
  }
`;

const Referanser = styled.article`
  background-color: rgba(
    47,
    79,
    79,
    0.6
  ); // Darker and more transparent background
  padding: 15px;
  margin-top: 20px;
  border-radius: 8px; // Rounded corners for a distinct look
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); // Subtle shadow for depth

  p {
    color: #f5f5f5; // Light text for contrast
    line-height: 1.6; // Improved readability
    margin-bottom: 15px; // Spacing adjustment
  }
  text-align: center;
`;
