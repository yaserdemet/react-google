import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useConsumeContext } from "../context/ContextFile";

const SearchedInfo = () => {
  const { loading, dark, setDark } = useConsumeContext();
  // console.log(loading);
  return (
    <nav className="me-3   container-fluid">
      <div className="row">
        <div className="col-md-6 mt-2">
      {
        !dark ?     <img
        src="https://www.google.com.tr/images/branding/googlelogo/2x/googlelogo_dark_color_92x30dp.png"
        alt="" />

        : 
        <img
        src="https://www.google.com.tr/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
        alt=""
      />
    
      }
        </div>
        <div className="col-md-6 d-flex gap-4 justify-content-end pt-2">
          <a target="_blank" href="https://www.google.com/intl/tr/gmail/about/">
            Gmail
          </a>
          <Link>Images</Link>
          <Link>
            <AppsIcon />
          </Link>

          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              onChange={() => setDark(!dark)}
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label
              className={` ${
                !dark ? "text-dark" : "text-light"
              }  form-check-label `}
              for="flexSwitchCheckChecked"
            >
              {dark ? "Dark Mode" : "Light Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchedInfo;
