import React, { useContext, useState } from "react";
import styled from "styled-components";
import PostCard from "../cards/PostCard";
import storyImage from "../../assets/images/header/profile.jpg";
import lalluImage from "../../assets/images/lallu.jpeg";
import SuggestionCard from "../cards/SuggestionCard";
import stories from "../../assets/json/stories";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

export default function HomeScreen() {
    const { userActions, setUserActions } = useContext(UserContext);

    const [posts] = useState([
        {
            id: 1,
            story: lalluImage,
            image: lalluImage,
        },
    ]);

    const [suggestions] = useState([
        {
            id: 1,
            name: "ukmanikandan",
            story: storyImage,
            image: storyImage,
        },
    ]);

    return (
        <Container>
            <section className="wrapper">
                <HomeLeft>
                    <StoryUl>
                        {stories.map((story) => (
                            <StoryLi
                                key={story.id}
                                to="/stories"
                                onClick={() =>
                                    setUserActions({
                                        ...userActions,
                                        clickedStory: story.id,
                                    })
                                }
                            >
                                <BgDiv>
                                    <StoryDiv>
                                        <img
                                            src={story.profile_image}
                                            alt="Story"
                                        />
                                    </StoryDiv>
                                </BgDiv>
                                <h5>{story.username.slice(0, 12)}</h5>
                            </StoryLi>
                        ))}
                    </StoryUl>
                    <PostUl>
                        {posts.map((post) => (
                            <PostCard post={post} key={post.id} />
                        ))}
                    </PostUl>
                </HomeLeft>
                <HomeRight>
                    <MyHeader>
                        <Avatar>
                            <img src={storyImage} alt="Avatar" />
                        </Avatar>
                        <NameDiv>
                            <H5>junior_moosa</H5>
                            <p>Swalih Moosa</p>
                        </NameDiv>
                        <Switch>Switch</Switch>
                    </MyHeader>
                    <See>
                        <Suggestion>Suggestions for you</Suggestion>
                        <View>See All</View>
                    </See>
                    {suggestions.map((suggestion) => (
                        <SuggestionCard
                            suggestion={suggestion}
                            key={suggestion.id}
                        />
                    ))}
                    <AboutUl>
                        <AboutLi>About</AboutLi>
                        <AboutLi>Help</AboutLi>
                        <AboutLi>Press</AboutLi>
                        <AboutLi>API</AboutLi>
                        <AboutLi>Jobs</AboutLi>
                        <AboutLi>Privacy</AboutLi>
                        <AboutLi>Terms</AboutLi>
                        <AboutLi>Locations</AboutLi>
                        <AboutLi>Language</AboutLi>
                    </AboutUl>
                    <From>&copy; 2022 INSTAGRAM FROM META</From>
                </HomeRight>
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
const HomeLeft = styled.div`
    width: 58%;
    position: relative;
`;
const StoryUl = styled.div`
    border: 1px solid #dbdbdb;
    max-width: 100%;
    overflow-x: scroll;
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 7px;
    margin-bottom: 20px;
    background-color: #fff;
`;
const StoryLi = styled(Link)`
    margin-right: 10px;

    & h5 {
        font-size: 10px;
        color: #262626;
        text-align: center;
    }
`;
const BgDiv = styled.div`
    min-width: 65px;
    max-width: 65px;
    height: 65px;
    border-radius: 50%;
    overflow: hidden;
    background-image: linear-gradient(to right top, #fea700, #7c13f8);
    padding: 2px;
    margin: 0 auto;
    margin-bottom: 5px;
`;
const StoryDiv = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #fff;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const PostUl = styled.div``;
const HomeRight = styled.div`
    width: 38%;
    padding: 15px 0 0 0;
    position: sticky;
    top: 115px;
    height: 100%;
`;
const MyHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const Avatar = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
`;
const NameDiv = styled.div`
    & p {
        color: #8e8e8e;
        font-size: 12px;
    }
`;
const H5 = styled.h5`
    color: #262626;
    font-size: 14px;
    margin-bottom: 3px;
`;
const Switch = styled.p`
    color: #0095f6;
    font-size: 12px;
    margin-left: auto;
    margin-right: 0;
`;
const See = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;
const Suggestion = styled.p`
    color: #8e8e8e;
    font-size: 14px;
`;
const View = styled.p`
    font-size: 14px;
    color: #262626;
`;
const AboutUl = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 15px;
`;
const AboutLi = styled.span`
    font-size: 11px;
    margin-right: 7px;
    color: #c7c7c7;
    line-height: 1rem;
`;
const From = styled.p`
    font-size: 11px;
    margin-right: 7px;
    color: #c7c7c7;
    line-height: 1rem;
`;
