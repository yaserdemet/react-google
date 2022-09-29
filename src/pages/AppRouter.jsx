import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import { useConsumeContext } from "../context/ContextFile";
import Main from "./Main";
import Results from "./Results";

const AppRouter = () => {
    const {dark} = useConsumeContext()
  return (
    <div  className={`${dark ? "bg-light" : "bg-dark"} p-3`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="results"
            element={<Results />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
