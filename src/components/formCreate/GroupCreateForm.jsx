import React from "react";
import { Link } from "react-router-dom";
import { UseAxios } from "../../hooks/useAxios";
import Item from "antd/es/list/Item";

const GroupCreateForm = ({ setData, value, change, setValues }) => {
  const [assistants, setAssistants] = React.useState([]);

  const getData = async () => {
    const axios = UseAxios();
    try {
      const response = await axios({ url: "/assistants" });
      setAssistants(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <form
      onSubmit={setData}
      className="flex h-[860px] w-[1600px] bg-transparent items-center justify-center mt-10">
      <div className="grid formCreate rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
        <div className="flex cursor-pointer items-center mt-6 justify-center pr-4  gap-2">
          <span className="w-[40px] h-[40px]  font-bold rounded-full bg-blue-600 text-white flex items-center justify-center">
            IT
          </span>
          <h3 className="text-2xl">center</h3>
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500  text-light font-semibold">
            Teacher
          </label>
          <input
            value={value.teacher}
            name="teacher"
            onChange={change}
            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            type="text"
            placeholder="Teacher...  "
          />
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Selection
          </label>
          <select
            value={value.assistant_teacher}
            onChange={change}
            name="assistant_teacher"
            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            {assistants.map((item) => (
              <option key={item.field_id} value={item.id}>
                {item.firstname} {item.lastname}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Days
            </label>
            <input
              value={value.daysisjuft}
              name="daysisjuft"
              onChange={change}
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              type="text"
              placeholder="Days..."
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Room
            </label>
            <input
              value={value.room}
              name="room"
              onChange={change}
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              type="text"
              placeholder="Room..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Times
            </label>
            <input
              value={value.time}
              name="time"
              onChange={change}
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              type="text"
              placeholder="Times..."
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Study Field
            </label>
            <input
              value={value.study_field}
              name="study_field"
              onChange={change}
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              type="text"
              placeholder="study field..."
            />
          </div>
        </div>
              
        
        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
          tg_groups
          </label>
          <input
            value={value.tg_groups}
            onChange={change}
            name="tg_groups"
            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            placeholder="tg_groups..."
          />
        </div>


        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
            Upload Photo
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  className="w-10 h-10 text-purple-400 group-hover:text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <p className="lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider">
                  Select a photo
                </p>
              </div>
              <input
                type="file"
                name="image"
                className="hidden"
                accept=".jpg, .png, .jpeg"
                onChange={(e) => {
                  setValues({ ...value, [e.target.name]: e.target.files[0] });
                }}
              />
            </label>
          </div>
        </div>

        <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
          <Link to="/create">
            <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
              Cancel
            </button>
          </Link>
         <Link to={'/create'}>
         <button className="w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
            Create
          </button> 
         </Link>
        </div>
      </div>
    </form>
  );
};

export default GroupCreateForm;
