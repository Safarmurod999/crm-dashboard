import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Assistants, Groups, Create, Analitics, Login, Error, CreateAssistant, GroupCreate, CreateStudent,CategoryCreate,AssistantPage } from '../pages'
import MainLayout from '../layout/Layout'
// import CategoryCreate from "../components/formCreate/CategoryCreate";

const Root = () => {
//   const [ role , setRole ] = React.useState('');
//   React.useEffect(() => {
//     const getlocol = localStorage.getItem('role')
//     setRole(getlocol)
// }, [])

  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Dashboard />} />
        <Route path="/assistants" element={<Assistants />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/create" element={<Create />} />
        <Route path="/analytics" element={<Analitics />} />
        <Route path="/assistantcreate" element={<CreateAssistant/>} />
        <Route path="/studentcreate" element={<CreateStudent />} />
        <Route path="/groupcreate" element={<GroupCreate />} />
        <Route path="/categorycreate" element={<CategoryCreate/>}/>
        <Route path="*" element={<Error />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/assistantpage" element={<AssistantPage/>} />
    </Routes>
    </>
  );
};

export default Root;
