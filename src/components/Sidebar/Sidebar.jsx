import { Box, Flex, Link, Tooltip, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";
//import { BiMovie } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { GiTicTacToe } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { GrDocumentUser } from "react-icons/gr";
import { WiRain } from "react-icons/wi";

const StyledName = styled(Text)`
  font-size: 1.5rem;
  color: #ffd700;
  font-weight: bold;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7);
`;

const Sidebar = () => {
  const sidebarItems = [
    // { icon: <BiMovie size={25} />, text: "Star Wars", link: "/starwars" },
    { icon: <MdOutlineMail size={25} />, text: "Kontakt", link: "/contact" },
    { icon: <GoProject size={25} />, text: "Prosjekter", link: "/project" },
    { icon: <GiTicTacToe size={25} />, text: "Tic Tac Toe", link: "/game" },
    { icon: <WiRain size={25} />, text: "Værmelding", link: "/weather" },
    {
      icon: <GrDocumentUser size={25} />,
      text: "Curriculum Vitae",
      link: "/cvpage",
    },
  ];

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        {/* Display "HG" for base and hide for md and above */}
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "block", md: "none" }}
          cursor={"pointer"}
        >
          <StyledName>HG</StyledName>
        </Link>
        {/* Display "Heine Günther" for md and above */}
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <StyledName>Heine Günther</StyledName>
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={item.link || null}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }} // Adjusted justifyContent for base to center the icons
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
