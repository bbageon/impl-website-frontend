import React from "react";
import './SignUp.css';
import { Layout } from "../../../components/Layout/Layout";
import { Input } from "./components/Input";

const SignUpPresenter = ({
    signUp,
    userInfo,
    setUserInfo,
}) => {
    return (
        <Layout>
            <div className="signup-container">
                <div className="signup-title">
                    회원가입
                </div>
                <div className="signup-input-box">
                    <Input
                        id={'user_id'}
                        title={'아이디'}
                        userInfo={userInfo}
                        setValue={e => {
                            const user_id = e;
                            setUserInfo(prev => {
                                return { ...prev, user_id }
                            })
                        }}
                    />
                    <Input
                        id={'user_email'}
                        title={'이메일'}
                        userInfo={userInfo}
                        setValue={e => {
                            const user_email = e;
                            setUserInfo(prev => {
                                return { ...prev, user_email }
                            })
                        }}
                    />
                    <Input
                        id={'user_password'}
                        type={'password'}
                        title={'비밀번호'}
                        userInfo={userInfo}
                        setValue={e => {
                            const user_password = e;
                            setUserInfo(prev => {
                                return { ...prev, user_password }
                            })
                        }}
                    />
                    <Input
                        id={'user_name'}
                        title={'이름'}
                        userInfo={userInfo}
                        setValue={e => {
                            const user_name = e;
                            setUserInfo(prev => {
                                return { ...prev, user_name }
                            })
                        }}
                    />
                </div>
                <div className="signup-button" onClick={() => signUp()}>
                    회원가입
                </div>
            </div>
        </Layout>
    )
}

export default SignUpPresenter;