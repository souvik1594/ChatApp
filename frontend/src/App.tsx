import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/chats",
    element: <ChatPage></ChatPage>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
