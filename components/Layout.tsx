import React, { ReactNode } from 'react';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";

interface LayoutProps {
    children: ReactNode; // Define the children prop explicitly
  }

  const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Tabs />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
