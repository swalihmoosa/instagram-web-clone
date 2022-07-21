import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../App";
import posts from "../../assets/json/posts";

export default function RenderSavedPosts() {
    const { userActions } = useContext(UserContext);
    const [savedPosts, setSavedPosts] = useState([]);

    useEffect(() => {
        setSavedPosts(posts.filter((post) => post.isSaved === true));
    }, []);

    return (
        <Container>
            {savedPosts.map((post, index) => (
                <Post
                    key={post.id}
                    to={`/${userActions.user.username}/saved/single/${
                        index + 1
                    }`}
                >
                    <img src={post.post} alt="Post" />
                    <Overlay className="overlay">
                        <CountDiv>
                            {" "}
                            <LikeCount>
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    className="icon"
                                />
                                {post.likes}
                            </LikeCount>
                            <CommentCount>
                                <FontAwesomeIcon
                                    icon={faComment}
                                    className="icon"
                                />
                                {post.comments.length}
                            </CommentCount>
                        </CountDiv>
                    </Overlay>
                </Post>
            ))}
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Post = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    min-height: 300px;
    max-height: 300px;
    margin-bottom: 10px;
    margin-right: 10px;
    width: calc((100% - 20px) / 3);
    position: relative;
    cursor: pointer;
    background-color: #fff;

    &:hover .overlay {
        opacity: 1;
    }
    &:nth-child(3n) {
        margin-right: 0;
    }
`;
const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.6s ease 0s;
`;
const CountDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const LikeCount = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    color: #fff;
    font-size: 15px;
    & .icon {
        color: #fff;
        position: unset;
        margin-right: 7px;
        font-size: 18px;
    }
`;
const CommentCount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 15px;
    & .icon {
        color: #fff;
        position: unset;
        margin-right: 7px;
        font-size: 18px;
    }
`;
