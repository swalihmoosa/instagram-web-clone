import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../App";

export default function RenderPosts() {
    const { userActions } = useContext(UserContext);

    return (
        <Container>
            {userActions.user.posts.map((post) => (
                <Post>
                    <img src={post.post} alt="Post" />
                </Post>
            ))}
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const Post = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    min-height: 300px;
    max-height: 300px;
    margin-bottom: 10px;
`;
