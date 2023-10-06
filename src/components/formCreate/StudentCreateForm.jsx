import React from 'react'
import { Link } from 'react-router-dom'
import { useInputValue } from '../../hooks/useInputValues/useInputvalues'

const StudentCreateForm = ({ setData, value, change }) => {



  return (
    <form onSubmit={setData} className="flex h-[860px] w-[1600px] bg-transparent items-center justify-center mt-10">

    <div className="grid formCreate rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
  
  
    <div className="flex cursor-pointer items-center mt-6 justify-center pr-4  gap-2">
          <span className="w-[40px] h-[40px]  font-bold rounded-full bg-blue-600 text-white flex items-center justify-center">
            IT
          </span>
          <h3 className="text-2xl">center</h3>
    </div>
  
      
      <div className="grid grid-cols-1 mt-5 mx-7">
        <label className="uppercase md:text-sm text-xs text-gray-500  text-light font-semibold">Firstname</label>
        <input value={value.firstname} onChange={change} name='firstname' className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="text" placeholder="Firstname...  " />
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
        <div className="grid grid-cols-1">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Lastname</label>
          <input value={value.lastname} onChange={change} name='lastname' className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="text" placeholder="Lastname.." />
        </div>
        <div className="grid grid-cols-1">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">age</label>
          <input value={value.age} onChange={change} name='age' className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="text" placeholder="Age..." />
        </div>
      </div>
  
  
      <div className="grid grid-cols-1 mt-5 mx-7">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">t_username</label>
        <input value={value.t_username} onChange={change} name='t_username' className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="t_username..." />
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
        <div className="grid grid-cols-1">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">phone</label>
          <input value={value.phone} onChange={change} name='phone' className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="text" placeholder="Phone number..." />
        </div>
        <div className="grid grid-cols-1">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Id</label>
          <input value={value.students_group_id_fkeys} onChange={change} name='students_group_id_fkeys' className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="text" placeholder="group_id..." />
        </div>

      </div>
  
      <div className="grid grid-cols-1 mt-5 mx-7">
      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Gender</label>
      <select value={value.jinsi} onChange={change} name='jinsi' className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
        <option value={1}>Male</option>
        <option value={0}>Female</option>
      </select>
    </div>


  
  
      <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
        <Link to='/create'>
        <button  className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel</button>
        </Link>
        <button onClick={() => setData()} className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Create</button>
      </div>
  
    </div>
  </form>
  
    )
}

export default StudentCreateForm