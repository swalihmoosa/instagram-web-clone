import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../App";

export default function RenderPosts() {
    const { userActions } = useContext(UserContext);

    return (
        <Container>
            {userActions.user.posts.map((post) => (
                <Post
                    key={post.id}
                    to={`/${userActions.user.username}/posts/single/${post.id}`}
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
    justify-content: space-between;
    flex-wrap: wrap;
`;
const Post = styled(Link)`
    width: 32%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    min-height: 300px;
    max-height: 300px;
    margin-bottom: 10px;
    position: relative;
    cursor: pointer;
    background-color: #fff;

    &:hover .overlay {
        opacity: 1;
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
