import React from "react";
import Form from "../Components/Form";

const Login = ({ username, edit }) => {
  return (
    <div className="formdiv flex h-[100vh] w-full items-center justify-center">
      <Form username={username} edit={edit} />
    </div>
  );
};

export default Login;
