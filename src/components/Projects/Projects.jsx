import styled from "styled-components";
import { motion } from "framer-motion";

const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const StyledContainer = styled.div`
  max-width: 1200px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  margin: 0 auto;
  width: 100%;
`;

const StyledBox = styled.div`
  width: 100%;
`;

const StyledImage = styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const StyledHeading = styled.h2`
  font-size: 1.25rem;
  margin-top: 8px;
`;

const StyledText = styled.p`
  margin-bottom: 16px;
`;

const StyledButton = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 8px 16px;
  background-color: #ffd700;
  color: black;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ccac00;
  }
`;

const imageVariants = {
  hover: {
    scale: 1.05, // Slightly scale up the image
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const Projects = () => {
  const projects = [
    // Your projects array...
  ];

  return (
    <StyledContainer>
      <Grid>
        {projects.map((project, index) => (
          <StyledBox key={index}>
            <StyledImage
              src={project.imageUrl}
              alt={project.title}
              variants={imageVariants}
              whileHover="hover"
            />
            <StyledHeading>{project.title}</StyledHeading>
            <StyledText>{project.description}</StyledText>
            <StyledButton
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </StyledButton>
          </StyledBox>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default Projects;
