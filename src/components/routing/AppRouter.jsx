import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PageLoader from "../loaders/PageLoader";
const Header = lazy(() => import("../includes/Header"));
const ChatScreen = lazy(() => import("../screens/ChatScreen"));
const ExploreScreen = lazy(() => import("../screens/ExploreScreen"));
const ExploreSingleScreen = lazy(() =>
    import("../screens/ExploreSingleScreen")
);
const HomeScreen = lazy(() => import("../screens/HomeScreen"));
const NewPost = lazy(() => import("../screens/NewPost"));
const StoryScreen = lazy(() => import("../screens/StoryScreen"));
const ProfileScreen = lazy(() => import("../screens/ProfileScreen"));
const HighlightScreen = lazy(() => import("../screens/HighlightScreen"));

export default function AppRouter() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Header />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/inbox" element={<ChatScreen />} />
                <Route path="/explore" element={<ExploreScreen />} />
                <Route path="/new-post" element={<NewPost />} />
                <Route path="/stories" element={<StoryScreen />} />
                <Route
                    path="/explore/single/:name/:id"
                    element={<ExploreSingleScreen />}
                />
                <Route path="/:name" element={<ProfileScreen />} />
                <Route path="/stories/highlights/" element={<HighlightScreen />} />
            </Routes>
        </Suspense>
    );
}
