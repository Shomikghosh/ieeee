import React,{useEffect} from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'
import WebGif from '../../assests/images/70007-web-development-design.gif'
import EdGif from '../../assests/images/36542-writing.gif'
import Magazinee from '../../assests/Magazine/int.jpg'
import IEEEMagazine from '../../assests/Magazine/IEEE_INTERFACE_2021.pdf'
import WebP from '../../assests/GALLERY/e1.jpg'
import EdP from '../../assests/GALLERY/e20.jpg'

function Board() {
    useEffect(() => {
        if(window.scrollY<=1)
        {
          window.scrollTo(0, window.scrollY+1);
        }else{
          window.scrollTo(0, window.scrollY-1);
        }
    }, [])
    return (
        <MainContainer>
           <Header active="boards"/>
           <BoardsHeading id="web">BOARDS</BoardsHeading> 
           <WebDevBoard >
                <div className="heading" >Web Development Board </div>
                <img className="gif" src={WebGif} alt="web"/>
                <p>Web Development board, a new wing of IEEE SJCE is an exclusive committee for designing and maintaining website and web pages pertaining to IEEE SJCE, its events and spread its motto. For us, WDB is a place where students from various disciplines of the campus meet together to put their creativity to create and design web pages and host them on web securely.<br/><br/>
                <img className="photow" src={WebP} alt="web"/>
                It also encourages the students in the campus to learn languages for web hosting like HTML, CSS, JavaScript, html(server-side scripting) by conducting many technical sessions on them throughout the year, which are hosted by our core committee members.<br/><br/>
                Over the years, WDB has turned out be an integral part of IEEE SJCE, due to the growing importance of web in recent years as it is shaping up as the best source of information. We, at WDB hope to strengthen the knowledge of web designing and hosting among the students to greater extent and work as a team to bring out web pages to create zing and get overwhelming response from the people on our organization and its events.<br/>
                 </p>
           </WebDevBoard>
           <EditorialBoard >
                <div className="heading" id="editorial">EDITORIAL BOARD </div>
                <img src={EdGif} alt="editorial"/>
               <p>At the IEEE EdBoard, we strive to present interesting news and articles, about the latest trends and discoveries in the technology field, while also providing a voice for IEEE-SJCE, its members, and the students.<br/><br/>
               <img className="photow" src={EdP} alt="web"/>
                We publish three editions of the IEEE Interface magazine, every year - the Orientation edition, about IEEE-SJCE's events, workshops, etc; the Tuxedo edition, about the Open Source Software Revolution; and, the Cyberia Edition, which covers a wide array of the latest and greatest news related to technology.<br/><br/>
                We at IEEE SJCE, are glad and excited to announce the release of our annual magazine 'IEEE Interface 2021' edition!<br/><br/>
                <br/><br/>
                </p>
           </EditorialBoard>
           <Magazine>
                <div className="left"> 
                    <img src={Magazinee} alt="magazine"/>
                </div>
                <div className="right">
                    <div className="magazine_title">
                        Our Annual Magazine
                    </div>
                    <div className="magazine_subtitle">
                        IEEE Interface 2021
                    </div>
                    <div className="magazine_content">
                        We at IEEE SJCE, are glad and excited to announce the release of our annual magazine 'IEEE Interface 2021' edition!
                        <br/><br/>
                        We hope you like this edition, packed with articles and knowledge, along with a couple of new additions from the Editorial Board aimed at providing various insights, in light of the recent events surrounding Covid and Mental Health!
                    </div>
                    <div className="magazine-button">
                        <a href="https://drive.google.com/file/d/1ri6fbOJ1RScyc4_JRS80Hd_3bznfyHA_/view"  target="_blank" rel="noreferrer">View Magazine</a>
                        <a  href={IEEEMagazine} download  target="_blank" rel="noreferrer">Download Magazine</a>
                    </div>
                </div>
           </Magazine>
        </MainContainer>
    )
}
const Magazine = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    padding: 2vh 10rem;
    @media only screen and (max-width: 900px) {
          padding: 2vh 2rem;
        }
    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }
    >.left{
        >img{
            width:20rem;
            max-width: 100%;
        }
    }
    >.right{
        display: flex;
        align-items: left;
        justify-content:flex-start;
        flex-direction: column;
        width:30rem;
        padding: 0 3rem;
        max-width: 100%;
        @media only screen and (max-width: 900px) {
            padding: 0;
            width:100%;
        }
        >.magazine_title{
            font-size: 1.6rem;
            padding:2vh 0;
            font-weight: 600;
        }
        >.magazine_subtitle{
            color: #2D85D7;
            padding:1vh 0;
            font-size: 1.4rem;
        }
        >.magazine-button{
                /* display: flex; */
                align-items: center; 
                justify-content:space-between; 
                >a{
                    margin: 3rem 1.5rem;

                    border: none;
                    background-color: #3498DB;
                    border-bottom: 5px solid #2980B9;
                    text-shadow: 0px -2px #2980B9;
                    position: relative;
                    padding: 5px 20px;
                    margin: 0px 10px 10px 0px;
                    float: left;
                    border-radius: 8px;
                    font-size: 15px;
                    color: #FFF;
                    text-decoration: none;	
                    transition: all 0.1s;
                    -webkit-transition: all 0.1s;
                }
            }
    }
`
const MainContainer = styled.div`
`;

const EditorialBoard = styled.div`
    .heading{
        display:flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
    }
    padding:1rem 5rem;
    >img{
        float: right;
        width:20rem;
        max-width: 100%;
    }
    >p{
        font-size:1.4rem;
        text-align: justify;
        >.photow{
            width: 30rem;
            max-width: 100%;
            display:block;
            float:left;
            padding:1rem;
        }
    }
    @media only screen and (max-width: 900px) {
        padding: 1rem 1rem;
    }
`;


const WebDevBoard = styled.div`
    .heading{
        display:flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
    }
    padding:1rem 5rem;
    >.gif{
        float: left;
        width:20rem;
        max-width: 100%;
    }
    >p{
        font-size:1.4rem;
        text-align: justify;
        >.photow{
            width: 30rem;
            max-width: 100%;
            display:block;
            float:right;
            padding:1rem;
        }
    }
    @media only screen and (max-width: 900px) {
        padding: 1rem 1rem;
    }
`;


const BoardsHeading = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    margin:15vh 0 5vh 0;
`;
export default Board
