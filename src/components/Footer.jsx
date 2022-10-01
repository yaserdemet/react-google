import React, { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [state, setState] = useState({
    countryName: "",
    city: "",
  });

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setState({
          ...state,

          countryName: data.country_name,

          city: data.city,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGeoInfo();
  }, []);

  return (
    <footer className="fixed-bottom bg-dark text-white text-center pt-2 container-fluid">
      <div className="row">
        <div className="col-md-5 gap-3 d-flex  justify-content-center">
          <div href="">About</div>
          <div href="">Commercial</div>
          <div href="">How to Work</div>
        </div>
        <div className="col-md-2 gap-3  d-flex justify-content-center ">
          <p>{state.countryName}  {state.city}</p>

        
        </div>
        <div className="col-md-5 gap-3  d-flex justify-content-center  ">
          <div>Privacy</div>
          <div>Terms</div>
          <div>Settings</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
