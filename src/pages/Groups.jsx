import React from "react";
import { Link, Outlet } from "react-router-dom";
import Table from "../components/Table/Table";
import GroupList from '../assets/commonData/group_list.json';

const renderGroupTableHead = (item, index) => <th key={index}>{item}</th>;

const renderGroupTableBody = () => (
  GroupList.map((group) => (
    <tr key={group.id}>
      <td><Link to="/assistants">{group.groupNum}</Link></td>
      <td><Link to="/assistants">{group.yonalish}</Link></td>
      <td><Link to="/assistants">{group.daytime}</Link></td>
      <td><Link to="/assistants">{group.createdDate}</Link></td>
      <td><Link to="/assistants">{group.room}</Link></td>
      <td><Link to="/assistants">{group.assistants}</Link></td>
      <Outlet />
    </tr>
  ))
);

const groupheader = ['Teacher', 'Assistants', 'Directions', 'Room', 'Created at', 'Price', 'Time', 'Telegram Group'];

const Groups = () => {
  return (
    <div>
      <h2>Groups</h2>
      <br /><br />
      {
        GroupList.length > 0 ?
          <Table
            limit={5}
            headData={groupheader}
            renderHead={(item, index) => renderGroupTableHead(item, index)}
            bodyData={GroupList}
            renderBody={() => renderGroupTableBody()}
          />
          :
          <h1>Loading...</h1>
      }
    </div>
  );
};

export default Groups;
