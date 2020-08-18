import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
   
   render() {

      if(this.props.data){
         var project = this.props.data.project;
         var github = this.props.data.github;
         var name = this.props.data.name;
         var description= this.props.data.description;
         var city= this.props.data.address.city;
         var networks= this.props.data.social.map(function(network){
         return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      let config = {
         num: [4, 7],
         rps: 0.1,
         radius: [5, 40],
         life: [1.5, 3],
         v: [2, 3],
         tha: [-40, 40],
         alpha: [0.6, 0],
         scale: [.1, 0.4],
         position: "all",
         color: ["random", "#ff0000"],
         cross: "dead",
         // body: "images/logo_2.png", 
         // emitter: "follow",
         random: 5
      };

      if (Math.random() > 0.85) {
         config = Object.assign(config, {
            onParticleUpdate: (ctx, particle) => {
               ctx.beginPath();
               ctx.rect(
                  particle.p.x,
                  particle.p.y,
                  particle.radius * 2,
                  particle.radius * 2
               );
               ctx.fillStyle = particle.color;
               ctx.fill();
               ctx.closePath();
            }
         });
      }

      return (

         <header id="home">
            <ParticlesBg type="custom" config={config} bg={true} />
            
            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#dronesoccer">Drone Soccer</a></li>
                  <li><a className="smoothscroll" href="#deeplearning">Deep Learning</a></li>
                  {/*
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  */}
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>
            </nav>

            <div className="row banner">
               <div className="banner-text">
               <img src="images/logo_2.png"></img>
                  <h3>Be creative via bytes.</h3>
                  <hr />
                  <h3>Practical software solutions</h3>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#dronesoccer"><i className="icon-down-circle"></i></a>
            </p>

         </header>
    );
  }
}

export default Header;
