import React from "react";
import { Table } from "evergreen-ui";

export default function RecordsTable({ data }) {
  return (
    <div className="flex w-full">
      <Table>
        <Table.Head>
          <Table.SearchHeaderCell />
          <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
          <Table.TextHeaderCell>ltv</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={240}>
          {data.map((data) => (
            <Table.Row
              key={data.date}
              isSelectable
              onSelect={() => alert(data.qty)}
            >
              <Table.TextCell>{data.client}</Table.TextCell>
              <Table.TextCell>{data.designation}</Table.TextCell>
              <Table.TextCell isNumber>{data.amount}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
