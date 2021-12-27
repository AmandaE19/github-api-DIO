import React from "react";
import Header from "../header";
import * as St from "./styled";

const Layout = ({ children }) => {
  return (
    <St.WrapperLayout>
      <Header />
      {children}
    </St.WrapperLayout>
  );
};

export default Layout;
