import {
    faAngleLeft,
    faAngleRight,
    faBookmark,
    faCirclePlay,
    faGear,
    faIdBadge,
    faTableCells,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../App";
import RenderPosts from "../cards/RenderPosts";
import RenderSavedPosts from "../cards/RenderSavedPosts";
import RenderTaggedPosts from "../cards/RenderTaggedPosts";
import RenderVideoPosts from "../cards/RenderVideoPosts";
import FollowersModal from "../modals/FollowersModal";

export default function ProfileScreen() {
    const { userActions, setUserActions } = useContext(UserContext);
    const [slideLeft, setSlideLeft] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("posts");
    const [isFollowersModal, setFollowersModal] = useState(false);
    const [isFollowingModal, setFollowingModal] = useState(false);
    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
        setSlideLeft(ref.current.scrollLeft);
    };

    useEffect(() => {
        window.location.pathname.includes(`/${userActions.user.username}/posts`)
            ? setSelectedCategory("posts")
            : window.location.pathname.includes(
                  `/${userActions.user.username}/channel`
              )
            ? setSelectedCategory("videos")
            : window.location.pathname.includes(
                  `/${userActions.user.username}/saved`
              )
            ? setSelectedCategory("saved")
            : window.location.pathname.includes(
                  `/${userActions.user.username}/tagged`
              )
            ? setSelectedCategory("tagged")
            : setSelectedCategory("");
    }, [userActions.user.username, window.location.pathname]);

    return (
        <Container>
            <section className="wrapper">
                <ProfileDiv>
                    <Left>
                        <img src={userActions.user.avatar} alt="Profile" />
                    </Left>
                    <Right>
                        <Top>
                            <Username>{userActions.user.username}</Username>
                            <Edit>Edit Profile</Edit>
                            <FontAwesomeIcon icon={faGear} className="icon" />
                        </Top>
                        <Details>
                            <Detail>
                                {userActions.user.posts.length} <br />
                                posts
                            </Detail>
                            <Detail
                                onClick={() => setFollowersModal(true)}
                                className="follower"
                            >
                                {userActions.user.followers.length} <br />
                                followers
                            </Detail>
                            <Detail
                                onClick={() => setFollowingModal(true)}
                                className="follower"
                            >
                                {userActions.user.followings[0].data.length}{" "}
                                <br />
                                following
                            </Detail>
                        </Details>
                        <Bio>
                            <Name>{userActions.user.name}</Name>
                            <Type>{userActions.user.type}</Type>
                            <Description>{userActions.user.bio}</Description>
                        </Bio>
                    </Right>
                </ProfileDiv>
                <HighlightsUlContainer>
                    <HighlightsUl ref={ref}>
                        {userActions.user.highlights.map((highlight) => (
                            <HighlightsLi
                                key={highlight.id}
                                to="/stories/highlights/"
                                onClick={() =>
                                    setUserActions({
                                        ...userActions,
                                        clickedStory: highlight.id,
                                    })
                                }
                            >
                                <BgDiv>
                                    <StoryDiv>
                                        <img
                                            src={highlight.stories[0].story}
                                            alt={highlight.title}
                                        />
                                    </StoryDiv>
                                </BgDiv>
                                <h5>{highlight.title.slice(0, 9)}</h5>
                            </HighlightsLi>
                        ))}
                        {slideLeft === 0 ? null : (
                            <ArrowDiv
                                onClick={() => scroll(-100)}
                                className="left"
                            >
                                <FontAwesomeIcon
                                    icon={faAngleLeft}
                                    className="icon"
                                />
                            </ArrowDiv>
                        )}
                        {slideLeft === 295 ? null : (
                            <ArrowDiv
                                onClick={() => scroll(100)}
                                className="right"
                            >
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    className="icon"
                                />
                            </ArrowDiv>
                        )}
                    </HighlightsUl>
                </HighlightsUlContainer>
                <PostsHead>
                    <PostsHeadLi
                        to={`/${userActions.user.username}/posts`}
                        className={selectedCategory === "posts" && "active"}
                        onClick={() => setSelectedCategory("posts")}
                    >
                        <FontAwesomeIcon icon={faTableCells} className="icon" />
                        <p>POSTS</p>
                    </PostsHeadLi>
                    <PostsHeadLi
                        to={`/${userActions.user.username}/channel`}
                        onClick={() => setSelectedCategory("videos")}
                        className={selectedCategory === "videos" && "active"}
                    >
                        <FontAwesomeIcon icon={faCirclePlay} className="icon" />

                        <p>VIDEOS</p>
                    </PostsHeadLi>
                    <PostsHeadLi
                        to={`/${userActions.user.username}/saved`}
                        onClick={() => setSelectedCategory("saved")}
                        className={selectedCategory === "saved" && "active"}
                    >
                        <FontAwesomeIcon icon={faBookmark} className="icon" />

                        <p>SAVED</p>
                    </PostsHeadLi>
                    <PostsHeadLi
                        to={`/${userActions.user.username}/tagged`}
                        onClick={() => setSelectedCategory("tagged")}
                        className={selectedCategory === "tagged" && "active"}
                    >
                        <FontAwesomeIcon icon={faIdBadge} className="icon" />

                        <p>TAGGED</p>
                    </PostsHeadLi>
                </PostsHead>
                <PostsDiv>
                    {window.location.pathname.includes(
                        `/${userActions.user.username}/posts`
                    ) ? (
                        <RenderPosts />
                    ) : window.location.pathname.includes(
                          `/${userActions.user.username}/channel`
                      ) ? (
                        <RenderVideoPosts />
                    ) : window.location.pathname.includes(
                          `/${userActions.user.username}/saved`
                      ) ? (
                        <RenderSavedPosts />
                    ) : window.location.pathname.includes(
                          `/${userActions.user.username}/tagged`
                      ) ? (
                        <RenderTaggedPosts />
                    ) : null}
                </PostsDiv>
            </section>
            <FollowersModal
                isFollowersModal={isFollowersModal}
                setFollowersModal={setFollowersModal}
                isFollowingModal={isFollowingModal}
                setFollowingModal={setFollowingModal}
            />
        </Container>
    );
}
const Container = styled.section`
    background-color: #fafafa;
    & .wrapper {
        padding: 115px 20px;

        @media all and (max-width: 640px) {
            padding: 115px 0;
        }
    }
`;
const ProfileDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 75%;
    margin-bottom: 30px;

    @media all and (max-width: 980px) {
        width: 100%;
    }
    @media all and (max-width: 640px) {
        flex-wrap: wrap;
    }
`;
const Left = styled.div`
    max-width: 150px;
    max-height: 150px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 130px;

    @media all and (max-width: 768px) {
        margin-right: 30px;
    }
`;
const Right = styled.div`
    width: calc(100% - 280px);

    @media all and (max-width: 768px) {
        width: calc(100% - 30px);
    }
    @media all and (max-width: 480px) {
        width: 100%;
    }
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 25px;

    & .icon {
        font-size: 18px;
        color: #262626;
    }

    @media all and (max-width: 480px) {
        flex-wrap: wrap;
    }
`;
const Username = styled.h4`
    font-size: 28px;
    color: #262626;

    @media all and (max-width: 480px) {
        margin-bottom: 10px;
        width: 100%;
    }
`;
const Edit = styled.p`
    border: 1px solid #dbdbdb;
    font-size: 13px;
    padding: 3px 5px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: 15px;
    color: #262626;

    @media all and (max-width: 480px) {
        margin-left: 0;
    }
`;
const Details = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;
const Detail = styled.p`
    color: #262626;
    font-size: 16px;

    @media all and (max-width: 480px) {
        text-align: center;
    }
    @media all and (max-width: 360px) {
        font-size: 15px;
    }

    &.follower {
        cursor: pointer;
    }

    & br {
        display: none;
        @media all and (max-width: 480px) {
            display: block;
        }
    }
`;
const Bio = styled.div``;
const Name = styled.h4`
    color: #262626;
    font-size: 16px;
`;
const Type = styled.p`
    color: #8e8e8e;
    font-weight: 100;
`;
const Description = styled.p`
    white-space: pre-line;
    font-size: 14px;
    &::first-line {
        color: rgb(0, 55, 107);
    }
`;
const HighlightsUlContainer = styled.div`
    position: relative;
`;
const HighlightsUl = styled.div`
    max-width: 100%;
    overflow-x: scroll;
    display: flex;
    align-items: center;
    padding: 15px 0;
    border-radius: 7px;
    margin-bottom: 20px;
`;
const HighlightsLi = styled(Link)`
    margin-right: 25px;

    &:nth-child(12n) {
        margin-right: 0;
    }

    & h5 {
        font-size: 13px;
        color: rgb(38, 38, 38);
        text-align: center;
    }
`;
const BgDiv = styled.div`
    min-width: 80px;
    max-width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #d7d7d7;
    padding: 2px;
    margin: 0 auto;
    margin-bottom: 5px;
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
const ArrowDiv = styled.div`
    background-color: #7d7d7d;
    border-radius: 50%;
    min-width: 23px;
    min-height: 23px;
    max-width: 23px;
    max-height: 23px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    cursor: pointer;

    &.right {
        right: -10px;
    }
    &.left {
        left: -10px;
    }

    & .icon {
        color: #fff;
        font-size: 15px;
    }
`;
const PostsHead = styled.div`
    border-top: 1px solid rgb(219, 219, 219);
    padding: 15px 0;
    display: flex;
    justify-content: center;
`;
const PostsHeadLi = styled(Link)`
    color: #7d7d7d;
    font-size: 12px;
    margin-right: 25px;
    position: relative;
    display: flex;
    align-items: center;

    & .icon {
        margin-right: 7px;

        @media all and (max-width: 480px) {
            font-size: 16px;
        }
    }

    & p {
        color: #7d7d7d;
        font-size: 12px;

        @media all and (max-width: 480px) {
            display: none;
        }
    }

    &.active::before {
        content: "";
        height: 2px;
        background-color: #000;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% + 10px);
        top: -15px;
    }
`;
const PostsDiv = styled.div`
    font-size: 30px;
`;
