import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StoryCard from "../cards/StoryCard";
import stories from "../../assets/json/stories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import instagramLogo from "../../assets/images/insta-text-black.png";
import useWindowDimensions from "../hooks/UseWindowDimensions";
import { Link, useNavigate } from "react-router-dom";

export default function StoryScreen() {
    const { height } = useWindowDimensions();
    const [currentStoryNumber, setCurrentStoryNumber] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("#############################", currentStoryNumber);
        if (currentStoryNumber < stories.length - 1) {
            const story = setInterval(
                () => setCurrentStoryNumber((oldCount) => oldCount + 1),
                5000
            );

            return () => {
                clearInterval(story);
            };
        } else {
            navigate("/");
        }
    }, [currentStoryNumber]);

    return (
        <Container style={{ height: height }}>
            <Logo>
                <img src={instagramLogo} alt="Instagram" />
            </Logo>
            <StoryCard story={stories[currentStoryNumber]} />
            <Close to="/" >
                <FontAwesomeIcon icon={faXmark} className="icon" />
            </Close>
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
`;
const Logo = styled.div`
    position: fixed;
    left: 20px;
    top: 20px;
    width: 100px;
`;
const Close = styled(Link)`
    & .icon {
        color: #fff;
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 30px;
    }
`;
