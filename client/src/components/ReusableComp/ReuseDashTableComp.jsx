import React from "react";
import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";

export default function ReuseDashTableComp(props) {
  const {
    type, //type 1 means users, type 2 means comments, type 3 means posts
    buttonHead,
    tableHeadOne,
    tableHeadTwo,
    tableHeadThree,
    arrData,
  } = props;

  return (
    <div className="flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800">
      <div className="flex justify-between p-3 text-sm font-semibold">
        <h1 className="text-center p-2">Recent {`${buttonHead}`}</h1>
        <Button outline gradientDuoTone={"purpleToPink"}>
          <Link
            to={`${
              type === 1
                ? "/dashboard?tab=users"
                : type === 3
                ? "/dashboard?tab=comments"
                : "/dashboard?tab=posts"
            }`}
          >
            See all
          </Link>
        </Button>
      </div>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>{tableHeadOne}</Table.HeadCell>
          <Table.HeadCell>{tableHeadTwo}</Table.HeadCell>
          {type === 2 && <Table.HeadCell>{tableHeadThree}</Table.HeadCell>}
        </Table.Head>
        {arrData &&
          arrData.map((data) => (
            <Table.Body key={data?._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className={`${type === 3 && "w-96"}`}>
                  {type === 1 ? (
                    <img
                      src={data?.profilePicture}
                      alt={data?.username}
                      className="w-10 h-10 rounded-full bg-gray-500"
                    />
                  ) : type === 3 ? (
                    <p className="line-clamp-2">{data?.content}</p>
                  ) : (
                    <img
                      src={data?.image}
                      alt={data?.title}
                      className="w-14 h-10 rounded-md bg-gray-500"
                    />
                  )}
                </Table.Cell>
                <Table.Cell className={`${type === 2 && "w-96"}`}>
                  {type === 1
                    ? data?.username
                    : type === 3
                    ? data?.numberOfLikes
                    : data?.title}
                </Table.Cell>
                {type === 2 && (
                  <Table.Cell className="w-5">{data?.category}</Table.Cell>
                )}
              </Table.Row>
            </Table.Body>
          ))}
      </Table>
    </div>
  );
}
