import React from "react";
import {
  DocumentIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

export default function MainScreen() {
  return (
    <div className="flex flex-col w-full pt-6 space-y-10">
      {/* header */}
      <div className="flex justify-center text-2xl font-semibold">
        Customer Book App
      </div>
      {/* Menu bar */}
      <div className="flex flex-row px-10 space-x-10">
        <div className="flex flex-row space-x-1 items-center cursor-pointer">
          <DocumentIcon className="h-5 w-5" />
          <div className="text-sm ">New</div>
        </div>

        <div className="flex flex-row space-x-1 items-center cursor-pointer">
          <ClipboardDocumentListIcon className="h-5 w-5" />
          <div className="text-sm ">List</div>
        </div>
      </div>
      {/* Body */}
    </div>
  );
}
