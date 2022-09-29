import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useConsumeContext } from "../context/ContextFile";
import Loading from "../components/Loading";

const Results = () => {
    useEffect(() => {
        getDataFromApi()
    
      } ,[])
  const {
    data,
    setData,
    loading,
    setLoading,
    getDataFromApi,
    searchValue,
    setSearchValue,
  } = useConsumeContext();

  console.log(data)


  if (loading) {
    return <Loading />;
  }



  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Results;
