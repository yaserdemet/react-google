import React from "react";
import { useConsumeContext } from "../context/ContextFile";
import Results from "../pages/Results";

const Infos = ({ data, setData }) => {
  const { answers, results, total } = data;
  const {dark} = useConsumeContext
  console.log(results);

  return (
    <div className="container">
      <div>
        {results?.length > 0 &&
          `Approxtimetly ${data.total} result has been found`}
        {results?.length == 0 && ` No data matches`}
      </div>

      <ul>

                {answers?.map((item,index) => {
                    return (

                        <div className="listType border border-bottom" key={index}>

                                {item}

                            </div>

                    )
                })}




        {results?.map((item, index) => {
          return (
            <div className="listType" key={index}>
                <h4 className="text-primary mt-4"> {item.title}</h4>
                <li className=" mt-2">
                    <a target="_blank" href={item.link}> {item.link}</a>
                </li>
                <li className={` ${
                !dark ? "text-dark" : "text-white"
              }  mt-2 `}>
                    {

                        item.description.length > 30 ? item.description.substring(0,60) + "..." : item.description
                    }
                </li>

             
              
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Infos;
