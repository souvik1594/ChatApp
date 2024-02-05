import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import { useState } from "react";

function HomePage() {
  const [index, setIndex] = useState<number>(0);
  return (
    <Container maxW="50%" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily={"Work sans"} color="black">
          Chat App
        </Text>
      </Box>

      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs
          variant="soft-rounded"
          onChange={(idx) => {
            console.log(idx);
            setIndex(idx);
          }}
        >
          <TabList mb="1em">
            <Tab w="50%">Login</Tab>
            <Tab w="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login index={index} />
            </TabPanel>
            <TabPanel>
              <Signup index={index} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage;
