import React, {useState} from "react";


function Filter (props){
    function passId(event){
        props.filterId(event.currentTarget.id); // 使用 currentTarget 代替 target
        console.log(event.currentTarget.id);
    }
    
    function handleFilterBar(){
        props.closeFilter();
    }


    return (
        <div className="filter">
            <div className="leftArea">
                {props.filterData.map((data, index)=> (
                <div className="skillPart" >
                    <p id={index}>{data}</p>
                    <button id={index} className="filterbtn" onClick={passId}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
                    </button>
                </div>
                ))}
            </div>
            <div className="buttonPart">
                <button id="rightPartBtn" onClick={handleFilterBar}>Clear</button>
            </div>
        </div>
    );
}

export default Filter;