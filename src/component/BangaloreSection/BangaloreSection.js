import React,{useEffect} from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css'
import img_blr from '../../assests/images/logo_Blr.png'
import BangaloreBg from '../../assests/images/bangalore_bg.jpg'



function BangaloreSection() {
    useEffect(() => {
       AOS.init();
    }, [])
        
    return (
        <MainContainer>
        <HeadingTimeline><img src={img_blr} alt="blr"/>Bangalore Section</HeadingTimeline>
            <hr/>
            <SubHeading>IEEE-SJCE has been successfully recognized by IEEE Bangalore section for completing its Silver Jubilee in flying colours. We have also been able to bag the best website award two times in a row.</SubHeading>
        <ThreeCards>
            <div data-aos="fade-down" data-aos-duration="2000"><h3>HOUSE OF CARDS</h3>
            <p>A simulation of a political scenario with real world problems. As citizens, we all have voices, but there comes a moment in history which rarely does, such a this. We give you the stage to come and speak about these problems, voice out your opinion, ideas and question the happenings around you.  Go through the form descriptions very carefully.</p>
                <a target="_blank" rel="noreferrer" href='https://docs.google.com/forms/d/e/1FAIpQLSdstCW-NPK_sd3n7chovldbZDkAjZFc6d2rtTO8y_VAGluPjQ/viewform'>Register</a>
                </div>
                <div data-aos="fade-down" data-aos-duration="2000"><h3> IEEEXtreme 15.0 </h3>
                <p>IEEEXtreme is a global challenge in which teams of IEEE Student members - advised and proctored by an IEEE member, and often supported by an IEEE Student Branch compete in a 24-hour time span against each other to solve a set of programming problems.Don't forget to select school as "A48251 - Sri Jayachamarajendra College of Engineering"</p>
                <a target="_blank" rel="noreferrer" href="https://xtreme.vtools.ieee.org/">Register</a></div>
                         <div data-aos="fade-down" data-aos-duration="2000"><h3>HAC SAC 2.0</h3>

            <p>Did someone say hackathon? All the bright-eyed problem solvers get ready because Student Coordination Team – IEEE Bangalore Section is back with HAC SAC 2.0, A Virtual Hackathon. We are proud to bring you the second iteration of HAC SAC with prizes worth 35k for grabs! 
            If you are fond of challenges then HAC SAC 2.0 is for you. This is your opportunity to turn your crazy ideas into reality.</p>
                <a target="_blank" rel="noreferrer" href="https://bit.ly/HACSAC2">Register</a>
                </div>
        </ThreeCards>   
        <FlagshipEvent>
            <FlagshipTitle><img src={img_blr} alt="blr"/> Flagship Events</FlagshipTitle>
            <FlagshipThreeCards>
                    <FlagshipThreeCard>
                        <FlagshipThreeCardTitle>IEEE R10 HTC</FlagshipThreeCardTitle>
                        <FlagshipThreeCardText>IEEE Region 10 Humanitarian Technology Conference (R10 HTC) is a premier annual cross-disciplinary conference. It provides a common platform for engineers, technologists, scientists, representatives from NGOs, governments, academia, industry and investors to discuss recent advances in Humanitarian Technologies. </FlagshipThreeCardText>
                        <FlagshipThreeCardButton target="_blank" rel="noreferrer" href="https://attend.ieee.org/r10htc-2021/">Register</FlagshipThreeCardButton>
                    </FlagshipThreeCard>
                    <FlagshipThreeCard>
                        <FlagshipThreeCardTitle>IEEE BTC</FlagshipThreeCardTitle>
                        <FlagshipThreeCardText>Welcome to the 2nd edition of IEEE Bangalore Technology Conclave (BTC) on the theme Clean Technologies for a Sustainable World. IEEE BTC 2021 is a flagship event of IEEE Bangalore Section, organized in collaboration with its two affinity groups - Women in Engineering (WiE) and Young Professionals (YP).</FlagshipThreeCardText>
                        <FlagshipThreeCardButton target="_blank" rel="noreferrer" href="https://btc-2021.ieeebangalore.org/">Register</FlagshipThreeCardButton>
                    </FlagshipThreeCard>
                    <FlagshipThreeCard>
                        <FlagshipThreeCardTitle>IEEE Conecct</FlagshipThreeCardTitle>
                        <FlagshipThreeCardText>International Conference on Electronics, Computing and Communication Technologies, CONECCT is a flagship conference of the IEEE Bangalore Section, India. The conference features plenary talks, workshops and invited papers by distinguished researchers and technologists .</FlagshipThreeCardText>
                        <FlagshipThreeCardButton target="_blank" rel="noreferrer" href="https://ieee-conecct.org/">Register</FlagshipThreeCardButton>
                    </FlagshipThreeCard>



                    <FlagshipThreeCard>
                        <FlagshipThreeCardTitle>IEEE SPS</FlagshipThreeCardTitle>
                        <FlagshipThreeCardText>The highlights of the IEEE SPS forum are as follows:
                        <br/>
                        ● It is aimed at networking in the area of Image and Video Signal Processing to industry members.<br/>
                        ● Bridge the gap between Industry and Educational Institution.<br/>
                        ● It consists of presentations, lectures, and demos by industry experts.<br/>

                        </FlagshipThreeCardText>
                        <FlagshipThreeCardButton target="_blank" rel="noreferrer" href="https://sps-2021.ieeebangalore.org/index.html">Register</FlagshipThreeCardButton>
                    </FlagshipThreeCard>
                    <FlagshipThreeCard>
                        <FlagshipThreeCardTitle>IEEE CPS</FlagshipThreeCardTitle>
                        <FlagshipThreeCardText>Cyber-Physical Systems (CPS) are integrations of computation, networking, and physical processes. In cyber-physical systems, computers and networks monitor and control the physical processes, with feedback loops where physical processes affect computations and vice versa. CPS has the ability to support complex behaviours of systems and networks.</FlagshipThreeCardText>
                        <FlagshipThreeCardButton target="_blank" rel="noreferrer" href="https://cps-2021.ieeebangalore.org/index.html">Register</FlagshipThreeCardButton>
                    
                    </FlagshipThreeCard>
                    <FlagshipThreeCard>
                        <FlagshipThreeCardTitle>IEEE DSS 2021</FlagshipThreeCardTitle>
                        <FlagshipThreeCardText>With the fast changing scenarios, and the needs to solve imminent challenges even faster in the Health and Life Sciences, Energy, Weather Prediction, Seismic Processing and allied areas . Scalable AI lends a helping hand but also needs higher performing infrastructure to support it. Data Storage technologies is increasingly playing a central role .</FlagshipThreeCardText>
                        <FlagshipThreeCardButton target="_blank" rel="noreferrer" href="https://dss-2021.ieeebangalore.org/index.html">Register</FlagshipThreeCardButton>
                
                    </FlagshipThreeCard>

                    {/* <FlagshipThreeCard>
                        <FlagshipThreeCardTitle>IEEE Q-Rays</FlagshipThreeCardTitle>
                        <FlagshipThreeCardText>Q-RAYS discusses the communication facets towards the next generation transformative quantum technologies that include quantum computers and computing, quantum communication, quantum key distribution, encryption, cryptanalysis, quantum devices, quantum sensing, quantum materials, quantum clock and so on. This one day symposium focuses on how to network quantum processors and quantum information for quantum control.</FlagshipThreeCardText>
                        <FlagshipThreeCardButton target="_blank" rel="noreferrer" href="https://quantumrays-2021.ieeebangalore.org/index.html">Register</FlagshipThreeCardButton>
                    </FlagshipThreeCard>
                    <FlagshipThreeCard>
                        <FlagshipThreeCardTitle>B-HTC</FlagshipThreeCardTitle>
                        <FlagshipThreeCardText>IEEE Bangalore Humanitarian Technology Conference (B-HTC) organized by IEEE Bangalore Section will be held at BLDEA’S  V.P. Dr.P.G.Halakatti college of Engineering and Technology, Vijayapur , Karnataka, India  .This is Bangalore Section’s new initiative to organize an International Conference on Humanitarian Technology and provide a platform to academician, researchers, NGO’s, Government authorities and policy makers to meet. </FlagshipThreeCardText>
                        <FlagshipThreeCardButton target="_blank" rel="noreferrer" href="http://bhtc.ieeebangalore.org/">Register</FlagshipThreeCardButton>
                    
                    </FlagshipThreeCard>
                    <FlagshipThreeCard>
                        <FlagshipThreeCardTitle>Approved Conferences for 2021</FlagshipThreeCardTitle>
                    </FlagshipThreeCard> */}
            </FlagshipThreeCards>
        </FlagshipEvent> 
        </MainContainer>
    )
}
const FlagshipEvent = styled.div`

`;
const FlagshipThreeCardText = styled.p`
    text-align:justify;
    margin:2vh auto;
`;
const FlagshipThreeCardButton = styled.a`
    border: none;
    background-color: rgb(7, 148, 241);
    position: relative;
    width:100%;
    text-align:center;
    padding: 5px 20px;
    margin: 0px 10px 10px 0px;
    float: left;
    border-radius:15px;
    font-size: 15px;
    display: flex;
    flex-direction: center;
    align-items: center;
    justify-content: center;
    color: #FFF;
    text-decoration: none;	
    transition: all 0.1s;
    -webkit-transition: all 0.1s;
`;

const FlagshipThreeCardTitle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@500&display=swap');
    font-family: 'Cabin', sans-serif;
    font-size: 1.8rem;
    color:#2E4C6D;
`;
const FlagshipTitle = styled.div`
    font-size: 2rem;
    display: flex;
    align-items: center;
    color:rgb(7, 148, 241);
    justify-content: center;    
`;
const FlagshipThreeCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    @media only screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);


    }
    @media only screen and (max-width: 780px) {
        grid-template-columns: repeat(1, 1fr);


    }
    text-align: center;
    grid-row-gap: 10px;
`;

const FlagshipThreeCard = styled.div`
    border: 3px solid rgb(7, 148, 241);
    background-color: #F8F0DF;
    margin:5vh 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 20px;
    padding:1rem;
`;
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
const ThreeCards = styled.div`
    padding:5vh 2em;
    display:flex;
    @media only screen and (max-width: 780px) {
        flex-direction:column;
        padding:5vh 2%;
    }
    >div{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius:2rem;
        padding:1em 1.5em;
        margin:0.5em 1em;
        display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            border: 3px solid rgb(7, 148, 241);
            background-color: #E8F0F2;
        >a{
            border: none;
            background-color: rgb(7, 148, 241);
            position: relative;
            width:100%;
            text-align:center;
            padding: 5px 20px;
            margin: 0px 10px 10px 0px;
            float: left;
            border-radius: 8px;
            font-size: 15px;
            display: flex;
            flex-direction: center;
            align-items: center;
            justify-content: center;
            color: #FFF;
            text-decoration: none;	
            transition: all 0.1s;
            -webkit-transition: all 0.1s;
        }
         >h3{
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');
        font-family: 'Libre Baskerville', serif;
        }
    }
   
`;

const MainContainer = styled.div`
    width: 100vw;
    padding:0 15vw;
    padding:2vh auto;
    font-family: 'Comfortaa', cursive;
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Noto+Serif+TC:wght@500&display=swap');
    overflow-x: hidden;
    background: url(${BangaloreBg}) repeat ;

    @media only screen and (max-width: 1200px) {
        width: 100vw;
        padding:0 10vw;

    }
    @media only screen and (max-width: 780px) {
        width: 100vw;
        padding:0 5vw;

    }
    >hr{
        margin: 0 auto 4vh auto;
    width:5rem;
    border:none;
    border-top:3px solid #384158;
    height:1px;
  } 
`;
const HeadingTimeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color:rgb(7, 148, 241);
  border-radius: 20px;
  text-align: center;
  @media only screen and (max-width: 780px) {
    font-size: 2.5rem;
    }
`;
export default BangaloreSection
