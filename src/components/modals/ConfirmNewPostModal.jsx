import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../App";

export default function ConfirmNewPostModal({
    isConfirmModal,
    setConfirmModal,
}) {
    const { userActions } = useContext(UserContext);

    return (
        <>
            <Overlay
                className={isConfirmModal ? "confirm-new-post-modal-true" : ""}
            ></Overlay>
            <Container
                className={isConfirmModal ? "confirm-new-post-modal-true" : ""}
            >
                <Modal>
                    <Top>Create new post</Top>
                    <Middle>
                        <Left>
                            <img src="" alt="New Post" />
                        </Left>
                        <Right>
                            <Head>
                                <Avatar>
                                    <img
                                        src={userActions.user.avatar}
                                        alt="Avatar"
                                    />
                                </Avatar>
                                <Name>{userActions.user.username} . </Name>
                            </Head>
                            <Caption placeholder="Write a caption..."></Caption>
                            <Location>
                                <input type="text" placeholder="Add Location" />
                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    className="icon"
                                />
                            </Location>
                        </Right>
                    </Middle>
                </Modal>
            </Container>
        </>
    );
}
const Container = styled.div`
    transform: scale(0);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: all 0.6s ease 0s;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    &.confirm-new-post-modal-true {
        transform: scale(1);
    }
`;
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    width: 100%;
    height: 100%;
    z-index: 1;

    &.confirm-new-post-modal-true {
        display: block;
    }
`;
const Modal = styled.div`
    background-color: #fff;
    width: 550px;
    height: 300px;
    border-radius: 20px;
`;
const Top = styled.div`
    text-align: center;
    color: #262626;
    padding: 10px 0;
    border-bottom: 1px solid rgb(219, 219, 219);
`;
const Middle = styled.div`
    display: flex;
    height: calc(100% - 42px);

    & .icon {
        font-size: 50px;
        margin-bottom: 20px;
    }
`;
const Left = styled.div`
    width: 50%;
    border-right: 1px solid rgb(219, 219, 219);
`;
const Right = styled.div`
    width: 50%;
    position: relative;
`;
const Head = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 0 0 8px;
    margin-bottom: 10px;

    & .icon {
        margin-left: auto;
        font-size: 20px;
    }
`;
const Avatar = styled.div`
    min-width: 30px;
    min-height: 30px;
    max-width: 30px;
    max-height: 30px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Name = styled.h5`
    font-size: 12px;
    font-weight: 600;
    margin-right: 5px;
    color: #262626;
`;
const Caption = styled.textarea`
    border-bottom: 1px solid rgb(219, 219, 219);
    width: 100%;
    padding: 5px;
    resize: none;
    height: 150px;
    font-size: 12px;
    height: calc(100% - 94px);
`;
const Location = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;

    & input {
        padding: 5px;
        width: 90%;
    }

    & .icon {
        font-size: 20px;
        margin-bottom: 0;
    }
`;
