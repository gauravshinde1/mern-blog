import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReuseDashCardComp from "../ReusableComp/ReuseDashCardComp";
import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";
import ReuseDashTableComp from "../ReusableComp/ReuseDashTableComp";

export default function DashBoardComponents() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const [lastMonthPosts, setLastMonthPosts] = useState(0);
  const [lastMonthComments, setLastMonthComments] = useState(0);
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/user/getusers?limit=5");
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          setTotalUsers(data.totalUsers);
          setLastMonthUsers(data.lastMonthUsers);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post/getposts?limit=5");
        const data = await res.json();
        if (res.ok) {
          setPosts(data.posts);
          setTotalPosts(data.totalPosts);
          setLastMonthPosts(data.lastMonthPosts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchComments = async () => {
      try {
        const res = await fetch("/api/comment/getcomments?limit=5");
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          setTotalComments(data.totalComments);
          setLastMonthComments(data.lastMonthComments);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchUsers();
      fetchPosts();
      fetchComments();
    }
  }, [currentUser]);

  return (
    <div className="p-3 md:mx-auto">
      <div className="flex-wrap flex gap-4 justify-center">
        <ReuseDashCardComp
          type={1}
          head={"Total Users"}
          headTwo={"Last Month"}
          totalCount={totalUsers}
          totalCountTwo={lastMonthUsers}
        />
        <ReuseDashCardComp
          type={2}
          head={"Total Posts"}
          headTwo={"Last Month"}
          totalCount={totalPosts}
          totalCountTwo={lastMonthPosts}
        />
        <ReuseDashCardComp
          type={3}
          head={"Total Comments"}
          headTwo={"Last Month"}
          totalCount={totalComments}
          totalCountTwo={lastMonthComments}
        />
      </div>
      <div className="flex-wrap flex gap-4 py-3 mx-auto justify-center">
        <ReuseDashTableComp
          type={1}
          buttonHead={"Users"}
          tableHeadOne={"user image"}
          tableHeadTwo={"user name"}
          arrData={users}
        />
        <ReuseDashTableComp
          type={3}
          buttonHead={"Comments"}
          tableHeadOne={"comment content"}
          tableHeadTwo={"likes"}
          arrData={comments}
        />
        <ReuseDashTableComp
          type={2}
          buttonHead={"Posts"}
          tableHeadOne={"post image"}
          tableHeadTwo={"post title"}
          tableHeadThree={"category"}
          arrData={posts}
        />
      </div>
    </div>
  );
}
