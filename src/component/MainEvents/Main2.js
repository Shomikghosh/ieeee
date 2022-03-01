import React from 'react'
import styled from 'styled-components'
// import CN1 from '../../assests/Main2/CN-1.jpg'
// import CN2 from '../../assests/Main2/CN-2.jpg'
// import IEEEDay from '../../assests/Main2/ieee-day.jpg'
// import Passio from '../../assests/Main2/passio.jpg'
// import Pod from '../../assests/Main2/pod.jpg'
import EDS from '../../assests/Main2/edstalk.jpg'
import Sold from '../../assests/Main2/sold.jpg'
import sql from '../../assests/Main2/sql.jpg'
// import BGMI from '../../assests/Main2/bgmi.jpg'
import ex from '../../assests/Main2/ex.jpg'
import mem2 from '../../assests/Main2/mem2.jpg'
// import talk from '../../assests/Main2/talk.png'
// import imgp from '../../assests/Main2/imgp.jpg'
// import mem from '../../assests/Main2/mem.jpg'
// import Py from '../../assests/Main2/py.jpg'
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
                        <h3 classnName="content_head">EXORDIUM</h3>
                            
                        You might have seen us across the campus by now, conducting some amazing events .<br/>
                        But, that's just the beginning. Because we have a LOT MORE to offer.<br/>
                        Wondering what we have in store for you guys, and how you can be a part of this amazing community? Well, we have just the right thing for you . <br/>
                        Presenting to you EXORDIUM-Exclusively for First years where you can meet us virtually for a session assured to be fun along with some exploring and learning.<br/>
                        <br/>
                        Platform - Google Meet<br/>
                        Date - 3rd & 4th February<br/>
                        Timings - 6:30 PM (3rd February)<br/>
                        <br/>
                        Fill the Google form and get yourself registered,Link below!
                        <br/>
                        For any queries you can contact us:<br/>
                        Mukul: 9523453421<br/>
                        Raghavendra: 8073711862

                        <div className="buttons">
                            <a href="https://bit.ly/ieee_sjce_exordium"  className="reg"  target="_blank" rel="noreferrer">Register</a>
                            <a href="https://instagram.com/ieee_sjce/" className="iconInsta" title="Instagram" target="_blank" rel="noreferrer"><img className="socials" src={inn} alt="in-link"/></a>
                            <a href="https://facebook.com/ieeesjce/"  title="Facebook" target="_blank" rel="noreferrer"><img className="socials" src={fb} alt="fb-link"/></a>

                        </div> 
                    </p>
                </div>
                <div  data-aos="fade-left" data-aos-duration="2000">
                    <img src={ex} alt="pos"/>
                </div>
           </SubMain>
            {/* <SubMain >
                <div data-aos="fade-right" data-aos-duration="2000">
                    <img src={mem2} alt="pos"/>
                </div>
                <div className="content_whole" data-aos="fade-left" data-aos-duration="2000">
                    <p className="content_main">
                        <h3 classnName="content_head">Membership drive</h3>

                        OFFLINE MEMBERSHIP DRIVE IS NOW OPEN<br/>
                        <br/>
                        Avail discounts on IEEE workshops and other events.
                        <br/>
                        Chance to participate in the world's biggest coding competition IEEEXtreme.
                        <br/>
                        Get exclusive access to IEEE Xplore Digital library, newsletters and magazines.
                        <br/>
                        Members will get an opportunity to attend various webinars, conferences that occurs worldwide.
                        <br/>
                        Members can get their own GSuite account with many other perks.
                        <br/>
                        Join IEEE today, build your network and be a part of large international community!
                        IEEE membership will add value to your portfolio.<br/><br/>
                        Starting from 29th November, Monday :
                        <br/>
                        10:30 AM at NESCAFE<br/>
                        1:30 PM at ADMIN LOBBY<br/><br/>

                        For any kind of doubts and queries contact:<br/>
                        Suyash: 9660069101<br/>
                        Amrutha K R: 9741102124<br/><br/>
                        <div className="buttons">
                            <a href="https://cutt.ly/IEEE_Register"  className="reg"  target="_blank" rel="noreferrer">Join</a>
                            <a href="https://instagram.com/ieee_sjce/" className="iconInsta" title="Instagram" target="_blank" rel="noreferrer"><img className="socials" src={inn} alt="in-link"/></a>
                            <a href="https://facebook.com/ieeesjce/"  title="Facebook" target="_blank" rel="noreferrer"><img className="socials" src={fb} alt="fb-link"/></a>
                        </div> 
                    </p>
                </div>
           </SubMain> */}
           <SubMain >
                <div data-aos="fade-right" data-aos-duration="2000">
                    <img src={sql} alt="pos"/>
                </div>
                <div className="content_whole" data-aos="fade-left" data-aos-duration="2000">
                    <p className="content_main">
                        <h3 classnName="content_head">SQL BOOTCAMP</h3>
Quick Question:<br/> 
How do you fetch the second highest salary in the given database? Or, even simpler, how do you talk with your database? Is it just a bunch of entries, or is there more to it?<br/><br/>

Now, if the above question presents itself to be intriguing, IEEE-SJCE has got your back .<br/>

The WIE wing brings forth SQL BOOTCAMP<br/><br/>
            
A 3 - day workshop wherein you can learn the basics of 
SQL - Structured Query Language, a conventional language that is used to communicate with the database. It has a wide range of applications in today's world especially in data science tools and with minimal code, you can do absolute wonders.<br/> 
There is also a hands-on project segment, where you will be building a solid backend component for the given frontend.<br/> 

<br/>
Registration is free!<br/>

Platform: Google Meet <br/>
Date: 22nd, 23rd & 24th January 2022<br/>

<br/>
For more details, contact<br/>
D Saswathi Srichakri - 6366071033 <br/>
Vanditha M- 9448725150
                        <div className="buttons">
                            <a href="https://bit.ly/IEEE_SQL"  className="reg"  target="_blank" rel="noreferrer">Register</a>
                            <a href="https://instagram.com/ieee_sjce/" className="iconInsta" title="Instagram" target="_blank" rel="noreferrer"><img className="socials" src={inn} alt="in-link"/></a>
                            <a href="https://facebook.com/ieeesjce/"  title="Facebook" target="_blank" rel="noreferrer"><img className="socials" src={fb} alt="fb-link"/></a>
                        </div> 
                    </p>
                </div>
           </SubMain>
           {/* <SubMain >
                <div className="content_whole"  data-aos="fade-right" data-aos-duration="2000">
                    <p className="content_main">
                        <h3 classnName="content_head">SOLDERING AND ETCHING WORKSHOP </h3>
                            
                        The Electron Devices Society brings forth yet another one-of-a kind event, SOLDERING AND ETCHING WORKSHOP 
                        a 3-day Workshop that gives you a hands-on experience of Soldering and Etching with theoretical and practical sessions.
                            
                            <br/><br/>
                            Date: 17, 18 and 19 December 2021<br/><br/>
                            Registration Fees(Team of two):<br/>
                            IEEE Members (with EDS): Free <br/>
                            IEEE Members (without EDS): Rs. 250/-<br/>
                            Non Members: Rs. 450/-
                            <br/><br/>
                            Price of component kit: Rs. 650/-<br/>
                            Note: One kit is compulsory for every team.
                            <br/><br/>
                            Limited seats only‼️<br/>
                            Priority will be given to IEEE members.<br/><br/>

                            For any kind of doubts and queries contact:<br/>
                            Mukul - 9523453421<br/>
                            Sushma BS - 8277133311<br/>
                            <br/>

                        <div className="buttons">
                            <a href="https://bit.ly/soldering_etching"  className="reg"  target="_blank" rel="noreferrer">Register</a>
                            <a href="https://instagram.com/ieee_sjce/" className="iconInsta" title="Instagram" target="_blank" rel="noreferrer"><img className="socials" src={inn} alt="in-link"/></a>
                            <a href="https://facebook.com/ieeesjce/"  title="Facebook" target="_blank" rel="noreferrer"><img className="socials" src={fb} alt="fb-link"/></a>

                        </div> 
                    </p>
                </div>
                <div  data-aos="fade-left" data-aos-duration="2000">
                    <img src={Sold} alt="pos"/>
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
                min-width: 100%;
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
