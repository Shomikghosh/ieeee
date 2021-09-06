import React,{useEffect} from 'react'
import  styled from 'styled-components';
import Typewriter from 'typewriter-effect/dist/core';

import BangaloreBg from '../../assests/images/bangalore_bg.jpg'



function Typing() {
    useEffect(() => {
        var all = document.getElementById('typing_id');
    
        var typewriter = new Typewriter(all, {
            delay: 75,
          });
        
          typewriter
          .pauseFor(2500)
          .typeString('Experience the joy of learning with <span style="color:#4B6587">IEEE-</span><span style="color:rgb(7, 148, 241)">SJCE</span>!')
          .start();
    }, [])
    return (
        <MainContainer data-aos="fade-left" data-aos-duration="2000">
            <div id="typing_id" className="total_type">Experience the joy of learning with IEEE-SJCE</div>
            <div className="imagine">IMAGINE! INNOVATE! INSPIRE!</div>
            <div className="many_activity">IEEE-SJCE conducts many events regularly for students to gain knowledge and encourages them to take active part in all of them. </div>
        </MainContainer>
    )
}
const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align:center;
    flex-direction: column;
    padding:6vh auto;
    background: url(${BangaloreBg}) repeat ;
    overflow-x: hidden;
    >.total_type{
        font-size: 3rem;
        margin:4vh auto;
        @media only screen and (max-width: 780px) {
            font-size: 1.5rem;
        }
    }
    >.imagine{
        font-size: 2.5rem;
        @media only screen and (max-width: 780px) {
            font-size: 1rem;
        }
        margin:1.5vh auto;
    }
    >.many_activity{
        font-size: 2rem;
        @media only screen and (max-width: 780px) {
            font-size: 0.65rem;
        }
        width:70%;
        margin:1.5vh auto 3vh auto;
        color:grey;
    }
`;

export default Typing
