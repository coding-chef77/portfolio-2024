import styled from "styled-components";
import { FaHome, FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const CvHeader = ({ headerData }) => {
  return (
    <Header>
      <SectionHeader>
        <Image src={headerData.image} alt={headerData.altText} />
        <div>
          <h1>{headerData.name}</h1>
          <p>{headerData.title}</p>
        </div>
      </SectionHeader>
      <Address>
        <div>
          <FaHome />
          <p>{headerData.address.street}</p>
        </div>

        <motion.div
          whileHover={{
            scale: 1.05,
            color: "#ffd700",
          }}
        >
          <FaEnvelope />
          <a href={`mailto:${headerData.address.email}`}>
            {headerData.address.email}
          </a>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05, color: "#ffd700" }}>
          <FaLinkedin />
          <a
            href={headerData.address.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05, color: "#ffd700" }}>
          <FaPhoneAlt />
          <a href={`tel:${headerData.address.phone}`}>
            {headerData.address.phone}
          </a>
        </motion.div>
      </Address>
    </Header>
  );
};

export default CvHeader;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-top: 25px;
  flex-direction: column;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const SectionHeader = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left h1 {
    #ffd700font-family: "Merriweather", serif;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    font-size: 12px;
  }

  @media (min-width: 960px) {
    h1 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }
  }
`;

const Image = styled.img`
  border-radius: 8%; // Makes the image round
  width: 100px;
  height: 100px;
  object-fit: cover; // Ensures the image covers the area, maintaining aspect ratio
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Optional: Adds subtle shadow for depth

  @media (min-width: 960px) {
    width: 135px; // Larger size for wider screens
    height: 135px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Optional: Slightly larger shadow for larger image
  }
`;
const Address = styled(motion.address)`
  flex: 1;
  align-self: center;
  padding-left: 20px;
  font-style: normal;
  line-height: 1.6;
  text-align: center;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;

    svg {
      margin-right: 8px;
    }

    p,
    a {
      margin: 0;
      text-decoration: none;
    }

    @media (min-width: 960px) {
      flex-direction: row;
      align-items: center;

      p,
      a {
        color: inherit;
      }
    }
  }
`;
