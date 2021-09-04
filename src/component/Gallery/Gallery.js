import React ,{useEffect, useState} from 'react'
import Header from '../Header/Header'
import  styled from 'styled-components';
import CN_Workshop from '../../assests/GALLERY/CN_workshop.jpeg'
import Tuxedo_Talk from '../../assests/GALLERY/tuxedo_talk.jpeg'
import Prayas_img from '../../assests/GALLERY/prayas_img.jpeg'
import Soldering from '../../assests/GALLERY/s and e.jpeg'
import Orientation from '../../assests/GALLERY/orientation_img.jpeg'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


import e1 from '../../assests/GALLERY/e1.jpg';
import e2 from '../../assests/GALLERY/e2.jpg';
import e3 from '../../assests/GALLERY/e3.JPG';
import e4 from '../../assests/GALLERY/e4.jpg';
import e5 from '../../assests/GALLERY/e5.jpg';
import e6 from '../../assests/GALLERY/e6.jpg';
import e7 from '../../assests/GALLERY/e7.jpg';
import e8 from '../../assests/GALLERY/e8.jpg';
import e9 from '../../assests/GALLERY/e9.jpg';
import e10 from '../../assests/GALLERY/e10.jpg';
import e11 from '../../assests/GALLERY/e11.jpg';
import e12 from '../../assests/GALLERY/e12.JPG';
import e13 from '../../assests/GALLERY/e13.JPG';
import e14 from '../../assests/GALLERY/e14.JPG';
import e15 from '../../assests/GALLERY/e15.jpg';
import e16 from '../../assests/GALLERY/e16.jpg';
import e17 from '../../assests/GALLERY/e17.jpeg';
import e18 from '../../assests/GALLERY/e18.jpg';
import e19 from '../../assests/GALLERY/e19.jpg';
import e20 from '../../assests/GALLERY/e20.jpg';
import e21 from '../../assests/GALLERY/e21.jpg';
import e22 from '../../assests/GALLERY/e22.jpg';
import e23 from '../../assests/GALLERY/e23.jpg';

import vid1 from '../../assests/videos/vid1.mp4'
import vid2 from '../../assests/videos/vid4.mp4'
import vid3 from '../../assests/videos/cod.mp4'
import vid4 from '../../assests/videos/prayas.mp4'

import BangaloreBg from '../../assests/images/bangalore_bg.jpg'

function Gallery() {
    useEffect(() => {
        if(window.scrollY<=1)
        {
          window.scrollTo(0, window.scrollY+1);
        }else{
          window.scrollTo(0, window.scrollY-1);
        }
    }, [])
    const images = [
        {
            original: e1,
            thumbnail: e1,
        },
        {
            original: e2,
            thumbnail: e2,
        },
        {
            original: e3,
            thumbnail: e3,
        },
        {
            original: e4,
            thumbnail: e4,
        },
        {
            original: e5,
            thumbnail: e5,
        },
        {
            original: e6,
            thumbnail: e6,
        },
        {
            original: e7,
            thumbnail: e7,
        },
        {
            original: e8,
            thumbnail: e8,
        },
        {
            original: e9,
            thumbnail: e9,
        },
        {
            original: e10,
            thumbnail: e10,
        },
        {
            original: e11,
            thumbnail: e11,
        },
        {
            original: e12,
            thumbnail: e12,
        },
        {
            original: e13,
            thumbnail: e13,
        },
        {
            original: e14,
            thumbnail: e14,
        },
        {
            original: e15,
            thumbnail: e15,
        },

        {
            original: e16,
            thumbnail: e16,
        },
        {
            original: e17,
            thumbnail: e17,
        },
        {
            original: e18,
            thumbnail: e18,
        },
        {
            original: e19,
            thumbnail: e19,
        },
        {
            original: e20,
            thumbnail: e20,
        },
        {
            original: e21,
            thumbnail: e21,
        },
        {
            original: e22,
            thumbnail: e22,
        },
        {
          original: e23,
          thumbnail: e23,
        },
        {
            original: Tuxedo_Talk,
             thumbnail:Tuxedo_Talk,
        },
        {
            original: Prayas_img,
            thumbnail:Prayas_img,
        },
        {
            original: Soldering,
            thumbnail:Soldering,
        },
        {
            original: Orientation,
            thumbnail:Orientation,
        }
      ];
    return (
        <>
            <Header active="gallery"/>
            <MainContainer>
            <HeadingTimeline>Gallery</HeadingTimeline>
            <hr/>
            <ImageGallery items={images} />
             <HeadingTimeline>Images</HeadingTimeline>
            <GalleryDiv>
                <div >
                    <div className="image-hover-image">
                        <img src={CN_Workshop} alt="gallery"/>
                    </div>
                        <div className="image-hover-text">
                        <div className="image-hover-text-bubble">
                            <div className="image-hover-text-title">Computer Network Workshop</div>
                            <div className="image-hover-text-rest">TUXEDO'19, computer networks workshop was held to introduce students to the internet</div>
                        </div>
                    </div>
                </div>
                <div>
                   <div className="image-hover-image">
                        <img src={Tuxedo_Talk}  alt="gallery"/>
                    </div>
                        <div className="image-hover-text">
                        <div className="image-hover-text-bubble">
                            <div className="image-hover-text-title">TUXEDO '19</div>
                            <div className="image-hover-text-rest">As a part of TUXEDO'19, A technical talk by Mr. Kiran M, who is currently working at Intel, Bangalore.</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="image-hover-image">
                            <img src={Prayas_img}  alt="gallery"/>
                        </div>
                        <div className="image-hover-text">
                        <div className="image-hover-text-bubble">
                            <div className="image-hover-text-title">PRAYAS</div>
                            <div className="image-hover-text-rest">Charity work at S S Manoj Seva Trust. Also, to spread awareness about electric safety.</div>
                        </div>
                    </div>
                </div>
                <div>
                        <div className="image-hover-image">
                                    <img src={Soldering}  alt="gallery"/>
                            </div>
                        <div className="image-hover-text">
                        <div className="image-hover-text-bubble">
                            <div className="image-hover-text-title">Soldering And Etching</div>
                            <div className="image-hover-text-rest">Workshop held to teach fundamentals of electronics.</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="image-hover-image">
                                        <img src={Orientation}  alt="gallery"/>
                            </div>
                        <div className="image-hover-text">
                        <div className="image-hover-text-bubble">
                            <div className="image-hover-text-title">Orientation Day</div>
                            <div className="image-hover-text-rest">Orientation Day was held to introduce freshers to IEEE and to interact with them.</div>
                        </div>
                    </div>
                </div>
            </GalleryDiv>
            <HeadingTimeline>Videos</HeadingTimeline>
            <Videos>
                <div>
                    <video controls muted autoplay width="300" height="180" data-animate="fadeInDown"
                        data-delay="200" >
                            <source src={vid1} type="video/mp4"/>
					</video>
                    <video controls muted autoplay width="300" height="180" data-animate="fadeInDown"
                        data-delay="200" >
                            <source src={vid2} type="video/mp4"/>
					</video>
                </div>
                <div>
                <video controls muted autoplay width="300" height="180" data-animate="fadeInDown"
                        data-delay="200" >
                            <source src={vid3} type="video/mp4"/>
					</video>
                    <video controls muted autoplay width="300" height="180" data-animate="fadeInDown"
                        data-delay="200" >
                            <source src={vid4} type="video/mp4"/>
					</video>
                </div>
            </Videos>
            </MainContainer>
        </>
    )
}
const Videos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-evenly;
    >div{
       
        >video{
             display: flex;
        align-items: center;
        justify-content: space-between;
        }
    }
    @media only screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

const GalleryDiv = styled.div`
    display: grid;
    padding: 1em 5em;
    >div{
        position: relative;
        display: inline-block;
        padding:2rem 0 ;
        width: auto;
        height: auto;
        transition: all 0.2s linear;
        >.image-hover-image 
        {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            display: block;
            >img{
                width:100%;
                height:300px;
            }
        }
        >.image-hover-text 
        {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        opacity: 0;
        padding:2rem 0;
        cursor: pointer;
        transition: opacity 0.2s linear;
        >.image-hover-text-bubble 
            {
            position: relative;
            box-sizing: border-box;
            top: 0; left: 0; 
            text-align: center;
            background: rgba(218, 211, 211, 0.75);
            margin: 0 auto;
            height:100%;
            padding:0;
            overflow: hidden;
            font-size: 17px;
            text-align: center;
            word-wrap: break-word;
                >.image-hover-text-title
                {
                    font-size: 2.5rem;
                    display: block;
                }
                >.image-hover-text-rest
                {
                    font-size:1.2rem;
                    display: block;
                }
            }
            

        }
        >.image-hover-text:hover 
        {
        opacity: 1;
        }
    }
    
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    @media only screen and (max-width: 780px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 1em ;

    }
    @media only screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 1em ;

    }
`;


const HeadingTimeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  margin:10vh auto  0 auto;
  flex-direction: column;
  color: #7289da;
  text-align: center;
  @media only screen and (max-width: 780px) {
    font-size: 2.5rem;
    }
`;
const MainContainer = styled.div`
    >hr{
    margin: 0 auto 4vh auto;
    width:5rem;
    border:none;
    border-top:1px dotted #384158;
    height:1px;

  } 
  background: url(${BangaloreBg}) repeat ;

`;

export default Gallery