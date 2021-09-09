import React, { useState,useEffect } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { DehazeOutlined  } from '@material-ui/icons'
import styled from 'styled-components'
import Logo from '../../assests/images/ieee_logo.png'

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

function Sidebar() {

    const [showSidebar, setShowSidebar] = useState(false);
    const [scrollState, setScrollState] = useState("top")

    const [showDrop1, setshowDrop1] = useState(false);
    const [showDrop2, setshowDrop2] = useState(false);
    const [showDrop3, setshowDrop3] = useState(false);
    const [showDrop4, setshowDrop4] = useState(false);
    
    useEffect(() => {
    let listener = document.addEventListener("scroll", e => {
        let scrolled = document.scrollingElement.scrollTop
        if(scrolled>=1)
        {
            setScrollState("not-top");
        }else{
            setScrollState("top");
        }
        })
      return () => {
        document.removeEventListener("scroll", listener)
      }
    }, [scrollState])   

    return (
        <>
            <ShowClose>
            {showSidebar 
            ? <CloseIcon onClick={() => setShowSidebar(false)} /> 
            : <DehazeOutlined onClick={() => setShowSidebar(true)} />
            }
            </ShowClose>

            <MainContainer showSidebar={showSidebar}  scrollState={scrollState} >
                {/* <SideBar showSidebar={showSidebar}>
                    <SidebarIcons>
                        <Link to="/"><img src={Logo} alt="logo" /></Link>
                    </SidebarIcons>
                    <SideBarTop>
                        <Link onClick={() => setShowSidebar(false)} to="/s1">Home</Link>
                        <Link onClick={() => setShowSidebar(false)} to="/s2">Boards</Link>
                        <Link onClick={() => setShowSidebar(false)} to="/work">Societies</Link>
                    </SideBarTop>
                    <StyledHr/>
                    <SideBarBottom>
                        <Link onClick={() => setShowSidebar(false)} to="/about">Team</Link>
                        <Link onClick={() => setShowSidebar(false)} to="/team">Gallery</Link>
                        <Link onClick={() => setShowSidebar(false)} to="/conatct">Contact</Link>
                        <Link onClick={() => setShowSidebar(false)} to="/conatct">Fests</Link>
                    </SideBarBottom>
                </SideBar> */}
                <header>
                    <nav>
                        <ul>
                            <li><a href="/" className="active"  style={{color:'black'}}>Home</a></li>
                            <li className="sub-menu"><a href="/boards"  style={{color:'black'}}>Boards</a></li>
                                <ul style={{display:showDrop1?'block':'none',listStyleType:'none',padding:'0'}}>
                                    <li><a href="/boards" style={{color:'white',textDecoration:'none'}}><img src={Code} alt="code"/>Web Development Board</a></li>
                                    <li><a href="/boards" style={{color:'white',textDecoration:'none'}}><img src={Pencil} alt="pencil"/>Editorial Board</a></li>
                                </ul>
                            <li className="sub-menu"><a href="/societies"   style={{color:'black'}}>Societies</a></li>
                                <ul style={{display:showDrop2?'block':'none',listStyleType:'none',padding:'0'}}>
                                    <li><a href="/societies" style={{color:'white',textDecoration:'none'}}><img src={Shield} alt="shield"/>Student Branch</a></li>
                                    <li><a href="/societies" style={{color:'white',textDecoration:'none'}}><img src={Dashboard} alt="dashboard"/>Electron Devices Society</a></li>
                                    <li><a href="/societies" style={{color:'white',textDecoration:'none'}}><img src={Female} alt="female"/>Women in Engineering</a></li>
                                    <li><a href="/societies" style={{color:'white',textDecoration:'none'}}><img src={Cog} alt="cogs"/>Robotics Society</a></li>
                                </ul>
                            <li className="sub-menu"><a href="/team"   style={{color:'black'}}>Team</a></li>
                            <ul style={{display:showDrop3?'block':'none',listStyleType:'none',padding:'0'}}>
                                    <li ><a href="/team" style={{color:'white',textDecoration:'none'}}><img src={Bulls} alt="bulls"/>Executive Commitee</a></li>
                                    <li><a href="/team" style={{color:'white',textDecoration:'none'}}><img src={Users} alt="users"/>Membership Commitee</a></li>
                                    <li><a href="/team" style={{color:'white',textDecoration:'none'}}><img src={Sort} alt="sort"/>Societies</a></li>
                                    <li><a href="/team" style={{color:'white',textDecoration:'none'}}><img src={Task} alt="task"/>Boards</a></li>
                                </ul>
                            <li><a href="/gallery"  style={{color:'black'}}>Gallery</a></li>
                            <li><a href="/contact"  style={{color:'black'}}>Contact</a></li>
                            <li className="sub-menu"><a href="javascript:void(0);"   style={{color:'black'}}>Fests</a></li>
                             <ul style={{display:showDrop4?'block':'none',listStyleType:'none',padding:'0'}}>
                                    <li ><a href="http://www.ieeesjce.com/cyberia/index.html" style={{color:'white',textDecoration:'none'}}><img src={Magic} alt="task"/>Cyberia</a></li>
                                    <li><a href="http://ieeesjce.com/tuxedo/" style={{color:'white',textDecoration:'none'}}><img src={Links} alt="task"/>Tuxedo</a></li>
                                </ul>
                           
                        </ul>
                    </nav>
                </header>
            </MainContainer>
        </>
    )
}
 const MainContainer = styled.div`
    /* background-color: ${({ showSidebar }) => showSidebar ? "rgba(0,0,0,.75)" : 'transparent'}; */
    visibility: ${({showSidebar}) => showSidebar ? "visible" : "hidden"} ;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    z-index:200;
    overflow-x: hidden;
    >header{
        position:absolute;
        top:0;
        left:0;
        padding:100px;
        background:#262626;
        width:100%;
        box-sizing: border-box;
        >.logo{
        color:#fff;
        height:50px;
        line-height:50px;
        font-size:24px;
        font-weight:bold;
        float: left;
        }
        >nav{
            float:right;
            >ul{
                margin:0;
                padding: 0;
                display: flex;
                >li:active{
                    >ul{
                        display: block;
                    }
                }
                >.sub-menu:before{
                    position:absolute;
                    font-family: fontAwesome;
                    color:#fff;
                    right:5px;
                }
                >li{
                    >ul{
                        position: absolute;
                        left:0;
                        background:#333;
                        >li{
                            display: block;
                            width:200px;
                        }
                    }
                    list-style:none;
                    >a{
                        height:50px;
                        line-height: 50px;
                        padding:0 20px;
                        text-decoration:none;
                        display: block;
                    }
                    >a::active{
                        background: #2196f3;
                    }
                    >a:hover{
                        background: #2196f3;
                    }
                }
            }
        }
    }
     
    /* header  */
    @media only screen and (max-width: 991px) {
        >header{
        padding:0 20px;
        > nav{
            position:absolute;
            width:100%;
            height:calc(100vh-50px);
            background: white;
            top: ${({ scrollState }) => scrollState==='top'? '75px' : '60px'};
            left:0;
            /* transition:0.5s; */
            > ul{
                display: block;
                text-align:center;
                >li:active{
                    >ul{
                        position: relative;
                        background: #003e6f;
                    }
                }
                    >ul{
                        >li{
                            background-color:#293B5F;
                            margin:0;
                            padding:0;
                            >a{
                                background-color:#293B5F;
                                text-decoration:none;
                                display: flex;
                                >img{
                                    width:2rem;
                                    margin:auto 2vw;
                                    height:2rem;
                                }
                            }
                         
                        }
                    }
                                >li{
                    >a{
                        border-bottom:1px solid rgba(0,0,0,0.2);
                    }
                }
            }
        }
    
    }
}


    
`;

const ShowClose = styled.div`
    position: absolute;
    top: 0;
    right: 20px;
    z-index: 201;
    overflow-x: hidden;
    >.MuiSvgIcon-root {
        font-size: 30px;
        color: #333;
        cursor: pointer;
    }
`
const SideBar = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 350px;
    height: 100vh;
    background: #ffffff;
    font-size: 30px;
    padding: 0 20px;
    transform: ${({showSidebar}) => showSidebar ? "translateX(0)" : "translateX(100%)"};
    visibility: ${({showSidebar}) => showSidebar ? "visible" : "hidden"} ;
    transition: all .5s;
    overflow-x: hidden;

    a {
        text-decoration: none;
        color: #000;
        margin: 10px 0;
    }
`

const SidebarIcons = styled.div`
    padding: 10px;
    font-size: 20px;
    >Link, img{
        height:15vh;
    }
`

const SideBarTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding-bottom: 20px;
    padding-top: 20px;
    margin-bottom: 20px;
`
const StyledHr = styled.hr`
    border: 0; 
    height: 1px; 
    background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); 
`

const SideBarBottom  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
`

export default Sidebar
