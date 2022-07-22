import React from "react";
import styled from "styled-components";

export default function ChatCard({ chat }) {
    return (
        <Container>
            <Avatar>
                <img src={chat.profile_image} alt="Avatar" />
            </Avatar>
            <NameDiv>
                <h5>{chat.name}</h5>
                <Activity className={chat.is_seen ? "" : "active" } >
                    {chat.activity} <b>{chat.time}</b>
                </Activity>
            </NameDiv>
            {
                chat.is_seen ? null : <Unseen></Unseen>
            }
        </Container>
    );
}
const Container = styled.div`
    padding: 15px 20px;
    display: flex;
    align-items: center;
`;
const Avatar = styled.div`
    width: 60px;
    height: 60px;
    margin-right: 15px;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 50%;
`;
const NameDiv = styled.div`
    & h5 {
        font-size: 14px;
        color: rgb(38, 38, 38);
    }
`;
const Activity = styled.p`
    font-size: 13px;
    color: #8e8e8e;
    
    &.active{
        color: rgb(38, 38, 38);
    }

    & b {
        color: #8e8e8e;
    }
`;
const Unseen = styled.div`
    margin-left: auto;
    max-width: 8px;
    max-height: 8px;
    min-width: 8px;
    min-height: 8px;
    background-color: #0095f6;
    border-radius: 50%;
`;
