import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const ComplaintForm = () => {
  const [data, setData] = useState({
    details: "",
    created_by: "",
    email: "",
    topic: "",
    category: "",
    img: "",
  });
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8080/complaint/create", data)
      .then((res) => {
        toast({
          title: `Status code ${res.status}`,
          description: `${res.data.message}`,
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((er) => {
        toast({
          title: `Status code ${er.response.status}`,
          description: `${er.response.data.message || "Something went wrong"}`,
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
      });
  };

  return (
    <Box
      w={["90%", "50%", "30%"]}
      m={"auto"}
      boxShadow="md"
      p="6"
      rounded="md"
      bg="white"
      mt={"5%"}
    >
      <Heading textAlign={"center"} color={"tomato"} mb={5}>
        Complaint Form
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel mt={2}>Details</FormLabel>
          <Input
            type={"text"}
            placeholder="details"
            name="details"
            onChange={handleChange}
          />
          <FormLabel mt={2}>Created By</FormLabel>
          <Input
            type={"text"}
            placeholder="created by"
            name="created_by"
            onChange={handleChange}
          />
          <FormLabel mt={2}>Email</FormLabel>
          <Input
            type={"email"}
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          <FormLabel mt={2}>Topic</FormLabel>
          <Input
            type={"text"}
            name="topic"
            placeholder="topic"
            onChange={handleChange}
          />

          <FormLabel mt={2}>Category</FormLabel>
          <Input
            type={"text"}
            name="category"
            placeholder="category"
            onChange={handleChange}
          />
          <FormLabel mt={2}>Image URL</FormLabel>
          <Input
            type={"text"}
            name="img"
            placeholder="image url"
            onChange={handleChange}
          />
          <Button mt={3} type="submit" colorScheme={"whatsapp"} w="full">
            Create complaint
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default ComplaintForm;
