import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import DashSidebar from "../components/DashboardComponents/DashSidebar";
import DashProfile from "../components/DashboardComponents/DashProfile";
import DashPosts from "../components/DashboardComponents/DashPosts";
import DashUsers from "../components/DashboardComponents/DashUsers";
import DashComments from "../components/DashboardComponents/DashComments";
import DashBoardComponents from "../components/DashboardComponents/DashBoardComponents";

const Dashboard = () => {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* Dashboard component... */}
      {tab === "dash" && <DashBoardComponents />}
      {/* Profile... */}
      {tab === "profile" && <DashProfile />}
      {/* Comments... */}
      {tab === "comments" && currentUser.isAdmin && <DashComments />}
      {/* Users... */}
      {tab === "users" && currentUser.isAdmin && <DashUsers />}
      {/* Posts... */}
      {tab === "posts" && currentUser.isAdmin && <DashPosts />}
    </div>
  );
};

export default Dashboard;
