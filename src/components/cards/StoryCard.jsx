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
    @media all and (max-width: 500px) {
        width: 100%;
    }
    &.isfutured {
        transform: scale(0.4);
        @media all and (max-width: 1500px) {
            transform: scale(0.3);
        }
        @media all and (max-width: 980px) {
            transform: scale(0.2);
        }
        &.next {
            &:nth-child(3) {
                right: 17%;
                left: auto;
                @media all and (max-width: 1900px) {
                    right: 15%;
                }
                @media all and (max-width: 1800px) {
                    right: 13%;
                }
                @media all and (max-width: 1700px) {
                    right: 11%;
                }
                @media all and (max-width: 1600px) {
                    right: 9%;
                }
                @media all and (max-width: 1500px) {
                    right: 8%;
                }
                @media all and (max-width: 1400px) {
                    right: 5%;
                }
                @media all and (max-width: 1300px) {
                    right: 1%;
                }
                @media all and (max-width: 1200px) {
                    right: -5%;
                }
                @media all and (max-width: 1080px) {
                    right: -11%;
                }
                @media all and (max-width: 980px) {
                    right: -23%;
                }
                @media all and (max-width: 768px) {
                    display: none;
                }
            }
            &:nth-child(4) {
                right: 5%;
                left: auto;
                @media all and (max-width: 1900px) {
                    right: 3%;
                }
                @media all and (max-width: 1800px) {
                    right: 0%;
                }
                @media all and (max-width: 1700px) {
                    right: -3%;
                }
                @media all and (max-width: 1600px) {
                    right: -6%;
                }
                @media all and (max-width: 1500px) {
                    right: -5%;
                }
                @media all and (max-width: 1400px) {
                    right: -8%;
                }
                @media all and (max-width: 1300px) {
                    right: -12%;
                }
                @media all and (max-width: 1200px) {
                    display: none;
                }
            }
        }
        &.next.prev-one {
            &:nth-child(2) {
                left: 17%;
                @media all and (max-width: 1900px) {
                    left: 15%;
                }
                @media all and (max-width: 1800px) {
                    left: 13%;
                }
                @media all and (max-width: 1700px) {
                    left: 11%;
                }
                @media all and (max-width: 1600px) {
                    left: 9%;
                }
                @media all and (max-width: 1500px) {
                    left: 8%;
                }
                @media all and (max-width: 1400px) {
                    left: 5%;
                }
                @media all and (max-width: 1300px) {
                    left: 1%;
                }
                @media all and (max-width: 1200px) {
                    left: -5%;
                }
                @media all and (max-width: 1080px) {
                    left: -11%;
                }
                @media all and (max-width: 980px) {
                    left: -10%;
                }
                @media all and (max-width: 930px) {
                    left: -15%;
                }
                @media all and (max-width: 930px) {
                    left: -20%;
                }
                @media all and (max-width: 800px) {
                    left: -23%;
                }
                @media all and (max-width: 768px) {
                    display: none;
                }
            }
            &:nth-child(4) {
                right: 17%;
                left: auto;
                @media all and (max-width: 1900px) {
                    right: 15%;
                }
                @media all and (max-width: 1800px) {
                    right: 13%;
                }
                @media all and (max-width: 1700px) {
                    right: 11%;
                }
                @media all and (max-width: 1600px) {
                    right: 9%;
                }
                @media all and (max-width: 1500px) {
                    right: 8%;
                }
                @media all and (max-width: 1400px) {
                    right: 5%;
                }
                @media all and (max-width: 1300px) {
                    right: 1%;
                }
                @media all and (max-width: 1200px) {
                    right: -5%;
                    display: flex;
                }
                @media all and (max-width: 1080px) {
                    right: -11%;
                }
                @media all and (max-width: 980px) {
                    right: -10%;
                }
                @media all and (max-width: 930px) {
                    right: -15%;
                }
                @media all and (max-width: 930px) {
                    right: -20%;
                }
                @media all and (max-width: 800px) {
                    right: -23%;
                }
                @media all and (max-width: 768px) {
                    display: none;
                }
            }
            &:nth-child(5) {
                right: 5%;
                left: auto;
                @media all and (max-width: 1900px) {
                    right: 3%;
                }
                @media all and (max-width: 1800px) {
                    right: 0%;
                }
                @media all and (max-width: 1700px) {
                    right: -3%;
                }
                @media all and (max-width: 1600px) {
                    right: -6%;
                }
                @media all and (max-width: 1500px) {
                    right: -5%;
                }
                @media all and (max-width: 1400px) {
                    right: -8%;
                }
                @media all and (max-width: 1300px) {
                    right: -12%;
                }
                @media all and (max-width: 1200px) {
                    display: none;
                }
            }
        }
        &.next.prev {
            &:nth-child(2) {
                left: 5%;
                @media all and (max-width: 1900px) {
                    left: 3%;
                }
                @media all and (max-width: 1800px) {
                    left: 0%;
                }
                @media all and (max-width: 1700px) {
                    left: -3%;
                }
                @media all and (max-width: 1600px) {
                    left: -6%;
                }
                @media all and (max-width: 1500px) {
                    left: -5%;
                }
                @media all and (max-width: 1400px) {
                    left: -8%;
                }
                @media all and (max-width: 1300px) {
                    left: -12%;
                }
                @media all and (max-width: 1200px) {
                    display: none;
                }
            }
            &:nth-child(3) {
                left: 17%;
                @media all and (max-width: 1900px) {
                    left: 15%;
                }
                @media all and (max-width: 1800px) {
                    left: 13%;
                }
                @media all and (max-width: 1700px) {
                    left: 11%;
                }
                @media all and (max-width: 1600px) {
                    left: 9%;
                }
                @media all and (max-width: 1500px) {
                    left: 8%;
                }
                @media all and (max-width: 1400px) {
                    left: 5%;
                }
                @media all and (max-width: 1300px) {
                    left: 1%;
                }
                @media all and (max-width: 1200px) {
                    left: -5%;
                }
                @media all and (max-width: 1080px) {
                    left: -11%;
                }
                @media all and (max-width: 980px) {
                    left: -10%;
                }
                @media all and (max-width: 930px) {
                    left: -15%;
                }
                @media all and (max-width: 930px) {
                    left: -20%;
                }
                @media all and (max-width: 800px) {
                    left: -23%;
                }
                @media all and (max-width: 768px) {
                    display: none;
                }
            }
            &:nth-child(5) {
                right: 17%;
                left: auto;
                @media all and (max-width: 1900px) {
                    right: 15%;
                }
                @media all and (max-width: 1800px) {
                    right: 13%;
                }
                @media all and (max-width: 1700px) {
                    right: 11%;
                }
                @media all and (max-width: 1600px) {
                    right: 9%;
                }
                @media all and (max-width: 1500px) {
                    right: 8%;
                }
                @media all and (max-width: 1400px) {
                    right: 5%;
                }
                @media all and (max-width: 1300px) {
                    right: 1%;
                }
                @media all and (max-width: 1200px) {
                    right: -5%;
                    display: flex;
                }
                @media all and (max-width: 1080px) {
                    right: -11%;
                }
                @media all and (max-width: 980px) {
                    right: -10%;
                }
                @media all and (max-width: 930px) {
                    right: -15%;
                }
                @media all and (max-width: 930px) {
                    right: -20%;
                }
                @media all and (max-width: 800px) {
                    right: -23%;
                }
                @media all and (max-width: 768px) {
                    display: none;
                }
            }
            &:nth-child(6) {
                right: 5%;
                left: auto;
                @media all and (max-width: 1900px) {
                    right: 3%;
                }
                @media all and (max-width: 1800px) {
                    right: 0%;
                }
                @media all and (max-width: 1700px) {
                    right: -3%;
                }
                @media all and (max-width: 1600px) {
                    right: -6%;
                }
                @media all and (max-width: 1500px) {
                    right: -5%;
                }
                @media all and (max-width: 1400px) {
                    right: -8%;
                }
                @media all and (max-width: 1300px) {
                    right: -12%;
                }
                @media all and (max-width: 1200px) {
                    display: none;
                }
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
