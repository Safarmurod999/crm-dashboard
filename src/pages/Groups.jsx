import React from "react";
import Table from "../components/Table/Table";
import { UseAxios } from "../hooks/useAxios";
const renderGroupTableHead = (item, index) => <th key={index}>{item}</th>;

const rendergroupTableBody = (item, index) => (
  <tr key={index}>
    <td>{item.teacher}</td>
    <td>{item.assist_name} {item.assist_lastname} </td>
    <td>{item.study_field_name}</td>
    <td>{item.room}</td>
    <td>{item.created_at}</td>
    <td>{item.study_field_price}</td>
    <td>{item.time}</td>
    <td>{item.tg_groups}</td>

  </tr>
);

const groupheader = ['Teacher',  'Assistants','Directions',"room",'Created at', 'price', "time",'telegram group' ]



const Groups = () => {
const [groups , setGroups] = React.useState([])


  const getData = async () => {
    const axios = UseAxios()
    try {
      const response = await axios({url:'/groups'})
      // console.log(response.data.data);
        setGroups(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  
  React.useEffect(() => {
    getData()
  }, [])
  


  return (
    <div>
      <h2>Groups</h2>
      <br /><br />
      {
        groups.length > 0 ?
        <Table
        limit="5"
        headData={groupheader}
        renderHead={(item, index) => renderGroupTableHead(item, index)}
        bodyData={groups}
        renderBody={(item, index) => rendergroupTableBody(item, index)}
      />
        :
        <h1>loading...</h1>
      }
    </div>
  );
};

export default Groups;
