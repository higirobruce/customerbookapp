import React from "react";
import {Table} from 'evergreen-ui'

export default function RecordsTable({ data }) {
  return (
    <Table>
      <Table.Head>
        <Table.SearchHeaderCell />
        <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
        <Table.TextHeaderCell>ltv</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height={240}>
        {profiles.map((profile) => (
          <Table.Row
            key={profile.id}
            isSelectable
            onSelect={() => alert(profile.name)}
          >
            <Table.TextCell>{profile.name}</Table.TextCell>
            <Table.TextCell>{profile.lastActivity}</Table.TextCell>
            <Table.TextCell isNumber>{profile.ltv}</Table.TextCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
