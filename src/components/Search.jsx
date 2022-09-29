import { Button } from "@mui/material";
import React, { useRef, useEffect } from "react";
import { useConsumeContext } from "../context/ContextFile";
import googleImage from "../utils/google.webp";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate()
  const {
    data,
    setData,
    loading,
    setLoading,
    getDataFromApi,
    searchValue,
    setSearchValue,
  } = useConsumeContext();
 

  const myRef = useRef();
  console.log(searchValue);

  useEffect(() => {
    myRef.current.focus();

    // getDataFromApi();
  }, []);


  return (
    <form>
      <div className="d-flex justify-content-center mt-5">
        <img src={googleImage} alt="" width="300px" />
      </div>

      <div>
        <div className="input-group mb-3 w-50 mt-3 m-auto">
          <input
            type="text"
            className="form-control rounded-5"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            ref={myRef}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="d-flex gap-3 justify-content-center mt-5">
          <Button 
          onClick={() => navigate("/results")}
          type="submit"  variant="contained">Search on Google</Button>
          <Button variant="contained">Feeling Lucky</Button>
        </div>
      </div>
    </form>
  );
};

export default Search;
