import React from "react";
import Navbar from "./Navbar";
import Loader from "react-loader-spinner";
import { BallTriangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div>
      <Navbar />

      <div className="d-flex justify-content-center align-items-center">
      <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
      </div>
    </div>
  );
};

export default Loading;
