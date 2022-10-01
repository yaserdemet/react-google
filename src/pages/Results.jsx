import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useConsumeContext } from "../context/ContextFile";
import Loading from "../components/Loading";
import Infos from "../components/Infos";
import Input from "../components/Input";
import SearchedInfo from "../components/SearchedInfo";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Images from "../components/Images";

const Results = () => {
  useEffect(() => {
    getDataFromApi();
    getImageFromApi();
    
  }, []);

  const {
    data,
    setData,
    loading,
    getImageFromApi,
    getDataFromApi,
    searchValue,
    img, setImg
  
  } = useConsumeContext();

  console.log(data);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{searchValue} - Google</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <SearchedInfo />
      <Input />
      <Images />
      <Infos data={data} setData={setData} img={img} setImg={setImg}/>
      <Footer />
    </div>
  );
};

export default Results;
