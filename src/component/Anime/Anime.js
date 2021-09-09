import React,{useEffect} from 'react'
import './styles.css'
import anime from 'animejs/lib/anime.es.js';
// import Typewriter from 'typewriter-effect/dist/core';



function Anime() {
    // useEffect(() => {
    //     var apps = document.getElementById('apps');
    //     var typewriter = new Typewriter(type, {
    //     delay: 75,
    //   });
    //   typewriter
    //     .pauseFor(1500)
    //     .typeString('<span style="color:white">Welcome To </span><span style="color:#384158">IEEE</span >- <span style="color:#29C1ED">SJCE</span>')
    //     .start();
    // }, [])
    useEffect(() => {
    const conatainer=document.querySelector('.containerss')
    for(var i=0;i<=100;i++){
        const blocks=document.createElement('div');
        blocks.classList.add('blockanime')
        conatainer.appendChild(blocks);
    }
    let animateBlocks = () => {
        anime({
            targets:'.blockanime',
            translateX:function(){
                return anime.random(-700,700)
            },
            translateY:function(){
                return anime.random(-500,500)
            },
            scale:function(){
                return anime.random(1,3)
            },
            easing:'linear',
            duration:6000,
            // delay:anime.stagger(10),
            complete:animateBlocks
        })
    };
    animateBlocks();
    }, [])
    return (
        <div className="bodyss">
            <div className="containerss">
                <h2 id="type"><span className="welcome" data-aos="fade-right">Welcome to</span><br/>IEEE-<span className="sjce">SJCE</span></h2>
            </div>
        </div>
    )
}

export default Anime
