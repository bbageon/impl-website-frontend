import React from "react";
import './Bottom.css'

export const Bottom = () => {
    return(
        <div className="bottom-container">
            <div className="bottom-up">
                <h2>IMPL 연구실</h2>
            </div>

            <div className="bottom-down">
                <div className="bottom-down-text">
                    <p>부산광역시 사상구 주례로 47 동서대학교 뉴밀레니엄관 1004호 &nbsp; TEL : 051-320-4228 &nbsp; 지도교수 : 최봉준 교수</p>
                    <p>E-mail : bongjun.choi@dongseo.ac.kr</p>
                </div>
                <div className="botoom-down-icon">
                    <a href="">
                        <img src="kakao.png" alt="" />
                    </a>
                    <a href="">
                        <img src="phone.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}