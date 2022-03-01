import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import BangaloreBg from '../../assests/images/bangalore_bg.jpg'
import Lec from '../../assests/MileStone/lec.jpg'
import Ard from '../../assests/MileStone/CN-1.jpg'
import Codfie from '../../assests/MileStone/codfie.jpg'
import Imp from '../../assests/MileStone/ieee-day.jpg'
import Alum2 from '../../assests/MileStone/py.jpg'
import Exp from '../../assests/MileStone/CN-2.jpg'
import Res from '../../assests/MileStone/sim2.0.png'
import { Modal } from 'react-responsive-modal';
import pod from '../../assests/Main2/pod.jpg';
import eecst from '../../assests/Main2/talk.png';
import imgp from '../../assests/Main2/imgp.jpg';
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
              <img src={imgp} alt="poster"/>
                <p>
                Image processing is everywhere, from editing your photos before you upload it on your Instagram feed to as complex as biomedical image interpretation 
                            However getting into the basics of it might be overwhelming and confusing, which is why we're here for you. 
                            <br/><br/>
                            The RAS wing is back with IMAGE PROCESSING WORKSHOP a 3-day workshop where we plan to take you from a basic understanding of Image Processing
                            to a self-sufficient one using OpenCV-Python.
                            
                                
                            <br/><br/>
                            Dates - 3rd, 4th and 5th December 2021<br/>
                            Platform - Google Meet. <br/>
                            E-certificates will be provided to all participants.
                            <br/><br/>

                            For any kind of doubts and queries contact:<br/>
                            Raghavendra G:8073711862<br/>
                            R Harshith:8073811955<br/>
                            <br/>
                            No registration fee. Open for all.<br/>
                </p>
              </div>
            </Modal>

            <Modal open={openm2} onClose={onCloseModalm2} center>
          <div className="modal_whole">
              <img src={Ard} alt="poster"/>
                <p>
                To all the geeks out there, it's time to bring out your analytical and problem-solving skills on board. The competitive coding event will comprise of 5 questions with varying levels of difficulty.<br/>
                        Further instructions will be sent to your respective e-mail IDs upon registration.<br/>
                        <br/>
                        🗓️Date - 29th August 2021<br/>
                        🕰️Time - 6PM - 8PM<br/>
                        <br/>
                        Register soon!!<br/><br/>
                        Do follow our Instagram handle for more updates.<br/><br/>
                        For further details, contact:<br/>
                        Chinmaya K - 8762361434<br/>
                        Shivraj Nath - 8837282287 
                </p>
              </div>
            </Modal>

            <Modal open={openm3} onClose={onCloseModalm3} center>
          <div className="modal_whole">
              <img src={pod} alt="poster"/>
                <p>
                We have witnessed first hand perspectives of a lucrative education overseas and the possible opportunities it spawns but understanding the admission process can be tedious and difficult.
                        <br/><br/>
                        Questions like, “How has Covid affected admission policies?” “How important is GRE?” “What are the things I should do in my undergrad to maximize my chances?” and many such questions are bound to arise. 
                        <br/> <br/>
                        Well, when you've got us, you got nothing to worry about.
                        <br/><br/>
                        IEEE-SJCE is back with the second season of the much-awaited “Alumni Podcast”. <br/><br/> In the Season opener, we will talk to 
                        Mr. Sushruth Nagesh, an alumnus of our college. <br/> He finished his undergrad in E&C at SJCE in the year 2018 and did his master’s from UC-San Diego in 2021. He is currently working at Ford Autonomous Vehicles LLC. as a Perception Research Engineer. <br/> <br/>
                        Catch us live on YouTube at 7:00 PM, 9th October<br/>
                </p>
              </div>
            </Modal>

            <Modal open={openm4} onClose={onCloseModalm4} center>
            <div className="modal_whole">
                <img src={eecst} alt="poster"/>
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

            <Modal open={openm5} onClose={onCloseModalm5} center>
            <div className="modal_whole">
                <img src={Imp} alt="poster"/>
                    <p>
                    Stuck with loads of classes and piling assignments?We're here to change your pace and give you a break from the monotonous routine. IEEE DAY 2021 is just around the corner, and we are excited to present to you IEEE ECLECTIC, a month-long procession of exciting events to amp up our celebrations!<br/><br/>

                    To commemorate this special occasion, we have an exclusive assortment of events, covering both Technical and non-Technical domains lined up for y'all.
                    <br/>There is plenty of knowledge to be taken away, and exciting prizes up for grabs!

                    <br/><br/>The events will begin from the 20th september, and go on till the 17th of October. 

                    <br/><br/>Do keep an eye on our Instagram page for links and further updates.
                    <br/>Make sure not to miss out on any of the events!
                    </p>
                </div>
            </Modal>

            <Modal open={openm6} onClose={onCloseModalm6} center>
            <div className="modal_whole">
                <img src={Alum2} alt="poster"/>
                    <p>
                    In 2021, Python is the most widely used multi-purpose programming language. Name a domain, ...
                    and you'll find Python. In such times, do you wish to learn Python too? And turn your amazing ideas into reality using Python?<br/><br/>

                    We, at IEEE-SJCE, have an enticing proposition in store for you.<br/>
                    The RAS wing brings to you,<br/><br/>

                            💻Python Bootcamp💻<br/><br/>
                            
                    This workshop is intended for the beginners and you get to take back the expertise of Python language + several projects + a certificate and not to forget, loads of fun.<br/>
                    We also have planned quizzes, logic building assignments to make sure you leave no stone unturned whilst learning Python. <br/>

                    <br/>People without laptops, don't worry! Google Colab works on smartphones too.<br/>
                    <br/>
                    Join us on: 24th-26th September
                    <br/><br/>
                    Platform: Google Meet
                    <br/><br/>
                    For any queries, contact:<br/>
                    Raghavendra G - 8073711862<br/>
                    R Harshith - 8073811955
                    </p>
                </div>
            </Modal>

            <Modal open={openm7} onClose={onCloseModalm7} center>
            <div className="modal_whole">
                <img src={Exp} alt="poster"/>
                    <p>
                    Internships, Placements and Interviews - do these words make you anxious?! Are you searching for sources to accelerate your preparations to ace those technical interviews?
                        <br/><br/>
                        Coding Ninjas in association with IEEE-SJCE presents a webinar on "ROADMAP TO CRACK INTERNSHIP AND PLACEMENT INTERVIEWS" followed by "JUST CODE IT", a coding event .
                        <br/><br/>
                        The talk will be delivered by Rajat Saxena (SE, Facebook) who will take you through the stages of preparation for internships and placements, and an interactive session with Campus Hero, Hardik Khandelwal (SDE, Amazon). There will be a quiz conducted at the end of the webinar, where the winners will get exciting rewards from Coding Ninjas.
                        <br/><br/>
                        🗓️Date - 28th August 2021<br/>
                        🕰️Time - 4PM - 5PM<br/>
                    </p>
                </div>
            </Modal>

            <Modal open={openm8} onClose={onCloseModalm8} center>
            <div className="modal_whole">
                <img src={Res} alt="poster"/>
                    <p>
                    The EDS chapter of IEEE-SJCE brings you a 3-day workshop, SIMTOOL 2.0 <br/>
                            <br/>
                            The workshop focuses mainly on the simulation of various circuits using TINA-TI software and CEDAR logic simulator. Learning these tools will help you simulate various circuits for your projects.  
                            <br/>
                            It will be an interactive session and  e-certificates will be given to the participants.  
                            <br/><br/>
                            Date - 3rd, 4th & 5th September 2021 <br/>
                            Platform - Google Meet<br/>
                            <br/>
                            Free registration. Open for all! 
                            <br/>
                            Limited Seats Only!!
                            Hurry up and get yourself registered.
                            <br/>

                            Meeting link and other details will be informed to the registered participants via Whatsapp group.
                            <br/><br/>
                            For any queries, contact: <br/>
                            Mukul - 9523453421<br/>
                            Sushma BS - 8277133311

                    </p>
                </div>
            </Modal>

     <HeadingTimeline>Milestone Events</HeadingTimeline>
            <StyledHr/>
        <MainContainer>
        <div><LeftContainer>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
                    <Heading>Image Processing</Heading>
                    <img src={imgp} alt="poster"/>
                    <div className="content">
                    Image processing is everywhere, from editing your...
                    {/* photos before you upload it on your Instagram feed to as complex as biomedical image interpretation 
                            However getting into the basics of it might be overwhelming and confusing, which is why we're here for you. 
                            <br/><br/>
                            The RAS wing is back with IMAGE PROCESSING WORKSHOP a 3-day workshop where we plan to take you from a basic understanding of Image Processing
                            to a self-sufficient one using OpenCV-Python.
                            
                                
                            <br/><br/>
                            Dates - 3rd, 4th and 5th December 2021<br/>
                            Platform - Google Meet. <br/>
                            E-certificates will be provided to all participants.
                            <br/><br/>

                            For any kind of doubts and queries contact:<br/>
                            Raghavendra G:8073711862<br/>
                            R Harshith:8073811955<br/>
                            <br/>
                            No registration fee. Open for all.<br/> */}
                    </div>
                    <button onClick={onOpenModalm1}>View Details</button>
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
                <div data-aos="zoom-in-up" data-aos-duration="2000">
                    <Heading>IEEE ECLECTIC</Heading>
                    <img src={Imp} alt="poster"/>
                    <div className="content">
                    Stuck with loads of classes and piling assignments? We're here to change your ....
                     {/*pace and give you a break from the monotonous .... routine.IEEE DAY 2021 is just around the corner, and we are excited to present to you IEEE ECLECTIC🎉🎉, a month-long procession of exciting events to amp up our celebrations!🥳

                    To commemorate this special occasion, we have an exclusive assortment of events, covering both Technical and non-Technical domains lined up for y'all.
                    There is plenty of knowledge to be taken away, and exciting prizes up for grabs!

                    The events will begin from the 20th september, and go on till the 17th of October. 

                    Do keep an eye on our Instagram page for links and further updates.
                    Make sure not to miss out on any of the events! */}
                    </div>
                    <button onClick={onOpenModalm5}>View Details</button>
                </div>
            </LeftContainer>
            <RightContainer>
            <div data-aos="zoom-in-up" data-aos-duration="2000">
                    <Heading>Alumni Podcast</Heading>
                    <img src={pod} alt="poster"/>
                    <div className="content">
                    We have witnessed first hand perspectives of a ..
                    {/* lucrative education overseas */}
                     {/* and the possible opportunities it spawns but understanding the admission process can be tedious and difficult.
                        <br/><br/>
                        Questions like, “How has Covid affected admission policies?” “How important is GRE?” “What are the things I should do in my undergrad to maximize my chances?” and many such questions are bound to arise. 
                        <br/> <br/>
                        Well, when you've got us, you got nothing to worry about.
                        <br/><br/>
                        IEEE-SJCE is back with the second season of the much-awaited “Alumni Podcast”. <br/><br/> In the Season opener, we will talk to 
                        Mr. Sushruth Nagesh, an alumnus of our college. <br/> He finished his undergrad in E&C at SJCE in the year 2018 and did his master’s from UC-San Diego in 2021. He is currently working at Ford Autonomous Vehicles LLC. as a Perception Research Engineer. <br/> <br/>
                        Catch us live on YouTube at 7:00 PM, 9th October<br/> */}
                    </div>
                    <button onClick={onOpenModalm3}>View Details</button>
                </div>
            <div data-aos="zoom-in-up" data-aos-duration="2000">
                    <Heading>Simtool 2.0</Heading>
                    <img src={Res} alt="poster"/>
                    <div className="content">
                            The EDS chapter of IEEE-SJCE brings you a 3-day workshop, SIMTOOL 2.0 <br/>
                            The workshop...   {/* focuses mainly on the simulation of various circuits using TINA-TI software and CEDAR logic simulator. Learning these tools will help you simulate various circuits for your projects.  
                            <br/>
                            It will be an interactive session and  e-certificates will be given to the participants.  
                            <br/><br/>
                            Date - 3rd, 4th & 5th September 2021 <br/>
                            Platform - Google Meet<br/>
                            <br/>
                            Free registration. Open for all! 
                            <br/>
                            Limited Seats Only!!
                            Hurry up and get yourself registered.
                            <br/>

                            Meeting link and other details will be informed to the registered participants via Whatsapp group.
                            <br/><br/>
                            For any queries, contact: <br/>
                            Mukul - 9523453421<br/>
                            Sushma BS - 8277133311 */}

                    </div>
                    <button onClick={onOpenModalm8}>View Details</button>
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
               
               
                {/* <div data-aos="zoom-in-up" data-aos-duration="2000">
                    <Heading>CODEFIESTA by WIE</Heading>
                    <img src={Codfie} alt="poster"/>
                    <div className="content"> */}
                            {/* ◆The top 3 participants will receive cash prizes of INR 6000, 4000 and 2000 respectively <br/> */}
                            {/* ◆Participants who secure 4th and 5th positions will be awarded with cash prize of INR 1000 each <br/>
                            ◆A special cash prize of INR 1000 will be awarded to top 3 girl participants (excluding the girls among top 5 winners) */}

                    {/* </div>
                    <button  onClick={onOpenModalm3}>View Details</button>
                </div> */}
                <div data-aos="zoom-in-up" data-aos-duration="2000">
                    <Heading>Talk on EECS</Heading>
                    <img src={eecst} alt="poster"/>
                    <div className="content">
                    Do you have plans to explore a hardware and software integrated..
                     {/* domain and have no idea where to get started?  */}
                    {/* We're here with a one of a kind opportunity. */}
                            {/* <br/><br/>
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
                            <br/> */}
                    </div>
                    <button onClick={onOpenModalm4}>View Details</button>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="2000">
                    <Heading>Just Code It</Heading>
                    <img src={Ard} alt="poster"/>
                    <div className="content">
                        To all the geeks out there, it's time to bring out your analytical and problem-solving skills on board.

                         {/* The competitive coding event will comprise of 5 questions with varying levels of difficulty.<br/> */}
                        {/* Further instructions will be sent to your respective e-mail IDs upon registration.<br/>
                        <br/>
                        🗓️Date - 29th August 2021<br/>
                        🕰️Time - 6PM - 8PM<br/>
                        <br/>
                        Register soon!!<br/><br/>
                        Do follow our Instagram handle for more updates.<br/><br/>
                        For further details, contact:<br/>
                        Chinmaya K - 8762361434<br/>
                        Shivraj Nath - 8837282287  */}
                    </div>
                    <button  onClick={onOpenModalm2}>View Details</button>
                </div>
            </LeftContainer>
            <RightContainer>
            <div data-aos="zoom-in-up" data-aos-duration="2000">
                    <Heading>Python Bootcamp</Heading>
                    <img src={Alum2} alt="poster"/>
                    <div className="content">
                    In 2021, Python is the most widely used multi-purpose programming language. Name a domain, ...

                    {/* and you'll find Python. In such times, do you wish to learn Python too? And turn your amazing ideas into reality using Python?<br/><br/>

                    We, at IEEE-SJCE, have an enticing proposition in store for you.<br/>
                    The RAS wing brings to you,<br/><br/>

                            💻Python Bootcamp💻<br/><br/>
                            
                    This workshop is intended for the beginners and you get to take back the expertise of Python language + several projects + a certificate and not to forget, loads of fun.<br/>
                    We also have planned quizzes, logic building assignments to make sure you leave no stone unturned whilst learning Python. <br/>

                    <br/>People without laptops, don't worry! Google Colab works on smartphones too.<br/>
                    <br/>
                    Join us on: 24th-26th September
                    <br/><br/>
                    Platform: Google Meet
                    <br/><br/>
                    For any queries, contact:<br/>
                    Raghavendra G - 8073711862<br/>
                    R Harshith - 8073811955 */}
                    </div>
                    <button onClick={onOpenModalm6}>View Details</button>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="2000">

                    <Heading>Webinar by CN</Heading>
                    <img src={Exp} alt="poster"/>
                    <div className="content">
                    Internships, Placements and Interviews - do these words make you anxious?! ..
                     {/* Are you searching for sources to accelerate your preparations to ace those technical interviews? */}
                        {/* <br/><br/>
                        Coding Ninjas in association with IEEE-SJCE presents a webinar on "ROADMAP TO CRACK INTERNSHIP AND PLACEMENT INTERVIEWS" followed by "JUST CODE IT", a coding event .
                        <br/><br/>
                        The talk will be delivered by Rajat Saxena (SE, Facebook) who will take you through the stages of preparation for internships and placements, and an interactive session with Campus Hero, Hardik Khandelwal (SDE, Amazon). There will be a quiz conducted at the end of the webinar, where the winners will get exciting rewards from Coding Ninjas.
                        <br/><br/>
                        🗓️Date - 28th August 2021<br/>
                        🕰️Time - 4PM - 5PM<br/> */}
                    </div>
                    <button onClick={onOpenModalm7}>View Details</button>
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
