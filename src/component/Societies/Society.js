import React,{useEffect} from 'react'
import Header from '../Header/Header';
import styled from 'styled-components'
import StuGif from '../../assests/images/41464-student-with-books.gif'
import EDSGif from '../../assests/images/31490-no-connection.gif'
import WIEGif from '../../assests/images/41620-woman-working-on-laptop-in-office.gif'
import RoboGif from '../../assests/images/42631-mechanical-engineering-setting.gif'
import Student from '../../assests/GALLERY/tuxedo_talk.jpeg'
import EDS from '../../assests/GALLERY/e7.jpg'
import WIE from '../../assests/GALLERY/e8.jpg'
import Robo from '../../assests/GALLERY/g1.jpeg'
import Cog from '../../assests/icons/cogs-solid.svg'
import Female from '../../assests/icons/female-solid.svg'
import Shield from '../../assests/icons/shield-alt-solid.svg'
import Dashboard from '../../assests/icons/tachometer-alt-solid.svg'
import { useLocation } from 'react-router'
import queryString from 'query-string'

function Society() {
    const location = useLocation()


    useEffect(() => {
        let val = queryString.parse(location.hash);
        let parsed = Object.keys(val).at(0)
        if (parsed) {
            document.querySelector('#' + parsed).scrollIntoView({ behavior: 'smooth' });
        } else {
            if(window.scrollY===0)
            {
                window.scrollTo(0,1);
            }
            else{
                 window.scrollTo(0,0);
            }
        }
    }, [])
    return (
        <MainContainer>
          <Header active="societies"/> 
          <SocietyHeading >SOCIETIES</SocietyHeading> 
          <StyledHr/>
          <StudentBranch data-aos="fade-up"  id="student">
                <div className="heading" ><img src={Shield} alt="shield"/>IEEE SJCE Student branch </div>
                <img src={StuGif} alt="web"/>
                <p>IEEE-SJCE Student Branch which started as an elite group 29 years ago, today has sprawled throughout the campus of SJCE, making the students technically more competitive, more professional and capable of enhancing their abilities as an engineer. Since then IEEE-SJCE STUDENT BRANCH, a division under Region 10 of IEEE has been known for the immensity with which its members were bestowed. The very success story of its students as professionals into their respective fields after graduations speaks of its standards.<br/><br/>
                IEEE-SJCE now has about 330+ members from six fields of engineering: Biotechnology, Computer Science, Electronics & Communication, Electrical & Electronics, Information Science, and Instrumentation Technology. Apart from these many students from various post-graduation departments have also subscribed to be members.<br/><br/>
                IEEE-SJCE conducts two annual technical fests - TUXEDO, a Linux fest during the odd semesters, and CYBERIA, the annual technical fest conducted during the even semesters. CYBERIA was instigated 19 years ago and has been organized for 18 years now. The events in the fest are so organized as to give students from all branches of engineering, irrespective of them being members or not, and irrespective of their branches, a chance to showcase their talents and abilities.<br/><br/>
                <img className="photow" src={Student} alt="web"/>
                To make students technically competitive, technical tests on C programming microprocessors etc. are conducted. Various workshops and crash courses are also organized. An annual leadership workshop adorns the calendar of events every year, which helps the students to improve as leaders and inculcates in them the spirits of true leaders. Apart from this, a number of  talks are organized by people representing industry, academia, and research as well.<br/><br/>
                The standards of IEEE-SJCE were proven the best when it was awarded the Best Student Branch for the year 2003-2004. Among the competitors for this tag were the top colleges of VTU, Manipal Institute of Technology, and NITK, Surathkal as well.<br/><br/>
                IEEE-SJCE is also proud of nurturing the IEEE-EDS STUDENT CHAPTER. IEEE-SJCE is the only student branch to have gained permission to start this chapter throughout India. IEEE-SJCE also has a Women in Engineering Student Chapter.
                </p>
           </StudentBranch>
           <EDSBoard data-aos="fade-down"  >
                <div className="heading" ><img src={Dashboard} alt="dashboard"/>ELECTRON DEVICES SOCIETY</div>
                <img src={EDSGif} alt="editorial"/>
               <p id="eds">
                <strong>ABOUT US</strong><br/>
                IEEE-SJCE EDS has been providing students with basic electronics knowledge since its inception. It has helped students get better familiarized with electronic components, the various techniques of circuit making, and the basics of robot building.<br/><br/>

                <strong>SNAP CIRCUITS</strong><br/>
                Snap circuit product is a tool for entering the exciting world of electronics. Electronics play an increasingly important role in our everyday lives, and so it is important to have some basic knowledge of them. In this workshop, the students have a hands-on session of basic electrical and electronics circuits. The workshop is conducted for first and second year students exclusively. The students are allowed to explore different circuits with the help of the manuals which come along with the kits under the supervision of volunteers.
                <br/><br/>
                <strong>SOLDERING AND ETCHING WORKSHOP</strong><br/>
                Soldering is a concept used in every electronic appliance. It is necessary to know the proper soldering techniques. Keeping this in mind, IEEE-SJCE EDS conducts Soldering and Etching workshops in odd semesters, where senior IEEE EDS members teach the 2nd years and 1st years. They make participants etch a simple circuit and solder it. 
                <img className="photow" src={EDS} alt="web"/>
                The main highlights of the workshop were that the participants got to learn robotics from scratch and then move on to more advanced topics like Bluetooth-controlled robots, voice-controlled robots, DTMF-controlled robots, and even Android app-controlled robots.
                <br/><br/>
                <strong>VACATION PROJECT MANIA</strong><br/>
                "Whatever we possess becomes of double value when we have the opportunity of sharing it with others", this famous adage of Jean Nicolas embodies the idea of conducting VPM. Vacation Project Mania, an initiative of IEEE-SJCE EDS is conducted during the vacations. VPM is an interactive session in which the seniors and juniors mingle together to share their knowledge, ideas, and most important of all, an experience, but the torch bearers of this successful mania are the seniors without a doubt. VPM gets a huge response from all circuit branches, around 120+ students attend the project sessions every day for 4 hours. VPM plays a prominent role in generating practical impulse in the minds of young budding engineers.
                </p>
           </EDSBoard>
           <WIEBoard  data-aos="fade-up" >
                <div className="heading" ><img src={Female} alt="female" />WOMEN IN ENGINEERING </div>
                <img src={WIEGif} alt="web"/>
                <p ><strong>IEEE Women in Engineering (WIE) </strong>is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science. It is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. Its goal is to facilitate the recruitment and retention of women in technical disciplines globally. IEEE WIE envisions a vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity.
                <br/><br id="wie"/>
                The idea of WIE chapter in IEEE-SJCE student branch was conceived and implemented only a couple of years ago. Since its inception, the chapter has been responsible for several activities and initiatives. WIE team has made frequent visits to several organizations to reach out to underprivileged children and educate them about their chances in engineering.
                <br/><br/>
                IEEE-SJCE WIE also organises distinguished lectures by women professionals who help in encouraging young girls to strive hard and motivate them in achieving excellence in academics and profession. Apart from this, the WIE chapter of the student branch is also involved in organising technical competitions and workshops. The team intends to continue these activities along with the implementation of newer ideas.
                <br/><br/>

                <strong>MAJOR ACTIVITIES OF WIE :</strong>
                <br/><br/>
                <img className="photow" src={WIE} alt="web"/>
                <strong>▪ PRAYAS</strong><br/>
                (Platform for Rendering Aid to Young kids and Aiming to spread Smiles) A reach-out programme to provide underprivileged children a positive learning environment that will help them unleash their potential. This includes numerous visits to orphanages for providing academic aid to the kids. Additionally, kids are also helped with spoken English. Several organizations like Baapuji Children's Home, Sri Chayadevi Trust, Divya Deepa Charitable Trust, Vijaya Educational Society, etc. have been part of PRAYAS and have been given a chance to carry out the reach out programme. Currently, the team of WIE is carrying out PRAYAS in Rangarao Memorial School for Disabled, Mysuru.
                <br/><br/>

                <strong>▪ Tech-Know-Logic</strong><br/>
                A technical workshop that focuses on teaching concepts of microcontroller and its programming to differently-abled students to give the practical exposure of the subjects. It is a 2-day workshop held at JSS Polytechnic for the Differently Abled (PDA), Mysuru. IEEE-SJCE WIE has been practicing this workshop for 3 years and aims to continue doing so with more participants and newer concepts.
                <br/><br/>

                <strong>▪ Kalpana Chawla Memorial Lecture</strong><br/>
                A distinguished lecture by a woman scientist from the aerospace engineering domain. The main motto of the event was to mark the demise of Indian-born women astronaut, Kalpana Chawla. The initiative to organize this event was taken in the year 2018. The chief guest for the event was Dr. Indra Arumugam, Associate Director ISTRAC, ISRO. A glimpse of missions undertaken by ISRO and challenges in completing those missions was given. WIE team aims to continue organizing this event annually.
                <br/><br/>

                <strong>▪ Codefiesta</strong><br/>
                WIE wing of IEEE brought us CODEFIESTA, an online coding competition sponsored by Sahaj Software. This 3-hour hackathon was open for all students and exciting cash prizes and certificates were provided to the winners. To encourage the participation of girls, special cash prize of 1K was awarded to each of the top 3 participants excluding the girls among top five winners.                <br/>


                </p>
           </WIEBoard>
           <RoboticsBoard data-aos="fade-down" >
                <div className="heading" ><img src={Cog} alt="cogs"/>ROBOTICS AND AUTOMATION SOCIETY </div>
                <img src={RoboGif} alt="editorial"/>
               <p>
                Robotics and Automation Society(RAS) aims to strive towards the advancement of the theory and practice in Robotics and Automation engineering. It aims to impart conceptual clarity among students in topics related to Robotics and Automation, with a focus on sensors and actuators.
                <br/><br />
                <strong>ROBOTICS WORKSHOP</strong><br/>
                As they say, our knowledge is volatile until we apply the concept of our knowledge in a real-time situation. Hence Robotics 8. X, one of the biggest events was conducted by the IEEE-SJCE EDS Chapter.
                <br id="rs"/><br/>
                <img className="photow" src={Robo} alt="web"/>

                IEEE-SJCE, in addition to the above-mentioned societies, also houses an eccentric Membership Development Committee and a SBMDC wing.
                <br/><br/>

                <strong>Membership Development Committee and SBMDC Wing:</strong>
                <br/><br/>
                The Student Branch Membership Development Committee team helps in increasing IEEE Membership by recruiting new members and retaining current members. It also promotes elevations in grade and encourages participation in various society memberships. It contributes to the awareness by members of the values of their IEEE membership and increases IEEE membership quality. In addition, it provides efficient and timely communication to all IEEE management levels of the interests and concerns of our members and identifies membership trends, changes and problems.
                <br/><br/>
                <strong>IMAGE PROCESSING USING OPEN CV</strong><br/>
                Image processing is a method to perform operations on image inorder to enhance the image or get useful information from it. Image processing is a fascinating topic with wide applications. IEEE SJCE RAS along with EDS team conducted a 5 day event on image processing wherein basics of python were covered on the initial days followed by image processing concepts.
                <br id="rs"/><br/>

                </p>
           </RoboticsBoard>
        </MainContainer>
    )
}
const MainContainer = styled.div`
    overflow-x:hidden;
`;

const StyledHr = styled.hr`
    
    margin: 0 auto 4vh auto;
        width:5rem;
        border:none;
        border-top:3px solid #384158;
        height:1px;
`;

const RoboticsBoard = styled.div`
        overflow-x:hidden;
    .heading{
        display:flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        >img{
            width:2.5rem;
            margin:0 1vw;
            height:2rem;
        }
    }
    padding:1rem 5rem;
    >img{
        float: right;
        width:20rem;
        max-width: 100%;
    }
    >p{
        font-size:1.4rem;
        text-align: justify;
        >.photow{
            width: 30rem;
            max-width: 100%;
            display:block;
            float:left;
            padding:1rem;
        }
    }
    @media only screen and (max-width: 900px) {
        padding: 1rem 0.5rem;
    }
`;
const WIEBoard = styled.div`
        overflow-x:hidden;


    .heading{
        display:flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        >img{
            width:2.5rem;
            margin:0 0.5vw;
            object-fit: contain;
            height:2rem;
        }
    }
    padding:1rem 5rem;
    >img{
        float: left;
        width:20rem;
        max-width: 100%;
    }
    >p{
        font-size:1.4rem;
        text-align: justify;
        >.photow{
            width: 30rem;
            max-width: 100%;
            display:block;
            float:right;
            padding:1rem;
        }
    }
    @media only screen and (max-width: 900px) {
        padding: 1rem 0.5rem;
    }
`;


const EDSBoard = styled.div`
        overflow-x:hidden;

    .heading{
        display:flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        >img{
            width:2.5rem;
            margin:0 1vw;
            height:2rem;
        }
    }
    padding:1rem 5rem;
    >img{
        float: right;
        width:20rem;
        max-width: 100%;
    }
    >p{
        font-size:1.4rem;
        text-align: justify;
        >.photow{
            width: 30rem;
            max-width: 100%;
            display:block;
            float:left;
            padding:1rem;
        }
    }
    @media only screen and (max-width: 900px) {
        padding: 1rem 0.5rem;
    }
`;
const StudentBranch = styled.div`
        overflow-x:hidden;

    .heading{
        display:flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        >img{
            width:2.5rem;
            margin:0 1vw;
            height:2rem;
        }
    }
    padding:1rem 5rem;
    >img{
        float: left;
        width:20rem;
        max-width: 100%;
    }
    >p{
        font-size:1.4rem;
        text-align: justify;
        >.photow{
            width: 30rem;
            max-width: 100%;
            display:block;
            float:right;
            padding:1rem;
        }
    }
    @media only screen and (max-width: 900px) {
        padding: 1rem 0.5rem;
    }
`;
const SocietyHeading = styled.div`
     margin:15vh 0 1vh 0;
     overflow-x:hidden;


display: flex;
align-items: center;
justify-content: center;
font-size: 4rem;
color:rgb(7, 148, 241);
border-radius: 20px;
text-align: center;
`;

export default Society
