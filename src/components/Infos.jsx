import React from "react";
import Results from "../pages/Results";

const Infos = ({ data, setData }) => {
  const { answers, results, total } = data;
  console.log(results);

  return (
    <div className="container">
      <div>
        {results?.length > 0 &&
          `Approxtimetly ${data.total} result has been found`}
        {results?.length == 0 && ` No data matches`}
      </div>

      <ul>
        {results?.map((item, index) => {
          return (
            <li className="listType" key={index}>
              {item.title}
              <a href=""> {item.link}</a>
              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Infos;
