import React from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Header from "./Header";
import { ProSidebarProvider } from "react-pro-sidebar";

const Base = (props) => {
  return (
    <div>
      <Header />
      <ProSidebarProvider>
        <Dashboard />
      </ProSidebarProvider>
      {props.children}
      <Footer />
    </div>
  );
};

export default Base;
