import React ,{useEffect}from 'react'
import './Prayas.css'
import styled from 'styled-components'
import Prayass from '../../assests/videos/prayas.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css'
import BangaloreBg from '../../assests/images/bangalore_bg.jpg'
import Prayas1 from '../../assests/Prayas/g11.jpeg'
import Prayas2 from '../../assests/Prayas/prayas_img.jpeg'

function Prayas() {
        AOS.init();
    // useEffect(() => {
        // AOS.init();
        // AOS.refresh();
    //   }, []);
    return (
        <>
           <MainContainer>
            <HeadingTimeline>Prayas</HeadingTimeline>
            <hr/>
            <SubHeading>
            PRAYAS is an outreach program by IEEE-SJCE WIE that provides inequitable education outcomes to underprivileged children. The volunteers visited one Orphanage every week to interact with the students there and help them out in their academic activities
            </SubHeading>
            <FourPointerPrayas>
            <div className="middle-container">
                <div className="prayas-videos" >
                    <img src={Prayas1} alt="teaching" className="instr" />
                    <video controls muted autoPlay width="300" >
                                    <source src={Prayass} type="video/mp4"/>
                    </video>
                    <img src={Prayas2} alt="teaching" className="instr"/>

                </div>
            </div>
            </FourPointerPrayas>
            <div className="accordion totacc" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  About PRAYAS
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  An effort by our team to provide underprivileged students with a positive learning environment that will help them unleash their potential.<br/>
												▪ This includes frequent visits to Divya Deepa and Vijaya Educational Institution. <br/>
												▪ We will be helping the kids with functional English and Extracurricular activities.<br/><br/>	  
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What do we do in PRAYAS
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  ▪ Support in academics.<br/>
												▪ Introduce fun learning techniques.<br/>
												▪ Aim to achieve overall development.<br/><br/>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Why PRAYAS?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  ▪ Work satisfaction. <br/>
												▪ Adds value to your profile. <br/>
												▪ Best platform to develop communication with society. <br/>
												▪ A good start or continuity  of your interest to serve the society
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Works Done
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  ▪ PRAYAS volunteering session at Rangarao Memorial School for Disabled. <br/> 
													▪ Charity work at S S Manoj Seva Trust, to spread awareness about electric safety.<br/>
                  </div>
                </div>
              </div>
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
const FourPointerPrayas = styled.div`
    .middle-container{
        .prayas-videos{
            display:flex;
            align-items: center;
                    justify-content: center;
            @media only screen and (max-width: 780px) {
                    flex-direction: column;
                }
                >.instr{
                    width:33%;
                    padding:3rem;
                    @media only screen and (max-width: 780px) {
                        width:100%;
                        padding:1rem 0;
                }
                }
                >video{
                    width:34%; 
                    display: flex;
                    /* text-align:center; */
                    /* vertical-align:middle; */
                    @media only screen and (max-width: 780px) {
                        width:100%;
                }

                }
               
            }
       
    }


`;

const HeadingTimeline = styled.div`
  display: flex;
  @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
  align-items: center;
  font-family: 'Bree Serif', serif;
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
    width: 100vw;
    padding:0 15vw;
    background: url(${BangaloreBg}) repeat ;
    padding:2vh auto;
    >hr{
      margin: 0 auto 4vh auto;
    width:5rem;
    border:none;
    border-top:3px solid #384158;
    height:1px;

  } 
  >.totacc{
    padding:2rem 0;
  }
  overflow-x: hidden; 
`;
export default Prayas;
