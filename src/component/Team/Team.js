import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import BangaloreBg from '../../assests/images/bangalore_bg.jpg'

import './Team.css'

import Abhijeet from '../../assests/team/abhi.jpg'
import Bijwal from '../../assests/team/bijwal.jpg'
import Dada from '../../assests/team/dada.jpeg'
import Rohit from '../../assests/team/rohit.jpg'
import Spandana from '../../assests/team/spandana.jpg'
import Rak from '../../assests/team/rak.jpg'
import Gagana from '../../assests/team/gagana.jpeg'
import Chinmaya from '../../assests/team/Chinmaya.JPG'
import Shivraj from '../../assests/team/Shivraj.JPG'
import Ankit from '../../assests/team/Ankit.jpg'
import Surendra from '../../assests/team/Surendra.jpg'
import Hamsini from '../../assests/team/Hamsini.jpg'
import Mandara from '../../assests/team/Mandara.jpg'
import Sparshi from '../../assests/team/Sparshi.jpg'

import Sushank from '../../assests/team/hegde.jpeg'
import BMK from '../../assests/team/bmk.jpg'
import Suyash from '../../assests/team/Suyash.jpg'
import Amrutha from '../../assests/team/AMRUTHA.png'

import Srimadh from '../../assests/team/srimadh.jpg'
import Poornack from '../../assests/team/poornack.jpeg'
import Akhil from '../../assests/team/akhil.jpg'
import Mukul from '../../assests/team/Mukul.jpg'
import Sushma from '../../assests/team/Sushma.jpeg'
import Sanjay from '../../assests/team/Sanjay.jpeg'

import ADK from '../../assests/team/adk.jpg'
import Mahi from '../../assests/team/mahi.jpg'
import Chaitra from '../../assests/team/chaitra.jpeg'
import Monisha from '../../assests/team/Monisha.jpg'
import Saswathi from '../../assests/team/Saswathi.jpeg'
import Sudhanva from '../../assests/team/Sudhanva.jpeg'
import Vanditha from '../../assests/team/Vanditha.jpg'

import Ezu from '../../assests/team/ezu.jpg'
import Shomik from '../../assests/team/Shomik.jpg'

import Jagdeesh from '../../assests/team/jag.jpeg'
import Meghana from '../../assests/team/meghana.jpg'
import Gayat from '../../assests/team/gayat.jpeg'
import Raghu from '../../assests/team/Raghavendra.jpg'
import Snehith from '../../assests/team/Snehith.jpg'
import Harshith from '../../assests/team/HARSHITH.jpg'

import Dhan from '../../assests/team/dhan.jpeg'
import Akshay from '../../assests/team/akshay.jpg'
import Manju from '../../assests/team/manju.jpg'
import Suprabhu from '../../assests/team/suprabhu.jpeg'
import Lasitha from '../../assests/team/lasitha.jpg'
import Hardik from '../../assests/team/hardik.jpg'
import Chandana from '../../assests/team/Chandana.jpg'
import Shukla from '../../assests/team/Shukla.JPG'
import RASHMI from '../../assests/team/RASHMI.jpg'

import Female from '../../assests/icons/female-solid.svg'
import Shield from '../../assests/icons/shield-alt-solid.svg'
import Dashboard from '../../assests/icons/tachometer-alt-solid.svg'
import Cog from '../../assests/icons/cogs-solid.svg'
import Code from '../../assests/icons/code-solid.svg'
import Pencil from '../../assests/icons/pencil-alt-solid.svg'
import Bulls from '../../assests/icons/bullseye-solid.svg'
import Users from '../../assests/icons/users-solid.svg'
import Task from '../../assests/icons/tasks-solid.svg'
import Sort from '../../assests/icons/sort-amount-down-solid.svg'
import Magic from '../../assests/icons/magic-solid.svg'
import Links from '../../assests/icons/link-solid.svg' 

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import f1 from '../../assests/teamcarasoul/f1.png'
import f2 from '../../assests/teamcarasoul/f2.png'
import f3 from '../../assests/teamcarasoul/f3.JPG'
import f4 from '../../assests/teamcarasoul/f4.png'

import mail from '../../assests/icons/gmail.svg';
import { useLocation } from 'react-router'
import queryString from 'query-string'

function Team() {
    const location = useLocation()

  useEffect(() => {
        let val = queryString.parse(location.hash);
        let parsed = Object.keys(val).at(0)
        if (parsed) {
            document.querySelector('#' + parsed).scrollIntoView({ behavior: 'smooth' });
        }else{
            if(window.scrollY===0)
            {
                window.scrollTo(0,1);
            }
            else{
                 window.scrollTo(0,0);
            }
           
        }
}, [])
  return (
    <>
      <Header active="teams" />
      <MainContainer>
        <HeadingTimeline>Team IEEE-SJCE</HeadingTimeline>
        <hr /><SubHead>Our Team Members who have contributed immensely to our Growth</SubHead>
        <CaraWhole>
            <Carousel showThumbs={false}
                    showStatus={false}
                    dynamicHeight={false}
                    // autoPlay={true}	
                    // interval={5000}
                    >
                            <CaraTotal>
                                <img src={f1} alt="team"/>    
                            </CaraTotal>
                            {/* <CaraTotal>
                                <img src={f2} alt="team"/>    
                            </CaraTotal> */}
                            <CaraTotal>
                                <img src={f3} alt="team"/>    
                            </CaraTotal>
                            <CaraTotal>
                                <img src={f4} alt="team"/>    
                            </CaraTotal>
            </Carousel>
        </CaraWhole>

        
        <CommiteeHeading><img src={Bulls} alt="bulls"/>EXECUTIVE COMMITTEE </CommiteeHeading>
        <div className="container" id="ec">
            <div className="row">
               <div className="col-md-3 col-sm-6"  data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img  src={Abhijeet} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:abhijeetbharti@ieee.org"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Abhijeet Bharti</h3>
                            <span className="post">Chairperson</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Bijwal} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:bijwal@ieee.org"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>

                        </ul>
                        <div className="team-content">
                            <h3 className="title">Bijwal B Jain</h3>
                            <span className="post">Vice Chairperson</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Dada} alt=""/>
                        <ul className="social">
                          <li><a href="mailto:dadapeer.b2000@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Dadapeer B</h3>
                            <span className="post">General Secretary</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Rohit} alt=""/>
                        <ul className="social">
                            <li><a href="mailto:niranjanrohit18@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Rohit Niranjanmath</h3>
                            <span className="post">SAC Co-ordinator</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="container">
            <div className="row">
               <div className="col-md-3 col-sm-6"  data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Spandana} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:spandana42suresh@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Spandana A S</h3>
                            <span className="post">Event Manager</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6"  data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Rak} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:rakshithap91@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>

                        </ul>
                        <div className="team-content">
                            <h3 className="title">Rakshitha P</h3>
                            <span className="post">Reporting Lead</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6"  data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Gagana} alt=""/>
                        <ul className="social">
                          <li><a href="mailto:gagana2k@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Gagana C</h3>
                            <span className="post">Publicity Lead</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6"  data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Chinmaya} alt=""/>
                        <ul className="social">
                            <li><a href="mailto:chinmayak77@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Chinmaya K</h3>
                            <span className="post">Joint Secretary</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            
            <div className="container">
            <div className="row">

            <div className="col-md-3 col-sm-6"  data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Shivraj} alt=""/>
                        <ul className="social">
                            <li><a href="mailto:18srjn@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Shivraj Nath</h3>
                            <span className="post">Treasurer</span>
                        </div>
                    </div>
                </div>
               <div className="col-md-3 col-sm-6"  data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Ankit} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:priyesh.ankit3@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Ankit Priyesh</h3>
                            <span className="post">Chief Student Co-ordinator</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Surendra} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:surendrahegde3@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>

                        </ul>
                        <div className="team-content">
                            <h3 className="title">Surendra R Hegde</h3>
                            <span className="post">Student Co-ordinator</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Hamsini} alt=""/>
                        <ul className="social">
                          <li><a href="mailto:hamsinisvm@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Hamsini V</h3>
                            <span className="post">Student Co-ordinator</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="container">
            <div className="row">
            <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
    
                </div>
            <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Mandara} alt=""/>
                        <ul className="social">
                            <li><a href="mailto:mandarashivakumar@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Mandara Shivakumar</h3>
                            <span className="post">Reporting Team</span>
                        </div>
                    </div>
                </div>
               <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Sparshi} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:sparshi.agrawal091@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Sparshi Agrawal</h3>
                            <span className="post">Reporting Team</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        <CommiteeHeading  id="mc"><img src={Users} alt="users"/>MEMBERSHIP DEVELOPMENT COMMITTEE </CommiteeHeading>
        <div className="container">
            <div className="row">

            <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Sushank} alt=""/>
                        <ul className="social">
                            <li><a href="mailto:sushankhegde10@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Sushank Hegde</h3>
                            <span className="post">Chairperson</span>
                        </div>
                    </div>
                </div>
               <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={BMK} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:bhoomikarani9845@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Bhoomika Rani B</h3>
                            <span className="post">Vice Chairperson</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Suyash} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:suyash.g.patil@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>

                        </ul>
                        <div className="team-content">
                            <h3 className="title">Suyash G Patil</h3>
                            <span className="post">Secretary</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Amrutha} alt=""/>
                        <ul className="social">
                          <li><a href="mailto:amruthaputti01@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Amrutha K R</h3>
                            <span className="post">Ambassador</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        <CommiteeHeading id="s"><img src={Dashboard} alt="dashboard"/>ELECTRON DEVICES SOCIETY </CommiteeHeading>
        <div className="container">
            <div className="row">

            <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Srimadh} alt=""/>
                        <ul className="social">
                            <li><a href="mailto:shrimadh332001@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Srimadh V Rao</h3>
                            <span className="post">Chairperson</span>
                        </div>
                    </div>
                </div>
               <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Poornack} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:pckaranth@ieee.org"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Poornachandra Karanth K L</h3>
                            <span className="post">Vice Chairperson</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Akhil} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:akhilsr2000@ieee.org"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>

                        </ul>
                        <div className="team-content">
                            <h3 className="title">Akhil S R</h3>
                            <span className="post">Senior Technical Co-ordinator</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Mukul} alt=""/>
                        <ul className="social">
                          <li><a href="mailto:mukulkr21799@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Mukul</h3>
                            <span className="post">Secretary</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="container">
            <div className="row">
            <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">

                </div>
            <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Sushma} alt=""/>
                        <ul className="social">
                            <li><a href="mailto:sushma.bananda@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Sushma B S</h3>
                            <span className="post">Joint Secretary</span>
                        </div>
                    </div>
                </div>
               <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Sanjay} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:sanjayu2345@ieee.org"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Sanjay S Tippannavar</h3>
                            <span className="post">Technical Co-ordinator</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        <CommiteeHeading><img src={Female} alt="female"/>WOMEN IN ENGINEERING</CommiteeHeading>
        <div className="container">
            <div className="row">

            <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={ADK} alt=""/>
                        <ul className="social">
                            <li><a href="mailto:adithikraj@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Adithi K Raj</h3>
                            <span className="post">Chairperson</span>
                        </div>
                    </div>
                </div>
               <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Mahi} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:Mahendharn14@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Mahendhar H N</h3>
                            <span className="post">Vice Chairperson</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Chaitra} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:chaitrasrilak@gmail.com "><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>

                        </ul>
                        <div className="team-content">
                            <h3 className="title">Chaitra S</h3>
                            <span className="post">Event Co-ordinator</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Monisha} alt=""/>
                        <ul className="social">
                          <li><a href="mailto:monishahn365@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Monisha S R</h3>
                            <span className="post">Senior Technical Co-ordinator</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="container">
            <div className="row">
            <div class="col-md-1" style={{width: '12.499999995%',
    flex:' 0 0 12.499%',maxWidth: '12.499%'}}></div>
            <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Saswathi} alt=""/>
                        <ul className="social">
                            <li><a href="mailto:saswathi.chakri@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">D Saswathi Srichakri</h3>
                            <span className="post">Secretary</span>
                        </div>
                    </div>
                </div>
               <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Sudhanva} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:sudhanvalm10@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Sudhanva R</h3>
                            <span className="post">Joint Secretary</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Vanditha} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:mvanditha07@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>

                        </ul>
                        <div className="team-content">
                            <h3 className="title">Vanditha M</h3>
                            <span className="post">Technical Co-ordinator</span>
                        </div>
                    </div>
                </div>

              </div>
            </div>
        <CommiteeHeading><img src={Cog} alt="cogs"/>ROBOTICS AND AUTOMATION SOCIETY </CommiteeHeading>
        <div className="container">
            <div className="row">

            <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Jagdeesh} alt=""/>
                        <ul className="social">
                            <li><a href="mailto:jagadeesh6101@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Jagadeesh M B</h3>
                            <span className="post">Chairperson</span>
                        </div>
                    </div>
                </div>
               <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Meghana} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:Meghanaacchu17@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Meghana M</h3>
                            <span className="post">Vice Chairperson</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Gayat} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:gayatrishetti23@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>

                        </ul>
                        <div className="team-content">
                            <h3 className="title">Gayatri V Shetti</h3>
                            <span className="post">Senior Technical Co-ordinator</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Raghu} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:raghavendra422001@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>

                        </ul>
                        <div className="team-content">
                            <h3 className="title">Raghavendra G</h3>
                            <span className="post">Secretary</span>
                        </div>
                    </div>
                </div>

              </div>
            </div>
            <div className="container">
            <div className="row">
            <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    
                </div>
            <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Snehith} alt=""/>
                        <ul className="social">
                            <li><a href="mailto:snehithgowda27@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Snehith K</h3>
                            <span className="post">Joint Secretary</span>
                        </div>
                    </div>
                </div>
               <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Harshith} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:rharshith2697@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">R Harshith</h3>
                            <span className="post">Technical Co-ordinator</span>
                        </div>
                    </div>
                </div>


              </div>
            </div>
        <CommiteeHeading id="b"><img src={Code} alt="code"/>WEB DEVELOPMENT BOARD </CommiteeHeading>
        <div className="container">
            <div className="row">
            <div className="col-md-3 col-sm-6"  data-aos="fade-left" data-aos-duration="2000">
                 
                </div>
            <div className="col-md-3 col-sm-6"  data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Ezu} alt=""/>
                        <ul className="social">
                            <li><a href="mailto:ezhanmohammed@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Mohammed Ezhan</h3>
                            <span className="post">Chief</span>
                        </div>
                    </div>
                </div>
               <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Shomik} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:shomikghosh2020@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Shomik Ghosh</h3>
                            <span className="post">Co-ordinator</span>
                        </div>
                    </div>
                </div>


              </div>
            </div>
        <CommiteeHeading><img src={Pencil} alt="pencil"/>EDITORIAL BOARD </CommiteeHeading>
        <div className="container">
               <div className="row">
               <div className="col-md-3 col-sm-6"  data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Dhan} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:dhanush.srinath@yahoo.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Dhanush Srinath</h3>
                            <span className="post">Chief Editor</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Akshay} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:akshayabee19@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>

                        </ul>
                        <div className="team-content">
                            <h3 className="title">Akshay A B</h3>
                            <span className="post">Editor</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Manju} alt=""/>
                        <ul className="social">
                          <li><a href="mailto:4682ssbj@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Manjunath H T</h3>
                            <span className="post">Editor</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Suprabhu} alt=""/>
                        <ul className="social">
                            <li><a href="mailto:sumanthprabhu2000@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Sumantha Prabhu</h3>
                            <span className="post">Senior Graphic Designer</span>
                        </div>
                    </div>
                </div>
              </div>
               </div>
               <div className="container">
               <div className="row">
               <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Lasitha} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:lasitha.shanth@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Lasitha S</h3>
                            <span className="post">Senior Graphic Designer</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Hardik} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:hardikhard28@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>

                        </ul>
                        <div className="team-content">
                            <h3 className="title">Hardik shettigar </h3>
                            <span className="post">Editor</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Chandana} alt=""/>
                        <ul className="social">
                          <li><a href="mailto:chandanaraju1503@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Chandana raju</h3>
                            <span className="post">Editor</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={Shukla} alt=""/>
                        <ul className="social">
                            <li><a href="mailto:shuklaparthasarathy@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Shukla P</h3>
                            <span className="post">Graphic Designer</span>
                        </div>
                    </div>
                </div>
              </div>
               </div>
               <div className="container">
               <div className="row">
               <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                </div>
                <div class="col-md-1" style={{width: '12.499999995%',
    flex:' 0 0 12.499%',maxWidth: '12.499%'}}></div>
               <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="our-team">
                        <img src={RASHMI} alt=""/>
                        <ul className="social">
                        <li><a href="mailto:rashmirahul21@gmail.com"><img src={mail} alt="mail" style={{width:"3rem"}}/></a></li>
                        </ul>
                        <div className="team-content">
                            <h3 className="title">Rashmi R</h3>
                            <span className="post">Graphic designer</span>
                        </div>
                    </div>
                </div>
              </div>
               </div>
      </MainContainer>
    </>
  );
}
const CaraWhole = styled.div`
        margin:8rem 8rem;
        @media only screen and (max-width: 1024px) {
            margin:8rem 5rem;
        }
        @media only screen and (max-width: 780px) {
            margin:8rem 2rem;
        }
`;

const CaraTotal = styled.div`
    >img{
        height:600px;
        @media only screen and (max-width: 1024px) {
            height:400px;
        }
        @media only screen and (max-width: 1024px) {
            height:200px;
        }
    }
`;

const SubHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    margin-top: 10vh;
    margin-bottom: 5vh;
    text-align: center;
    color: grey;
`;

const CommiteeHeading = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans&display=swap');
    display: flex;
    >img{
        width:2rem;
        height:2rem;
        object-fit: contain;
        margin-right:1rem;
    }
    font-family: 'Merriweather Sans', sans-serif;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-top: 10vh;
    margin-bottom: 5vh;
    text-align: center;
    color: #5089c6;  

`;

const ProfileContainerItem = styled.div`
  /* display: flex;
  border-radius: 10px;
  flex-direction: column; */
  /* align-items: center; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .animated_team{
    position: relative;
    padding: 5px;
    overflow: hidden;
    user-select:none;
    cursor: pointer;
    z-index:-50;
    transition: transform .2s; 
    >.animated_team_2{
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #AEE7E8;
    justify-content: center;
      padding: 10px 20px;
      z-index: 1;
      >.designation{
        @import url('https://fonts.googleapis.com/css2?family=Hina+Mincho&display=swap');
        font-family: 'Hina Mincho', serif;
        font-size: 1.1rem;
        color: rgb(45, 133, 215);
        margin-bottom:10px;
      }
    }
  }

  .animated_team:hover{
    transform: scale(1.1);

  }

  .animated_team::before,
  .animated_team::after {
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: #28C3D4;
  content: "";
  z-index: -3;
  transition: top 300ms ease-in-out, bottom 300ms ease-in-out,
    right 300ms 300ms ease-in-out, left 300ms 300ms ease-in-out,
    width 300ms ease-in-out, height 300ms ease-in-out;
  }
    .animated_team::before {

    top: 0;
    left: 0;
  }
  .animated_team::after {
    bottom: 0;
    right: 0;
  }
  .animated_team:hover::before {
    width: 100%;
  height: 100%;
}
.animated_team:hover::after {
  width: 100%;
  height: 100%;
}
  p {
    @import url('https://fonts.googleapis.com/css2?family=Besley:wght@500&display=swap');
    font-family: 'Besley', serif;
    color: black;
    font-size: 1.8rem;
  }
  img {
    width: 90%;
    margin: 15px 0;
    transition: transform .2s; 
  }
  
`;

const ProfileContainer = styled.div`
  padding: 50px 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  margin: 0 auto;

  @media only screen and (max-width: 1000px) {
    gap: 25px;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
const MainContainer = styled.div`
    background: url(${BangaloreBg}) repeat ;
  > hr {
    margin: 0 auto 4vh auto;
    width: 5rem;
    border: none;
    border-top: 3px dotted #384158;
    height: 1px;
  }
  overflow-x: hidden;
`;
const HeadingTimeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  margin-top: 10vh;
  flex-direction: column;
  color:rgb(7, 148, 241);
  text-align: center;
  @media only screen and (max-width: 780px) {
    font-size: 2.5rem;
  }
`;
export default Team;
