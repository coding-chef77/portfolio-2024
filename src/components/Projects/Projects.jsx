import styled from "styled-components";

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

const StyledImage = styled.img`
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
            <StyledImage src={project.imageUrl} alt={project.title} />
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
