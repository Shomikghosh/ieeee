import React,{useEffect}  from 'react'
import styled from 'styled-components'
// import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Trophy from '../../assests/images/67230-trophy-winner.gif'
import BangaloreBg from '../../assests/images/bangalore_bg.jpg'
import Medal from '../../assests/images/medal-solid.svg'
// import network from '../../assests/activities/affiliate-network.svg'
// import fifeteen from '../../assests/activities/fifteen.svg'
// import people from '../../assests/activities/people.svg'
// import project from '../../assests/activities/project.svg'

function Achivements() {
    useEffect(() => {
        AOS.init();
     }, [])
    return (
            <Whole>
              <HeadingTimeline>Achievements</HeadingTimeline>
                <StyledHr/>
            <MainContainer1>
                    <div>
                        <div data-aos="fade-left" data-aos-duration="2000" style={{textAlign:'right'}}><p className="right"> " The Best Student Branch Website Award " - IEEE Bangalore Section 2019</p><img src={Medal} alt="medal"/></div>
                        <div data-aos="fade-left" data-aos-duration="2000" style={{textAlign:'right'}}><p className="right">" The Best Student Branch Website Award " - IEEE Bangalore Section 2017</p> <img src={Medal} alt="medal"/></div>
                    </div>
                    <div><img src={Trophy} alt="trop"/></div>
                    <div>
                        <div data-aos="fade-right" data-aos-duration="2000"><img src={Medal} alt="medal"/><p className="left">" The Best Student Branch Website Award " - IEEE Bangalore Section 2016.</p></div>
                        <div data-aos="fade-right" data-aos-duration="2000"><img src={Medal} alt="medal"/><p className="left"> One of the <br/>nominees for best<br/> practices</p></div>
                    </div>
            </MainContainer1>
        </Whole>
    )
}
const Whole = styled.div`
    background: url(${BangaloreBg}) repeat ;
`;

const StyledHr = styled.hr`
   margin: 0 auto 4vh auto;
    width:5rem;
    border:none;
    border-top:3px solid #384158;
    height:1px;
    `;

const HeadingTimeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  flex-direction: column;
  color:rgb(7, 148, 241);
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');
  text-align: center;
  font-family: 'Libre Baskerville', serif;
  @media only screen and (max-width: 780px) {
    font-size: 2.5rem;
    }
`;
const MainContainer1 = styled.div`
    width: 100vw;
    padding:2vh auto;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 750px) {
        flex-direction: column;
        margin:0vh auto;

    }
    overflow-x: hidden; 
   >div{
       >img{
           border-radius: 50%;
           width:20rem;
       }
       display: flex;
       justify-content:space-evenly;
       align-items: center;
       flex-direction: column;
       >div{
           display: flex;
           width: 350px;
           font-size: 1.5rem;
           margin:1vh 0;
           box-shadow:0;
           padding:0.1rem;
           /* border:groove 5px rgb(7, 148, 241); */
           /* background:hsla(67, 95%, 95%, 1); */
           color:grey;
           >img{
               width: 3rem;
               margin:auto 1rem;
           }
           >.left{
            border-radius: 25% 75% 63% 37% / 49% 55% 45% 51% ;
            background:hsla(67, 95%, 95%, 1);
           }
           >.right{
            border-radius:71% 29% 27% 73% / 53% 49% 51% 47%;
            background:hsla(67, 95%, 95%, 1);
           }
       }
   }
`;

 /*const MainContainer = styled.div`
    width: 100vw;
    margin:2vh auto;
    display: flex;
    overflow-x: hidden; 
    justify-content: space-evenly;
    @media only screen and (max-width: 750px) {
        flex-direction: column;
        margin:0vh auto;

    }
    >.o{
        background-color: #04009A;
    }
    .i{
        background-color: #77ACF1;
    }
    >div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 1.8rem;
        width: 30vw;
        height:25vh;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        @media only screen and (max-width: 780px) {
                width: auto;
                }
        >.text_achivement{
            font-size: 1.5rem;
        }
    }
    >hr{
    margin: 0 auto 4vh auto;
    width:5rem;
    border:none;
    border-top:1px dotted #384158;
    height:1px;
  }  
`;*/
export default Achivements
