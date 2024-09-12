import React from "react";
import Menu from "../_components/Menu";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav>
        <Menu></Menu>
      </nav>
      {children}
    </div>
  );
};

export default DashboardLayout;
