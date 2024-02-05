import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  VStack,
} from "@chakra-ui/react";

const Signup = ({ index }: { index: number }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [userInput, setUserInput] = useState({});
  const inputRef = useRef<HTMLInputElement>(null);
  const handleUserInput = (label: string, value: string) => {
    setUserInput({ ...userInput, [label]: value });
    console.log(userInput);
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, [index]);

  return (
    <VStack spacing="5px">
      <FormControl mb="1rem" isRequired ref={inputRef}>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          autoFocus
          onChange={(e) => handleUserInput("name", e.target.value)}
        />
      </FormControl>
      <FormControl mb="1rem" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => {
            handleUserInput("email", e.target.value);
          }}
        />
      </FormControl>
      <FormControl mb="1rem" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={(e) => handleUserInput("password", e.target.value)}
          />
          <InputRightAddon p={0}>
            <Button
              variant="outline"
              border={"none"}
              px={"2rem"}
              w={"10rem"}
              color={"black"}
              onClick={handleClick}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightAddon>
        </InputGroup>
      </FormControl>
      <FormControl mb="1rem" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type={"password"}
          placeholder="Confirm Your Password Again"
          onChange={(e) => handleUserInput("confirmPassword", e.target.value)}
        />
      </FormControl>

      <FormControl mb="1rem" isRequired>
        <FormLabel>Select Picture</FormLabel>
        <Input type={"file"} placeholder="Select Picture" />
      </FormControl>

      <Button colorScheme="blue" w="33%" mt={4} size="md">
        Signup
      </Button>
    </VStack>
  );
};

export default Signup;
