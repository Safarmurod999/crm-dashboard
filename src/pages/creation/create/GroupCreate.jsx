import React from 'react'
import GroupCreateForm from '../../../components/formCreate/GroupCreateForm'



const GroupCreate = () => {
  const [value, setValues] = React.useState({
    teacher: "",
    assistant_teacher: 0,
    room: "",
    time: '',
    daysisjuft: 'null',
    study_field: '',
    image: null,
    tg_groups:''
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

    
    fetch(`${REACT_APP_BASE_URL}/groups/create`, option)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
  };
 




  return (
     <GroupCreateForm setData={setData} value={value} change={change}  setValues={setValues} />
)
}

export default GroupCreate