import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useConsumeContext } from "../context/ContextFile";
import Loading from "../components/Loading";
import Infos from "../components/Infos";
import Input from "../components/Input";
import SearchedInfo from "../components/SearchedInfo";
import Footer from "../components/Footer"


const Results = () => {




  useEffect(() => {
    getDataFromApi();
    
  }, []);



  const {
    data,
    setData,
    loading,
    setLoading,
    getDataFromApi,
    searchValue,
    setSearchValue,
  } = useConsumeContext();

  console.log(data);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <SearchedInfo />
      <Input />
      <Infos data={data} setData={setData}/>
      <Footer />
    </div>
  );
};

export default Results;
