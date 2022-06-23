import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faMagnifyingGlass, faSquarePlus,faHeart,faCompass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'


export default function Header() {
    return (
        <Container>
            <section className="wrapper">
                <HeaderSection>
                    <InstaText>
                        <img src={require('../../assets/images/insta-text.png')} alt='Instagram' />
                    </InstaText>
                    <InputDiv>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                        <input type="text" placeholder='Search' />
                    </InputDiv>
                    <Nav>
                        <FontAwesomeIcon icon={faHouse} className="icon active-link" />
                        <FontAwesomeIcon icon={faFacebookMessenger} className="icon" />
                        <FontAwesomeIcon icon={faSquarePlus} className="icon" />
                        <FontAwesomeIcon icon={faCompass} className="icon" />
                        <FontAwesomeIcon icon={faHeart} className="icon" />
                    </Nav>
                    <UserDiv>
                        <img src={require('../../assets/images/header/profile.jpg')} alt="User" />
                    </UserDiv>
                </HeaderSection>
            </section>
        </Container>
    )
}

const Container = styled.header`
    border-bottom: 1px solid #dbdbdb;
    padding: 25px 0;

`
const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const InstaText = styled.div`
    width: 100px;
`
const InputDiv = styled.div`
    background-color: #efefef;
    padding: 10px 20px;
    border-radius: 8px;
    width: 270px;

    & .icon{
        width: 16px;
        height: 16px;
        color: #8e8e8e;
        margin-right: 10px;
    }
    & input{
        height: 100%;
        font-size: 13px;
        font-weight: 100;
    }
`
const Nav = styled.nav`
    display: flex;
    align-items: center;

    & .icon{
        width: 22px;
        height: 22px;
        color: #8e8e8e;
        margin-right: 10px;
    }
    & .active-link{
        color: #000;
    }
`
const UserDiv = styled.div`
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;

    & img{
    }
`