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

export default function Header() {
    const { userActions, setUserActions } = useContext(UserContext);
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
                        </IconLink>
                        <IconLink to="/new-post">
                            <FontAwesomeIcon
                                icon={faSquarePlus}
                                className="icon"
                            />
                        </IconLink>
                        <IconLink to="/explore">
                            <FontAwesomeIcon
                                icon={faCompass}
                                className="icon"
                            />
                        </IconLink>
                        <ActivityLink
                            onClick={() => {
                                userActions.isActivityModal
                                    ? setUserActions({
                                          ...userActions,
                                          isActivityModal: false,
                                      })
                                    : setUserActions({
                                          ...userActions,
                                          isActivityModal: true,
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
                                  })
                                : setUserActions({
                                      ...userActions,
                                      isProfileModal: true,
                                  });
                        }}
                    >
                        <img src={userActions.user.avatar.myImage} alt="User" />
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
`;
const InputDiv = styled.div`
    background-color: #efefef;
    border-radius: 8px;
    width: 270px;
    padding: 8px 20px;

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

        &.activity {
            cursor: pointer;
        }
    }
`;
const ActivityLink = styled.div`
    cursor: pointer;
    & .icon {
        width: 22px;
        height: 22px;
        color: #8e8e8e;
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
