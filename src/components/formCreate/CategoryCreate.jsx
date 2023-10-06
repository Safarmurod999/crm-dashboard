import React from "react";
import { Link } from "react-router-dom";

const CategoryCreateForm = ({ setData, value, change,setValues }) => {
    return (
        <form
            onSubmit={setData}
            className="flex h-[860px] w-full bg-transparent items-start justify-center mt-10">
            <div className="grid formCreate rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
                <div className="flex cursor-pointer items-center mt-6 justify-center pr-4  gap-2">
          <span className="w-[40px] h-[40px]  font-bold rounded-full bg-blue-600 text-white flex items-center justify-center">
            IT
          </span>
                    <h3 className="text-2xl">center</h3>
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500  text-light font-semibold">
                        Category Name
                    </label>
                    <input
                        value={value.category_name}
                        onChange={change}
                        name="category_name"
                        className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        type="text"
                        placeholder="Category Name...  "
                    />
                </div>
                <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                    <Link to="/create">
                        <button
                            type="button"
                            className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
                            Cancel
                        </button>
                    </Link>
                    <Link to='/create'>
                        <button
                            type="submit"
                            className="w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
                            Create
                        </button>
                    </Link>
                </div>
            </div>
        </form>
    );
};
export default CategoryCreateForm;