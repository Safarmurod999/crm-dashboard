import { useRef } from "react";
import { LoginWrapper } from "./style";
import { phoneEdior } from "./phone-number";
import { useState } from "react";
import { notification } from "antd";
import { UseAxios } from "../../hooks/useAxios";
import { LoadingOutlined } from "@ant-design/icons";

import {  useNavigate} from "react-router-dom";

const Login = () => {
const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef();

  const LoginAuth = async () => {
    const axios = UseAxios();
    const password = passwordRef.current.input.value;
    const phoneNumberEdit = phoneNumber.replace(/[^\d]/g, "");
    if (!password || !phoneNumberEdit) {
      return notification.error({
        message: "Plase enter password or phone number",
      });
    }
    let userInfo = { phone: phoneNumberEdit, password };
    try {
      setLoading(true);
      const response = await axios({
        url: "/auth/login",
        method: "POST",
        body: { ...userInfo },
      });
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("role",response.data.data.role )
      if(response.data.data.role === 'administrator' && response.data.data.token){
       navigate("/")
       }else if( response.data.data.role === "assistants"){
        navigate('/assistantpage')
       }
 

      if (response.data.message) {
        notification.success({ message: response.data.message });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginWrapper>
      <LoginWrapper.Container>
        <LoginWrapper.Title>Yana bir bor salom!</LoginWrapper.Title>
        <LoginWrapper.Description>
          Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga intilamiz.
        </LoginWrapper.Description>
        <LoginWrapper.TelInput
          addonBefore={"+998"}
          placeholder={"(99) 999-99-99"}
          bordered={false}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(phoneEdior(e.target.value))}
        />
        <LoginWrapper.InputPassword
          ref={passwordRef}
          placeholder={"Parol"}
          bordered={false}
        />
        <LoginWrapper.Button onClick={LoginAuth}>
          {loading ? <LoadingOutlined /> : "Login"}
        </LoginWrapper.Button>
      </LoginWrapper.Container>
    </LoginWrapper>
  );
};

export default Login;
