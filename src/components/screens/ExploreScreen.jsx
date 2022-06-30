import { faClone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../App";
import explores from "../../assets/json/explores";

export default function ExploreScreen() {
    const { userActions, setUserActions } = useContext(UserContext);
    return (
        <Container>
            <section className="wrapper">
                <ExploreUl>
                    {explores.map((explore) => (
                        <ExploreLi
                            key={explore.id}
                            to={`/explore/single/${explore.username}`}
                            onClick={() =>
                                setUserActions({
                                    ...userActions,
                                    clickedExplore: explore.id,
                                })
                            }
                        >
                            <img src={explore.thumbnail_image} alt="Explore" />
                            {typeof explore.explore_data === "object" ? (
                                <FontAwesomeIcon
                                    icon={faClone}
                                    className="icon"
                                />
                            ) : null}
                        </ExploreLi>
                    ))}
                </ExploreUl>
            </section>
        </Container>
    );
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
const ExploreUl = styled.div`
    display: grid;
    grid-template-areas:
        "one two two"
        "three two two"
        "four five six"
        "seven seven eight"
        "seven seven nine"
        "ten eleven twelve";
    gap: 10px;
    padding: 10px;
`;
const ExploreLi = styled(Link)`
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    & img {
        min-block-size: -webkit-fill-available;
    }

    & .icon {
        color: #fff;
        font-size: 15px;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    /* &:nth-child(n + 6) {
        grid-area: two;
    } */

    &:nth-child(1) {
        grid-area: one;
    }
    &:nth-child(2) {
        grid-area: two;
    }
    &:nth-child(3) {
        grid-area: three;
    }
    &:nth-child(4) {
        grid-area: four;
    }
    &:nth-child(5) {
        grid-area: five;
    }
    &:nth-child(6) {
        grid-area: six;
    }
    &:nth-child(7) {
        grid-area: seven;
    }
    &:nth-child(8) {
        grid-area: eight;
    }
    &:nth-child(9) {
        grid-area: nine;
    }
    &:nth-child(10) {
        grid-area: ten;
    }
    &:nth-child(11) {
        grid-area: eleven;
    }
    &:nth-child(12) {
        grid-area: twelve;
    }
`;
