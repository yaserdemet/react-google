import axios from "axios";
import React from "react";
import { createContext, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CreatedContext = createContext();
export const useConsumeContext = () => {
  return useContext(CreatedContext);
};

const ContextFile = ({ children }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  console.log(loading);

  const [dark, setDark] = useState(false);
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);
  // const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState("");
  const url = `https://google-search3.p.rapidapi.com/api/v1/search/q=${searchValue}`;
  const imageUrl = `https://google-search3.p.rapidapi.com/api/v1/image/q=${searchValue}`;

  const getImageFromApi = async () => {
    dispatch({ type: "LOAD" });

    const res = await axios.get(`${imageUrl}`, {
      headers: {
        "x-user-agent": "desktop",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vkjsnK4bkzuUzVLzA",
      },
    });

    setImg(res.data);
    dispatch({ type: "NOTLOAD" });
  };

  const getDataFromApi = async () => {
    dispatch({ type: "LOAD" });
    const res = await axios.get(`${url}`, {
      headers: {
        "x-user-agent": "desktop",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vkjsnK4bkzuUzVLzA",
      },
    });

    setData(res.data);
    dispatch({ type: "NOTLOAD" });
  };
  // console.log(data);

  return (
    <CreatedContext.Provider
      value={{
        getImageFromApi,
        img,
        setImg,
        data,
        dark,
        setDark,
        setData,
        getDataFromApi,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </CreatedContext.Provider>
  );
};

export default ContextFile;
