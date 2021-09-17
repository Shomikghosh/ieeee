import React  from 'react'
import  styled from 'styled-components';
import mgv from '../../assests/mentor/mgv.jpg'
import sbk from '../../assests/mentor/sbk.jpg'
import shs from '../../assests/mentor/shas.jpg'
import ssp from '../../assests/mentor/ssp.jpg'
import spk from '../../assests/mentor/spk.jpg'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css'
import BangaloreBg from '../../assests/images/bangalore_bg.jpg'

function Mentor() {
        AOS.init();
    // useEffect(() => {
        // AOS.init();
        // AOS.refresh();
    //   }, []);
    return (
        <>
            <MainContainer>
            <HeadingTimeline>Our Mentors</HeadingTimeline>
            <hr/>
            <SubHeading>Mentors guide and support us to conduct all events</SubHeading>
            <div id="mentor">        
            <section id="team" className="team-area">
                    <div className="container">
                            <div className="row team-items"  >
                            <div className="col-md-1" style={{width: "12.499999995%",
    flex:" 0 0 12.499%", maxWidth: "12.499%"}}></div> 
                                <div className="col-md-3 single-item" >
                                    <div className="item" >
                                        <div className="thumb">
                                            <img className="img-fluid" src={mgv} alt="Thumb"/>
                                        </div>
                                        <div className="info">
                                            <span className="message">
                                                <a href="mailto:veenamaheshn@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
                                            </span>
                                            <h4>DR. M G VEENA</h4>
                                            <span>Branch Counselor</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 single-item"  >
                                    <div className="item" >
                                        <div className="thumb">
                                            <img className="img-fluid" src={spk} alt="Thumb"/>
                                        </div>
                                        <div className="info">
                                            <span className="message">
                                                <a href="mailto:sudarshan_pk@sjce.ac.in"><FontAwesomeIcon icon={faEnvelope}/></a>
                                            </span>
                                            <h4>DR. SUDARSHAN P K</h4>
                                            <span>RAS Advisor</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 single-item"  >
                                    <div className="item">
                                        <div className="thumb">
                                            <img className="img-fluid" src={sbk} alt="Thumb"/>
                                        </div>
                                        <div className="info">
                                            <span className="message">
                                                <a href="mailto:rudra.swamy@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
                                            </span>
                                            <h4>DR. S B RUDRASWAMI</h4>
                                            <span>EDS Advisor</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1" style={{width: "12.499999995%",
    flex:" 0 0 12.499%", maxWidth: "12.499%"}}></div>
                            </div>
                    </div>
                    <div className="container " >
                            <div className="row team-items pho">
                                <div className="col-md-3" ></div>
                                <div className="col-md-3 single-item"  >
                                    <div className="item">
                                        <div className="thumb">
                                            <img className="img-fluid box2" src={shs} alt="Thumb"/>
                                        </div>
                                        <div className="info">
                                            <span className="message">
                                                <a href="mailto:shashidhar.r@sjce.ac.in"><FontAwesomeIcon icon={faEnvelope}/></a>
                                            </span>
                                            <h4>MR. SHASHIDHAR R</h4>
                                            <span>SBMDC Advisor</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 single-item"  >
                                    <div className="item">
                                        <div className="thumb">
                                            <img className="img-fluid" src={ssp} alt="Thumb"/>
                                        </div>
                                        <div className="info">
                                            <span className="message">
                                                <a href="mailto:supreetha.manjanna@sjce.ac.in"><FontAwesomeIcon icon={faEnvelope}/></a>
                                            </span>
                                            <h4>MS. SUPREETHA M</h4>
                                            <span>WIE Advisor</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3" ></div>
                            </div>
                    </div>
                </section>
            </div>
            </MainContainer>
        </>
    )
}
const SubHeading = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-direction: column;
  text-align: center;
  color: #787A91;
  margin-bottom: 2rem;
`;


const HeadingTimeline = styled.div`
  display:s flex;
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
    background: url(${BangaloreBg}) repeat ;
    >hr{
        margin: 0 auto 4vh auto;
    width:5rem;
    border:none;
    border-top:3px solid #384158;
    height:1px;

  } 
`;
export default Mentor
