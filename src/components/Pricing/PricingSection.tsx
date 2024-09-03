import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const PricingSection = (props: Props) => {
  return (
    <div className="w-[80%] mx-auto py-20">
      <div className="flex flex-col font-cinzel  justify-center items-center py-12 ">
        <h1 className="text-7xl">Pricing</h1>
        <h1 className="text-5xl">Transparent Pricing</h1>
      </div>
      <div className="flex hero_animation font-marope gap-8 justify-center">
        <div className="p-5 pt-6 border border-gray-400 bg-transparent flex flex-col rounded-xl gap-20">
          <div className="flex flex-col gap-5 ">
            <div>
              <h1 className="text-tPurple text-xl font-semibold">Basic</h1>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
            <h1 className="text-3xl pb-4">$250</h1>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex *:items-center gap-2">
                <Check color="#AC2CA8" />
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex *:items-center gap-2">
                <Check color="#AC2CA8" />
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex *:items-center gap-2">
                <Check color="#AC2CA8" />
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex *:items-center gap-2">
                <Check color="#AC2CA8" />
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <Link
            href={"/login"}
            className="flex justify-center items-center rounded-full py-3 bg-white text-black"
          >
            Get Started
          </Link>
        </div>
        <div className="p-5 pt-6 border border-gray-400 bg-transparent flex flex-col rounded-xl gap-20">
          <div className="flex flex-col gap-5 ">
            <div className="text-tPurple flex justify-between items-center">
              <h1 className=" text-xl font-semibold">Standard</h1>
              <div className="rounded-full bg-[#0c1d1c] p-2 font-semibold">
                Most Popular
              </div>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
            <h1 className="text-3xl pb-4">$250</h1>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex *:items-center gap-2">
                <Check color="#AC2CA8" />
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex *:items-center gap-2">
                <Check color="#AC2CA8" />
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex *:items-center gap-2">
                <Check color="#AC2CA8" />
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex *:items-center gap-2">
                <Check color="#AC2CA8" />
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <Link
            href={"/login"}
            className="flex justify-center items-center rounded-full py-3 bg-[#AC2CA8] text-white"
          >
            Get Started
          </Link>
        </div>
        <div className="p-5 pt-6 border border-gray-400 bg-transparent flex flex-col rounded-xl gap-20">
          <div className="flex flex-col gap-5 ">
            <div>
              <h1 className="text-tPurple text-xl font-semibold">Basic</h1>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
            <h1 className="text-3xl pb-4">$250</h1>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex *:items-center gap-2">
                <Check color="#AC2CA8" />
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex *:items-center gap-2">
                <Check color="#AC2CA8" />
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex *:items-center gap-2">
                <Check color="#AC2CA8" />
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex *:items-center gap-2">
                <Check color="#AC2CA8" />
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <Link
            href={"/login"}
            className="flex justify-center items-center rounded-full py-3 bg-white text-black"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
