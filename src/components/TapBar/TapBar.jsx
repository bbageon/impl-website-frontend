import React from "react";
import './TapBar.css'

export const TapBar = (
    {}
) => {
    return(
        <div className="tapbar-container">
            <ul className="category">
                <li><a href="">연구실 소개</a></li>
                <li><a href="">프로젝트/연구</a></li>
                <li><a href="">임플의 추억</a></li>
                <li><a href="">교수님 소개</a></li>
            </ul>
        </div>
    )
}