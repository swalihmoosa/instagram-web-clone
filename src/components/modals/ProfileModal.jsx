import { faBookmark, faGear, faRepeat, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../App";

export default function ProfileModal() {
    const { userActions } = useContext(UserContext);
    return (
        <Container
            className={userActions.isProfileModal ? "activity-modal-true" : ""}
        >
            <ActivityCard>
                <FontAwesomeIcon icon={faUser} className="icon" />
                <Details>Profile</Details>
            </ActivityCard>
            <ActivityCard>
                <FontAwesomeIcon icon={faBookmark} className="icon" />
                <Details>Saved</Details>
            </ActivityCard>
            <ActivityCard>
                <FontAwesomeIcon icon={faGear} className="icon" />
                <Details>Settings</Details>
            </ActivityCard>
            <ActivityCard>
                <FontAwesomeIcon icon={faRepeat} className="icon" />
                <Details>Switch accounts</Details>
            </ActivityCard>
            <Hr />
            <ActivityCard>
                <Details>Log out</Details>
            </ActivityCard>
        </Container>
    );
}

const Container = styled.div`
    width: 200px;
    position: absolute;
    top: 65px;
    right: 0;
    background-color: #fff;
    transition: all 0.6s ease 0s;
    overflow: scroll;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 6px;
    z-index: -1;
    display: none;
    padding: 10px 0 0 0;

    &.activity-modal-true {
        display: block;
    }
`;
const ActivityCard = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px 10px 20px;
    cursor: pointer;

    &:last-child {
        margin-bottom: 0;
    }

    & .icon{
        font-size: 15px;
        margin-right: 15px;
    }
`;
const Details = styled.p`
    font-weight: 100;
    font-size: 12px;
    text-align: left;

    & b {
        font-weight: 600;
        font-size: 13px;
    }
`;
const Hr = styled.div`
    width: 100%;
    height: 2px;
    background-color: rgb(219,219,219);
`