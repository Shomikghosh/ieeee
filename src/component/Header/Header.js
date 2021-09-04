import React,{useState,useEffect} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import styled from 'styled-components'
import Logo from '../../assests/images/ieee_logo.png'
import { useHistory } from "react-router-dom";
import Female from '../../assests/icons/female-solid.svg'
import Shield from '../../assests/icons/shield-alt-solid.svg'
import Dashboard from '../../assests/icons/tachometer-alt-solid.svg'
import Cog from '../../assests/icons/cogs-solid.svg'
import Code from '../../assests/icons/code-solid.svg'
import Pencil from '../../assests/icons/pencil-alt-solid.svg'
import Bulls from '../../assests/icons/bullseye-solid.svg'
import Users from '../../assests/icons/users-solid.svg'
import Task from '../../assests/icons/tasks-solid.svg'
import Sort from '../../assests/icons/sort-amount-down-solid.svg'
import Magic from '../../assests/icons/magic-solid.svg'
import Links from '../../assests/icons/link-solid.svg' 
function Header({active}) {
    const [scrollState, setScrollState] = useState("top")

    useEffect(() => {
      let listener = document.addEventListener("scroll", e => {
        let scrolled = document.scrollingElement.scrollTop
        if(active==='home'){
            if (scrolled >=10) {
          if (scrollState !== "shomik") {
            setScrollState("shomik")
          }
        } else {
          if (scrollState !== "top") {
            
            setScrollState("top")
          }
        }
        }
        else{
          setScrollState('shomik')
        }
      
      })
      return () => {
        document.removeEventListener("scroll", listener)
      }
    }, [scrollState])   
    let history = useHistory();

    function handleBoardsClick() {
      history.push("/boards");
    }
    function handleSocietyClick() {
      history.push("/societies");
    }
    function handleTeamClick() {
      history.push("/team");
    }
    
     return (
        <MainContainer scrollState={scrollState} active={active}>
            <div className='header__left'>
                <div className='logo'> <a href="/react/web/"><img src={Logo} alt="logo"/></a></div> 
                <div className="ieee">
                        <span className="a">IEEE-</span>
                        <span className="b">SJCE</span>
                    </div>
                    <div className="navbar">
                      <a href="/react/web/" className={active==="home"?"active":"non-active"}>Home</a><hr/>
                      <div className="dropdown">
                        <button className={active==="boards"?"active dropbtn":"non-active dropbtn"}  onClick={handleBoardsClick}>Boards
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                          <a href="/react/web/boards#web"><img src={Code} alt="code"/>Web-Development Board</a>
                          <a href="/react/web/boards#editorial"><img src={Pencil} alt="pencil"/>Editorial Board</a>
                        </div>
                      </div>
                      <div className="dropdown">
                        <button  className={active==="societies"?"active dropbtn":"non-active dropbtn"} onClick={handleSocietyClick}>Societies
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                          <a href="/react/web/societies#student"><img src={Shield} alt="shield"/>Student Branch</a>
                          <a href="/react/web/societies#eds"><img src={Dashboard} alt="dashboard"/>Electron Devices Society</a>
                          <a href="/react/web/societies#wie"><img src={Female} alt="female"/>Womens in Engineering</a>
                          <a href="/react/web/societies#rs"><img src={Cog} alt="cogs"/>Robotics Society</a>
                        </div>
                      </div><div className="dropdown">
                        <button  className={active==="teams"?"active dropbtn":"non-active dropbtn"}  onClick={handleTeamClick}>Team
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                          <a href="/react/web/team#ec"><img src={Bulls} alt="bulls"/>Executive Commitee</a>
                          <a href="/react/web/team#mc"><img src={Users} alt="users"/>Membership Commitee</a>
                          <a href="/react/web/team#s"><img src={Sort} alt="sort"/>Societies</a>
                          <a href="/react/web/team#b"><img src={Task} alt="task"/>Boards</a>
                        </div>
                      </div>
                      <a href="/react/web/gallery" className={active==="gallery"?"active":"non-active"}>Gallery</a>
                      <a href="/react/web/contact" className={active==="contact"?"active":"non-active"}>Contact</a><hr/>
                      <div className="dropdown">
                        <button className="dropbtn">Fests
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content" style={{marginLeft:'-100px',width:'150px'}}>
                          <a href="http://www.ieeesjce.com/cyberia/home.php" target="_blank" rel="noreferrer"><img src={Magic} alt="task"/>Cyberia</a>
                          <a href="http://ieeesjce.com/tuxedo/" target="_blank" rel="noreferrer"><img src={Links} alt="task"/>Tuxedo</a>
                        </div>
                      </div>
                    </div>

                {/* <div className="links">
                    <span>Home</span>
                    <span>Boards</span>
                    <span>Society</span>
                    <span>Team</span>
                    <span>Gallery</span>
                    <span>Contact</span>
                    <span>Fests</span>

                </div> */}
            </div>
            <div className='header__right'>
               <div className='sidebar'>
                    <Sidebar />
                </div>
            </div> 
            
        </MainContainer>
    )
}

const MainContainer = styled.div`
    top: 0;
    width: 100%;
    height:${({ scrollState }) => scrollState==='top'? '12%' : '9%'};
    transition: height 1s;
    background-color:${({ scrollState }) => scrollState==='top'? 'transparent' : '#FFFFFF'};
    box-shadow:  ${({ scrollState }) => scrollState==='top' ? 'none' : 'rgba(0, 0, 0, 0.24) 0px 3px 8px'};
    color: black;
    position: fixed;
    display: flex;
    flex-direction:column;
    z-index: 2000;
    >.header__left{
        flex:0.8;
        display: flex;
        height: 100%;
        flex-direction: row;
        /* justify-content: flex-start; */
        /* margin: 0.5rem 0.5rem 0 0.5rem; */
        padding: 0.5rem;
        >.logo img{
            width: ${({ scrollState }) => scrollState==='top'? '4rem' : '3.5rem'};
            height:${({ scrollState }) => scrollState==='top'? '4rem' : '3.5rem'};
            max-height: 100%;
            transition: height 1s;
            transition: width 1s;
            margin-left: 2%;
            margin-right: 5%;
        }
        >.ieee{
            display: flex;
            align-items: center;
            width: auto;
            height: 100%;
            font-size:${({ scrollState }) => scrollState==='top'? '3rem' : '2.5rem'} ;
            transition: font-size 1s;
            margin-left: 1rem;
            >.a{
                color:#4B6587;
                text-shadow: ${({ scrollState }) => scrollState==='top'? '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000' : 'none'} ;
            }
            
            >.b{
                color: #29C1ED;
                text-shadow:  ${({ scrollState }) => scrollState==='top'? '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000' : 'none'} ;
            }
        }
          >.navbar {
            margin-left:auto;
            >.active{
              color:#293B5F;
              border-bottom: 4px solid #293B5F; 
              font-weight: 800; 
            }
            >.non-active{
              color:${({ scrollState }) => scrollState==='top'? 'white' : 'black'};
              font-weight: 800;
            }
            >a{
              font-weight: 800;
            }
            >.dropdown {
                float: left;
                z-index: 20;
                margin: 0 1.5vw;
                /* overflow: hidden; */
                >.dropdown-content {
                    display: none;
                    position: absolute;
                    background-color:white;
                    min-width: auto;
                    width: 250px;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    z-index: 1;
                    margin-top: 5px;
                    cursor:none;
                      >a{
                        font-weight: 800;
                          float: none;
                          color: black ;
                          padding: 5px 5px;
                          text-decoration: none;
                          display: block;
                          text-align: left;
                        }
                        >.active{
                          color:#8AB6D6;
                          
                        }
                  }      
              }
              >.dropdown:hover {
                >.dropdown-content {
                    display: flex;
                    flex-direction: column;
                    cursor:pointer;
                    text-transform: uppercase; 
                    >a{
                      display: flex;
                      >img{
                          width:1.2rem;
                          margin-right: 0.5rem;
                      }
                    }              
                   }
              }
              >.dropdown .dropbtn {
                  font-size: 16px;
                  text-transform: uppercase;
                  border: none;
                  outline: none;
                  
                  color:${({ scrollState }) => scrollState==='top'? 'white' : 'black'};
                  margin:2vh 2vw;
                  font-weight: 700;
                  background-color: inherit;
                  font-family: inherit; /* Important for vertical align on mobile phones */
                  margin: 0; /* Important for vertical align on mobile phones */
                }
                >.dropdown .active{
                  color:#293B5F;
                  border-bottom: 4px solid #293B5F; 
                }
                @media only screen and (max-width: 900px) {
                      display: none;
                  }
          }

          /* Links inside the navbar */
          >.navbar a {
            display: flex;
            float: left;
            text-transform: uppercase;
            font-size: 16px;
            color: white;
            text-align: center;
            margin:${({ scrollState }) => scrollState==='top'? '2vh 1.5vw' : '1vh 1.5vw'};
            transition: margin 1s;
            text-decoration: none;
            
          }
        @media only screen and (max-width: 600px) {
            .ieee{
                font-size: 2rem;
            }
        } 
    }
    >.header__right{
        height:65px;
        line-height: 65px;
        >.sidebar{
          height:100%;
        }
        flex:0.2;
        display: flex;
        height:100%;
        flex-direction: row;
        justify-content: flex-end;
        display: none;
        @media only screen and (max-width: 900px) {
            display: block;
        } 
    }
    
`;

export default Header
