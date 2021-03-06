import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

export default function StoryCard({ story, isfutured, currentStoryNumber }) {
    return (
        <Container
            className={
                isfutured === true && currentStoryNumber === 0
                    ? "isfutured next"
                    : isfutured === true && currentStoryNumber === 1
                    ? "isfutured next prev-one"
                    : isfutured === true && currentStoryNumber > 1
                    ? "isfutured next prev"
                    : ""
            }
        >
            <StoryHead>
                {isfutured ? null : (
                    <Timing>
                        <Bg id="story-bg"></Bg>
                    </Timing>
                )}
                <Avatar>
                    <img src={story.profile_image} alt="Avatar" />
                </Avatar>
                <H5>{story.username}</H5>
            </StoryHead>
            <StoryImage>
                <img src={story.story} alt="Story" />
            </StoryImage>
            {isfutured ? null : (
                <StoryFooter>
                    <input type="text" placeholder="Send message" />
                    <FontAwesomeIcon icon={faHeart} className="icon heart" />
                    <FontAwesomeIcon icon={faShare} className="icon share" />
                </StoryFooter>
            )}
            {isfutured ? (
                <Overlay>
                    <StoryLi>
                        <BgDiv>
                            <StoryDiv>
                                <img src={story.profile_image} alt="Story" />
                            </StoryDiv>
                        </BgDiv>
                        <h5>{story.username.slice(0, 12)}</h5>
                    </StoryLi>
                </Overlay>
            ) : null}
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
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    &.isfutured {
        transform: scale(0.4);
        &.next {
            &:nth-child(3) {
                left: 57%;
            }
            &:nth-child(4) {
                left: 69%;
            }
        }
        &.next.prev-one {
            &:nth-child(2) {
                left: 16%;
            }
            &:nth-child(4) {
                left: 57%;
            }
            &:nth-child(5) {
                left: 69%;
            }
        }
        &.next.prev {
            &:nth-child(2) {
                left: 4%;
            }
            &:nth-child(3) {
                left: 16%;
            }
            &:nth-child(5) {
                left: 57%;
            }
            &:nth-child(6) {
                left: 69%;
            }
        }
    }
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
    height: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
`;
const Bg = styled.div`
    background-color: #464646;
    width: 100%;
    height: 100%;
    width: 50%;
    border-radius: 5px;
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
    & .icon {
        position: absolute;
        &.heart {
            right: 55px;
        }
        &.share {
            right: 25px;
        }
    }
`;
const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);
`;
const StoryLi = styled.div`
    transform: scale(1.4);
    & h5 {
        font-size: 18px;
        color: #fff;
        text-align: center;
        transform: scale(1.4);
    }
`;
const BgDiv = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    background-image: linear-gradient(to right top, #fea700, #7c13f8);
    padding: 5px;
    margin: 0 auto;
    margin-bottom: 15px;
`;
const StoryDiv = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #fff;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;
