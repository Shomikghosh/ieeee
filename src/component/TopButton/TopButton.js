import React from 'react'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import styled from 'styled-components';

const TopButton = () => {
    const scrollToPageTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <TopArrow onClick={scrollToPageTop}>
            <KeyboardArrowUpIcon />
        </TopArrow>
    )
}

const TopArrow = styled.div`
    position: fixed;
    bottom: 30px;
    right: 40px;
    border: 1px solid #000;
    background-color: rgba(0, 0, 0, 0.3);
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 100;
    &:hover{
        background-color:rgb(45, 133, 215,0.8);
    }
    > svg {
        width: 40px;
        height: 40px;
    }
`

export default TopButton
