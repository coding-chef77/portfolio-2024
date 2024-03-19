import { useState } from "react";
import {
  Box,
  VStack,
  Input,
  Textarea,
  Button,
  Text,
  useToast,
  FormLabel,
  Image,
  HStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FaPaperPlane } from "react-icons/fa";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const StyledFormLabel = styled(FormLabel)`
  text-align: left;
  margin-bottom: 2px; // Adjust as needed
`;

const StyledInput = styled(Input)`
  margin-bottom: 8px; // Adjust as needed

  &:focus {
    border-color: #ffd700; // Yellow border color when focused
    box-shadow: 0 0 0 1px #ffd700;
  }
`;

const StyledTextarea = styled(Textarea)`
  margin-bottom: 8px; // Adjust as needed

  &:focus {
    border-color: #ffd700;
    box-shadow: 0 0 0 1px #ffd700;
  }
`;

const schema = yup.object().shape({
  from_name: yup.string().required("Navn er påkrevd"),
  subject: yup.string().required("Emne er påkrevd"),
  message: yup.string().required("Melding er påkrevd"),
  reply_to: yup
    .string()
    .email("Ugyldig e-postadresse")
    .required("E-postadresse er påkrevd"),
});

const ContactForm = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await send(
        "service_s3m4ejl",
        "template_e6kjwdr",
        data,
        "59cQ7_9eF9pJMj5L7"
      );
      if (response.status === 200) {
        toast({
          title: "E-posten er sendt!",
          description: "Takk for at du tar kontakt!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        reset();
      } else {
        throw new Error("Submission error");
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Noe gikk galt. Vennligst prøv igjen.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box border={"1px solid gray"} borderRadius={4} padding={5} shadow="md">
      <VStack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
        <Image
          src="/contact.jpg"
          h={24}
          alt="Contact Image"
          borderRadius="lg"
          shadow="md"
          _hover={{ shadow: "lg" }}
          transition="shadow 0.2s"
        />

        <StyledFormLabel htmlFor="from_name">Navn</StyledFormLabel>
        <StyledInput
          id="from_name"
          placeholder="Navn"
          fontSize={14}
          {...register("from_name")}
          aria-label="Navn"
        />
        <Text color="red.400" fontSize="sm">
          {errors.from_name?.message}
        </Text>

        <StyledFormLabel htmlFor="subject">Emne</StyledFormLabel>
        <StyledInput
          id="subject"
          placeholder="Emne"
          fontSize={14}
          {...register("subject")}
          aria-label="Emne"
        />
        <Text color="red.400" fontSize="sm">
          {errors.subject?.message}
        </Text>

        <StyledFormLabel htmlFor="reply_to">Epost-adresse</StyledFormLabel>
        <StyledInput
          id="reply_to"
          placeholder="Epost-adresse"
          fontSize={14}
          {...register("reply_to")}
          aria-label="Epost-adresse"
        />
        <Text color="red.400" fontSize="sm">
          {errors.reply_to?.message}
        </Text>

        <StyledFormLabel htmlFor="message">Melding</StyledFormLabel>
        <StyledTextarea
          id="message"
          placeholder="Melding"
          rows={4}
          fontSize={14}
          {...register("message")}
          aria-label="Melding"
        />
        <Text color="red.400" fontSize="sm">
          {errors.message?.message}
        </Text>

        <Button
          type="submit"
          isLoading={loading}
          w={"full"}
          backgroundColor="#ffd700"
          color="black"
          size={"sm"}
          fontSize={14}
          _hover={{
            bg: "#ccac00",
          }}
          isLoadingText="Sender..."
        >
          <HStack spacing={2}>
            <FaPaperPlane />
            <Text>{loading ? "Sender..." : "Send"}</Text>
          </HStack>
        </Button>
      </VStack>
    </Box>
  );
};

export default ContactForm;
