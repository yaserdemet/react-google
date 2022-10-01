import React from "react";
import { useConsumeContext } from "../context/ContextFile";

const Images = ({ image_results }) => {
  const { searchValue } = useConsumeContext();
  return (

    <>
      <h4>Images related with {searchValue.slice(0,1).toUpperCase() + searchValue.slice(1)}</h4>
      <div className="cont container">

{image_results?.slice(0, 6).map((item, index) => {
  return (
    <div className="cont-img" key={index}>
      <img src={item.image.src} alt="" width="150px" height="150px" />
    </div>
  );
})}
</div>

    </>
  
  );
};

export default Images;
