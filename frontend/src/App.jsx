import { Route, Routes } from "react-router-dom";
import Layout from "./component/layout.jsx";
import Chat from "./chat.jsx";
import Auth from "./auth.jsx";
import axios from "axios";
import ChatProvider from "./chatProvider.jsx";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://127.0.0.1:5001/api";

function App() {
  return (
    <ChatProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Auth />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<div>404 not found</div>} />
        </Route>
      </Routes>
    </ChatProvider>
  );
}

export default App;
