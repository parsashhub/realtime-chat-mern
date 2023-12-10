import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { ChatState } from "./chatProvider.jsx";
import SideDrawer from "./component/sideDrawer.jsx";
import MyChats from "./component/myChats.jsx";
import Chatbox from "./component/chatBox.jsx";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box className="flex justify-between w-full min-h-[95%] p-6">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
