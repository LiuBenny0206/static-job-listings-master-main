import React, {useState} from "react";
import HeaderBg from "./HeaderBg";
import Filter from "./Filter";
import JobLists from "./JobLists";
import data from "../data.json"

function App (){
    return (
        <div className="MainArea">
            <HeaderBg />
            <Filter />
            {data.map(data =>(
                <JobLists 
                name={data.company}
                logo={data.logo}
                new={data.new}
                featured={data.featured}
                position={data.position}
                role={data.role}
                level={data.level}
                postedAt={data.postedAt}
                contract={data.contract}
                location={data.location}
                languages={data.languages}
                tools={data.tools}
              />
            ))}
            <JobLists 
              name={data[0].company}
              new={data[0].new}
              featured={data[0].featured}
              position={data[0].position}
              role={data[0].role}
              level={data[0].level}
              postedAt={data[0].postedAt}
              contract={data[0].contract}
              location={data[0].location}
              languages={data[0].languages}
              tools={data[0].tools}
            />
        </div>
    );
}

export default App;