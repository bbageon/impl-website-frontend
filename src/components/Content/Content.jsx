import React from "react";
import './Content.css'

export const Content = (
    {contents}
)=>{
    return(
        <div className="content-container">
            {contents}
        </div>
    )
}