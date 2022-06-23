import React, { useState } from 'react'
import styled from 'styled-components'
import PostCard from '../cards/PostCard'
import storyImage from '../../assets/images/header/profile.jpg'


export default function HomeScreen() {
    const [stories,setStories] = useState([
        {
            id:1,
            story : storyImage,
            image: storyImage
        },
        {
            id:1,
            story : storyImage,
            image: storyImage
        },
        {
            id:1,
            story : storyImage,
            image: storyImage
        },
        {
            id:1,
            story : storyImage,
            image: storyImage
        },
        {
            id:1,
            story : storyImage,
            image: storyImage
        },
        {
            id:1,
            story : storyImage,
            image: storyImage
        },
        {
            id:1,
            story : storyImage,
            image: storyImage
        },
    ])
    const [posts,setPosts] = useState([
        {
            id:1,
            story : storyImage,
            image: storyImage
        },
        {
            id:1,
            story : storyImage,
            image: storyImage
        },
    ])

    return (
        <Container>
            <section className="wrapper">
                <HomeLeft>
                    <StoryUl>
                        {
                            stories.map(story=>(
                                <StoryLi>
                                    <StoryDiv>
                                        <img src={story.image} alt='Story' />
                                    </StoryDiv>
                                </StoryLi>
                            ))
                        }
                    </StoryUl>
                    <PostUl>
                        {
                            stories.map(story=>(
                                <PostCard posts={posts} />
                            ))
                        }
                    </PostUl>
                </HomeLeft>
                <HomeRight>

                </HomeRight>
            </section>
        </Container>
    )
}

const Container = styled.section`
    & .wrapper{
        padding: 25px 50px;
        display: flex;
        justify-content: space-between;
    }
`
const HomeLeft = styled.div`
    width: 74%;
`
const StoryUl = styled.div`
    border: 1px solid #dbdbdb;
    max-width: 100%;
    overflow-x: scroll;
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 7px;
    margin-bottom: 20px;
`
const StoryLi = styled.div`
    min-width: 65px;
    max-width: 65px;
    height: 65px;
    border-radius: 50%;
    margin-right: 10px;
    overflow: hidden;
    background-image: linear-gradient(to right top, #fea700 , #7c13f8);
    padding: 2px;
`
const StoryDiv = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #fff;
`
const PostUl = styled.div``
const HomeRight = styled.div`
    width: 34%;
`