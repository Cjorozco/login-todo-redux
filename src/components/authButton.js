import { PoweroffOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from "react";
import { useHistory } from "react-router-dom";

const AuthButton = () => {
  let history = useHistory();

  return localStorage.getItem("loggedin") ? (
    <p>
      Welcome!{" "}
      <Button
        type="primary"
        icon={<PoweroffOutlined />}
        onClick={() => {
          localStorage.clear();
          history.push("/");
        }}
      >
        Sign out
      </Button> 
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

export default AuthButton;