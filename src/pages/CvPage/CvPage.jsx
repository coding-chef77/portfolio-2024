import { useState } from "react";
import CvErfaring from "../../components/Cv/CvErfaring";
import CvHeader from "../../components/Cv/CvHeader";
import CvKompetanse from "../../components/Cv/CvKompetanse";
import CvProfil from "../../components/Cv/CvProfil";
import CvUtdanning from "../../components/Cv/CvUtdanning";
import { cvData } from "./resumeData";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const CvPage = () => {
  const { header, profil, erfaring } = cvData;
  const [overlayContent, setOverlayContent] = useState(null);

  const openOverlay = (content) => {
    setOverlayContent(content);
  };

  const closeOverlay = () => {
    setOverlayContent(null);
  };

  const OverlayComponent = ({ content, onClose }) => {
    return (
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {content}
      </Overlay>
    );
  };
  return (
    <Wrapper>
      <HeaderContainer>
        <CvHeader headerData={header} />
      </HeaderContainer>

      <Main>
        <CvProfil profilData={profil} openOverlay={openOverlay} />
        <CvUtdanning
          utdanningData={profil.utdanning}
          openOverlay={openOverlay}
        />
        <CvKompetanse
          kompetanseData={profil.kompetanse}
          openOverlay={openOverlay}
        />
        <CvErfaring erfaringData={erfaring} openOverlay={openOverlay} />
      </Main>
      <AnimatePresence>
        {overlayContent && (
          <OverlayComponent content={overlayContent} onClose={closeOverlay} />
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default CvPage;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 20px 20px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  //font-family: "Lora", serif;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto; // This centers the container
  border-bottom: 2px solid #d8d8d8; // Moved border here
  padding-bottom: 20px; // Added padding-bottom for spacing
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 20px;
`;

const Overlay = styled(motion.div)`
  // Style for full-page overlay
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10; // Ensure it's above other content
`;
