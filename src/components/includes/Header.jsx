import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import {
    faHouse,
    faMagnifyingGlass,
    faSquarePlus,
    faHeart,
    faCompass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../App";
import ActivitiesModal from "../modals/ActivitiesModal";
import ProfileModal from "../modals/ProfileModal";
import chats from "../../assets/json/chats";

export default function Header() {
    const { userActions, setUserActions } = useContext(UserContext);

    let filteredArray = chats.filter((chat) => chat.is_seen === false);

    return (
        <Container>
            <section className="wrapper">
                <ActivitiesModal />
                <ProfileModal />
                <HeaderSection>
                    <InstaText>
                        <Link to="/">
                            <img
                                src={require("../../assets/images/insta-text.png")}
                                alt="Instagram"
                            />
                        </Link>
                    </InstaText>
                    <InputDiv>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="icon"
                        />
                        <input type="text" placeholder="Search" />
                    </InputDiv>
                    <Nav>
                        <IconLink to="/">
                            <FontAwesomeIcon
                                icon={faHouse}
                                className="icon active-link"
                            />
                        </IconLink>
                        <IconLink to="/inbox">
                            <FontAwesomeIcon
                                icon={faFacebookMessenger}
                                className="icon"
                            />
                            {filteredArray.length > 0 && (
                                <Count>{filteredArray.length}</Count>
                            )}
                        </IconLink>
                        <ActivityLink
                            className={
                                userActions.isNewPostModal &&
                                "new-post modal-active"
                            }
                            onClick={() => {
                                userActions.isNewPostModal
                                    ? setUserActions({
                                          ...userActions,
                                          isNewPostModal: false,
                                          isActivityModal: false,
                                          isProfileModal: false,
                                      })
                                    : setUserActions({
                                          ...userActions,
                                          isNewPostModal: true,
                                          isActivityModal: false,
                                          isProfileModal: false,
                                      });
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faSquarePlus}
                                className="icon"
                            />
                        </ActivityLink>
                        <IconLink to="/explore">
                            <FontAwesomeIcon
                                icon={faCompass}
                                className="icon"
                            />
                        </IconLink>
                        <ActivityLink
                            className={
                                userActions.isActivityModal && "modal-active"
                            }
                            onClick={() => {
                                userActions.isActivityModal
                                    ? setUserActions({
                                          ...userActions,
                                          isActivityModal: false,
                                          isNewPostModal: false,
                                          isProfileModal: false,
                                      })
                                    : setUserActions({
                                          ...userActions,
                                          isActivityModal: true,
                                          isNewPostModal: false,
                                          isProfileModal: false,
                                      });
                            }}
                        >
                            <ArrowUp
                                className={
                                    userActions.isActivityModal
                                        ? "activity-modal-true"
                                        : ""
                                }
                            ></ArrowUp>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="icon activity"
                            />
                        </ActivityLink>
                    </Nav>
                    <UserDiv
                        onClick={() => {
                            userActions.isProfileModal
                                ? setUserActions({
                                      ...userActions,
                                      isProfileModal: false,
                                      isActivityModal: false,
                                      isNewPostModal: false,
                                  })
                                : setUserActions({
                                      ...userActions,
                                      isProfileModal: true,
                                      isActivityModal: false,
                                      isNewPostModal: false,
                                  });
                        }}
                    >
                        <img src={userActions.user.avatar} alt="User" />
                        <ArrowUp
                            className={
                                userActions.isProfileModal
                                    ? "activity-modal-true"
                                    : ""
                            }
                        ></ArrowUp>
                    </UserDiv>
                </HeaderSection>
            </section>
        </Container>
    );
}

const Container = styled.header`
    border-bottom: 1px solid #dbdbdb;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #fff;
    height: 90px;
    display: flex;
    align-items: center;

    & .wrapper {
        position: relative;
    }
`;
const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const InstaText = styled.h1`
    width: 100px;

    @media all and (max-width: 480px) {
        width: 80px;
    }
`;
const InputDiv = styled.div`
    background-color: #efefef;
    border-radius: 8px;
    width: 270px;
    padding: 8px 20px;

    @media all and (max-width: 700px) {
        display: none;
    }

    & .icon {
        width: 16px;
        height: 16px;
        color: #8e8e8e;
        margin-right: 10px;
    }
    & input {
        height: 100%;
        font-size: 13px;
        font-weight: 100;
    }
`;
const Nav = styled.nav`
    display: flex;
    align-items: center;

    & .icon {
        width: 22px;
        height: 22px;
        color: #8e8e8e;
        @media all and (max-width: 1280px) {
            width: 20px;
            height: 20px;
        }

        &.activity {
            cursor: pointer;
        }
    }
`;
const ActivityLink = styled.div`
    cursor: pointer;
    margin-right: 15px;

    @media all and (max-width: 1280px) {
        margin-right: 10px;
    }

    &:last-child {
        margin-right: 0;
    }

    &.modal-active .icon {
        color: #000;
    }
    & .icon {
        width: 22px;
        height: 22px;
        color: #8e8e8e;

        @media all and (max-width: 1280px) {
            width: 20px;
            height: 20px;
        }
    }
`;
const ArrowUp = styled.div`
    width: 0;
    height: 0;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-bottom: 11px solid #dddddd;
    position: absolute;
    bottom: -26px;
    background-color: transparent;
    display: none;
    transition: all 0.6s ease 0s;

    &.activity-modal-true {
        display: block;
    }
`;
const IconLink = styled(NavLink)`
    margin-right: 15px;
    position: relative;

    @media all and (max-width: 1280px) {
        margin-right: 10px;
    }

    &:last-child {
        margin-right: 0;
    }

    &.active .icon {
        color: #000;
    }
`;
const UserDiv = styled.div`
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
const Count = styled.p`
    background-color: rgb(255, 48, 65);
    height: 18px;
    width: 18px;
    font-size: 10px;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -8px;
    right: -8px;
`;
