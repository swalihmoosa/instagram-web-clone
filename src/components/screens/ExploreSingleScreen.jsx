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

export default function ExploreSingleScreen() {
    const { id } = useParams();

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
                return <img src={explores[id - 1].explore_data[0].data} alt="Post" />;
            } else {
                return <ReactPlayer url={explores[id - 1].explore_data[0].data} />;
            }
        }
    };
    return (
        <Container>
            <section className="wrapper">
                <Left>
                    {exploreRender()}
                </Left>
                <Right>
                    <Head>
                        <Avatar>
                            <img
                                src={explores[id - 1].profile_image}
                                alt="Avatar"
                            />
                        </Avatar>
                        <Name>{explores[id - 1].username}</Name>
                        <Follow>Follow</Follow>
                        <FontAwesomeIcon icon={faEllipsis} className="icon" />
                    </Head>
                    <CommentsUl>
                        <CommentLi>
                            <Avatar>
                                <img src="" alt="Avatar" />
                            </Avatar>
                            <Name>trollworld.2.0</Name>
                            <FontAwesomeIcon icon={faHeart} className="icon" />
                        </CommentLi>
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
const Container = styled.section``;
const Left = styled.section``;
const Right = styled.section``;
const Head = styled.section``;
const Avatar = styled.section``;
const Name = styled.section``;
const Follow = styled.section``;
const CommentsUl = styled.section``;
const CommentLi = styled.section``;
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
