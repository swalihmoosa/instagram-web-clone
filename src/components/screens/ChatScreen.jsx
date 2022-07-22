import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import ChatCard from "../cards/ChatCard";
import useWindowDimensions from "../hooks/UseWindowDimensions";
import chats from '../../assets/json/chats'

export default function ChatScreen() {
    const { height } = useWindowDimensions();
    return (
        <Container style={{height:height}} >
            <section className="wrapper">
                <Left>
                    <ChatHead>
                        <h5>junior_moosa</h5>
                        <FontAwesomeIcon icon={faAngleDown} className="icon" />
                        <FontAwesomeIcon
                            icon={faPenToSquare}
                            className="icon share"
                        />
                    </ChatHead>
                    <PrimaryDiv>
                        <PrimaryText className="active" >PRIMARY</PrimaryText>
                        <PrimaryText>GENERAL</PrimaryText>
                    </PrimaryDiv>
                    {chats.map((chat) => (
                        <ChatCard chat={chat} key={chat.id} />
                    ))}
                </Left>
                <Right>
                    <Center>
                        <Share>
                            <FontAwesomeIcon icon={faShare} className="icon" />
                        </Share>
                        <Description>Your messages</Description>
                        <P>
                            Send private photos and messages to a friend or
                            group.
                        </P>
                        <Send>Send message</Send>
                    </Center>
                </Right>
            </section>
        </Container>
    );
}
const Container = styled.section`
    background-color: #fafafa;
    & .wrapper {
        padding: 115px 0px 20px;
        display: flex;
        justify-content: space-between;
        position: relative;
        height: 100%;
    }
`;
const Left = styled.div`
    width: 400px;
    border: 1px solid #dbdbdb;
    overflow-y: scroll;
    
    @media all and (max-width:  480px) {
        margin: 0 auto;
    }
`;
const ChatHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #dbdbdb;
    padding: 0 20px;
    height: 50px;
    position: sticky;
    top: 0;
    background: #fff;

    & h5 {
        margin-right: 10px;
        margin-left: auto;
        font-size: 16px;
    }
    & .icon {
        font-size: 20px;
        color: #262626;
        &.share {
            margin-left: auto;
        }
    }
`;
const PrimaryDiv = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    height: 43px;
    position: sticky;
    top: 50px;
    background: #fff;
`;
const PrimaryText = styled.p`
    font-size: 14px;
    padding: 10px 20px;
    color: #8e8e8e;

    &.active{
        color: #262626;
        border-bottom: 1px solid #262626;
    }
`;
const Right = styled.div`
    width: calc(100% - 400px);
    border: 1px solid #dbdbdb;
    border-left: none;
    padding: 15px 0 0 0;
    position: sticky;
    top: 115px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media all and (max-width: 800px) {
        display: none;
    }
`;
const Center = styled.div``;
const Share = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid #000;
    margin: 0 auto 5px;

    & .icon{
        font-size: 40px;
    }
`;
const Description = styled.p`
    font-size: 18px;
    font-weight: 100;
    color: #262626;
    text-align: center;
`;
const P = styled.p`
    color: #8e8e8e;
    font-size: 12px;
    text-align: center;
    margin-bottom: 15px;
`;
const Send = styled.div`
    background-color: #0095f6;
    text-align: center;
    border-radius: 5px;
    font-size: 12px;
    color: #fff;
    width: 130px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;
