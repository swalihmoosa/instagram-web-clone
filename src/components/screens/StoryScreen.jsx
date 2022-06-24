import React from "react";
import styled from "styled-components";
import StoryCard from "../cards/StoryCard";
import stories from "../../assets/json/stories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import instagramLogo from '../../assets/images/insta-text-black.png'

export default function StoryScreen() {
    return (
        <Container>
            <Logo>
                <img src={instagramLogo} alt="Instagram" />
            </Logo>
            <StoryCard story={stories[0]} />
            <FontAwesomeIcon icon={faXmark} className="close-icon" />
        </Container>
    );
}

const Container = styled.section`
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;

    & .close-icon{
        color: #fff;
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 30px;
    }
`;
const Logo = styled.div`
    position: fixed;
    left: 20px;
    top: 20px;
    width: 100px;
`;
