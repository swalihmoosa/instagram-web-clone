import React, { useContext } from "react";
import styled from "styled-components";
import useWindowDimensions from "../hooks/UseWindowDimensions";
import { UserContext } from "../../App";

export default function FollowersModal({
    isFollowersModal,
    setFollowersModal,
    isFollowingModal,
    setFollowingModal,
}) {
    const { height } = useWindowDimensions();
    const { userActions } = useContext(UserContext);

    function userExists(username) {
        return userActions.user.followings[0].data.some(function (el) {
            return el.username === username;
        });
    }

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
                              {/* <Follow>Follow</Follow> */}
                              <Remove>Remove</Remove>
                          </Card>
                      ))
                    : isFollowingModal
                    ? userActions.user.followings.map((following) => (
                          <Card key={following.id}>hyyy</Card>
                      ))
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
    min-height: 250px;
    max-height: 250px;
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
