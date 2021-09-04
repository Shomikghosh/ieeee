import React ,{useEffect}from 'react'
import Header from '../Header/Header'
import  styled from 'styled-components';
import Phone from '../../assests/images/9004-phone-ringing.gif';
import Pin from '../../assests/images/11475-pin-on-a-map.gif';
import Mail from '../../assests/images/45125-e-mail-animation.gif'
import Insta from '../../assests/images/64332-instagram-logo-animation.gif'
function Contact() {
    useEffect(() => {
        if(window.scrollY<=1)
        {
          window.scrollTo(0, window.scrollY+1);
        }else{
          window.scrollTo(0, window.scrollY-1);
        }
    }, [])
    return (
        <>
            <Header active="contact"/>
            <ContactHeading id="web">CONTACT US </ContactHeading> 
            <ContactFlexDiv>
                <div>
                <form
                    action="https://formspree.io/f/mdoypqwy"
                    method="POST"
                    >
                            <div className="styled-input">
                            <label>Name</label>
                            <input type="text" required />
                        </div>
                        <div className="styled-input">
                            <label>Email</label>
                            <input  type="email"  required />
                        </div>
                        <div className="styled-input">
                            <label>Phone</label>
                            <input type="text" required />
                        </div>
                        <div className="styled-input">
                            <label>Message</label>
                            <textarea style={{height:"200px"}}  name="message" type="textarea" required />
                        </div>
                        <button className="submit" type="submit">Submit</button>
                    </form>
                    
                </div>
                <div>
                    {/* <div className="ndcontact">
                        <img src={Phone} alt="phone"/><div>+(91) 9902959866</div>
                    </div>
                    <div className="ndcontact">
                        <img src={Mail} alt="mail"/><div>ieeesjce2019@gmail.com</div>
                    </div>
                    <div className="ndcontact">
                        <img src={Pin} alt="pin"/><div>Sri Jayachamarajendra College of Engineering,
                                                        Campus Road, Mysuru,
                                                        Karnataka - 570006</div> 
                    </div>*/}
                    <ContactMap>
                    <iframe title="gmaps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15592.149409781525!2d76.6134265!3d12.3132715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ad797cbfc78d07a!2sJSS%20Science%20and%20Technology%20University%2C%20Mysuru.!5e0!3m2!1sen!2sin!4v1567658298958!5m2!1sen!2sin" width="500px" height="400px"  frameborder="0" allowfullscreen=""></iframe>
                    </ContactMap>
                </div>
            </ContactFlexDiv>
            <FourContact>
                <div> <img src={Pin} alt="pin"/><span>IEEE SJCE<br/>SJCE Campus</span></div>
                <div> <img src={Phone} alt="phone"/><span>PHONE <br/>(+91)6205701439</span></div>
                <div> <img src={Mail} alt="mail"/><span>GMAIL<br/>ieeesjce2019</span></div>
                <div><img src={Insta} alt="insta"/><span>FOLLOW<br/>1.5k Followers</span></div>
            </FourContact>
        </>
    )
}
const FourContact = styled.div`
    width: 100vw;
    margin:2vh auto;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    @media only screen and (max-width: 750px) {
        flex-direction: column;
    }
    >div{
        >img{
            width:5rem;
            border-radius: 50%;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            position: relative;
            top:-50px;
        }
        >span{
            position: relative;
            top:-50px;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 1.8rem;
        border-radius: 10px;
        width: 18vw;
        height:auto;
        margin:5vh auto;
        background-color:#5089C6;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        @media only screen and (max-width: 780px) {
            width: auto;
            margin:1em 2em;
        }
    }
`;

const ContactMap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin:10vh auto;
    width:100%;
    >iframe{
        @media only screen and (max-width: 1024px) {
            width:300px ;  
          }
       
    }
    height:auto;
`;

const ContactFlexDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    @media only screen and (max-width: 1024px) {
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
    >div{
        >form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            >.submit{

            border: none;
            background-color: #3498DB;
            text-shadow: 0px -2px #2980B9;
            position: relative;
            padding: 5px 20px;
            margin: 1rem;
            float: left;
            border-radius: 8px;
            font-size: 25px;
            color: #FFF;
            text-decoration: none;	
            transition: all 0.1s;
            -webkit-transition: all 0.1s;
        }
        >.styled-input{
            display: flex;
            flex-direction: column;
            >label{
                margin:2vh 0 1vh 0;
            }
            >input{
                height:5vh;
            }
            >input,textarea{
                width:30rem;
                background-color:#E8F0FE ;
                border:none;
                border-radius: 5px;
                outline: none;
                padding:0.5rem;
                @media only screen and (max-width: 1024px) {
                    width:20rem;
                }
            }
        }
        }
      
        }
    
`;

const ContactHeading = styled.div`
        display: flex;
        margin-top: 10vh;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: #7289da;
    text-align: center;
    @media only screen and (max-width: 780px) {
    font-size: 2.5rem;
    }
    >img{
        width: 5rem;
    }
`;

export default Contact
