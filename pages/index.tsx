// pages/index.tsx
import React from "react";
import Layout from "../layouts/Layout";
import Hero from "@/components/sections/Hero";

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Home;
