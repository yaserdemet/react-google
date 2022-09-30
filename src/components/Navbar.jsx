import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import PopUp from "./PopUp"
import { useAutoAnimate } from '@formkit/auto-animate/react'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useConsumeContext } from "../context/ContextFile";

const Navbar = () => {
  const [animationParent] = useAutoAnimate()
  const { loading, dark , setDark } = useConsumeContext();
  const [popUp , setPopUp] = useState(false)
  // console.log(loading);
  return (
    <nav className="me-3">
      <div className="row">
        
        <div className="col-md-12 d-flex gap-4 justify-content-end pt-2" >
          <a target="_blank" href="https://www.google.com/intl/tr/gmail/about/">Gmail</a>
          <Link>Images</Link>
          <Link >
            <AppsIcon onClick={() =>  setPopUp(!popUp)}/>
          </Link>
          <div  >
        {
          popUp && <PopUp />
        }
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={() => setDark(!dark)}
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label
              className={` ${
                !dark ? "text-dark" : "text-light"
              }  form-check-label `}
              htmlFor="flexSwitchCheckChecked"
            >
              {dark ? "Dark Mode" : "Light Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
