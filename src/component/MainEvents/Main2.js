import React from 'react'
import styled from 'styled-components'
// import CN1 from '../../assests/Main2/CN-1.jpg'
// import CN2 from '../../assests/Main2/CN-2.jpg'
import IEEEDay from '../../assests/Main2/ieee-day.jpg'
import Py from '../../assests/Main2/py.jpg'
// import SIM2 from '../../assests/Main2/sim2.0.png'
import BangaloreBg from '../../assests/images/bangalore_bg.jpg'
import fb from '../../assests/images/facebook.png'
import inn from '../../assests/images/instagram.png'
import './styles.css'
function Main2() {
    return (
        <MainContainer>
            <HeadingTimeline>Events</HeadingTimeline>
            <StyledHr/>
            <SubMain >
                <div className="content_whole"  data-aos="fade-right" data-aos-duration="2000">
                    <p className="content_main">
                        <h3 classnName="content_head">Python Bootcamp</h3>

                            In 2021, Python is the most widely used multi-purpose programming language. Name a domain, and you'll find Python. In such times, do you wish to learn Python too? And turn your amazing ideas into reality using Python?<br/>
                            <br/>
                            The RAS wing brings to you,Python Bootcamp.  
                            <br/>
                            This workshop is intended for the beginners and you get to take back the expertise of Python language + several projects + a certificate and not to forget, loads of fun.<br/><br/>
                            We also have planned quizzes, logic building assignments to make sure you leave no stone unturned whilst learning Python.  
                            <br/><br/>
                            Date - 24th-26th September<br/>
                            Platform - Google Meet<br/>
                            <br/>
                            Free registration. Open for all. 
                            <br/>

                            People without laptops, don't worry! Google Colab works on smartphones too
                            <br/><br/>
                            For any queries, contact: <br/>
                            Raghavendra G - 8073711862<br/>
                            R Harshith - 8073811955

                        <div className="buttons">
                            <a href="https://bit.ly/3nEaBmM"  className="reg"  target="_blank" rel="noreferrer">Register</a>
                            <a href="https://www.instagram.com/ieee_sjce/" className="icoInsta" title="Instagram"><img className="socials" src={inn} alt="in-link"/></a>
                            <a href="https://www.facebook.com/ieeesjce/"  title="Facebook"><img className="socials" src={fb} alt="fb-link"/></a>
                        </div> 
                    </p>
                </div>
                <div  data-aos="fade-left" data-aos-duration="2000">
                    <img src={Py} alt="pos"/>
                </div>
           </SubMain>
            <SubMain >
                <div data-aos="fade-right" data-aos-duration="2000">
                    <img src={IEEEDay} alt="pos"/>
                </div>
                <div className="content_whole" data-aos="fade-left" data-aos-duration="2000">
                    <p className="content_main">
                        <h3 classnName="content_head">IEEE DAY 2021</h3>
                        Stuck with loads of classes and piling assignments? We're here to change your pace and give you a break from the monotonous routine. IEEE DAY 2021 is just around the corner, and we are excited to present to you IEEE ECLECTIC, a month-long procession of exciting events to amp up our celebrations!
                        <br/><br/>
                        To commemorate this special occasion, we have an exclusive assortment of events, covering both Technical and non-Technical domains lined up for y'all.<br/>
                        There is plenty of knowledge to be taken away, and exciting prizes up for grabs!
                        <br/><br/>
                        The events will begin from the 20th of September, and go on till the 17th of October. 
                        <br/><br/>
                        Do keep an eye on our Instagram page for links and further updates.<br/>
                        Make sure not to miss out on any of the events!<br/><br/>
                        For any queries, contact: <br/>
                        Chinmaya K - 8762361434<br/>
                        Shivraj Nath - 8837282287 
                        <div className="buttons">
                            <a href="https://www.instagram.com/ieee_sjce/" className="icoInsta" title="Instagram"><img className="socials" src={inn} alt="in-link"/></a>
                            <a href="https://www.facebook.com/ieeesjce/"  title="Facebook"><img className="socials" src={fb} alt="fb-link"/></a>
                        </div> 
                    </p>
                </div>
           </SubMain>
            {/* <SubMain >
                <div className="content_whole"  data-aos="fade-right" data-aos-duration="2000">
                    <p className="content_main">
                        <h3 classnName="content_head">Simtool 2.0</h3>

                            The EDS chapter of IEEE-SJCE brings you a 3-day workshop, SIMTOOL 2.0 <br/>
                            <br/>
                            The workshop focuses mainly on the simulation of various circuits using TINA-TI software and CEDAR logic simulator. Learning these tools will help you simulate various circuits for your projects.  
                            <br/>
                            It will be an interactive session and  e-certificates will be given to the participants.  
                            <br/><br/>
                            Date - 3rd, 4th & 5th September 2021 <br/>
                            Platform - Google Meet<br/>
                            <br/>
                            Free registration. Open for all! 
                            <br/>
                            Limited Seats Only!!
                            Hurry up and get yourself registered.
                            <br/>

                            Meeting link and other details will be informed to the registered participants via Whatsapp group.
                            <br/><br/>
                            For any queries, contact: <br/>
                            Mukul - 9523453421<br/>
                            Sushma BS - 8277133311

                        <div className="buttons">
                            <a href="https://bit.ly/3krMQv6"  className="reg"  target="_blank" rel="noreferrer">Register</a>
                            <a href="https://www.instagram.com/ieee_sjce/" className="icoInsta" title="Instagram"><img className="socials" src={inn} alt="in-link"/></a>
                            <a href="https://www.facebook.com/ieeesjce/"  title="Facebook"><img className="socials" src={fb} alt="fb-link"/></a>
                        </div> 
                    </p>
                </div>
                <div  data-aos="fade-left" data-aos-duration="2000">
                    <img src={SIM2} alt="pos"/>
                </div>
           </SubMain> */}
           {/* <SubMain >
                <div data-aos="fade-right" data-aos-duration="2000">
                    <img src={CN2} alt="pos"/>
                </div>
                <div className="content_whole" data-aos="fade-left" data-aos-duration="2000">
                    <p className="content_main">
                        <h3 classnName="content_head">Webinar by Coding Ninja</h3>
                        Internships, Placements and Interviews - do these words make you anxious?! Are you searching for sources to accelerate your preparations to ace those technical interviews?
                        <br/><br/>
                        Coding Ninjas in association with IEEE-SJCE presents a webinar on "ROADMAP TO CRACK INTERNSHIP AND PLACEMENT INTERVIEWS" followed by "JUST CODE IT", a coding event .
                        <br/><br/>
                        The talk will be delivered by Rajat Saxena (SE, Facebook) who will take you through the stages of preparation for internships and placements, and an interactive session with Campus Hero, Hardik Khandelwal (SDE, Amazon). There will be a quiz conducted at the end of the webinar, where the winners will get exciting rewards from Coding Ninjas.
                        <br/><br/>
                        🗓️Date - 28th August 2021<br/>
                        🕰️Time - 4PM - 5PM<br/>
                        <div className="buttons">
                            <a href="http://bit.ly/3gtDvSe"  className="reg" target="_blank" rel="noreferrer">Register</a>
                            <a href="https://www.instagram.com/ieee_sjce/" className="icoInsta" title="Instagram"><img className="socials" src={inn} alt="in-link"/></a>
                            <a href="https://www.facebook.com/ieeesjce/"  title="Facebook"><img className="socials" src={fb} alt="fb-link"/></a>
                        </div> 
                    </p>
                </div>
           </SubMain>
           <SubMain>
                <div className="content_whole" data-aos="fade-right" data-aos-duration="2000">
                    <p className="content_main">
                        <h3 classnName="content_head">Just Code It</h3>
                        To all the geeks out there, it's time to bring out your analytical and problem-solving skills on board. The competitive coding event will comprise of 5 questions with varying levels of difficulty.<br/>
                        Further instructions will be sent to your respective e-mail IDs upon registration.<br/>
                        <br/>
                        🗓️Date - 29th August 2021<br/>
                        🕰️Time - 6PM - 8PM<br/>
                        <br/>
                        Register soon!!<br/><br/>
                        Do follow our Instagram handle for more updates.<br/><br/>
                        For further details, contact:<br/>
                        Chinmaya K - 8762361434<br/>
                        Shivraj Nath - 8837282287 
                        <div className="buttons">
                            <a href="https://bit.ly/3yeswSK"  className="reg"  target="_blank" rel="noreferrer">Register</a>
                            <a href="https://www.instagram.com/ieee_sjce/" className="icoInsta" title="Instagram"><img className="socials" src={inn} alt="in-link"/></a>
                            <a href="https://www.facebook.com/ieeesjce/"  title="Facebook"><img className="socials" src={fb} alt="fb-link"/></a>
                        </div> 
                    </p>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000">
                    <img src={CN1} alt="pos"/>
                </div>
           </SubMain> */}
        </MainContainer>
    )
}
const StyledHr = styled.hr`
    margin: 0 auto 4vh auto;
    width:5rem;
    border:none;
    border-top:3px solid #384158;
    height:1px;

`;
const HeadingTimeline = styled.div`
  display:s flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  flex-direction: column;
  color:rgb(7, 148, 241);
  text-align: center;
  @media only screen and (max-width: 780px) {
    font-size: 2.5rem;
    }
`;
const SubMain = styled.div`
    display: flex;
    margin: 2vh auto;
    @media only screen and (max-width: 780px) {
        flex-direction: column;
    }
    >div{
        margin:0 1rem;
        max-width: 100%;
        >img{
            height:40rem;
            min-width: 100%;
            @media only screen and (max-width: 1000px) {
                width:30rem;
            }
            @media only screen and (max-width: 700px) {
                width:20rem;
            }
            @media only screen and (max-width: 400px) {
                width:15rem;
            }
            padding:1rem;
            margin:1rem auto;
            border-radius:10px;
            border: 5px solid rgb(7, 148, 241);
        }
        
    }
    >.content_whole{
        margin:0 1rem;
        max-width: 100%;

        >.content_main{
            @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@600&display=swap');
            font-family: 'Barlow', sans-serif;
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content:center;
            width:100%;
            height: 100%;
            padding:2rem 3rem;
            border-radius:10px;
            border: 5px solid rgb(7, 148, 241);
            background-color: #E8F0F2;
            @media only screen and (max-width: 1000px) {
                padding:2rem ;
            }
            @media only screen and (max-width: 1000px) {
                padding:1rem ;
            }
            >h3{
                font-weight: 600;
                color: rgb(7, 148, 241);
                font-size:2.8rem;
                margin-bottom: 2rem;
            }
            >.buttons{
                >.reg{
                    border: none;
                    background-color: rgb(7, 148, 241);
                    position: relative;
                    padding: 5px 20px;
                    margin: 0px 10px 10px 0px;
                    float: left;
                    border-radius: 8px;
                    font-size: 1.2rem;
                    display: flex;
                    flex-direction: center;
                    align-items: center;
                    color: #FFF;
                    text-decoration: none;	
                    transition: all 0.1s;
                    -webkit-transition: all 0.1s;
                } 
                width: 100%;
                margin:2vh 0;
                display: flex;
                justify-content: flex-start;
            }
            
        }
    }
`;

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
    background: url(${BangaloreBg}) repeat ;
    overflow-x: hidden;
`;
export default Main2
