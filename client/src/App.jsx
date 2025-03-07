import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/RoutesComponents/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/RoutesComponents/OnlyAdminPrivateRoute";
import Home from "./pages/Home";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./components/Navigation/Header";
import Footer from "./components/Navigation/Footer";
import CreatePost from "./pages/BlogPostPages/CreatePost";
import UpdatePost from "./pages/BlogPostPages/UpdatePost";
import PostPage from "./pages/BlogPostPages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search";
import NoInternetConnection from "./utils/noInternetCheck/NoInternetConnection";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <NoInternetConnection>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/search" element={<Search />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post/:postId" element={<UpdatePost />} />
          </Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/post/:postSlug" element={<PostPage />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </NoInternetConnection>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
