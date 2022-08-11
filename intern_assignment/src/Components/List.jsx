import React, { useEffect, useState } from "react";

import axios from "axios";
import ListItem from "./ListItem";
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
  Text,
} from '@chakra-ui/react'
const List = () => {
  const [data, setdata] = useState([]);

  const getdata = () => {
    axios
      .get("http://localhost:8080")
      .then((r) => {
        setdata([...r.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);
  console.log(data);
  return (
    <TableContainer>
     <Text fontSize='3xl' textAlign={'center'} fontWeight={"bold"} mt={2} mb={2}>Employee Data</Text>
      <Table size='sm' variant='striped' colorScheme='teal'>
      <TableCaption>Employee Data</TableCaption>
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>Name</Th>
            <Th>Usernmae</Th>
            <Th>Email</Th>
            <Th>Phone Number</Th>
            <Th>Address</Th>
            <Th>Company</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((item) => (
            <ListItem item={item} key={item.id} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default List;
