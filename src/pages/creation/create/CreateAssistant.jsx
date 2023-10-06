import React from 'react'
import FormCreate from '../../../components/formCreate/FormCreate'


const CreateAssistant = () => {
  
  const [value, setValues] = React.useState({
    firstname: "",
    lastname: "",
    age: null,
    password: "",
    phone: "",
    t_username: "",
    field_id: null,
    jinsi: 0,
    image: null,
  });
  const { REACT_APP_BASE_URL } = process.env;
  const locolToken = localStorage.getItem('token')

  const change = (e) => {
    setValues((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };



  const setData = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for (const event in value) {
      formdata.append(event, value[event]);
    }
    const option = {
      method: "POST",
      headers: {
        Authorization:
          "Bearer " +
          locolToken
        },
      body: formdata,
      redirect: "follow",
    };

    
    fetch(`${REACT_APP_BASE_URL}/assistants/create`, option)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
  };
 

  


  return (
      <FormCreate  setData={setData} value={value} change={change}  setValues={setValues}  />
  )
}

export default CreateAssistant