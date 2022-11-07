import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CardOverview from "./Pages/CardOverview";
import Base from "./Components/Layout/Base"
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/cardoverview" element={<CardOverview />} />
          </Routes>
        </Base>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
