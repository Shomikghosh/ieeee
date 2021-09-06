import React,{useEffect} from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css'
import img_blr from '../../assests/images/logo_Blr.png'
import BangaloreBg from '../../assests/images/bangalore_bg.jpg'



function BangaloreSection() {
    useEffect(() => {
       AOS.init();
    }, [])
        
    return (
        <MainContainer>
        <HeadingTimeline><img src={img_blr} alt="blr"/>Bangalore Section</HeadingTimeline>
            <hr/>
            <SubHeading>IEEE-SJCE has been successfully recognized by IEEE Bangalore section for completing its Silver Jubilee in flying colours. We have also been able to bag the best website award two times in a row.</SubHeading>
        <ThreeCards>
            <div data-aos="fade-down" data-aos-duration="2000"><h3>HAC-SAC 1.0 VIRTUAL HACK-A-THON</h3>
            <p>Student Activities Committee, IEEE Bangalore Section in collaboration with IEEE SIGHT is organising a hackathon! It's free, and it's for everyone.
                Eligible Participants- IEEE Members
                Categories: Agriculture and Healthcare,
                Last date to register : 20th October 2020
                Cash Prizes: 10k, 7.5k and 5k for top three winners.</p>
                <a target="_blank" rel="noreferrer" href='https://docs.google.com/forms/d/e/1FAIpQLSfAAP-OR4AFJLhdfjTfoERi64TG1f003FQwm1Ra4jDOVgsMsQ/closedform'>Click Here</a>
                </div>
                <div data-aos="fade-down" data-aos-duration="2000"><h3>IEEEXTREME MOCK CODING CONTEST</h3>
            <p>IEEE Bangalore Section presents IEEEXtreme Mock Coding Contest-2. Eligibility: Participants who have registered for IEEE XTREME 14.0 When: 11th October 2020 Duration: The contest will last for 6hours 02:00 PM - 08:00 PM IST. The first three winners will be rewarded with a cash prize of INR 2000, 1500 and 1000 respectively.</p>
                <a target="_blank" rel="noreferrer" href="https://www.codechef.com/BXT22020">Register</a>
                </div>
                <div data-aos="fade-down" data-aos-duration="2000"><h3>WEBINARS BY WIE- BANGALORE SECTION</h3>
            <p>13 July 2020; Time: 7-8 pm- Title of talk: Leadership: leading oneself in uncertain times. Speaker: Ms. Santoshi Kittur, PwC | Managing Director Bangalore.
            15 July 2020; Time: 6-7 pm- Title of talk: AI Infusion during COVID 19: The need and the solution. Speaker: Ms.Geetha Adinarayan, Chief architect - AI applications IBM India. Register Soon.</p>
                <a target="_blank" rel="noreferrer" href="https://forms.gle/DHhPeKd5gJeGkANv5">Enroll</a>
                </div>
        </ThreeCards>    
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
const ThreeCards = styled.div`
    padding:5vh 2em;
    display:flex;
    @media only screen and (max-width: 780px) {
        flex-direction:column;
        padding:5vh 2%;
    }
    >div{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius:2rem;
        padding:1em 1.5em;
        margin:0.5em 1em;
        display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            border: 3px solid rgb(7, 148, 241);
            background-color: #E8F0F2;

        >a{
            border: none;
            background-color: rgb(7, 148, 241);
            position: relative;
            width:100%;
            text-align:center;
            padding: 5px 20px;
            margin: 0px 10px 10px 0px;
            float: left;
            border-radius: 8px;
            font-size: 15px;
            display: flex;
            flex-direction: center;
            align-items: center;
            justify-content: center;
            color: #FFF;
            text-decoration: none;	
            transition: all 0.1s;
            -webkit-transition: all 0.1s;
        }
         >h3{
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');
        font-family: 'Libre Baskerville', serif;
        }
    }
   
`;

const MainContainer = styled.div`
    width: 100vw;
    padding:0 15vw;
    padding:2vh auto;
    font-family: 'Comfortaa', cursive;
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Noto+Serif+TC:wght@500&display=swap');
    overflow-x: hidden;
    background: url(${BangaloreBg}) repeat ;

    @media only screen and (max-width: 1200px) {
        width: 100vw;
        padding:0 10vw;

    }
    @media only screen and (max-width: 780px) {
        width: 100vw;
        padding:0 5vw;

    }
    >hr{
        margin: 0 auto 4vh auto;
    width:5rem;
    border:none;
    border-top:3px solid #384158;
    height:1px;
  } 
`;
const HeadingTimeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color:rgb(7, 148, 241);
  border-radius: 20px;
  text-align: center;
  @media only screen and (max-width: 780px) {
    font-size: 2.5rem;
    }
`;
export default BangaloreSection
