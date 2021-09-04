import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import g2 from '../../assests/homepagecarasoul/g2.jpeg';
import g3 from '../../assests/homepagecarasoul/g3.jpeg';
import g4 from '../../assests/homepagecarasoul/g4.jpeg';
import g5 from '../../assests/homepagecarasoul/g5.jpeg';
import g6 from '../../assests/homepagecarasoul/g6.jpeg';
// import g8 from '../../assests/homepagecarasoul/g8.jpg';
import g9 from '../../assests/homepagecarasoul/g9.jpg';
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
                    <div>
                        <img src={g2} alt="ard"/>
                    </div>
                    <div>
                        <img src={g3} alt="orn"/>
                    </div>
                    <div>
                        <img src={g4} alt="snap"/>
                    </div>
                    <div>
                        <img src={g5} alt="snap"/>
                    </div>
                    <div>
                        <img src={g6} alt="snap"/>
                    </div>
                    {/* <div>
                        <img src={g8} alt="snap"/>
                    </div> */}
                    <div>
                        <img src={g9} alt="snap"/>
                    </div>
            </Carousel></MainContainer>
        </>
    )
}

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
