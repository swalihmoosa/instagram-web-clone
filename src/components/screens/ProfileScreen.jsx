import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../App";

export default function ProfileScreen() {
    const { userActions } = useContext(UserContext);

    return (
        <Container>
            <section className="wrapper">
                <ProfileDiv>
                    <Left>
                        <img src={userActions.user.avatar} alt="Profile" />
                    </Left>
                    <Right>
                        <Top>
                            <Username>{userActions.user.username}</Username>
                            <Edit>Edit Profile</Edit>
                            <FontAwesomeIcon icon={faGear} className="icon" />
                        </Top>
                        <Details>
                            <Detail>
                                {userActions.user.posts.length} posts
                            </Detail>
                            <Detail>
                                {userActions.user.followers.length} followers
                            </Detail>
                            <Detail>
                                {userActions.user.following.length} following
                            </Detail>
                        </Details>
                        <Bio>
                            <Name>{userActions.user.name}</Name>
                            <Type>{userActions.user.type}</Type>
                            <Description>{userActions.user.bio}</Description>
                        </Bio>
                    </Right>
                </ProfileDiv>
            </section>
        </Container>
    );
}
const Container = styled.section`
    background-color: #fafafa;
    & .wrapper {
        padding: 115px 20px;
        display: flex;
        justify-content: space-between;
        position: relative;
    }
`;
const ProfileDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 75%;
`;
const Left = styled.div`
    max-width: 150px;
    max-height: 150px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 130px;
`;
const Right = styled.div`
    width: calc(100% - 280px);
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 25px;

    & .icon {
        font-size: 18px;
        color: #262626;
    }
`;
const Username = styled.h4`
    font-size: 28px;
    color: #262626;
`;
const Edit = styled.p`
    border: 1px solid #dbdbdb;
    font-size: 13px;
    padding: 3px 5px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: 15px;
    color: #262626;
`;
const Details = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;
const Detail = styled.p`
    color: #262626;
    font-size: 16px;
`;
const Bio = styled.div``;
const Name = styled.h4`
    color: #262626;
    font-size: 16px;
`;
const Type = styled.p`
    color: #8e8e8e;
    font-weight: 100;
`;
const Description = styled.p`
    white-space: pre-line;
    font-size: 14px;
`;
