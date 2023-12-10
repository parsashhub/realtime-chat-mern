import {
  Container,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "./component/Login.jsx";
import Signup from "./component/signup.jsx";
import { ChatState } from "./chatProvider.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const { user } = ChatState();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/chat");
  }, [user]);

  return (
    <Container
      maxW="xl"
      centerContent
      className="min-h-screen flex flex-col justify-center gap-4"
    >
      <Box className="flex justify-center w-full space-x-6 space-y-4 rounded-2xl border bg-blue-white shadow-md">
        <Text fontSize="4xl" fontFamily="Work sans">
          chat app
        </Text>
      </Box>
      <Box className="bg-white w-full p-4 border rounded-2xl shadow-md">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default AuthPage;
