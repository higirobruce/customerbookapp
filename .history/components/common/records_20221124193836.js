import React from "react";
import { Table } from "semantic-ui-react";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function RecordsTable({ data }) {
    console.log(data)
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Table compact striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Designation</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Payment</Table.HeaderCell>
            <Table.HeaderCell>Client number</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map(($) => {
            return <Table.Row>
            <Table.Cell>{$.date}</Table.Cell>
            <Table.Cell>{$.designation}</Table.Cell>
            <Table.Cell>{$.qty}</Table.Cell>
            <Table.Cell>{$.amount}</Table.Cell>
            <Table.Cell>{$.payment}</Table.Cell>
            <Table.Cell>{$.client}</Table.Cell>
            <Table.Cell>
                <div className="flex flex-row space-x-5">
                   <PencilIcon className="h-3 w-3 text-yellow-700 cursor-pointer"/>
                   <TrashIcon className="h-3 w-3 text-red-700 cursor-pointer"/>
                </div>
            </Table.Cell>
          </Table.Row>;
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
