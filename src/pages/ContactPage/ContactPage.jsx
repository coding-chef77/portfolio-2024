import { motion } from "framer-motion";
import { Flex, Container, VStack, Box } from "@chakra-ui/react";
import ContactForm from "../../components/ContactForm/ContactForm";

const MotionFlex = motion(Flex); // Convert Flex to a motion component

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.6 }, // Adjust the delay as needed
  },
};

const ContactPage = () => {
  return (
    <MotionFlex // Use MotionFlex here
      minH={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      px={4}
      py={6}
      m={2}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <VStack spacing={4} align={"stretch"}>
            <Box
              textAlign="center"
              fontSize="2xl"
              fontWeight="bold"
              color="blue.600"
              p={4}
              my={2}
              bg="gray.100"
              borderRadius="md"
              shadow="sm"
            >
              Kontakt meg!
            </Box>
            <ContactForm />
          </VStack>
        </Flex>
      </Container>
    </MotionFlex> // Closing tag of MotionFlex
  );
};

export default ContactPage;
