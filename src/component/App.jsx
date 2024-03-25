import React, {useState} from "react";
import HeaderBg from "./HeaderBg";
import Filter from "./Filter";
import JobLists from "./JobLists";
import data from "../data.json"


function App (){
    const [showFilter, setShowFilter] = useState(false);
    const [filterValue, setFilterValue] = useState([]);

    function handleShowFilter() {        
        setShowFilter(true);
    };

    function handleAddFilterDate(value){
        setFilterValue((prevItem) => [...prevItem, value]);
        console.log(filterValue);
    };

    return (
        <div className="MainArea">
            <HeaderBg />
            {showFilter && <Filter filterData={filterValue}/>}
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
                showFilter={handleShowFilter}
                addFilterValue={handleAddFilterDate}
              />
            ))}
        </div>
    );
}

export default App;