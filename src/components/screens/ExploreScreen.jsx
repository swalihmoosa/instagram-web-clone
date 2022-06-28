import React from 'react'
import styled from 'styled-components';


export default function ExploreScreen() {
    return (
        <Container>
            <section className="wrapper">
                <ExploreUl>
                    <ExploreLi>
                        <img src='' alt='Explore' />
                    </ExploreLi>
                </ExploreUl>
            </section>
        </Container>
    )
}
const Container = styled.section`
    background-color: #fafafa;
    & .wrapper {
        padding: 115px 50px;
        display: flex;
        justify-content: space-between;
        position: relative;
    }
`;
const ExploreUl = styled.div``
const ExploreLi = styled.div``