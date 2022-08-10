import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../App";

export default function NewPostModal() {
    const { userActions } = useContext(UserContext);

    return (
        <>
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
                        <ImageContainer>
                            <img src="" alt="Upload" />
                        </ImageContainer>
                        <Description>Drag photos and videos here</Description>
                        <Button>Select From Computer</Button>
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
    height: 70%;
`;
const Top = styled.div``;
const Middle = styled.div``;
const ImageContainer = styled.div``;
const Description = styled.div``;
const Button = styled.div``;
