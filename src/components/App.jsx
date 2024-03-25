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

    function handleHideFilter() {
        setShowFilter(false);
        setFilterValue([]);
    };

    function handleAddFilterDate(value){
        setFilterValue((prevItem) => [...prevItem, value]);
        console.log(filterValue);
    };

    function handleDeleteFilterDate(id) {
        const index = Number(id); // 将 id 转换为数字类型
        setFilterValue((prevItems) => prevItems.filter((item, itemIndex) => itemIndex !== index));
      }

      const filteredJobs = data.filter(data =>
        filterValue.every(filter => 
          data.role.includes(filter) ||
          data.level.includes(filter) ||
          data.languages.includes(filter) ||
          data.tools.includes(filter)
        )
      );

      return (
        <div className="MainArea">
          <HeaderBg />
          {showFilter && <Filter 
            filterData={filterValue} 
            filterId={handleDeleteFilterDate}
            closeFilter={handleHideFilter}
          />}
          {filteredJobs.map((jobData) => (
            <JobLists 
              key={jobData.id} // Make sure to use a unique key for each child, like jobData.id
              name={jobData.company}
              logo={jobData.logo}
              new={jobData.new}
              featured={jobData.featured}
              position={jobData.position}
              role={jobData.role}
              level={jobData.level}
              postedAt={jobData.postedAt}
              contract={jobData.contract}
              location={jobData.location}
              languages={jobData.languages}
              tools={jobData.tools}
              showFilter={handleShowFilter}
              addFilterValue={handleAddFilterDate}
            />
          ))}
        </div>
      );
}

export default App;