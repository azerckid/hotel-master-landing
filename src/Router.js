import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import { NaviBar } from "./components/layOut/NaviBar";
import Footer from "./components/layOut/Footer";
import Home from "./scene/Home";

const RouterContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RouterContainer>
        <NaviBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </RouterContainer>
    </BrowserRouter>
  );
};

export default Router;
