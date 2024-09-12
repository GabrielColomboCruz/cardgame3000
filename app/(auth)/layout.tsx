import React from "react";
import Menu from "../_components/Menu";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Menu></Menu>
      <div className="h-full flex items-center justify-center">{children}</div>
    </>
  );
};

export default AuthLayout;
