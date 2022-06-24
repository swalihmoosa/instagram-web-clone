import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

export default function StoryCard({story }) {
    return (
        <Container>
            <StoryHead>
                <Timing>
                    <Bg></Bg>
                </Timing>
                <Avatar>
                    <img src={story.profile_image} alt="Avatar" />
                </Avatar>
                <H5>{story.username}</H5>
            </StoryHead>
            <StoryImage>
                <img src={story.story} alt="Story" />
            </StoryImage>
            <StoryFooter>
                <input type="text" placeholder="Send message" />
                <FontAwesomeIcon icon={faHeart} className="icon heart" />
                <FontAwesomeIcon icon={faShare} className="icon share" />
            </StoryFooter>
        </Container>
    );
}

const Container = styled.div`
    background-color: #fafafa;
    width: 500px;
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StoryHead = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
`;
const Timing = styled.div`
    background-color: #ffffff59;
    width: 100%;
    height: 3px;
    margin-bottom: 10px;
    border-radius: 5px;
`
const Bg = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100%;
    width: 50%;
`
const Avatar = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 15px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;
const H5 = styled.h5`
    color: #000;
    font-size: 12px;
`;
const StoryImage = styled.div``;
const StoryFooter = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;

    & input {
        border: 2px solid #dbdbdb !important;
        border-radius: 100vh;
        padding: 10px;
        width: 100%;
    }
    & .icon{
        position: absolute;
        
        &.heart{
            right: 55px;
        }
        &.share{
            right: 25px;
        }
    }
`;
