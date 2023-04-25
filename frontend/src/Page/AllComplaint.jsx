import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const getAllComplaint = async (token) => {
  let res = await axios.get(
    "https://bellcrop-api-production.up.railway.app/complaint",
    {
      headers: { token: token },
    }
  );
  return res.data;
};

const AllComplaint = () => {
  const [data, setData] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    getAllComplaint(token).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Box w="80%" m="auto">
      <TableContainer>
        <Table variant="striped">
          <Thead height={"60px"}>
            <Tr>
              <Th>S.No</Th>
              <Th>Created By</Th>
              <Th>Email</Th>
              <Th>Topic</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((el, i) => (
              <Tr key={el._id}>
                <Td>{i + 1}</Td>
                <Td>{el.created_by}</Td>
                <Td>{el.email}</Td>
                <Td>{el.topic}</Td>
                <Td>
                  <Button
                    colorScheme="teal"
                    onClick={() => navigate(`/complaint_details/${el._id}`)}
                  >
                    View details
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllComplaint;
