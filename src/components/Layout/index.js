/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";

import "./styles.css";

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <div className="background" />
        {children}
      </main>
    </>
  );
};

export default Layout;
