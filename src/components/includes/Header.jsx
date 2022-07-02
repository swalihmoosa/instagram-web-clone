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

export default function Header() {
    const { userActions } = useContext(UserContext);
    return (
        <Container>
            <section className="wrapper">
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

                        <FontAwesomeIcon icon={faHeart} className="icon" />
                    </Nav>
                    <UserDiv>
                        <img
                            src={userActions.user.avatar.myImage}
                            alt="User"
                        />
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

    & img {
    }
`;
