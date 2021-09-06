import  styled from 'styled-components';
import React,{useEffect} from 'react'
import Typewriter from 'typewriter-effect/dist/core';
import NinePointer from '../NinePointer/NinePointer';
import TimeLine from '../Timeline/TimeLine';
import Header from '../Header/Header';
import HomePageCarousel from '../HomePageCarousel/HomePageCarousel';
import Sponsers from '../Sponsers/Sponsers';
import Prayas from '../Prayas/Prayas';
import Mentor from '../Mentor/Mentor';
import BangaloreSection from '../BangaloreSection/BangaloreSection';
import Achivements from '../Achivements/Achivements';
// import StyledFirstPage from '../StyledFirstPage/StyledFirstPage';
import MileStone from '../MileStoneEvent/MileStone';
import Main2 from '../MainEvents/Main2';
import Anime from '../Anime/Anime';
import Typing from '../Typing/Typing';
function Home() {
    useEffect(() => {
        var apps = document.getElementById('apps');
        var typewriter = new Typewriter(apps, {
        delay: 75,
      });
      typewriter
        .pauseFor(1500)
        .typeString('<span style="color:white">Welcome To </span><span style="color:#384158">IEEE</span >- <span style="color:#29C1ED">SJCE</span>')
        // .pauseFor(4000)
        // .deleteChars(21)
        // .typeString('<span style="color:white">Experience the joy of learning with <span><span style="color:#384158">IEEE</span >-<span style="color:#29C1ED">SJCE</span>')
        // .pauseFor(2000)
        // .deleteChars(46)
        // .typeString('<span style="color:#384158">IEEE</span ><span style="color:white"> is a global community to innovate for a better tomorrow and is a trusted voice for engineering and technology around the globe.</span>')
        // .pauseFor(1000)
        .start();
    }, [])
  
      
    return (
        <>
        <Header active="home"/>
        <Anime/>
        {/* <Writing id="apps"></Writing> */}
        <Typing/>
        <Main2/>
         <MainContainer>
             <HomePageCarousel/>
        </MainContainer> 
        <TimeLine/>
        <MileStone/>
        <Achivements/>
        <NinePointer/>
        <BangaloreSection/>
        <Prayas/>
        <Mentor/>
        <Sponsers/>
        </>
    )
}
// const Writing = styled.div`
//     font-size: 3rem;
//     width: 70%;
//     left:10vw;
//     top: 40vh;
//     background-color: transparent;
//     position: absolute;
//     @media only screen and (max-width: 1200px) {
//                 font-size: 2rem;
//         } 
//         @media only screen and (max-width: 1000px) {
//                 font-size: 1.8rem;
//                 top:30vh;
//         }
//         @media only screen and (max-width: 800px) {
//                 font-size: 1.6rem;
//                 top:20vh;
//         }
//         @media only screen and (max-width: 600px) {
//                 font-size: 1.2rem;
//                 top:10vh;
//                 left:10vw;
//                 width:85%;
//         }
//         @media only screen and (max-width: 400px) {
//                 font-size: 0.75rem;
//                 top:10vh;
//                 left:10vw;
//                 width:85%;
//         }
// `;
const MainContainer = styled.div`
    overflow-x:hidden ;
    /* @media only screen and (max-width: 600px) {
            .ieee{
                font-size: 2rem;
            }
        }  */
`
export default Home
