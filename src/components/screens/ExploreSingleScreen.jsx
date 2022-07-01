import {
    faBookmark,
    faComment,
    faEllipsis,
    faFaceSmile,
    faShare,
    faHeart,
    faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import explores from "../../assets/json/explores";
import useWindowDimensions from "../hooks/UseWindowDimensions";

export default function ExploreSingleScreen() {
    const { id } = useParams();
    const { height } = useWindowDimensions();
    const [likedComments, setLikedComments] = useState([]);
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const exploreRender = () => {
        if (typeof explores[id - 1].explore_data === "string") {
            if (
                (explores[id - 1].explore_data.includes("jpeg") ||
                    explores[id - 1].explore_data.includes("jpg") ||
                    explores[id - 1].explore_data.includes("png") ||
                    explores[id - 1].explore_data.includes("photo") ||
                    explores[id - 1].explore_data.includes("gif")) === true
            ) {
                return <img src={explores[id - 1].explore_data} alt="Post" />;
            } else {
                return <ReactPlayer url={explores[id - 1].explore_data} />;
            }
        }
        if (typeof explores[id - 1].explore_data === "object") {
            if (
                (explores[id - 1].explore_data[0].data.includes("jpeg") ||
                    explores[id - 1].explore_data[0].data.includes("jpg") ||
                    explores[id - 1].explore_data[0].data.includes("png") ||
                    explores[id - 1].explore_data[0].data.includes("photo") ||
                    explores[id - 1].explore_data[0].data.includes("gif")) ===
                true
            ) {
                return (
                    <img
                        src={explores[id - 1].explore_data[0].data}
                        alt="Post"
                    />
                );
            } else {
                return (
                    <ReactPlayer url={explores[id - 1].explore_data[0].data} />
                );
            }
        }
    };
    return (
        <Container miin >
            <section className="wrapper">
                <Left style={{ maxHeight: height - 60 }}>
                    {exploreRender()}
                </Left>
                <Right style={{ maxHeight: height - 60 }}>
                    <Head>
                        <Avatar>
                            <img
                                src={explores[id - 1].profile_image}
                                alt="Avatar"
                            />
                        </Avatar>
                        <Name>{explores[id - 1].username} . </Name>
                        <Follow>Follow</Follow>
                        <FontAwesomeIcon icon={faEllipsis} className="icon" />
                    </Head>
                    <CommentsUl>
                        {explores[id - 1].comments.map((comment) => (
                            <CommentLi>
                                <Avatar>
                                    <img src={comment.avatar} alt="Avatar" />
                                </Avatar>
                                <NameComment>
                                    <b>{comment.user}</b> {comment.comment}
                                </NameComment>
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    onClick={() =>
                                        setLikedComments([
                                            ...likedComments,
                                            comment.id,
                                        ])
                                    }
                                    className={
                                        likedComments.includes(comment.id)
                                            ? "icon liked"
                                            : "icon"
                                    }
                                />
                            </CommentLi>
                        ))}
                    </CommentsUl>
                    <ExploreFooter>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className={isLiked ? "icon liked" : "icon"}
                            onClick={() => setIsLiked(!isLiked)}
                        />
                        <FontAwesomeIcon icon={faComment} className="icon" />
                        <FontAwesomeIcon icon={faShare} className="icon" />
                        <FontAwesomeIcon
                            icon={faBookmark}
                            className={
                                isSaved ? "icon share shared" : "icon share"
                            }
                            onClick={() => setIsSaved(!isSaved)}
                        />
                    </ExploreFooter>
                    <Likes>{explores[id - 1].likes} likes</Likes>
                    <CommentDiv>
                        <FontAwesomeIcon icon={faFaceSmile} className="icon" />
                        <input type="text" placeholder="Add a comment..." />
                        <Post>Post</Post>
                    </CommentDiv>
                </Right>
            </section>
            <Close to="/explore">
                <FontAwesomeIcon icon={faClose} className="icon" />
            </Close>
        </Container>
    );
}
const Container = styled.section`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    padding: 30px 0;

    & .wrapper {
        display: flex;
        justify-content: space-between;
        max-width: 60%;
    }
`;
const Left = styled.div`
    width: 61%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    overflow: hidden;
`;
const Right = styled.div`
    width: 39%;
    background-color: #fff;
    padding: 15px;
    position: relative;
`;
const Head = styled.div`
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 15px;

    & .icon {
        margin-left: auto;
        font-size: 20px;
    }
`;
const Avatar = styled.div`
    min-width: 50px;
    min-height: 50px;
    max-width: 50px;
    max-height: 50px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 10px;
`;
const Name = styled.h5`
    font-size: 13px;
    font-weight: 600;
    margin-right: 5px;
    color: #262626;
`;
const NameComment = styled.p`
    color: #262626;
    font-weight: 100;
    font-size: 13px;
    margin-right: 10px;
    & b {
        font-size: 14px;
        font-weight: 600;
        margin-right: 5px;
        color: #262626;
    }
`;
const Follow = styled.p`
    color: #0095f6;
    font-size: 14px;
    font-weight: 600;
`;
const CommentsUl = styled.div`
    overflow-y: scroll;
    height: 75%;
`;
const CommentLi = styled.div`
    display: flex;
    margin-bottom: 20px;
    padding: 15px;

    & .icon {
        margin-left: auto;
        margin-right: 0;
        font-size: 11px;
        color: #8e8e8e;
        cursor: pointer;
        &.liked {
            color: red;
        }
    }
`;
const CommentDiv = styled.div`
    border-top: 1px solid #efefef;
    padding: 10px 0;
    display: flex;

    & .icon {
        width: 25px;
        height: 25px;
        margin-right: 15px;
    }

    & input {
        width: 90%;
    }
`;
const Post = styled.span`
    color: #0095f6;
    font-size: 14px;
`;
const ExploreFooter = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    margin-bottom: 5px;

    & .icon {
        width: 25px;
        height: 25px;
        color: #8e8e8e;
        margin-right: 15px;
        cursor: pointer;

        &.share {
            margin-right: 0;
            margin-left: auto;
        }
        &.liked {
            color: red;
        }
        &.shared {
            color: #000;
        }
    }
`;
const Likes = styled.p`
    font-size: 14px;
    color: #262626;
    margin-bottom: 5px;
`;
const Close = styled(Link)`
    font-size: 20px;
    position: fixed;
    top: 20px;
    right: 20px;
    color: #fff;
`;
