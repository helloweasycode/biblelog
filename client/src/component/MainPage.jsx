import React from "react";
import { useNavigate } from "react-router-dom";
import VerseList from "./VerseList";
import "../App.css";

function MainPage(){
    const navigate = useNavigate();

    return(
        <div className="mainWrap">  
            <VerseList/>
            <div className="btn-wrap">            
                <button className="gowrite-btn" onClick={() => {
                    navigate("/postwrite")
                }}>글쓰기</button> 
            </div>
        </div>
    )
}

export default MainPage;