import React, { useState } from "react";
import {
  DocumentIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import RecordsTable from "../common/records";
import Form from "../common/form";

const records = [
  {
    date: "01-Jan-2022",
    designation: "Bobine",
    qty: 1,
    amount: 120000,
    payment: 120000,
    client: "MUREKEZI GUY NJ",
  },{
    date: "02-Jan-2022",
    designation: "Balance",
    qty: 1,
    amount: 70000,
    payment: 70000,
    client: "MUHIZI CLIENT",
  },
];

export default function MainScreen() {
  let [viewPort, setViewPort] = useState("list");

  return (
    <div className="flex flex-col w-full pt-6 space-y-10">
      {/* header */}
      <div className="flex justify-center text-2xl font-semibold">
        Customer Book App
      </div>
      {/* Menu bar */}
      <div className="flex flex-row px-10 space-x-10">
        <div
          className="flex flex-row space-x-1 items-center cursor-pointer"
          onClick={() => setViewPort("new")}
        >
          <DocumentIcon className="h-5 w-5" />
          <div className="text-sm ">New</div>
        </div>

        <div
          className="flex flex-row space-x-1 items-center cursor-pointer"
          onClick={() => setViewPort("list")}
        >
          <ClipboardDocumentListIcon className="h-5 w-5" />
          <div className="text-sm ">List</div>
        </div>
      </div>
      
      
      {/* Body */}
      <div className="flex px-10 w-full ">
        {viewPort === "list" && <RecordsTable data={records} />}
        {viewPort === "new" && <Form/>}
      </div>
    </div>
  );
}
