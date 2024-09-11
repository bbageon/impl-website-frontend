import React, {useEffect, useState} from "react";
import axios from "axios";
import './main.css';


const MainPresenter = () => {
    const [hello, sethello] = useState('');

    useEffect(() => {
        axios.get('/api/test')
            .then((res) => {
                sethello(res.data);
            })
    },[])

    return (
        <div className="main-container">
            hello : {hello}
        </div>
    )
}

export default MainPresenter;
