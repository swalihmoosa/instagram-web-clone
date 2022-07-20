import {
    faBookmark,
    faComment,
    faEllipsis,
    faFaceSmile,
    faShare,
    faHeart,
    faClose,
    faAngleLeft,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../App";
import useWindowDimensions from "../hooks/UseWindowDimensions";

export default function PostSingleScreen() {
    const { id } = useParams();
    const { height } = useWindowDimensions();
    const { userActions } = useContext(UserContext);
    const [likedComments, setLikedComments] = useState([]);
    const [newlikedComments, setNewLikedComments] = useState([]);
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [explorePostCount, setExplorePostCount] = useState(0);
    const [newComment, setNewComment] = useState("");
    const [newComments, setNewComments] = useState([]);

    const postRender = () => {
        if (typeof userActions.user.posts[id - 1].post === "string") {
            if (
                (userActions.user.posts[id - 1].post.includes("jpeg") ||
                    userActions.user.posts[id - 1].post.includes("jpg") ||
                    userActions.user.posts[id - 1].post.includes("png") ||
                    userActions.user.posts[id - 1].post.includes("photo") ||
                    userActions.user.posts[id - 1].post.includes("gif")) === true
            ) {
                return <img src={userActions.user.posts[id - 1].post} alt="Post" />;
            } else {
                return (
                    <ReactPlayer
                        url={userActions.user.posts[id - 1].post}
                        playing={true}
                        loop={true}
                    />
                );
            }
        }
        if (typeof userActions.user.posts[id - 1].post === "object") {
            if (
                (userActions.user.posts[id - 1].post[explorePostCount].data.includes(
                    "jpeg"
                ) ||
                    userActions.user.posts[id - 1].post[
                        explorePostCount
                    ].data.includes("jpg") ||
                    userActions.user.posts[id - 1].post[
                        explorePostCount
                    ].data.includes("png") ||
                    userActions.user.posts[id - 1].post[
                        explorePostCount
                    ].data.includes("photo") ||
                    userActions.user.posts[id - 1].post[
                        explorePostCount
                    ].data.includes("gif")) === true
            ) {
                return (
                    <img
                        src={
                            userActions.user.posts[id - 1].post[explorePostCount].data
                        }
                        alt="Post"
                    />
                );
            } else {
                return (
                    <ReactPlayer
                        url={
                            userActions.user.posts[id - 1].post[explorePostCount].data
                        }
                        playing={true}
                        loop={true}
                    />
                );
            }
        }
    };

    const newCommentPost = () => {
        setNewComments([
            ...newComments,
            {
                id: newComments.length + 1,
                comment: newComment,
                user: userActions.user.username,
                avatar: userActions.user.avatar,
                time: "now",
                likes: 0,
            },
        ]);
        setNewComment("");
    };

    return (
        <Container style={{ minHeight: height }}>
            <section className="wrapper">
                <Left style={{ maxHeight: height - 60, height: height }}>
                    {postRender()}
                </Left>
                <Right style={{ maxHeight: height - 60 }}>
                    <Head>
                        <Avatar>
                            <img
                                src={userActions.user.avatar}
                                alt="Avatar"
                            />
                        </Avatar>
                        <Name>{userActions.user.username} . </Name>
                        <Follow>Follow</Follow>
                        <FontAwesomeIcon icon={faEllipsis} className="icon" />
                    </Head>
                    <CommentsUl>
                        {newComments.length > 0
                            ? newComments.map((newcomment) => (
                                  <CommentLi key={newcomment.id}>
                                      <Avatar>
                                          <img
                                              src={newcomment.avatar}
                                              alt="Avatar"
                                          />
                                      </Avatar>
                                      <NameComment>
                                          <p>
                                              <b>{newcomment.user}</b>{" "}
                                              {newcomment.comment}
                                          </p>
                                          <LikeContainer>
                                              <Time>{newcomment.time}</Time>
                                              <Like>
                                                  {newlikedComments.includes(
                                                      newcomment.id
                                                  )
                                                      ? newcomment.likes + 1
                                                      : newcomment.likes}{" "}
                                                  likes
                                              </Like>
                                              <Reply>Reply</Reply>
                                          </LikeContainer>
                                      </NameComment>
                                      <FontAwesomeIcon
                                          icon={faHeart}
                                          onClick={() =>
                                              setNewLikedComments([
                                                  ...newlikedComments,
                                                  newcomment.id,
                                              ])
                                          }
                                          className={
                                              newlikedComments.includes(
                                                  newcomment.id
                                              )
                                                  ? "icon liked"
                                                  : "icon"
                                          }
                                      />
                                  </CommentLi>
                              ))
                            : ""}
                        {userActions.user.posts[id - 1].comments.map((comment) => (
                            <CommentLi key={comment.id}>
                                <Avatar>
                                    <img src={comment.avatar} alt="Avatar" />
                                </Avatar>
                                <NameComment>
                                    <p>
                                        <b>{comment.name}</b> {comment.body}
                                    </p>
                                    <LikeContainer>
                                        {/* <Time>{comment.time}</Time> */}
                                        <Like>
                                            {likedComments.includes(comment.id)
                                                ? comment.likes + 1
                                                : comment.likes}{" "}
                                            likes
                                        </Like>
                                        <Reply>Reply</Reply>
                                    </LikeContainer>
                                </NameComment>
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    onClick={() => {
                                        if (
                                            likedComments.includes(comment.id)
                                        ) {
                                            let filteredArray =
                                                likedComments.filter(
                                                    (likedComment) =>
                                                        likedComment !==
                                                        comment.id
                                                );
                                            setLikedComments(filteredArray);
                                        } else {
                                            setLikedComments([
                                                ...likedComments,
                                                comment.id,
                                            ]);
                                        }
                                    }}
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
                    <Likes>
                        {isLiked
                            ? userActions.user.posts[id - 1].likes + 1
                            : userActions.user.posts[id - 1].likes}{" "}
                        likes
                    </Likes>
                    <CommentDiv>
                        <FontAwesomeIcon icon={faFaceSmile} className="icon" />
                        <input
                            type="text"
                            placeholder="Add a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <Post onClick={newCommentPost}>Post</Post>
                    </CommentDiv>
                </Right>
            </section>
            <Close to={`/${userActions.user.username}`}>
                <FontAwesomeIcon icon={faClose} className="icon" />
            </Close>
            {typeof userActions.user.posts[id - 1].post === "object" ? (
                <>
                    <Prev
                        onClick={() => {
                            explorePostCount === 0
                                ? setExplorePostCount(
                                      userActions.user.posts[id - 1].post.length - 1
                                  )
                                : setExplorePostCount(explorePostCount - 1);
                        }}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} className="icon" />
                    </Prev>
                    <Next
                        onClick={() => {
                            explorePostCount ===
                            userActions.user.posts[id - 1].post.length - 1
                                ? setExplorePostCount(0)
                                : setExplorePostCount(explorePostCount + 1);
                        }}
                    >
                        <FontAwesomeIcon icon={faAngleRight} className="icon" />
                    </Next>
                </>
            ) : (
                ""
            )}
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
    border-left: 1px solid rgb(239,239,239);
`;
const Head = styled.div`
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
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
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Name = styled.h5`
    font-size: 13px;
    font-weight: 600;
    margin-right: 5px;
    color: #262626;
`;
const NameComment = styled.div`
    margin-right: 10px;
    & p {
        color: #262626;
        font-weight: 100;
        font-size: 13px;
        margin-bottom: 5px;
        & b {
            font-size: 14px;
            font-weight: 600;
            margin-right: 5px;
            color: #262626;
        }
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
    margin-bottom: 5px;
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
    position: absolute;
    width: 90%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    background-color: #fff;
    height: 50px;

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
    cursor: pointer;
`;
const ExploreFooter = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    position: absolute;
    width: 90%;
    bottom: 73px;
    left: 50%;
    transform: translate(-50%);
    background-color: #fff;

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
    position: absolute;
    width: 100%;
    padding-left: 5%;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%);
    background-color: #fff;
    height: 23px;
`;
const Close = styled(Link)`
    font-size: 20px;
    position: fixed;
    top: 20px;
    right: 20px;
    color: #fff;
`;
const Prev = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    background-color: #fff;
    border-radius: 50%;
    overflow: hidden;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & .icon {
        font-size: 17px;
    }
`;
const Next = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    background-color: #fff;
    padding: 2px;
    border-radius: 50%;
    overflow: hidden;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & .icon {
        font-size: 17px;
    }
`;
const LikeContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
`;
const Time = styled.p`
    color: #8e8e8e !important;
    font-size: 11px;
    margin-right: 10px;
`;
const Like = styled.p`
    color: #8e8e8e !important;
    font-size: 11px;
    margin-right: 10px;
    cursor: pointer;
`;
const Reply = styled.p`
    color: #8e8e8e !important;
    font-size: 11px;
    cursor: pointer;
`;
