import Navbar from "@/components/ui/Navbar";
import React from "react";

type Props = {};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
   
      {children}
    </div>
  );
};

export default layout;
