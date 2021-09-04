import React from 'react'
import  styled from 'styled-components';
import documentation from '../../assests/images/documentation.svg'
import innovation from '../../assests/images/innovation.svg'
import openness from '../../assests/images/openness.svg'
import plugins from '../../assests/images/plugins.svg'
import stability from '../../assests/images/stability.svg'
import workspace from '../../assests/images/workspace.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Whatwe from '../../assests/images/what_bg.jpg'

function NinePointer() {
        AOS.init();
    return (
        <MainContainer>
            <HeadingTimeline>What We Stand For</HeadingTimeline>
            <hr/>
            <SubHeading>IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE SJCE and its members inspire a global community through its highly cited workshops, seminars, professional and educational activities.</SubHeading>
            <SubMainContainer>
                 <div  ><img src={documentation} alt="icon"/><div><div className="head">WORKSHOPS</div><div className="rest">Attend seminars and workshops on the most trending and interesting topics led by leading scientists and industry personnel<br/> The major workshops conducted are :<strong>VPM, Soldering and Etching, Robotics.</strong></div></div></div>
                 <div  ><img src={innovation} alt="icon"/><div><div className="head">SEMINARS</div><div className="rest">IEEE-SJCE conducts many technical talks, seminars and panel discussions during its technical fests.<strong>PAPYRUS</strong>  encourages students to write technical papers.</div></div></div>
                  <div  ><img src={openness} alt="icon"/><div><div className="head">COMPETITIONS</div><div className="rest">IEEE-SJCE conducts many competitions during its technical fests-TUXEDO and CYBERIA.<br/> Some of the competitions are :<strong>Amaze, Fury road and coding owl.</strong></div></div></div>
                  <div  ><img src={plugins} alt="icon"/><div><div className="head">ACTIVITIES</div><div className="rest">There are a lot of technical and non technical activities that are undertaken here at IEEE to encourage students to learn in a way which inspires them to do so.</div></div></div>
                  <div  ><img src={stability} alt="icon"/><div><div className="head">PERSONALITY DEVELOPMENT</div><div className="rest">Soft skills are one of the most important attributes in todays world. We at IEEE aspire to inculcate values that define us as people who are ethically adept and vision driven.</div></div></div>
                  <div  ><img src={workspace} alt="icon"/><div><div className="head">MAGAZINE</div><div className="rest">We publish three editions of the IEEE Interface magazine, every year :<strong>The Orientation edition, The Tuxedo edition, The Cyberia Edition.</strong></div></div></div>
            </SubMainContainer>           
        </MainContainer>
    )
}
const SubHeading = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-direction: column;
  text-align: center;
  color: #787A91;
  margin-bottom: 2rem;
`;
const HeadingTimeline = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500&display=swap');
    display: flex;
    font-family: 'Noto Serif TC', serif;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    flex-direction: column;
    color: #1D5DC3;
    text-align: center;
  @media only screen and (max-width: 780px) {
    font-size: 2.5rem;
    }
`;
const MainContainer = styled.div`
    display: block;
    padding:3em 6em;
    background: url(${Whatwe}) repeat ;
    overflow-x: hidden; 
    @media only screen and (max-width: 780px) {
        padding:3em 1em;
    }
    >hr{
    margin: 0 auto 4vh auto;
    width:5rem;
    border-color: #1D5DC3;
    border-width: 5px;
    border-style:  none;
    border-top-style: dotted;
    background-color: white;
    height:1px;

  } 
`;
const SubMainContainer = styled.div`
    margin:0 auto;
    width:1140px;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 13px;
    @media only screen and (max-width: 780px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(6, 1fr);

    }
    >div{
        background-color:rgb(7, 148, 241);
        color: white;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        margin-top:1rem;
        border-radius:10px ;
        padding:1vh 1rem;
        display: flex;
        >img{
            height:15vh;
        }
        >div{
            margin-left:2rem;
            display:flex;
            flex-direction: column;
            >.head{
                font-weight: 700;
            }
            @media only screen and (max-width: 780px) {
               
                margin-left:1rem;
             }
             @media only screen and (max-width: 500px) {
               
               margin-left:1rem;
            }
        }
        
    }
`;

export default NinePointer
