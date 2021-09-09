import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import BangaloreBg from '../../assests/images/bangalore_bg.jpg'
import Lec from '../../assests/MileStone/lec.jpg'
import Ard from '../../assests/MileStone/ard.jpg'
import Calla from '../../assests/MileStone/calla.jpg'
import Codfie from '../../assests/MileStone/codfie.jpg'
import Snap from '../../assests/MileStone/sna.jpeg'
import Mem from '../../assests/MileStone/mem.jpeg'
import Imp from '../../assests/MileStone/imp.jpeg'
import Alum2 from '../../assests/MileStone/alum2.jpeg'
import Exp from '../../assests/MileStone/exp.jpeg'
import Res from '../../assests/MileStone/res.jpeg'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

function MileStone() {
    useEffect(() => {
        AOS.init();
     }, [])
         
    //m1
    const [openm1, setOpenm1] = useState(false);

    const onOpenModalm1 = () => setOpenm1(true);
    const onCloseModalm1 = () => setOpenm1(false);

    //m2
    const [openm2, setOpenm2] = useState(false);

    const onOpenModalm2 = () => setOpenm2(true);
    const onCloseModalm2 = () => setOpenm2(false);
    
    //m3
    const [openm3, setOpenm3] = useState(false);

    const onOpenModalm3 = () => setOpenm3(true);
    const onCloseModalm3 = () => setOpenm3(false);
    
    //m4
    const [openm4, setOpenm4] = useState(false);

    const onOpenModalm4 = () => setOpenm4(true);
    const onCloseModalm4 = () => setOpenm4(false);
    
    
     //m5
     const [openm5, setOpenm5] = useState(false);

     const onOpenModalm5 = () => setOpenm5(true);
     const onCloseModalm5 = () => setOpenm5(false);
 
     //m6
     const [openm6, setOpenm6] = useState(false);
 
     const onOpenModalm6 = () => setOpenm6(true);
     const onCloseModalm6 = () => setOpenm6(false);
     
     //m7
     const [openm7, setOpenm7] = useState(false);
 
     const onOpenModalm7 = () => setOpenm7(true);
     const onCloseModalm7 = () => setOpenm7(false);
     
     //m8
     const [openm8, setOpenm8] = useState(false);
 
     const onOpenModalm8 = () => setOpenm8(true);
     const onCloseModalm8 = () => setOpenm8(false);
     
    return (
        <>
         <Modal open={openm1} onClose={onCloseModalm1} center>
          <div className="modal_whole">
              <img src={Lec} alt="poster"/>
                <p>
                    IEEE-SJCE EDS  hosted a Distinguished Lecture on-<br/>
                    <b>"Rethinking computing with neuro-inspired learning
                    
                        - device, circuits and algorithms"</b> The talk had been presented by <b>Dr. Kaushik Roy</b> , Fellow IEEE, Edward G. Tiedemann Jr. Distinguished Professor, Purdue University, USA.
                    <br/><br/>
                    The talk was moderated by <b>Dr. S.B Rudraswamy</b> , IEEE-SJCE EDS Staff Advisor, Commonwealth Fellow(UK), Assistant Prof., ECE Dept., SJCE , JSS  STU, Mysuru

                    <br/><br/>
                    The meeting link was sent to the registered mail 30 mins prior to the talk. E-certificates had  been provided to all the registered participants!!<br/>
                    <b>Date: </b>5th June<br/>
                    <b>Time:</b> 7.30 PM (IST)<br/>
                    <b>Platform:</b> Google meet
                </p>
              </div>
            </Modal>

            <Modal open={openm2} onClose={onCloseModalm2} center>
          <div className="modal_whole">
              <img src={Ard} alt="poster"/>
                <p>
                    The EDS chapter brings you a 2-day workshop<br/> -
                    
                    The workshop  covered the basics of Arduino and it's programming using IDE and implementation of Arduino based circuits on Tinkercad
                    <br/><br/>
                    Why learn Arduino?<br/>
                    It is the basis for amazing projects. With an Arduino, you can do everything from controlling a robot to managing a home automation project
                    <br/>
                    
                    <br/>

                    
                    <b>Date:</b> 5th & 6th June.
                    <br/>
                    <br/><b>Contact :</b><br/>Shrimadh - 8553274758<br/>Akhil - 7483022671
                </p>
              </div>
            </Modal>

            <Modal open={openm3} onClose={onCloseModalm3} center>
          <div className="modal_whole">
              <img src={Codfie} alt="poster"/>
                <p>
                    ◆The top 3 participants  received cash prizes of INR 6000, 4000 and 2000 respectively <br/>
                    ◆Participants who secured 4th and 5th positions will be awarded with cash prize of INR 1000 each <br/>
                    ◆A special cash prize of INR 100 awarded to top 3 girl participants (excluding the girls among top 5 winners)

                </p>
              </div>
            </Modal>

            <Modal open={openm4} onClose={onCloseModalm4} center>
            <div className="modal_whole">
                <img src={Snap} alt="poster"/>
                    <p>
                        ▪️To Get an idea of basic electronic components and build circuits using them. <br/>
                        ▪️Learn the basics
                            of breadboard connections. <br/>
                        ▪️Get hands-on experience by rigging up the circuits
                            <br/>
                        Entry fee: <br/>
                        IEEE Members : FREE <br/>
                        Non IEEE Members: INR 50 <br/> <br/>

                        Date: 19th March - 5:30 PM <br/>
                        20th March - 2.30PM <br/>
                        Venue: NPS 001

                    </p>
                </div>
            </Modal>

            <Modal open={openm5} onClose={onCloseModalm5} center>
            <div className="modal_whole">
                <img src={Imp} alt="poster"/>
                    <p>
                    The EDS and RAS societies brought you a workshop on Image Processing !! <br/>


                    🔹Learn the basics of Python and fundamentalconcepts of Image Processing. <br/>
                    🔹Implement image processing techniques using OpenCV
                    </p>
                </div>
            </Modal>

            <Modal open={openm6} onClose={onCloseModalm6} center>
            <div className="modal_whole">
                <img src={Alum2} alt="poster"/>
                    <p>
                        IEEE-SJCE brought you the second episode of the series.

                        Guest: Mr. Samarth Deyagond working as Core Kubernetes Developer at SAP


                        Labs,
                        Bangalore The podcast was  streamed on YouTube .
                    </p>
                </div>
            </Modal>

            <Modal open={openm7} onClose={onCloseModalm7} center>
            <div className="modal_whole">
                <img src={Exp} alt="poster"/>
                    <p>
                    "Prepare for your career and research through IEEE Xplore New Advanced Tools". The webinar was presented by M S Srinivasa- a training manager at
                     EBSCO Information Services & IEEE Xplore Digital Library for this webinar.
                    </p>
                </div>
            </Modal>

            <Modal open={openm8} onClose={onCloseModalm8} center>
            <div className="modal_whole">
                <img src={Res} alt="poster"/>
                    <p>
                    IEEE-SJCE WIE hosted a webinar on one of trending aspects - "RESUME-BUILDING"! The webinar was presented by Ashwini Holla, working at Canara Engg College<br/>
                        <br/>
                            Platform: WebEx Meet<br/>
                            Date: 13th of September<br/>
                    </p>
                </div>
            </Modal>

     <HeadingTimeline>Milestone Events</HeadingTimeline>
            <StyledHr/>
        <MainContainer>
        <div><LeftContainer>
                <div data-aos="zoom-in-up" data-aos-duration="2000">
                    <Heading>Lecture by EDS</Heading>
                    <img src={Lec} alt="poster"/>
                    <div className="content">
                        IEEE-SJCE EDS hosted a Distinguished Lecture on-<br/>
                        <b>"Rethinking computing with neuro-inspired learning</b>...
                        {/* <br/><br/>
                         - device, circuits and algorithms" The talk will be presented by <b>Dr. Kaushik Roy</b> , Fellow IEEE, Edward G. Tiedemann Jr. Distinguished Professor, Purdue University, USA.
                        <br/><br/>
                        The talk will be moderated by <b>Dr. S.B Rudraswamy</b> , IEEE-SJCE EDS Staff Advisor, Commonwealth Fellow(UK), Assistant Prof., ECE Dept., SJCE , JSS  STU, Mysuru

                        <br/><br/>
                        The meeting link will be sent to the registered mail 30 mins prior to the talk. E-certificates will be provided to all the registered participants!!
                        <br/><br/>Don't miss this out, Register now using the below link<br/><br/>
                        <b>Date: </b>5th June<br/>
                        <b>Time:</b> 7.30 PM (IST)<br/>
                        <b>Platform:</b> Google meet */}
                    </div>
                    <button onClick={onOpenModalm1}>View Details</button>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="2000">
                    <Heading>Code and Simulate</Heading>
                    <img src={Ard} alt="poster"/>
                    <div className="content">
                            The EDS chapter brought you a 2-day workshop<br/> -
                            
                            The workshop will....  
                            {/* cover the basics
                                of Arduino and it's programming using IDE and implementation of Arduino based circuits on Tinkercad
                            <br/><br/>
                            Why learn Arduino?<br/>
                            It is the basis for amazing projects. With an Arduino, you can do everything from controlling a robot to managing a home automation project
                            <br/>
                            
                            <br/>
                            Hurry up and register now for free to learn about this useful tool for your next projects by clicking on the link below<br/>

                            
                            <br/>Meeting link and details will be sent to the registered participants<br/><br/>
                            <b>Date:</b> 5th & 6th June.
                            <br/>
                            <br/><b>Contact :</b><br/>Shrimadh - 8553274758<br/>Akhil - 7483022671 */}
                    </div>
                    <button  onClick={onOpenModalm2}>View Details</button>
                </div>
                {/* <div>
                    <Heading>Call for Articles</div>
                    <img src={Calla} alt="poster"/>
                    <div className="content">
                        We at IEEE-SJCE are bringing out our annual edition of the magazine for the year 2021. We are calling for your contribution.
                        ...    
                        <br/> So, awaken that literary star in you, write articles related to any technical domain and mail us your articles. <br/><br/>
                        •Your writings may include articles, features, tutorials, reviews related to Hardware/Software and Open Source Technology.<br/>

                        •Selected articles will be published in the magazine.<br/>

                        •Deadline : 22nd May 2021 
										
                    </div>
                    <button>View Details</button>
                </div> */}
            </LeftContainer>
            <RightContainer>
                <div data-aos="zoom-in-up" data-aos-duration="2000">
                    <Heading>CODEFIESTA by WIE</Heading>
                    <img src={Codfie} alt="poster"/>
                    <div className="content">
                            ◆The top 3 participants will receive cash prizes of INR 6000, 4000 and 2000 respectively <br/>...
                            {/* ◆Participants who secure 4th and 5th positions will be awarded with cash prize of INR 1000 each <br/>
                            ◆A special cash prize of INR 1000 will be awarded to top 3 girl participants (excluding the girls among top 5 winners) */}

                    </div>
                    <button  onClick={onOpenModalm3}>View Details</button>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="2000">
                    <Heading>Snap circuit </Heading>
                    <img src={Snap} alt="poster"/>
                    <div className="content">
                                        ▪️To get an idea of basic electronic components and build circuits using them.   
                                        
										▪️Learn the basics....
										{/*
                                            of breadboard connections. <br/>
										▪️Get hands-on experience by rigging up the circuits
                                         <br/>
										Entry fee: <br/>
										IEEE Members : FREE <br/>
										Non IEEE Members: INR 50 <br/> <br/>

										Date: 19th March - 5:30 PM <br/>
										20th March - 2.30PM <br/>
										Venue: NPS 001

										<br/> Get yourself registered with the link below : */}
                    </div>
                    <button onClick={onOpenModalm4}>View Details</button>
                </div>
            </RightContainer></div>
        <div>
        <LeftContainer>
            {/* <div>
                    <Heading>Membership drive</div>
                    <img src={Mem} alt="poster"/>
                    <div className="content">
                    Members will get an oppertunity to attend various webinars,workshops,conferences and forums that occur worldwide.

                    🔹Access to IEEE Xplore digitsl library, newsletters,various journals and magazines and much more....
                    </div>
                    <button>View Details</button>
                </div> */}
                <div data-aos="zoom-in-up" data-aos-duration="2000">
                    <Heading>Image Pro. Workshop </Heading>
                    <img src={Imp} alt="poster"/>
                    <div className="content">
                    The EDS and RAS societies brought you a workshop on Image Processing !! <br/>


                    🔹Learn the basics of Python ..... 
                    {/* and fundamentalconcepts of Image Processing. 🔹Implement image processing techniques using OpenCV */}
                    </div>
                    <button onClick={onOpenModalm5}>View Details</button>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="2000">
                    <Heading>Alumni Podcast</Heading>
                    <img src={Alum2} alt="poster"/>
                    <div className="content">
                    IEEE-SJCE brought you the second episode of the series.

                    Guest: Mr. Samarth Deyagond .... 


                    {/*working as Core Kubernetes Developer at SAPLabs,
                    Bangalore The podcast will be streamed on YouTube and you can drop your questions in the
                    chat. */}
                    </div>
                    <button onClick={onOpenModalm6}>View Details</button>
                </div>
            </LeftContainer>
            <RightContainer>
            <div data-aos="zoom-in-up" data-aos-duration="2000">
                    <Heading>Webinar on Xplore</Heading>
                    <img src={Exp} alt="poster"/>
                    <div className="content">
                    "Prepare for your career and research through IEEE Xplore New Advanced Tools". The webinar was presented by M ...
                     {/*S Srinivasa- a training manager at EBSCO Information Services & IEEE Xplore Digital Library for this webinar. */}
                    </div>
                    <button onClick={onOpenModalm7}>View Details</button>
                </div> 
            <div data-aos="zoom-in-up" data-aos-duration="2000">
                    <Heading>Webinar Alert</Heading>
                    <img src={Res} alt="poster"/>
                    <div className="content">
                            IEEE-SJCE WIE hosted a webinar on one of trending aspects - "RESUME-BUILDING"! The webinar ...

                            {/* was presented by Ashwini Holla, working at Canara Engg College Platform: WebEx Meet
                            Date: 13th of September */}
                    </div>
                    <button onClick={onOpenModalm8}>View Details</button>
                </div> 
            </RightContainer>
        </div>
        </MainContainer>
        </> 
    )
}
const Heading = styled.div`
     @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            text-align:center;
            font-size: 1.5rem;
            margin:2vh auto;
            color:#4B6587;
`;

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
  background: url(${BangaloreBg}) repeat ;
  color:rgb(7, 148, 241);
  text-align: center;
  @media only screen and (max-width: 780px) {
    font-size: 2.5rem;
    }
`;
const RightContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;
    >div{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius:2rem;
        background-color: #E8F0F2;
        padding:0 1.5em;
        margin:0.5em 0.5em 1em 0.5em;
        width:20rem;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        border: 3px solid rgb(7, 148, 241);
        >.heading{
            @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            text-align:center;
            font-size: 1.5rem;
        }
        >img{
            width:20rem;
            max-width: 100%;
        }
        >button{
            border: none;
            background-color: rgb(7, 148, 241);
            position: relative;
            padding: 5px 20px;
            margin: 10px 10px 20px 10px;
            float: left;
            border-radius: 8px;
            font-size: 15px;
            display: flex;
            flex-direction: center;
            align-items: center;
            color: #FFF;
            text-decoration: none;	
            transition: all 0.1s;
            -webkit-transition: all 0.1s;
        }
    }
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;
    >div{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius:2rem;
        padding:0 1.5em;
        margin:0.5em 0.5em 1em 0.5em;
        background-color: #E8F0F2;
        width:20rem;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        border: 3px solid rgb(7, 148, 241);
        >.heading{
            @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            font-size: 1.5rem;
            text-align:center;
        }
        >img{
            width:20rem;
            max-width: 100%;
        }
        >button{
            border: none;
            background-color: rgb(7, 148, 241);
            position: relative;
            padding: 5px 20px;
            margin: 10px 10px 20px 10px;
            float: left;
            border-radius: 8px;
            font-size: 15px;
            display: flex;
            flex-direction: center;
            align-items: center;
            color: #FFF;
            text-decoration: none;	
            transition: all 0.1s;
            -webkit-transition: all 0.1s;
        }
    }
`;

const MainContainer = styled.div`
    background: url(${BangaloreBg}) repeat ;
    padding:2vh 10rem;
    display: flex;    
        justify-content: center;
        flex-direction:row;
        /* align-items: center; */
        @media only screen and (max-width: 750px) {
            flex-direction:column;
            padding:2vh 0;

        }
    >div{
        display: flex;    
        justify-content: center;
        flex-direction:row;
        /* align-items: center; */
        @media only screen and (max-width: 1324px) {
            flex-direction:column;

        }
    }
    
`;
export default MileStone
