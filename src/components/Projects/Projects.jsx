import styled from "styled-components";
import { motion } from "framer-motion";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start; // Align items to the start of the flex container

  & > div {
    flex: 1;
    min-width: 250px; // Minimum width of each card
    max-width: 1fr; // Allows the card to expand to fill the available space
  }
`;

const StyledContainer = styled.div`
  max-width: 1200px;
  padding-top: 36px;
  padding-bottom: 36px;
  padding-left: 8px;
  padding-right: 8px;
  margin: 0 auto;
  width: 100%;
`;

const StyledBox = styled.div`
  background-color: #1a1a1a;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03); // Image scales up on hover
  }
`;

const ContentContainer = styled.div`
  padding: 0px 8px 12px 8px;
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
  padding: 10px 20px;
  background-color: #ffd700;
  color: black;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ccac00;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "SoMe Prosjekt",
      description:
        "Dette prosjektet var min avsluttende eksamen der målet var å lage en sosial medieplattform. Siden jeg selv har tvillinger, tenkte jeg at det ville være en god idé å rette meg mot foreldre med tvillinger. Dette er mitt første prosjekt ved bruk av Material UI, og jeg likte fleksibiliteten. Vennligst klikk enten på GitHub-linken for fullstendige detaljer eller knappen nedenfor for å sjekke det ut i nettleseren din. Prosjektet er basert på API-dokumentasjonen levert av Noroff og inkluderer funksjoner som brukerregistrering, innlogging, profilhåndtering, oppretting av innlegg, oppretting av kommentarer og mer.",
      imageUrl: "/twinChat.png",
      projectUrl: "https://exam-2-twin-chat.vercel.app/",
    },
    {
      title: "Square Eyes",
      description:
        "Square Eyes var et prosjekt utviklet for å praktisere bruk av API-kall og for å vise frem resultatene. Det inkluderte også en søkefunksjon.",
      imageUrl: "/squareeues.png",
      projectUrl: "https://stellar-sundae-2589e1.netlify.app/",
    },
    {
      title: "Job Purpose Blog",
      description:
        "Dette prosjektet representerer en bloggplattform som jeg utviklet som en del av mitt førsteårs eksamensprosjekt. Evalueringen av prosjektet, utført av faglærere, resulterte i karakteren A",
      imageUrl: "/job-purpose.png",
      projectUrl: "https://animated-kheer-eee9dd.netlify.app/",
    },
  ];

  return (
    <StyledContainer>
      <Grid>
        {projects.map((project, index) => (
          <StyledBox key={index}>
            <StyledImage
              src={project.imageUrl}
              alt={project.title}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
            <ContentContainer>
              <StyledHeading>{project.title}</StyledHeading>
              <StyledText>{project.description}</StyledText>
              <StyledButton
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </StyledButton>
            </ContentContainer>
          </StyledBox>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default Projects;
