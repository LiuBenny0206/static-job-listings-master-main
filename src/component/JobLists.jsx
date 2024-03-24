import React, {useState} from "react";
import { ReactComponent as PhotosnapLogo } from "../images/photosnap.svg";
import { ReactComponent as ManageLogo } from "../images/manage.svg";
import { ReactComponent as AccountLogo } from "../images/account.svg";
import { ReactComponent as MyHomeLogo } from "../images/myhome.svg";
import { ReactComponent as LoopStudiosLogo } from "../images/loop-studios.svg";
import { ReactComponent as FaceItLogo } from "../images/faceit.svg";
import { ReactComponent as ShortlyLogo } from "../images/shortly.svg";
import { ReactComponent as InsureLogo } from "../images/insure.svg";
import { ReactComponent as EyecamCoLogo } from "../images/eyecam-co.svg";
import { ReactComponent as TheAirFilterCompanyLogo } from "../images/the-air-filter-company.svg";

function JobLists(props){

    const logoComponents = {
        Photosnap: PhotosnapLogo,
        Manage: ManageLogo,
        Account: AccountLogo,
        MyHome: MyHomeLogo,
        "Loop Studios": LoopStudiosLogo,
        FaceIt: FaceItLogo,
        Shortly: ShortlyLogo,
        Insure: InsureLogo,
        "Eyecam Co.": EyecamCoLogo,
        "The Air Filter Company": TheAirFilterCompanyLogo,
      };

      const LogoComponent = logoComponents[props.name];

    return (
        <div className="jobLists">
            <div className="leftPart">
            <div className="profilePic">
                {LogoComponent && <LogoComponent />}
            </div>
                <div className="info">
                    <div className="firstRow">
                        <p id="title">{props.name}</p>
                        {props.new && <p id="new">NEW!</p>}
                        {props.featured && <p id="featured">FEATURED</p>}
                    </div>
                    <div className="secondRow">
                        <a>{props.position}</a>
                    </div>
                    <div className="thirdRow">
                        <p>{props.postedAt}</p>
                        <p>•</p>
                        <p>{props.contract}</p>
                        <p>•</p>
                        <p>{props.location}</p>
                    </div>
                </div>  
            </div>
            <div className="rightPart">
                <p>{props.role}</p>
                <p>{props.level}</p>
                {props.languages.map(language => (
                    <p>{language}</p>
                ))}
                {props.tools.map(tool => (
                    <p>{tool}</p>
                ))}
            </div>     
        </div>  
    );
}

export default JobLists;