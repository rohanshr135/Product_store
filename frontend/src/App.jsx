import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (<Box>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
    </Routes>
  </Box>)
}

export default App
