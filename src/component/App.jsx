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
        </div>
    );
}

export default App;