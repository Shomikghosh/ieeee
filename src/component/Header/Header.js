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
import Drop from '../../assests/images/213124_f0d7_icon.png'
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
    
     return (
        <MainContainer scrollState={scrollState} active={active}>
            <div className='header__left'>
                <div className='logo'> <a href="/"><img src={Logo} alt="logo"/></a></div> 
                <div className="ieee">
                        <span className="a">IEEE-</span>
                        <span className="b">SJCE</span>
                    </div>
                    <div className="navbar">
                      <a href="/" className={active==="home"?"active":"non-active"}>Home</a><hr/>
                      <div className="dropdown">
                        <button className={active==="boards"?"active dropbtn":"non-active dropbtn"} ><a style={{textDecoration:'inherit',color:'inherit'}} href="/boards">Boards</a>
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                          <a href="/boards#web"><img src={Code} alt="code"/>Web-Development Board</a>
                          <a href="/boards#editorial"><img src={Pencil} alt="pencil"/>Editorial Board</a>
                        </div>
                      </div>
                      <div className="dropdown">
                        <button  className={active==="societies"?"active dropbtn":"non-active dropbtn"}><a style={{textDecoration:'inherit',color:'inherit'}} href="/societies">Societies</a>
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                          <a href="/societies#student"><img src={Shield} alt="shield"/>Student Branch</a>
                          <a href="/societies#eds"><img src={Dashboard} alt="dashboard"/>Electron Devices Society</a>
                          <a href="/societies#wie"><img src={Female} alt="female"/>Women in Engineering</a>
                          <a href="/societies#rs"><img src={Cog} alt="cogs"/>Robotics and Automation Society</a>
                        </div>
                      </div><div className="dropdown">
                        <button  className={active==="teams"?"active dropbtn":"non-active dropbtn"} ><a style={{color:'inherit'}} href="/team">Team</a>
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                          <a href="/team#ec"><img src={Bulls} alt="bulls"/>Executive Committee</a>
                          <a href="/team#mc"><img src={Users} alt="users"/>Membership Committee</a>
                          <a href="/team#s"><img src={Sort} alt="sort"/>Societies</a>
                          <a href="/team#b"><img src={Task} alt="task"/>Boards</a>
                        </div>
                      </div>
                      <a href="/gallery" className={active==="gallery"?"active":"non-active"}>Gallery</a>
                      <a href="/contact" className={active==="contact"?"active":"non-active"}>Contact</a><hr/>
                      <div className="dropdown">
                        <button className="dropbtn" style={{display: 'flex',justifyContent:'center',alignItems:'center',marginTop:'-9px',pointerEvents:"none"}}>Fests
                          <img src={Drop} alt="dropdwn"/>
                        </button>
                        <div className="dropdown-content" style={{marginLeft:'-100px',width:'150px'}}>
                          <a href="http://www.ieeesjce.com/cyberia/index.html" target="_blank" rel="noreferrer"><img src={Magic} alt="task"/>Cyberia</a>
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
            width: auto;
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
                color:${({ scrollState }) => scrollState==='top'? 'white' : '#4B6587'} ;
                text-shadow: ${({ scrollState }) => scrollState==='top'? '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000' : 'none'} ;
            }
            
            >.b{
                color:${({ scrollState }) => scrollState==='top'? '#1E3163' : 'rgb(7, 148, 241)'} ;
                text-shadow:  ${({ scrollState }) => scrollState==='top'? '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000' : 'none'} ;
            }
        }
          >.navbar {
            margin-left:auto;
            >.active{
              color:${({ scrollState }) => scrollState==='top'? '#1E3163' : 'rgb(7, 148, 241)'} ;
              border-bottom: 4px solid ${({ scrollState }) => scrollState==='top'? '#1E3163' : 'rgb(7, 148, 241)'} ; 
              font-weight: 800; 
              margin-top:2px;
            }
            >.non-active{
              color:${({ scrollState }) => scrollState==='top'? 'white' : 'black'};
              font-weight: 800;
              margin-top:2px;
            }
            >a{
              font-weight: 800;
            }
            >.dropdown {
                float: left;
                z-index: 20;
                margin-right: 3px;
                /* margin: 0 1.5vw; */
                /* overflow: hidden; */
                >.dropdown-content {
                    display: none;
                    position: absolute;
                    background-color:white;
                    min-width: auto;
                    width: 250px;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    z-index: 1;
                    margin-top: 0px;
                    cursor:none;
                      >a{
                        font-weight: 800;
                          float: none;
                          color: black ;
                          padding: 5px 5px;
                          text-decoration: none;
                          display: block;
                          text-align: left;
                          &:hover{
                            color:rgb(7, 148, 241);
                          }
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
                          height:2rem;
                          width:1.2rem;
                          margin-right: 0.5rem;
                      }
                    }              
                   }
              }
              >.dropdown .dropbtn {
                >img{
                  width:1rem;
                  justify-content: center;
                  align-items: center;
                }
                  font-size: 16px;
                  text-transform: uppercase;
                  border: none;
                  outline: none;
                  color:${({ scrollState }) => scrollState==='top'? 'white' : 'black'};
                  font-weight: 700;
                  background-color: inherit;
                  font-family: inherit; /* Important for vertical align on mobile phones */
                  margin: 0; /* Important for vertical align on mobile phones */
                }
                >.dropdown .active{color:rgb(7, 148, 241);
                  >a{
                      
                      border-bottom: 4px solid rgb(7, 148, 241); 
                  
                  }
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
            margin:${({ scrollState }) => scrollState==='top'? '1.4vh 1.5vw' : '1.2vh 1.5vw'};
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
