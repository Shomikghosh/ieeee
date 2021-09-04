import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import s1 from '../../assests/Sponsers/10.png';
import s2 from '../../assests/Sponsers/11.png';
import s3 from '../../assests/Sponsers/12.png';
import s4 from '../../assests/Sponsers/13.png';
import s5 from '../../assests/Sponsers/14.png';
import s6 from '../../assests/Sponsers/15.png';
import s7 from '../../assests/Sponsers/16.png';
import s8 from '../../assests/Sponsers/17.png';
import s9 from '../../assests/Sponsers/18.png';
import s10 from '../../assests/Sponsers/19.png';
import BangaloreBg from '../../assests/images/bangalore_bg.jpg'


function Sponsers() {

   let wid=window.screen.width
    var settings = {
        // dots: true,
        // infinite: true,
        // slidesToShow: 6,
        // autoPlay:true
        dots: true,
        autoplay:true,
        arrows:false,
        slidesPerRow:wid>1000?4:2,
        pauseOnHover :false,
        slidesToScroll: 1,
        autoplaySpeed:5000
      };
    return (
        <> 
            <MainContainer>
            <HeadingTimeline>Our Sponsers</HeadingTimeline>
            <hr/>
            <Slider {...settings}>
                <div>
                    <StyledImg src={s1} alt="spon"/>
                </div>
                <div>
                   <StyledImg src={s2} alt="spon"/>
                </div>
                <div>
                   <StyledImg src={s3} alt="spon"/>
                </div>
                <div>
                   <StyledImg src={s4} alt="spon"/>
                </div>
                <div>
                   <StyledImg src={s5} alt="spon"/>
                </div>
                <div>
                   <StyledImg src={s6} alt="spon"/>
                </div>
                <div>
                   <StyledImg src={s7} alt="spon"/>
                </div>
                <div>
               <StyledImg src={s8} alt="spon"/>
                </div>
                <div>
                   <StyledImg src={s9} alt="spon"/>
                </div>
                <div>
                   <StyledImg src={s10} alt="spon"/>
                </div>
            </Slider>
            </MainContainer>
        </>
    )
}
const StyledImg = styled.img`
        margin:0 1rem;
        @media only screen and (max-width: 425px) {
               margin:0 2rem;
         }
         @media only screen and (max-width: 395px) {
               margin:0 4rem;
         }
`;

const HeadingTimeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  flex-direction: column;
  color: #7289da;
  text-align: center;
  @media only screen and (max-width: 780px) {
    font-size: 2.5rem;
    }
`;
const MainContainer = styled.div`
    width:100vw;
    padding:3rem;
    background: url(${BangaloreBg}) repeat ;
    margin:0 auto 0 auto;
    @media only screen and (max-width: 900px) {
        width: 100vw;
    }
    >hr{
    margin: 0 auto 4vh auto;
    width:5rem;
    border:none;
    border-top:1px dotted #384158;
    height:1px;

  } 
`;

export default Sponsers
