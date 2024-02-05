import { QuestionIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";

const Login = ({ index }: { index: number }) => {
  const [userInput, setUserInput] = useState({});
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUserInput = (label: string, value: string) => {
    setUserInput({ ...userInput, [label]: value });
    console.log(userInput);
  };

  const handleGuestUser = () => {
    setUserInput({ email: "guest@example.com", password: "123456" });
    handleLogin();
  };

  const handleLogin = () => {
    validateInput();
    console.log(userInput);
  };

  const validateInput = () => {};
  useEffect(() => {
    inputRef?.current?.focus();
  }, [index]);
  return (
    <VStack spacing="5px">
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

      <HStack w={"100%"} justify={"end"}>
        <HStack w={"100%"} justify={"left"}>
          <ButtonGroup gap="1" w={"100%"}>
            <Button
              colorScheme="blue"
              w={"30%"}
              mt={4}
              size="md"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button
              colorScheme="red"
              w={"30%"}
              mt={4}
              size="md"
              onClick={handleGuestUser}
            >
              Guest User Credentials
            </Button>
          </ButtonGroup>
        </HStack>

        <IconButton
          mt={4}
          isRound={true}
          colorScheme="teal"
          aria-label="Call Segun"
          size="md"
          title="Reset Password"
          icon={<QuestionIcon boxSize={8} />}
        />
      </HStack>
    </VStack>
  );
};

export default Login;
