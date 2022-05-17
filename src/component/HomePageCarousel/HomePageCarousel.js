import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import g2 from '../../assests/homepagecarasoul/ori22.jpg';
import g3 from '../../assests/GALLERY/g6.jpeg';
import g4 from '../../assests/GALLERY/e7.jpg';
import g5 from '../../assests/GALLERY/g8.jpg';

import award from '../../assests/homepagecarasoul/award.JPG';
// import g8 from '../../assests/homepagecarasoul/g8.jpg';
// import g9 from '../../assests/homepagecarasoul/g9.jpg';
import styled from 'styled-components'
import BangaloreBg from '../../assests/images/bangalore_bg.jpg'
function HomePageCarousel() {
    return (
        <> <MainContainer>
            <Carousel showThumbs={false}
                    showStatus={false}
                    dynamicHeight={false}
                    // autoPlay={true}	
                    // interval={10000}
                    >
                    <Sty>
                        <img src={award} alt="ard"/>
                        <div className="centered"><span className="ieee">IEEE-</span><span className="sjce">SJCE</span><br/>IEEE is a global community to innovate for a better tommorrow and is a trusted voice for engineering and technology around</div>
                    </Sty>
                    <Sty>
                        <img src={g2} alt="orn"/>
                        <div className="centered"><span className="normal">GREAT</span> <span className="sjce">PERFORMANCE</span><br/>A
											driven team that endures challenges for the<br/>
											overall wellbeing and development of the club</div>
                    </Sty>
                    <Sty>
                        <img src={g4} alt="snap"/>
                        <div className="centered"><span className="normal">TECH-</span> <span className="sjce">KNOW</span><span className="normal">-LOGY</span><br/>To
											adapt to the growth and development in the tech<br/>
											arena, several hands-on workshops are carried on.</div>
                    </Sty>
                    <Sty>
                        <img src={g5} alt="snap"/>
                        <div className="centered"><span className="normal">EQUALITY ENSURES THE GROWTH</span> <span className="sjce">PROWESS</span><br/>Women empowerment in all technical aspects is the goal of
												'Women in Engineering.'</div>
                    </Sty>
                    {/* <div>
                        <img src={g6} alt="snap"/>
                    </div> */}
                    {/* <div>
                        <img src={g8} alt="snap"/>
                    </div> */}
                    {/* <div>
                        <img src={g9} alt="snap"/>
                    </div> */}
            </Carousel></MainContainer>
        </>
    )
}
const Sty = styled.div`
  position: relative;
  text-align: center;
  >img{
        height:700px;
        @media only screen and (max-width: 780px) {
            height:30vh;
            }
    }
    >div{
        >.normal{
            font-size:4rem;
            color:white;
            font-weight:600;
            @media only screen and (max-width: 780px) {
            font-size: 1.25rem;
            }
        }
        >.ieee{
            font-size:4rem;
            font-weight:600;
            color:rgb(7, 148, 241);
            @media only screen and (max-width: 780px) {
            font-size: 1.25rem;
            }
        }
        >.sjce{
            font-size: 4rem;
            font-weight:600;
            color:rgb(7, 148, 241);
            @media only screen and (max-width: 780px) {
            font-size: 1.25rem;
            }
        }
        position: absolute;
        top: 50%;
        left: 50%;
        width:100%;
        transform: translate(-50%, -50%);
        color:white;
        font-size: 2rem;
        text-shadow:1.25px 0 0 #000, 0 -1.25px 0 #000, 0 1.25px 0 #000, -1.25px 0 0 #000;
        @media only screen and (max-width: 780px) {
            font-size: 0.75rem;
            }
    }
`;

const MainContainer = styled.div`
    width: 80%;
    margin:2vh auto;
    padding:2vh auto;
    background: url(${BangaloreBg}) repeat ;
    @media only screen and (max-width: 780px) {
    width:100%;
    }
  
`;

export default HomePageCarousel
