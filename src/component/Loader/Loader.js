import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'
import animationData from '../lotties/7556-loader-blu.json'

function Loader() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <MainContainer>
            <Lottie options={defaultOptions} />
        </MainContainer>
    )
}
const MainContainer = styled.div`
    /* height: 5vh; */
    line-height: 100vh;
    width:10vw;
    margin:auto;
    justify-content: center;
    align-items: center;
`;
export default Loader
