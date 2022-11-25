import React from "react";
import { Table } from "evergreen-ui";

export default function RecordsTable({ data }) {
  return (
    <div className="flex w-full">
      <Table width={1280}>
        <Table.Head>
          <Table.TextHeaderCell>Date</Table.TextHeaderCell>
          <Table.TextHeaderCell>Designation</Table.TextHeaderCell>
          <Table.TextHeaderCell>Qty</Table.TextHeaderCell>
          <Table.TextHeaderCell>Amount</Table.TextHeaderCell>
          <Table.TextHeaderCell>Payment</Table.TextHeaderCell>
          <Table.TextHeaderCell>Client Number</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body>
          {data.map((data) => (
            <Table.Row
              key={data.date}
              isSelectable
              onSelect={() => alert(data.qty)}
            >
              <Table.TextCell>{data.date}</Table.TextCell>
              <Table.TextCell>{data.designation}</Table.TextCell>
              <Table.TextCell isNumber>{data.qty}</Table.TextCell>
              <Table.TextCell isNumber>{data.amount}</Table.TextCell>
              <Table.TextCell isNumber>{data.payment}</Table.TextCell>
              <Table.TextCell >{data.client}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
