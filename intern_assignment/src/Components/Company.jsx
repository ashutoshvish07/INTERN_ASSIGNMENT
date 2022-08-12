import React from 'react'
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
const Company = ({company}) => {
    //console.log("comp",company)
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
       <Button onClick={onOpen}>Company Details</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Company Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {`Company Name - ${company?.name}, CcatchPhraseity- ${company?.catchPhrase} Bs- ${company?.bs}`}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </div>
  )
}

export default Company
