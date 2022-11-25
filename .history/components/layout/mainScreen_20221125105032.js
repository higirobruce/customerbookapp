import React, { useEffect, useState } from "react";
import {
  DocumentIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import RecordsTable from "../common/records";
import Form from "../common/form";
import CustomModal from '../common/modal'

let url = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function MainScreen() {
  let [viewPort, setViewPort] = useState("list");
  let [records, setRecords] = useState(null);
  let [rowToEdit, setRowToEdit] = useState(null);
  let [loadingRecords, setLoadingRecords] = useState(false);
  let [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setLoadingRecords(true);
    fetchRecords();
  }, []);

  function fetchRecords() {
    fetch(`${url}/records`, { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          setLoadingRecords(false);
        } else {
          setRecords(res);
          setLoadingRecords(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoadingRecords(false);
      });
  }

  useEffect(() => {
    if (viewPort === "list") {
      fetchRecords();
    }
  }, [viewPort]);

  function editRecord(rowData) {
    // alert(JSON.stringify(rowData));
    setRowToEdit(rowData)
    setViewPort('edit')
  }

  function deleteRecord(_id){
    setOpenModal(true)
  }

  function confirmDelete(){

  }

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
        {viewPort === "list" && (
          <RecordsTable
            data={records}
            doneLoading={!loadingRecords}
            handleEdit={editRecord}
            handleDelete={deleteRecord}
          />
        )}
        {viewPort === "new" && (
          <Form
            handleLoadRecords={() => {
              setViewPort("list");
            }}
          />
        )}

        {viewPort === "edit" && (
          <Form
            handleLoadRecords={() => {
              setViewPort("list");
            }}
            editRow={rowToEdit}
          />
        )}
      </div>

      <CustomModal open={openModal} setOpen={setOpenModal}/>
    </div>
  );
}
