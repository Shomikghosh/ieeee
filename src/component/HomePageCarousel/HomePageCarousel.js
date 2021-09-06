import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import g2 from '../../assests/teamcarasoul/f1.png';
import g3 from '../../assests/GALLERY/g6.jpeg';
import g4 from '../../assests/GALLERY/e7.jpg';
import g5 from '../../assests/GALLERY/g8.jpg';
// import g6 from '../../assests/homepagecarasoul/g6.jpeg';
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
                    // interval={5000}
                    >
                    <Sty>
                        <img src={g2} alt="ard"/>
                    </Sty>
                    <Sty>
                        <img src={g3} alt="orn"/>
                    </Sty>
                    <Sty>
                        <img src={g4} alt="snap"/>
                    </Sty>
                    <Sty>
                        <img src={g5} alt="snap"/>
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
  >img{
        height:700px;
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
