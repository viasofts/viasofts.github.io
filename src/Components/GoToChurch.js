import React, { Component } from 'react';

import $ from 'jquery';
import Footer from './Footer';

class GoToChurch extends Component {

    constructor(props){
        super(props);
        this.state = {
            resumeData: {}
        };
    }
    
    getResumeData(){
        $.ajax({
            url:'./resumeData.json',
            dataType:'json',
            cache: false,
            success: function(data){
                this.setState({resumeData: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
                alert(err);
            }
        });
    }
    
    componentDidMount(){
        this.getResumeData();
    }
    
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div>
                        <h1>교회가자</h1>
                        <p>간편하게 교회별로 출입관리용 QR코드를 생성할 수 있습니다.</p>
                        <p>교회 사정에 맞게 자유롭게 사용해주세요.</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>기능</h2>
                                <p>교회에서 제공하는 정보를 입력하여 QR코드를 생성합니다.</p>
                                <p>개인정보를 일체 수집하지 않으며 전송하지 않습니다.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>다운로드</h2>
                        <a href="https://play.google.com/store/apps/details?id=com.via.ffd">
                            <img className="google-play" src='images/google-play-badge.png' alt="교회 가자" />
                        </a>
                    </div>
                    <div className="row">
                        <img className="app-pic" src='images/pf-qr.png' alt="교회 가자" />
                    </div>
                </div>
            </section>
        );
    }
}

export default GoToChurch;