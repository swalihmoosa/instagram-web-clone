import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../includes/Header'
import ChatScreen from '../screens/ChatScreen'
import ExploreScreen from '../screens/ExploreScreen'
import HomeScreen from '../screens/HomeScreen'
import NewPost from '../screens/NewPost'
import StoryScreen from '../screens/StoryScreen'


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/inbox" element={<ChatScreen />} />
                <Route path="/explore" element={<ExploreScreen />} />
                <Route path="/new-post" element={<NewPost />} />
                <Route path="/stories" element={<StoryScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
