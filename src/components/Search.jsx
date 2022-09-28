import React from "react";
import googleImg from "../utils/google.webp";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { TextField, Button} from "@mui/material";
import { useState, useEffect,useRef} from "react";
import { useNavigate } from "react-router-dom";
import { useConsumeContext } from "../contextApi/SearchValue";


const Search = () => {
    const navigate = useNavigate()
    const {inputValue, setInputValue} = useConsumeContext()
    // console.log(inputValue);

    const myRef = useRef()

    useEffect(() => {
        myRef.current.focus()
    },[])

    const handleClick = (e) => {
        e.preventDefault()
        console.log("button clicked");
        navigate("/results")
    }
  return (
    <div>
      <div className="google-img">
        <img src={googleImg} alt="" width="300px" />
      </div>
      <form className="input-field">
        <SearchIcon className="icons" />

        <TextField ref={myRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)}  className="input" id="standard-basic" variant="standard"  />
        <MicIcon className="icons" />
      </form>
      <div className="buttons">
        <Button onClick={handleClick} variant="outlined" type="submit">Search on Google</Button>
        <Button variant="outlined">I Feel Lucky</Button>

      </div>
    </div>
  );
};

export default Search;
