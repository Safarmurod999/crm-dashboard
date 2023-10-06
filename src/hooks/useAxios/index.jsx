import axios from "axios";


const { REACT_APP_BASE_URL } = process.env;
export const UseAxios = () => {
  return async ({ url, body, header, method = "GET" }) => {
    return await axios({
      url: `${REACT_APP_BASE_URL}${url}`,
      method,
      data: {
        ...body,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...header,
      },
    })
      .then((data) => data)
      .catch((eror) => eror);
  };
};
