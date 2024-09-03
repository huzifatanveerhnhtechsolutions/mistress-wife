import Pricing from "@/components/Pricing/Pricing";
import PricingSection from "@/components/Pricing/PricingSection";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="">
      <Pricing />
      <PricingSection />
    </div>
  );
};

export default page;
