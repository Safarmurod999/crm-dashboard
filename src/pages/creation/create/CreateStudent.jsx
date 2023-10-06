import React from 'react'
import StudentCreateForm from '../../../components/formCreate/StudentCreateForm'



const CreateStudent = () => {

  const [value, setValues] = React.useState({
    firstname: '',
    lastname: '',
    age: '',
    phone: '',
    t_username: '',
    jinsi: 0,
    group_id:''
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

    
    fetch(`${REACT_APP_BASE_URL}/students/create`, option)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
  };
 




  return (
    <StudentCreateForm value={value}   change={change} setData={setData}/>
    )
}

export default CreateStudent