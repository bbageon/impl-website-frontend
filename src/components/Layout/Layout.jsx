import React from "react";
import './Layout.css'
import { Top } from "../Top/Top";
import { Banner } from "../Banner/Banner";
import { Bottom } from "../Bottom/Bottom";
import { TapBar } from "../TapBar/TapBar";

export const Layout = (
    {children}
) => {

    return(
        <div className="layout-container">
            
            <Top/>
            <Banner/>
            <TapBar/>
            {children}
            <Bottom/>
            
        </div>
    )
}