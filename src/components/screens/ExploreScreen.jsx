import { faClone, faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import explores from "../../assets/json/explores";

export default function ExploreScreen() {
    const renderExploreThumbs = (explore) => {
        if (typeof explore.explore_data === "string") {
            if (
                (explore.explore_data.includes("jpeg") ||
                    explore.explore_data.includes("jpg") ||
                    explore.explore_data.includes("png") ||
                    explore.explore_data.includes("photo") ||
                    explore.explore_data.includes("gif")) === true
            ) {
                return <img src={explore.explore_data} alt="Post" />;
            } else {
                return <img src={explore.thumbnail_image} alt="Explore" />;
            }
        }
        if (typeof explore.explore_data === "object") {
            if (
                (explore.explore_data[0].data.includes("jpeg") ||
                    explore.explore_data[0].data.includes("jpg") ||
                    explore.explore_data[0].data.includes("png") ||
                    explore.explore_data[0].data.includes("photo") ||
                    explore.explore_data[0].data.includes("gif")) === true
            ) {
                return <img src={explore.explore_data[0].data} alt="Post" />;
            } else {
                return <img src={explore.thumbnail_image} alt="Thumbnail" />;
            }
        }
    };
    return (
        <Container>
            <section className="wrapper">
                <ExploreUl>
                    {explores.map((explore) => (
                        <ExploreLi
                            key={explore.id}
                            to={`/explore/single/${explore.username}/${explore.id}`}
                        >
                            {typeof explore.explore_data === "object" ? (
                                <FontAwesomeIcon
                                    icon={faClone}
                                    className="icon"
                                />
                            ) : null}
                            {renderExploreThumbs(explore)}
                            <Overlay>
                                <CountDiv>
                                    {" "}
                                    <LikeCount>
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className="icon"
                                        />
                                        11.7 k
                                    </LikeCount>
                                    <CommentCount>
                                        <FontAwesomeIcon
                                            icon={faComment}
                                            className="icon"
                                        />
                                        7 k
                                    </CommentCount>
                                    u
                               </CountDiv>
                            </Overlay>
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
        padding: 115px 20px;
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
const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CountDiv = styled.div`
    display: flex;
    align-items: center;
`;
const LikeCount = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    & .icon {
        color: #fff;
        font-size: 15px;
    }
`;
const CommentCount = styled.div`
    & .icon {
        color: #fff;
        font-size: 15px;
    }
`;
