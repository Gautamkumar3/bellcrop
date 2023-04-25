import { Box, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const getComplaintDetails = async (token, id) => {
  let res = await axios.get(`http://localhost:8080/complaint/${id}`, {
    headers: { token: token },
  });
  return res.data;
};

const ComplaintDetails = () => {
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("token"));
  const [data, setData] = useState({});
  useEffect(() => {
    getComplaintDetails(token, id).then((res) => {
      setData(res.data);
    });
  }, [id]);
  return (
    <Box bg={"gray.100"} h="100vh" py={"5%"}>
      <Box
        boxShadow="md"
        p="6"
        rounded="md"
        bg="white"
        m="auto"
        w={["90%", "50%", "30%"]}
        textAlign={"left"}
      >
        <Heading fontWeight={"400"} textAlign={"center"} my={3}>
          Complaint Details
        </Heading>
        <Image src={data.img} />
        <Text>
          <b>Details :</b> {data.details}
        </Text>
        <Text>
          <b>Create by :</b> {data.created_by}
        </Text>
        <Text>
          <b>Email :</b> {data.email}
        </Text>
        <Text>
          <b>Topic : </b>
           {data.topic}
        </Text>
        <Text>
          <b>Category :</b> {data.category}
        </Text>
      </Box>
      ;
    </Box>
  );
};

export default ComplaintDetails;
