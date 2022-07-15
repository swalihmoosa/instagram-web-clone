import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import StoryCard from "../cards/StoryCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import instagramLogo from "../../assets/images/insta-text-black.png";
import useWindowDimensions from "../hooks/UseWindowDimensions";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

export default function HighlightScreen() {
    const { height } = useWindowDimensions();
    const { userActions } = useContext(UserContext);
    const [currentStoryNumber, setCurrentStoryNumber] = useState(
        userActions.clickedStory - 1
    );
    const [highlightNumber, setHighlightNumber] = useState(0);
    const navigate = useNavigate();
    const isfutured = true;

    const renderHighlight = () => {
        if (
            highlightNumber <
            userActions.user.highlights[currentStoryNumber].stories.length - 1
        ) {
            setHighlightNumber(highlightNumber + 1);
        }
        if (
            highlightNumber ===
            userActions.user.highlights[currentStoryNumber].stories.length - 1
        ) {
            setHighlightNumber(0);
            if (currentStoryNumber < userActions.user.highlights.length - 1) {
                setCurrentStoryNumber(currentStoryNumber + 1);
            }
            if (currentStoryNumber === userActions.user.highlights.length - 1) {
                navigate("/");
            }
        }
    };

    useEffect(() => {
        const timerID = setTimeout(() => renderHighlight(), 5000);
        return () => {
            clearTimeout(timerID);
        };
    }, [highlightNumber, currentStoryNumber]);

    return (
        <Container style={{ height: height }}>
            <Logo>
                <img src={instagramLogo} alt="Instagram" />
            </Logo>
            {currentStoryNumber - 2 >= 0 ? (
                <StoryCard
                    highlightNumber={highlightNumber}
                    story={userActions.user.highlights[currentStoryNumber - 2]}
                    isfutured={isfutured}
                    currentStoryNumber={currentStoryNumber}
                />
            ) : null}
            {currentStoryNumber - 1 >= 0 ? (
                <StoryCard
                    highlightNumber={highlightNumber}
                    story={userActions.user.highlights[currentStoryNumber - 1]}
                    isfutured={isfutured}
                    currentStoryNumber={currentStoryNumber}
                />
            ) : null}
            <StoryCard
                highlightNumber={highlightNumber}
                story={userActions.user.highlights[currentStoryNumber]}
                currentStoryNumber={currentStoryNumber}
            />
            {currentStoryNumber < userActions.user.highlights.length - 1 ? (
                <StoryCard
                    highlightNumber={highlightNumber}
                    story={userActions.user.highlights[currentStoryNumber + 1]}
                    isfutured={isfutured}
                    currentStoryNumber={currentStoryNumber}
                />
            ) : null}
            {currentStoryNumber <= userActions.user.highlights.length - 3 ? (
                <StoryCard
                    highlightNumber={highlightNumber}
                    story={userActions.user.highlights[currentStoryNumber + 2]}
                    isfutured={isfutured}
                    currentStoryNumber={currentStoryNumber}
                />
            ) : null}
            <Close to="/">
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
