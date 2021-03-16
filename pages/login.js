import React from "react";
import AppLayout from "../components/AppLayout";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div>
      <AppLayout title="| Login">
        <LoginForm />
      </AppLayout>
    </div>
  );
}

export default Login;
