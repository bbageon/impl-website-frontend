import React from "react";
import './Main.css';
import { Layout } from "../../../components/Layout/Layout";

const MainPresenter = () => {
    return (
        <div className="main-container">
            <Layout
                children={
                    <div className="main-content">
                        <p>MainPage</p>
                    </div>
                }
            />
        </div>
    )
}

export default MainPresenter;