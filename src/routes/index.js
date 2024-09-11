import React, { useState, useEffect } from "react";
import { Route, Routes, useFetchers} from "react-router-dom";

// 페이지 추가
import { Main } from "./pages";

const Router = () => {
    return (
        <div className="App">
            <Routes>
                <Route
                    path={"/main"}
                    element={<Main/>}
                />
            </Routes>
        </div>
    )
}

export default Router;