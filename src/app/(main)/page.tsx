import Home from "@/components/Home/Home";
import Navbar from "@/components/ui/Navbar";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default Page;
