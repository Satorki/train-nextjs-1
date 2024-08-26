// layouts/MainLayout.tsx
import React from "react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";


const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
