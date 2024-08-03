import React from "react";
import {
  HiArrowNarrowUp,
  HiOutlineUserGroup,
  HiDocumentText,
  HiAnnotation,
} from "react-icons/hi";

export default function ReuseDashCardComp(props) {
  const { head, headTwo, totalCount, totalCountTwo, type } = props;
  return (
    <div className="flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md">
      <div className="flex justify-between">
        <div className="">
          <h3 className="text-gray-500 text-md uppercase">{head}</h3>
          <p className="text-2xl">{totalCount}</p>
        </div>
        {type === 1 ? (
          <HiOutlineUserGroup className="bg-teal-600 text-white rounded-full text-5xl p-3 shadow-lg" />
        ) : type === 2 ? (
          <HiAnnotation className="bg-indigo-600 text-white rounded-full text-5xl p-3 shadow-lg" />
        ) : (
          <HiDocumentText className="bg-lime-600 text-white rounded-full text-5xl p-3 shadow-lg" />
        )}
      </div>
      <div className="flex gap-2 text-sm">
        <span className="text-green-500 flex items-center">
          <HiArrowNarrowUp />
          {totalCountTwo}
        </span>
        <div className="text-gray-500">{headTwo}</div>
      </div>
    </div>
  );
}
