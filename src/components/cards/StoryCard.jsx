import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

export default function StoryCard({story }) {
    return (
        <Container>
            <StoryHead>
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
                <FontAwesomeIcon icon={faHeart} className="icon" />
                <FontAwesomeIcon icon={faShare} className="icon" />
            </StoryFooter>
        </Container>
    );
}

const Container = styled.div`
    background-color: #fafafa;
    width: 500px;
    height: 100%;
`;
const StoryHead = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`;
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
const H5 = styled.h5``;
const StoryImage = styled.div``;
const StoryFooter = styled.div``;
