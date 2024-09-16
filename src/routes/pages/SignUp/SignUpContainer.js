import React, { useState } from "react";
import SignUpPresenter from "./SignUpPresenter";
import { useNavigate } from "react-router-dom";

const SignUpContainer = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        user_id: '',
        user_email: '',
        user_password: '',
        user_name: '',
    })

    const signUp = async () => {
        const data = await fetch('http://localhost:8080/api/users/create', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
                mode: 'no-cors',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(userInfo)
        });
        
        navigate('/')
    }

    return (
        <SignUpPresenter
            signUp={signUp}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
        />
    )
}

export default SignUpContainer;