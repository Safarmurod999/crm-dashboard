import React from 'react'
import CategoryCreateForm from "../../../components/formCreate/CategoryCreate";
const CategoryCreate = () => {
    const [value, setValues] = React.useState({
        category_name:''
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


        fetch(`${REACT_APP_BASE_URL}/categories/create`, option)
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err.message));
    };

    return (
        <CategoryCreateForm setData={setData} value={value} change={change}  setValues={setValues} />
    )
}
export default CategoryCreate;