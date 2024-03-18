import styled from "styled-components";
import { motion } from "framer-motion";

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

export default OverlayComponent;

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
