import {
    faBookmark,
    faComment,
    faEllipsis,
    faFaceSmile,
    faHeart,
    faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import userImage from "../../assets/images/header/profile.jpg";

export default function PostCard({ post }) {
    const [likedPosts, setLikedPosts] = useState([1, 5, 7]);
    const [savedPosts, setSavedPosts] = useState([1, 4, 5, 9]);
    return (
        <Container>
            <PostHead>
                <Avatar>
                    <img src={post.profile_image} alt="Avatar" />
                </Avatar>
                <NameDiv>
                    <H4>{post.username}</H4>
                    <Loction>{post.location}</Loction>
                </NameDiv>
                <Menu>
                    <FontAwesomeIcon
                        icon={faEllipsis}
                        alt="Menu"
                        className="icon"
                    />
                </Menu>
            </PostHead>
            <PostImage>
                <img src={post.post} alt="Posted Pic" />
            </PostImage>
            <PostFooter>
                <FontAwesomeIcon
                    icon={faHeart}
                    className={
                        likedPosts.includes(post.id) ? "icon clicked" : "icon"
                    }
                    onClick={() => {
                        if (likedPosts.includes(post.id)) {
                            let filteredArray = likedPosts.filter(
                                (likedPost) => likedPost !== post.id
                            );
                            setLikedPosts(filteredArray);
                        } else {
                            setLikedPosts([...likedPosts, post.id]);
                        }
                    }}
                />
                <FontAwesomeIcon icon={faComment} className="icon" />
                <FontAwesomeIcon icon={faShare} className="icon" />
                <FontAwesomeIcon
                    icon={faBookmark}
                    className={
                        savedPosts.includes(post.id)
                            ? "icon share clicked"
                            : "icon share"
                    }
                    onClick={() => {
                        if (savedPosts.includes(post.id)) {
                            let filteredArray = savedPosts.filter(
                                (savedPost) => savedPost !== post.id
                            );
                            setSavedPosts(filteredArray);
                        } else {
                            setSavedPosts([...savedPosts, post.id]);
                        }
                    }}
                />
            </PostFooter>
            <Likers>
                <LikedUser>
                    <img src={userImage} alt="User" />
                </LikedUser>
                <p>
                    <b>loki </b> and <b> { likedPosts.includes(post.id) ? post.likes + 1 : post.likes } others</b>
                </p>
            </Likers>
            <Caption>
                <b>{post.username}</b> White is pure and simple and matches with
                everything
            </Caption>
            <CommentDiv>
                <FontAwesomeIcon icon={faFaceSmile} className="icon" />
                <input type="text" placeholder="Add a comment..." />
                <Post>Post</Post>
            </CommentDiv>
        </Container>
    );
}

const Container = styled.div`
    border: 1px solid #dbdbdb;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
    background-color: #fff;

    &:last-child {
        margin-bottom: 0;
    }
`;
const PostHead = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #efefef;
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
`;
const NameDiv = styled.div``;
const H4 = styled.h4`
    font-size: 14px;
`;
const Loction = styled.p`
    font-size: 12px;
    font-weight: 100;
    color: #8e8e8e;
`;
const Menu = styled.div`
    margin-left: auto;
    margin-right: 0;
    width: 30px;
    height: 30px;
`;
const PostImage = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;
const PostFooter = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    & .icon {
        width: 25px;
        height: 25px;
        color: #8e8e8e;
        margin-right: 15px;
        cursor: pointer;

        &.share {
            margin-right: 0;
            margin-left: auto;
            &.clicked {
                color: #000;
            }
        }
        &.clicked {
            color: #ff0000;
        }
    }
`;
const Likers = styled.div`
    display: flex;
    margin-bottom: 20px;

    & p {
        font-weight: 100;
        font-size: 14px;

        & p {
            font-weight: 700;
        }
    }
`;
const LikedUser = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 50%;
    overflow: hidden;
`;
const Caption = styled.p`
    margin-bottom: 20px;
    font-weight: 100;
    font-size: 14px;
    color: #262626;

    & b {
        font-weight: 700;
        color: #000;
    }
`;
const CommentDiv = styled.div`
    border-top: 1px solid #efefef;
    padding-top: 10px;
    display: flex;
    align-items: center;

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
