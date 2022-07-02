import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import animationData from "../../assets/lotties/insta-logo-json.json";
import useWindowDimensions from "../hooks/UseWindowDimensions";

export default function PageLoader() {
    const { height } = useWindowDimensions();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <Container style={{height:height}} >
            <Lottie options={defaultOptions} height={300} width={300} />
        </Container>
    );
}
const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
