import React from "react";
import googleImg from "../utils/google.webp";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { TextField, Button} from "@mui/material";
import { useState } from "react";

const Search = () => {

    const [inputValue , setInputValue] = useState("")
    console.log(inputValue);

    const handleClick = (e) => {
        e.preventDefault()
        console.log("button clicked");
    }
  return (
    <div>
      <div className="google-img">
        <img src={googleImg} alt="" width="300px" />
      </div>
      <form className="input-field">
        <SearchIcon className="icons" />

        <TextField  value={inputValue} onChange={(e) => setInputValue(e.target.value)}  className="input" id="standard-basic" variant="standard" />
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
