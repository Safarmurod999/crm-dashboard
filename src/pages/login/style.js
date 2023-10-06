import styled from "styled-components";
import { Input } from "antd";

export const LoginWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
LoginWrapper.Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
`;
LoginWrapper.Title = styled.div`
  font-weight: 400;
  font-size: 30px;
  color: rgb(57, 56, 77);
  text-align: center;
`;
LoginWrapper.Description = styled.div`
  margin-top: 10px;
  color: rgb(178, 176, 184);
  text-align: center;
  width: 80%;
`;

LoginWrapper.TelInput = styled(Input)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 40px;
  width: 80%;
  height: 50px;
  background: rgb(250, 251, 254);
  outline: none;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  padding-left: 15px;
  color: rgb(89, 90, 98);
  .ant-input-group-addon {
    border: none;
    background-color: transparent;
  }
`;

LoginWrapper.InputPassword = styled(Input.Password)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 40px;
  width: 80%;
  height: 50px;
  background: rgb(250, 251, 254);
  outline: none;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  padding-left: 15px;
  color: rgb(89, 90, 98);
  :hover {
    background: rgb(250, 251, 254);
    border: 1px solid rgb(240, 238, 247);
  }
`;

LoginWrapper.Button = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  color: rgb(255, 255, 255);
  padding: 0px 15px;
  background: linear-gradient(to right, #0575e6 0%, #021b79 51%, #0575e6 100%);
  margin-top: 50px;
  width: 80%;
  height: 50px;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
`;