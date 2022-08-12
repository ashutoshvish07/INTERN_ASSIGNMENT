import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button, Flex } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
const InputData = () => {
  const [data, setData] = useState({ name: "", username: "" ,email:"",phone:""});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    console.log(data);
    axios
      .post(`http://localhost:8081`, {
        ...data,
      })
      .then((res) => {
        console.log("data posted");
      })
      .catch((err) => {
        console.log(err);
      });

    setData({ name: "", username: "",email:"",phone:"" });
  };
  return (
    <Flex gap={4}>
      <Input
        w="200px"
        variant="flushed"
        onChange={handleChange}
        value={data.name}
        name="name"
        placeholder="enter name"
      />
      <Input
        variant="flushed"
        w="200px"
        onChange={handleChange}
        value={data.username}
        name="username"
        placeholder="enter usernmae"
      />
      <Input
        variant="flushed"
        w="200px"
        onChange={handleChange}
        value={data.email}
        name="email"
        placeholder="enter email"
      />
      <Input
        variant="flushed"
        w="200px"
        onChange={handleChange}
        value={data.phone}
        name="phone"
        placeholder="enter number"
      />
      <Button onClick={handleUpdate}>Update</Button>
    </Flex>
  );
};

export default InputData;
