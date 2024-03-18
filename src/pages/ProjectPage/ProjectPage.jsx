import { motion } from "framer-motion";
import Projects from "../../components/Projects/Projects";
import styled from "styled-components";

const StyledContainer = styled(motion.div)`
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.6 }, // Adjust the delay as needed
  },
};

const ProjectPage = () => {
  return (
    <StyledContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Projects />
    </StyledContainer>
  );
};

export default ProjectPage;
