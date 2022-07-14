import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../App";
import activities from "../../assets/json/activities";

export default function ActivitiesModal() {
    const { userActions } = useContext(UserContext);
    return (
        <Container
            className={userActions.isActivityModal ? "activity-modal-true" : ""}
        >
            {activities.map((activity) => (
                <ActivityCard key={activity.id} >
                    <Avatar>
                        <img src={activity.profile_image} alt="Avatar" />
                    </Avatar>
                    <Details>
                        <b>{activity.username}</b>  {activity.activity}
                    </Details>
                    <ActivityImage>
                        <img src={activity.activity_image} alt="Activity Pic" />
                    </ActivityImage>
                </ActivityCard>
            ))}
        </Container>
    );
}

const Container = styled.div`
    width: 500px;
    min-height: 500px;
    max-height: 500px;
    position: absolute;
    top: 65px;
    right: 0;
    background-color: #fff;
    transition: all 0.6s ease 0s;
    overflow: scroll;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 20px 20px 10px 20px;
    border-radius: 10px;
    z-index: -1;
    display: none;

    &.activity-modal-true {
        display: block;
    }
`;
const ActivityCard = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    &:last-child{
        margin-bottom: 0;
    }
`;
const Avatar = styled.div`
    min-width: 44px;
    min-height: 44px;
    max-width: 44px;
    max-height: 44px;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;
const Details = styled.p`
    font-weight: 100;
    font-size: 12px;
    text-align: left;

    & b{
        font-weight: 600;
        font-size: 13px;
    }
`;
const ActivityImage = styled.div`
    min-width: 40px;
    min-height: 40px;
    max-width: 40px;
    max-height: 40px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: 0;
`;
