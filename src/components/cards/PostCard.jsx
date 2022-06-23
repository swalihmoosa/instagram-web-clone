import { faBookmark, faComment, faEllipsis, faFaceSmile, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'


export default function PostCard({post}) {
    return (
        <Container>
            <PostHead>
                <Avatar>
                    <img src={post.image} alt='Avatar' />
                </Avatar>
                <NameDiv>
                    <H4>junior_moosa</H4>
                    <Loction>Peacefull mind</Loction>
                </NameDiv>
                <Menu>
                    <FontAwesomeIcon icon={faEllipsis} alt="Menu" className='icon' />
                </Menu>
            </PostHead>
            <PostImage>
                <img src={post.image} alt="Posted Image" />
            </PostImage>
            <PostFooter>
                <FontAwesomeIcon icon={faHeart} className="icon" />
                <FontAwesomeIcon icon={faComment} className="icon" />
                <FontAwesomeIcon icon={faShare} className="icon" />
                <FontAwesomeIcon icon={faBookmark} className="icon share" />
            </PostFooter>
            <Caption>
                <b>junior_moosa</b>White is pure and simple and matches with everything
            </Caption>
            <CommentDiv>
                <FontAwesomeIcon icon={faFaceSmile} className="icon" />
                <input type="text" placeholder='Add a comment...' />
                <Post>Post</Post>
            </CommentDiv>
        </Container>
    )
}

const Container = styled.div`
    border: 1px solid #dbdbdb;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
`
const PostHead = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #efefef;
`
const Avatar = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 15px;
    border-radius: 50%;
    overflow: hidden;
`
const NameDiv = styled.div``
const H4 = styled.h4`
    font-size: 14px;
`
const Loction = styled.p`
    font-size: 12px;
    font-weight: 100;
    color: #8e8e8e;
`
const Menu = styled.div`
    margin-left: auto;
    margin-right: 0;
    width: 30px;
    height: 30px;
`
const PostImage = styled.div`
    width: 100%;
    margin-bottom: 20px;
`
const PostFooter = styled.div`
    display: flex;
    align-items: center;

    & .icon{
        width: 25px;
        height: 25px;
        color: #8e8e8e;
        margin-right: 15px;

        &.share{
            margin-right: 0;
            margin-left: auto;
        }
    }
`
const Caption = styled.p``
const CommentDiv = styled.div``
const Post = styled.span``