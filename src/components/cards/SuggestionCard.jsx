import React from 'react'
import styled from 'styled-components'


export default function SuggestionCard({suggestion}) {
    return (
        <Container>
            <Avatar>
                <img src={suggestion.image} alt='Avatar' />
            </Avatar>
            <NameDiv>
                <H5>{suggestion.name}</H5>
                <p>New to Instagram</p>
            </NameDiv>
            <Switch>Follow</Switch>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const Avatar = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
`
const NameDiv = styled.div`
    & p{
        color: #8e8e8e;
        font-size: 10px;
    }
`
const H5 = styled.h5`
    color: #262626;
    font-size: 14px;
    margin-bottom: 3px;
`
const Switch = styled.p`
    color: #0095f6;
    font-size: 12px;
    margin-left: auto;
    margin-right: 0;
`