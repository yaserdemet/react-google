import React from "react";
import { useConsumeContext } from "../context/ContextFile";
import Results from "../pages/Results";
import Images from "./Images";

const Infos = ({ data, setData,img,setImg }) => {
  const { answers, results, total } = data;
  const {image_results } = img
  // console.log(image_results);
  const { dark } = useConsumeContext;
  // console.log(results);

  return (
    <div className="container">
      <div style={{ color: "gray" }}>
        {results?.length > 0 &&
          `Approxtimetly ${data.total} result has been found`}
        {results?.length == 0 && ` No data matches`}
      </div>

      <Images image_results={image_results} />

      <ul className="list-group">
      {results?.length > 0 &&  <h2>People Also Asked:</h2>}
     
        {answers?.map((item, index) => {
          return (
            <li className=" border-bottom  w-50 p-2" key={index}>
              {item}
            </li>
          );
        })}


        {results?.map((item, index) => {
          return (
            <div className="listType" key={index}>
              <h4 className="text-primary mt-4"> {item.title}</h4>
              <li className=" mt-2">
                <a target="_blank" href={item.link}>
                  {" "}
                  {item.link}
                </a>
              </li>
              <li className={` ${!dark ? "text-dark" : "text-white"}  mt-2 `}>
                {item.description.length > 30
                  ? item.description.substring(0, 60) + "..."
                  : item.description}
              </li>
            </div>
          );
        })}
      
      </ul>
    </div>
  );
};

export default Infos;
