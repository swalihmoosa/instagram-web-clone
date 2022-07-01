import {
    faEllipsis,
    faFaceSmile,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import explores from "../../assets/json/explores";
import useWindowDimensions from "../hooks/UseWindowDimensions";

export default function ExploreSingleScreen() {
    const { id } = useParams();
    const { height } = useWindowDimensions();

    const exploreRender = () => {
        if (typeof explores[id - 1].explore_data === "string") {
            if (
                explores[id - 1].explore_data.includes(
                    "jpeg" || "jpg" || "png" || "gif"
                ) === true
            ) {
                return <img src={explores[id - 1].explore_data} alt="Post" />;
            } else {
                return <ReactPlayer url={explores[id - 1].explore_data} />;
            }
        }
        if (typeof explores[id - 1].explore_data === "object") {
            if (
                explores[id - 1].explore_data[0].data.includes(
                    "jpeg" || "jpg" || "png" || "gif"
                ) === true
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
        <Container style={{ height: height }}>
            <section className="wrapper">
                <Left>{exploreRender()}</Left>
                <Right>
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
                                <Name>{comment.user}</Name>
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    className="icon"
                                />
                            </CommentLi>
                        ))}
                    </CommentsUl>
                    <CommentDiv>
                        <FontAwesomeIcon icon={faFaceSmile} className="icon" />
                        <input type="text" placeholder="Add a comment..." />
                        <Post>Post</Post>
                    </CommentDiv>
                </Right>
            </section>
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
        align-items: center;
        justify-content: space-between;
        max-width: 60%;
    }
`;
const Left = styled.section`
    width: 61%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
`;
const Right = styled.section`
    width: 39%;
    background-color: #fff;
    padding: 15px;
`;
const Head = styled.section`
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
const Avatar = styled.section`
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 10px;
`;
const Name = styled.section`
    font-size: 14px;
    font-weight: 600;
    margin-right: 10px;
`;
const Follow = styled.section`
    color: #0095f6;
    font-size: 14px;
    font-weight: 600;
`;
const CommentsUl = styled.section`
    overflow-y: scroll;
`;
const CommentLi = styled.section`
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 15px;
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
