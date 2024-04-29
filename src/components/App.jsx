import React, {useState, useMemo, useCallback} from "react";
import HeaderBg from "./HeaderBg";
import Filter from "./Filter";
import JobLists from "./JobLists";
import data from "../data.json"


function App (){
    const [showFilter, setShowFilter] = useState(false);
    const [filterValue, setFilterValue] = useState([]);

    const handleShowFilter = () => {        
        setShowFilter(true);
    };

    const handleHideFilter = () => {
        setShowFilter(false);
        setFilterValue([]);
    };

    const handleAddFilterDate = useCallback((value) => {
        setFilterValue(prevItem => [...prevItem, value]);
    }, []);

    const handleDeleteFilterDate = useCallback((id) => {
        const index = Number(id);
        setFilterValue(prevItems => prevItems.filter((item, itemIndex) => itemIndex !== index));
    });

    const filteredJobs = useMemo(() => (
      data.filter(data => filterValue.every(filter => 
          data.role.includes(filter) ||
          data.level.includes(filter) ||
          data.languages.includes(filter) ||
          data.tools.includes(filter)
      ))
    ),[filterValue]);

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
              key={jobData.id}
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