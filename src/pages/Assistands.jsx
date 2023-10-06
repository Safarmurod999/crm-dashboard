import React from "react";
import Table from "../components/Table/Table";
import {UseAxios} from '../hooks/useAxios'

// ================== Customers Table Headers =========== /
const AssistantsTableHead = [
  "#",
  "name",
  "lastname",
  "age",
  "direction",
  "phone",
  "role",
  "telegram account",
  "created at"
  
];

/* =============== Function to Render  Table Head ===================== */
const renderAssistantsTableHead = (item, index) => <th key={index}>{item}</th>;

/* =============== Function to Render  Table Body ===================== */
const renderAssistantsTableBody = (item, index) => (
  <tr key={index}>
    <td>{index + 1}</td>
    <td>{item.firstname}</td>
    <td>{item.lastname}</td>
    <td>{item.age}</td>
    <td>{item.job_title}</td>
    <td>{item.phone}</td>
    <td>{item.role}</td> 
    <td>{item.t_username}</td> 
    <td>{item.created_at}</td> 
    

  </tr>
);

const Assistants = () => {
  const [assistants, setAssistants ] = React.useState([])


  const getData = async () => {
    const axios = UseAxios()
    try {
      const response = await axios({url:'/assistants'})
      setAssistants(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getData()
  }, [])


  return (
    <section>
      <h2 className="page-header">Assistants</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            {
              assistants.length > 0 ?
              <Table
              limit="5"
              headData={AssistantsTableHead}
              renderHead={(item, index) => renderAssistantsTableHead(item, index)}
              bodyData={assistants}
              renderBody={(item, index) => renderAssistantsTableBody(item, index)}
              /> : <h1>loading ...</h1>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assistants;
