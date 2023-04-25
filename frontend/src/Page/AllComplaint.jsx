import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const getAllComplaint = async (token) => {
  let res = await axios.get("http://localhost:8080/complaint", {
    headers: { token: token },
  });
  return res.data;
};

const AllComplaint = () => {
  const [data, setData] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token);

  useEffect(() => {
    getAllComplaint(token).then((res) => {
      setData(res.data);
    });
  }, []);

  return <Box></Box>;
};

export default AllComplaint;
