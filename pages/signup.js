import React from "react";
import AppLayout from "../components/AppLayout";
import RegistrationForm from "../components/Registration";

function Signup() {
  return (
    <div>
      <AppLayout title="| Sign Up">
        <RegistrationForm />
      </AppLayout>
    </div>
  );
}

export default Signup;
