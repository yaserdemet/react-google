import React from "react";
import { useEffect } from "react";
import { useConsumeContext } from "../context/ContextFile";
import Loading from "../components/Loading";
import Infos from "../components/Infos";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Images from "../components/Images";

const Results = () => {
  const {
    data,
    setData,
    loading,
    getImageFromApi,
    getDataFromApi,
    searchValue,
    img, setImg
  
  } = useConsumeContext();
  
  useEffect(() => {
    getDataFromApi();
    getImageFromApi();
    
  }, []);



  console.log(img);

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
      <Navbar />
      <Input />
      {/* <Images /> */}
      <Infos data={data} setData={setData} img={img} setImg={setImg}/>
      <Footer />
    </div>
  );
};

export default Results;
