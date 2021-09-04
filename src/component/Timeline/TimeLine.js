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
    return (
        <MainContainer>
          <HeadingTimeline>Past Events</HeadingTimeline>
          <hr/>
         <VerticalTimeline >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020-2021"
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
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020-2021"
            contentStyle={{boxShadow:'none' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img style={{width:"100%"}} src={Logo} alt="logo"/>}
          >
            <div className="card-vertical"  style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
            <h3 className="vertical-timeline-element-title">Orientation Day 2021</h3>
            <h4 className="vertical-timeline-element-subtitle"> 26th Oct 2020</h4>
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
            </Modal>

            <Modal open={open2} onClose={onCloseModal2} center>
              <div className="modal_whole">
              <img src={fun_day} alt="poster"/>
              <p>
                  Everyone needs a little fun and diversion from their orderly college routine right?<br/>
                  If you agree to that, then IEEE SJCE's Fun day is going to be perfect for you!
                  <br/><br/>
                  There'll be games, music and a lot more activities where you get to participate and win some exciting goodies
                  <br/><br/>
                  Don't miss this opportunity to explore the culture of IEEE SJCE.<br/>
                  Join us on 8th March at 5:30 PM.<br/>
                  Venue : IS Seminar Hall
                  <br/><br/>

                  For any queries, contact:<br/>
                  Rohit - 8867984429<br/>
                  Bijwal - 8547070116<br/>
              </p>
              </div>
            </Modal>
            <Modal open={open3} onClose={onCloseModal3} center>
                <Carousel showThumbs={false}
                    showStatus={false}
                    dynamicHeight={false}
                    >
                    <div className="tot_cara">
                      <img src={funday1} alt="orien"/>
                    </div>
                    <div className="tot_cara">
                      <img src={funday2} alt="orien"/>
                    </div>
                    <div className="tot_cara">
                      <img src={funday3} alt="orien"/>
                    </div>

                    <div className="tot_cara">
                      <img src={funday4} alt="orien"/>
                    </div>
                    <div className="tot_cara">
                      <img src={funday5} alt="orien"/>
                    </div>
                  </Carousel>
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
  color: #7289da;
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
    border-top:1px dotted #384158;
    height:1px;

  }
`;


export default TimeLine
