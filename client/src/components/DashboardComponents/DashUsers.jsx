import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Button, Modal, Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle, HiX, HiCheck } from "react-icons/hi";
import { FaCheck, FaTimes } from "react-icons/fa";
import ScrollToTop from "../ScrollToTop";

export default function DashUsers() {
  const { currentUser } = useSelector((state) => state.user);
  const [userRecords, setUserRecords] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/user/getusers`);
        const data = await res.json();
        if (res.ok) {
          setUserRecords(data.users);
          if (data?.users?.length < 9) {
            setShowMore(false);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (currentUser?.isAdmin) {
      fetchUsers();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userRecords.length;
    try {
      const res = await fetch(
        `/api/user/getusers?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserRecords((prev) => [...prev, ...data?.users]);
        if (data?.users?.length < 9) {
          setShowMore(false);
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteUser = (userId) => async () => {
    setShowDeleteModal(true);
    setUserIdToDelete(userId);
  };

  const handleDeleteUser = async () => {
    setShowDeleteModal(false);
    try {
      const res = await fetch(`/api/user/delete/${userIdToDelete}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserRecords((prev) =>
          prev.filter((user) => user._id !== userIdToDelete)
        );
        setUserIdToDelete("");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="w-8/12 table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      <ScrollToTop />
      {currentUser.isAdmin && userRecords?.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>DATA CREATED</Table.HeadCell>
              <Table.HeadCell>USER IMAGE</Table.HeadCell>
              <Table.HeadCell>USERNAME</Table.HeadCell>
              <Table.HeadCell>EMAIL</Table.HeadCell>
              <Table.HeadCell>ADMIN</Table.HeadCell>
              <Table.HeadCell>DELETE</Table.HeadCell>
            </Table.Head>
            {userRecords.map((user) => (
              <Table.Body key={user._id} className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 border">
                  <Table.Cell>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Avatar
                      alt={user.username}
                      title={user.username}
                      img={user.profilePicture}
                      rounded
                    />
                  </Table.Cell>
                  <Table.Cell>{user.username}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>
                    {!user?.isAdmin ? (
                      <FaTimes className="text-red-500 dark:text-gray-200 mb-4 mx-auto mt-5" />
                    ) : (
                      <FaCheck className="text-green-500 dark:text-gray-200 mb-4 mx-auto mt-5" />
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={deleteUser(user?._id)}
                      className="font-medium text-red-500 hover:underline cursor-pointer"
                    >
                      DELETE
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 self-center text-sm"
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no user yet!</p>
      )}
      {showDeleteModal && (
        <Modal
          show={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          popup
          size={"md"}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
              <h3 className="mb-5 text-lg text-gray-500 data:text-gray-400">
                Are you sure you want to delete this user?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color={"failure"} onClick={handleDeleteUser}>
                  Yes, I'm sure
                </Button>
                <Button
                  color={"gray"}
                  onClick={() => setShowDeleteModal(false)}
                >
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}
