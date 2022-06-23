import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faCompass, faHeart, faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
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
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input type="text" placeholder='Search' />
                    </InputDiv>
                    <Nav>
                        <FontAwesomeIcon icon={faHouse} className="icon" />
                        <FontAwesomeIcon icon={faFacebookMessenger} className="icon" />
                        <FontAwesomeIcon icon={faSquarePlus} className="icon" />
                        <FontAwesomeIcon icon={faCompass} className="icon" />
                        <FontAwesomeIcon icon={faHeart} className="icon" />
                    </Nav>
                    <UserDiv>
                        <img src='' alt='Me' />
                    </UserDiv>
                </HeaderSection>
            </section>
        </Container>
    )
}

const Container = styled.header`
    border-bottom: 1px solid #dbdbdb;
    padding: 25px 0;

    & .wrapper{
        display: flex;
        align-items: center;
    }
`
const HeaderSection = styled.div``
const InstaText = styled.div``
const InputDiv = styled.div``
const Nav = styled.nav``
const UserDiv = styled.div``