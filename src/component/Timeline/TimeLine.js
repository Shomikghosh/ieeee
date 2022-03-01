import React,{useState} from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import  styled from 'styled-components';
import '../Timeline/Timeline.css'
// import Webinar from '../../assests/pastevent/res.jpeg'
// import Membership from '../../assests/pastevent/mem.jpeg'
// import Tuxedo from '../../assests/pastevent/tux.png'
// import Alum from '../../assests/pastevent/alum2.jpeg'
import Logo from '../../assests/images/ieee_logo.png'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import BangaloreBg from '../../assests/images/bangalore_bg.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//Timeline images

//orientation
import orientation1 from '../../assests/OrientationDay/B.JPG'
import orientation2 from '../../assests/OrientationDay/C.JPG'
import orientation3 from '../../assests/OrientationDay/DSC02371.JPG'
import orientation4 from '../../assests/OrientationDay/DSC02384.JPG'
import orientation5 from '../../assests/OrientationDay/IMG_1442.JPG'

import poster_orientation from '../../assests/posters/orientation_poster.jpg'

//funday
import funday1 from '../../assests/FunDay/A.JPG'
import funday2 from '../../assests/FunDay/IMG_1156.JPG'
import funday3 from '../../assests/FunDay/IMG_1183.JPG'
import funday4 from '../../assests/FunDay/IMG_1254.JPG'
import funday5 from '../../assests/FunDay/IMG_1304.JPG'

import fun_day from '../../assests/posters/fun_day.jpg'

import eecs from '../../assests/eecs/DSC_0394.JPG'
import eecs1 from '../../assests/eecs/IMG_3393.JPG'
import eecs3 from '../../assests/eecs/IMG_3395.JPG'
import eecs4 from '../../assests/eecs/IMG_3448.JPG'
import eecs5 from '../../assests/eecs/IMG_3453.JPG'
import eecs6 from '../../assests/eecs/IMG_3360.JPG'

import eecsp from '../../assests/Main2/talk.png'

import snap1 from '../../assests/snap_cir/snap1.jpg'
import snap2 from '../../assests/snap_cir/snap2.jpg'
import snap3 from '../../assests/snap_cir/snap3.jpg'
import snap4 from '../../assests/snap_cir/snap4.jpg'
import snap5 from '../../assests/snap_cir/snap5.jpg'
import snap6 from '../../assests/snap_cir/snap6.jpg'

function TimeLine() {
    //Orientation day
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const [open1, setOpen1] = useState(false);

    const onOpenModal1 = () => setOpen1(true);
    const onCloseModal1 = () => setOpen1(false);

    //funday
    const [open2, setOpen2] = useState(false);

    const onOpenModal2 = () => setOpen2(true);
    const onCloseModal2 = () => setOpen2(false);

    const [open3, setOpen3] = useState(false);

    const onOpenModal3 = () => setOpen3(true);
    const onCloseModal3 = () => setOpen3(false);

    const [open4, setOpen4] = useState(false);

    const onOpenModal4 = () => setOpen4(true);
    const onCloseModal4 = () => setOpen4(false);

    const [open5, setOpen5] = useState(false);

    const onOpenModal5 = () => setOpen5(true);
    const onCloseModal5 = () => setOpen5(false);
    return (
        <MainContainer>
          <HeadingTimeline>Past Events</HeadingTimeline>
          <hr/>
         <VerticalTimeline >
         <VerticalTimelineElement
          className="vertical-timeline-element--work"
            date="December 2021"
            contentStyle={{boxShadow:'none' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img style={{width:"100%"}} src={Logo} alt="logo"/>}
          >
             <div className="card-vertical"  style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
            <h3 className="vertical-timeline-element-title" style={{textAlign:'center'}}>Soldering and Etching Workshop</h3>
            <h4 className="vertical-timeline-element-subtitle"> 17th-19th December 2021</h4>
            <img className="imagess" src={snap6} alt="tux"/>
            <div className="bu-cont">
              <button className="bu" onClick={onOpenModal2}>View Details</button>
              <button className="bu" onClick={onOpenModal3}>View Photos</button>
            </div>
          
            </div>
          </VerticalTimelineElement>
         <VerticalTimelineElement
          className="vertical-timeline-element--work"
            date="October 2021"
            contentStyle={{boxShadow:'none' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img style={{width:"100%"}} src={Logo} alt="logo"/>}
          >
             <div className="card-vertical"  style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
            <h3 className="vertical-timeline-element-title">Talk-"Research in EECS"</h3>
            <h4 className="vertical-timeline-element-subtitle"> 9th Oct 2021</h4>
            <img className="imagess" src={eecs} alt="tux"/>
            <div className="bu-cont">
              <button className="bu" onClick={onOpenModal4}>View Details</button>
              <button className="bu" onClick={onOpenModal5}>View Photos</button>
            </div>
          
            </div>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
            date="March 2021"
            contentStyle={{boxShadow:'none' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img style={{width:"100%"}} src={Logo} alt="logo"/>}
          >
             <div className="card-vertical"  style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
            <h3 className="vertical-timeline-element-title">Fun Day 2021</h3>
            <h4 className="vertical-timeline-element-subtitle"> 8th March 2021</h4>
            <img className="imagess" src={funday1} alt="tux"/>
            <div className="bu-cont">
              <button className="bu" onClick={onOpenModal2}>View Details</button>
              <button className="bu" onClick={onOpenModal3}>View Photos</button>
            </div>
          
            </div>
          </VerticalTimelineElement> */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2021"
            contentStyle={{boxShadow:'none' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img style={{width:"100%"}} src={Logo} alt="logo"/>}
          >
            <div className="card-vertical"  style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
            <h3 className="vertical-timeline-element-title">Orientation Day 2021</h3>
            <h4 className="vertical-timeline-element-subtitle"> 9th March 2021</h4>
            <img className="imagess" src={orientation1} alt="tux"/>
            <div className="bu-cont">
              <button className="bu" onClick={onOpenModal}>View Details</button>
              <button className="bu" onClick={onOpenModal1}>View Photos</button>
            </div>
          
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
          <Modal open={open} onClose={onCloseModal} center>
          <div className="modal_whole">
              <img src={poster_orientation} alt="poster"/>
                <p>
                  Curious to know what's IEEE-SJCE and what we do here at IEEE SJCE? An exciting event briefing about our family is awaiting you. Join us for the big day - Orientation day.
                  <br/><br/>
                  Date : 9th March<br/>
                  Venue : IS Seminar Hall<br/>
                  Time : 5.30pm<br/>
                </p>
              </div>
            </Modal>
            <Modal open={open1} onClose={onCloseModal1} center>                
              <div className="image_modal">
                <Carousel showThumbs={false}
                    showStatus={false}
                    dynamicHeight={false}
                    >
                    <div className="tot_cara">
                      <img src={orientation1} alt="orien"/>
                    </div>
                    <div className="tot_cara">
                      <img src={orientation2} alt="orien"/>
                    </div>
                    <div className="tot_cara">
                      <img src={orientation3} alt="orien"/>
                    </div>

                    <div className="tot_cara">
                      <img src={orientation4} alt="orien"/>
                    </div>
                    <div className="tot_cara">
                      <img src={orientation5} alt="orien"/>
                    </div>
                  </Carousel>
                  </div>
            </Modal>

            <Modal open={open2} onClose={onCloseModal2} center>
              <div className="modal_whole">
              <img src={snap6} alt="poster"/>
              <p>
              The Electron Devices Society brings forth yet another one-of-a kind event, SOLDERING AND ETCHING WORKSHOP 
                        a 3-day Workshop that gives you a hands-on experience of Soldering and Etching with theoretical and practical sessions.
                            
                            <br/><br/>
                            Date: 17, 18 and 19 December 2021<br/><br/>
                            Registration Fees(Team of two):<br/>
                            IEEE Members (with EDS): Free <br/>
                            IEEE Members (without EDS): Rs. 250/-<br/>
                            Non Members: Rs. 450/-
                            <br/><br/>
                            Price of component kit: Rs. 650/-<br/>
                            Note: One kit is compulsory for every team.
                            <br/><br/>
                            Limited seats only‼️<br/>
                            Priority will be given to IEEE members.<br/><br/>

                            For any kind of doubts and queries contact:<br/>
                            Mukul - 9523453421<br/>
                            Sushma BS - 8277133311<br/>
                            <br/>
              </p>
              </div>
            </Modal>
            <Modal open={open3} onClose={onCloseModal3} center>
                <div className="image_modal">
                  <Carousel showThumbs={false}
                      showStatus={false}
                      dynamicHeight={false}
                      >
                      <div className="tot_cara">
                        <img src={snap1} alt="orien"/>
                      </div>
                      <div className="tot_cara">
                        <img src={snap2} alt="orien"/>
                      </div>
                      {/* <div className="tot_cara">
                        <img src={funday3} alt="orien"/>
                      </div> */}

                      <div className="tot_cara">
                        <img src={snap3} alt="orien"/>
                      </div>
                      <div className="tot_cara">
                        <img src={snap4} alt="orien"/>
                      </div>
                      <div className="tot_cara">
                        <img src={snap5} alt="orien"/>
                      </div>
                      <div className="tot_cara">
                        <img src={snap6} alt="orien"/>
                      </div>
                    </Carousel>
                </div>
            </Modal>
            <Modal open={open5} onClose={onCloseModal5} center>
                <div className="image_modal">
                  <Carousel showThumbs={false}
                      showStatus={false}
                      dynamicHeight={false}
                      >
                      <div className="tot_cara">
                        <img src={eecs} alt="orien"/>
                      </div>
                      <div className="tot_cara">
                        <img src={eecs4} alt="orien"/>
                      </div>
                      <div className="tot_cara">
                        <img src={eecs5} alt="orien"/>
                      </div>
                      <div className="tot_cara">
                        <img src={eecs6} alt="orien"/>
                      </div>
                      <div className="tot_cara">
                        <img src={eecs1} alt="orien"/>
                      </div>
                      <div className="tot_cara">
                        <img src={eecs3} alt="orien"/>
                      </div>
                    </Carousel>
                </div>
            </Modal>

            <Modal open={open4} onClose={onCloseModal4} center>
              <div className="modal_whole">
              <img src={eecsp} alt="poster"/>
              <p>
              Do you have plans to explore a hardware and software integrated domain and have no idea where to get started? We're here with a one of a kind opportunity.
                            <br/><br/>
                            We present to you our first on ground event of 2021,  a technical talk on 
                            <br/>
                            "Research in EECS- Avenues and opportunities" 
                            <br/><br/>
                            Electrical Engineering and Computer Science is everywhere. It combines the rigor of science, the power of engineering, and the thrill of discovery. 
                            <br/><br/>
                            The talk will be presented by <br/>
                            Dr. Prathosh A.P., Assistant Professor, IISc Bangalore.
                            <br/><br/>
                            Date - 9 October, 2021<br/>
                            Time - 12:30 PM <br/>
                            Venue - IS Seminar Hall<br/><br/>
                            For any queries, contact: <br/>
                            Chinmaya K : 8762361434 <br/>
                            Shivraj Nath : 8837282287
                            Register using the link below if you are not able to attend the event in person.
                            <br/>
                            NOTE: COVID-19 guidelines must be followed and Face Masks are mandatory.
              </p>
              </div>
            </Modal>
      </MainContainer>
    )
}

// const Timeline = styled.div`
//     width:100%;
//     height: auto;
// `;
const HeadingTimeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  flex-direction: column;
  color:rgb(7, 148, 241);
  text-align: center;
  @media only screen and (max-width: 780px) {
    font-size: 2.5rem;
    }
`;

const MainContainer = styled.div`
  /* padding:2em 15em; */
  padding:5vh 0;
  background: url(${BangaloreBg}) repeat ;
  >hr{
    margin: 0 auto 4vh auto;
    width:5rem;
    border:none;
    border-top:3px solid #384158;
    height:1px;

  }
`;


export default TimeLine
