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
            <div data-aos="fade-down" data-aos-duration="2000"><h3>HOUSE OF CARDS</h3>
            <p>A simulation of a political scenario with real world problems. As citizens, we all have voices, but there comes a moment in history which rarely does, such a this. We give you the stage to come and speak about these problems, voice out your opinion, ideas and question the happenings around you.  Go through the form descriptions very carefully.</p>
                <a target="_blank" rel="noreferrer" href='https://docs.google.com/forms/d/e/1FAIpQLSdstCW-NPK_sd3n7chovldbZDkAjZFc6d2rtTO8y_VAGluPjQ/viewform'>Register</a>
                </div>
                <div data-aos="fade-down" data-aos-duration="2000"><h3> IEEEXtreme 15.0 </h3>
                <p>IEEEXtreme is a global challenge in which teams of IEEE Student members - advised and proctored by an IEEE member, and often supported by an IEEE Student Branch compete in a 24-hour time span against each other to solve a set of programming problems.Don't forget to select school as "A48251 - Sri Jayachamarajendra College of Engineering"</p>
                <a target="_blank" rel="noreferrer" href="https://xtreme.vtools.ieee.org/">Register</a>
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
