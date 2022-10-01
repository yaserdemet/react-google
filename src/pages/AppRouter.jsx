import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import { useConsumeContext } from "../context/ContextFile";
import Main from "./Main";
import Results from "./Results";

const AppRouter = () => {
    const {dark} = useConsumeContext()
    // console.log(dark)
  return (
    <div  className={`${dark ? "dark" : "light"}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="results"
            element={<Results />}
          />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
