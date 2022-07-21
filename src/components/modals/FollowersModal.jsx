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
                {isFollowersModal
                    ? userActions.user.followers.map((follower) => (
                          <Card key={follower.id}>hyyy</Card>
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
    min-height: 300px;
    max-height: 300px;
    background-color: #fff;
    z-index: 1;
    border-radius: 10px;
    overflow-y: scroll;
`;
const Card = styled.div``;
