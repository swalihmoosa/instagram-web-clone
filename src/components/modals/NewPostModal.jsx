import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../App";
import ConfirmNewPostModal from "./ConfirmNewPostModal";

export default function NewPostModal() {
    const { userActions, setUserActions } = useContext(UserContext);
    const [isConfirmModal, setConfirmModal] = useState(false);
    const [newPostImage, setPostImage] = useState("");

    useEffect(() => {
        if (newPostImage !== "") {
            setConfirmModal(true);
            setUserActions({
                ...userActions,
                isNewPostModal: false,
            });
        }
    }, [newPostImage, userActions]);

    return (
        <>
            <ConfirmNewPostModal
                isConfirmModal={isConfirmModal}
                setConfirmModal={setConfirmModal}
            />
            <Overlay
                className={
                    userActions.isNewPostModal ? "new-post-modal-true" : ""
                }
            ></Overlay>
            <Container
                className={
                    userActions.isNewPostModal ? "new-post-modal-true" : ""
                }
            >
                <Modal>
                    <Top>Create new post</Top>
                    <Middle>
                        <FontAwesomeIcon icon={faPhotoFilm} className="icon" />
                        <Description>Drag photos and videos here</Description>
                        <Button>
                            Select From Computer
                            <input
                                type="file"
                                onChange={(e) => setPostImage(e.target.value)}
                            />
                        </Button>
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

    &.new-post-modal-true {
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

    &.new-post-modal-true {
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100% - 42px);

    & .icon {
        font-size: 50px;
        margin-bottom: 20px;
    }
`;
const Description = styled.div`
    font-size: 18px;
    color: #262626;
    margin-bottom: 10px;
`;
const Button = styled.div`
    background-color: #0095f6;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 15px;
    position: relative;
    cursor: pointer;

    & input {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        cursor: pointer;
    }
`;
