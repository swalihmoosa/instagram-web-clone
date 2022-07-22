import React, { useContext } from "react";
import styled from "styled-components";
import useWindowDimensions from "../hooks/UseWindowDimensions";
import { UserContext } from "../../App";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

export default function FollowersModal({
    isFollowersModal,
    setFollowersModal,
    isFollowingModal,
    setFollowingModal,
}) {
    const { height } = useWindowDimensions();
    const { userActions } = useContext(UserContext);
    const [selectedFollowing, setSelectedFollowing] = useState("People");

    function userExists(username) {
        return userActions.user.followings[0].data.some(function (el) {
            return el.username === username;
        });
    }

    const renderFollowing = () => {
        if (selectedFollowing === "People") {
            if (userActions.user.followings[0].data.length > 0) {
                return userActions.user.followings[0].data.map((following) => (
                    <Card key={following.id}>
                        <Avatar>
                            <img src={following.profile_image} alt="Avatar" />
                        </Avatar>
                        <Name>
                            <b>{following.username}</b>
                            <br />
                            {following.name}
                        </Name>
                        <Remove>Remove</Remove>
                    </Card>
                ));
            } else {
                return <div>nottt</div>;
            }
        }
        if (selectedFollowing === "Hashtags") {
            if (userActions.user.followings[1].data.length > 0) {
                return userActions.user.followings[1].data.map((following) => (
                    <Card key={following.id}>
                        <Avatar>
                            <img src={following.profile_image} alt="Avatar" />
                        </Avatar>
                        <Name>
                            <b>{following.username}</b>
                            <br />
                            {following.name}
                        </Name>
                        <Remove>Remove</Remove>
                    </Card>
                ));
            } else {
                return (
                    <Empty>
                        <Hash>
                            <FontAwesomeIcon
                                icon={faHashtag}
                                className="icon"
                            />
                        </Hash>
                        <HashTitle>Hashtags you follow</HashTitle>
                        <HashDetail>
                            When you follow hashtags, you'll see them here.
                        </HashDetail>
                    </Empty>
                );
            }
        }
    };

    return (
        <Container
            style={{ height: height }}
            className={isFollowersModal || isFollowingModal ? "active" : ""}
        >
            <Overlay
                onClick={() =>
                    isFollowersModal
                        ? setFollowersModal(false)
                        : isFollowingModal
                        ? setFollowingModal(false)
                        : null
                }
            ></Overlay>
            <CardContainer>
                <Head>{isFollowersModal ? "Followers" : "Following"}</Head>
                {isFollowingModal && (
                    <FollowingHead>
                        {userActions.user.followings.map((following) => (
                            <Li
                                onClick={() =>
                                    setSelectedFollowing(following.title)
                                }
                                className={
                                    selectedFollowing === following.title &&
                                    "active"
                                }
                            >
                                {following.title}
                            </Li>
                        ))}
                    </FollowingHead>
                )}
                {isFollowersModal
                    ? userActions.user.followers.map((follower) => (
                          <Card key={follower.id}>
                              <Avatar>
                                  <img
                                      src={follower.profile_image}
                                      alt="Avatar"
                                  />
                              </Avatar>
                              <Name>
                                  <b>{follower.username}</b>
                                  <br />
                                  {follower.name}
                              </Name>
                              {userExists(follower.username) ? null : (
                                  <Follow>Follow</Follow>
                              )}
                              <Remove>Remove</Remove>
                          </Card>
                      ))
                    : isFollowingModal
                    ? renderFollowing()
                    : null}
            </CardContainer>
        </Container>
    );
}
const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;

    &.active {
        display: flex;
    }
`;
const Overlay = styled.div`
    background-color: #000;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
`;
const CardContainer = styled.div`
    max-width: 400px;
    min-width: 400px;
    min-height: 330px;
    max-height: 330px;
    background-color: #fff;
    z-index: 1;
    border-radius: 10px;
    overflow-y: scroll;
    position: relative;
`;
const Head = styled.h5`
    text-align: center;
    padding: 10px 0;
    font-size: 17px;
    border-bottom: 1px solid rgb(219, 219, 219);
    position: sticky;
    top: 0;
    background-color: #fff;
`;
const Card = styled.div`
    padding: 10px 15px;
    display: flex;
    align-items: center;
`;
const Avatar = styled.div`
    width: 35px;
    height: 35px;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;
const Name = styled.div`
    font-size: 12px;
    font-weight: 100;
    color: #8e8e8e;

    & b {
        font-size: 14px;
        font-weight: 700;
        color: #262626;
    }
`;
const Follow = styled.div`
    color: #0095f6;
    font-size: 12px;
    margin: 0 auto auto;
    cursor: pointer;
`;
const Remove = styled.div`
    font-size: 14px;
    border: 1px solid rgb(219, 219, 219);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: auto;
`;
const FollowingHead = styled.div`
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid rgb(219, 219, 219);
    position: sticky;
    top: 42px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
`;
const Li = styled.div`
    width: 50%;
    text-align: center;
    font-size: 15px;
    cursor: pointer;
    color: #8e8e8e;

    &.active {
        color: #00376b;
        position: relative;
    }
    &.active::before {
        content: "";
        height: 1px;
        width: 100%;
        position: absolute;
        bottom: -10px;
        left: 0px;
        background-color: rgb(38, 38, 38);
    }
`;
const Empty = styled.div`
    max-height: calc(330px - 82px);
    padding: 20px;
`;
const Hash = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1.5px solid #262626;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    margin: 0 auto 20px;
`;
const HashTitle = styled.p`
    color: #262626;
    font-size: 22px;
    text-align: center;
    margin-bottom: 10px;
`;
const HashDetail = styled.p`
    color: #262626;
    font-size: 13px;
    text-align:center;
`;
