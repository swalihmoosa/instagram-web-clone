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
const StoryScreen = lazy(() => import("../screens/StoryScreen"));
const ProfileScreen = lazy(() => import("../screens/ProfileScreen"));
const HighlightScreen = lazy(() => import("../screens/HighlightScreen"));
const PostSingleScreen = lazy(() => import("../screens/PostSingleScreen"));
const NewPostSingleScreen = lazy(() =>
    import("../screens/NewPostSingleScreen")
);
const VideoSingleScreen = lazy(() => import("../screens/VideoSingleScreen"));

export default function AppRouter() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Header />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/inbox" element={<ChatScreen />} />
                <Route path="/explore" element={<ExploreScreen />} />
                <Route path="/stories" element={<StoryScreen />} />
                <Route
                    path="/explore/single/:name/:id"
                    element={<ExploreSingleScreen />}
                />
                <Route path="/:name" element={<ProfileScreen />} />
                <Route path="/:name/channel" element={<ProfileScreen />} />
                <Route path="/:name/saved" element={<ProfileScreen />} />
                <Route path="/:name/tagged" element={<ProfileScreen />} />
                <Route
                    path="/stories/highlights/"
                    element={<HighlightScreen />}
                />
                <Route
                    path="/:name/posts/single/:id"
                    element={<PostSingleScreen />}
                />
                <Route
                    path="/:name/new-posts/single/:id"
                    element={<NewPostSingleScreen />}
                />
                <Route
                    path="/:name/saved/single/:id"
                    element={<PostSingleScreen />}
                />
                <Route
                    path="/:name/tagged/single/:id"
                    element={<PostSingleScreen />}
                />
                <Route
                    path="/:name/channel/single/:id"
                    element={<VideoSingleScreen />}
                />
            </Routes>
        </Suspense>
    );
}
