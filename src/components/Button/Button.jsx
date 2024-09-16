import React from "react";

export const Button = (
    {title, onClick}
) => {
    return(
        <button className="button-box" onClick={onClick}><span>{title}</span></button>
    )
}