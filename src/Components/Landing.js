import React, { Component } from 'react';

import $ from 'jquery';

import Header from './Header';
import Footer from './Footer';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Portfolio from './Portfolio';
import DroneSoccer from './DroneSoccer';
import DeepLearning from './DeepLearning';

class Landing extends Component {

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
            <div className="Landing">
                <Header data={this.state.resumeData.main}/>
                <DroneSoccer data={this.state.resumeData.main}/>
                <DeepLearning data={this.state.resumeData.main}/>
                {/*
                <About data={this.state.resumeData.main}/>
                <Resume data={this.state.resumeData.resume}/>
                */}
                <Portfolio data={this.state.resumeData.portfolio}/>
                <Contact data={this.state.resumeData.main}/>
                <Footer data={this.state.resumeData.main}/>
            </div>
        );
    }
}

export default Landing;