import React from "react";
import {
  Tr,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Company from "./Company";
import Address from "./Address";
const ListItem = ({ item }) => {
  
  //console.log(item);
  return (
    <Tr>
      <Td>{item.id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.username}</Td>
      <Td>{item.email}</Td>
      <Td>{item.phone}</Td>
      <Td>
       <Address key={item.id} address={item.address}/>
      </Td>
      <Td>
         <Company key={item.id} company={item.company}/>        
      </Td>
    </Tr>
  );
};

export default ListItem;
