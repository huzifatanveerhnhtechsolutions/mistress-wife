"use client";
import React, { useState } from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionPanel,
//   AccordionTitle,
//   Drawer,
// } from "flowbite-react";
import ProgressBar from "@/usable/progressBar";
import { FaPlay } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordian";
import Image from "next/image";
import { AlignJustify } from "lucide-react";

// const CourseSidebar = (
//   <div className="border border-[#AC2CA8] p-5 xl:p-9 rounded-xl">
//     <span className="justify-end lg:flex hidden">
//       <FaBars color="#AC2CA8" size={25} />
//     </span>
//     <p className="font-ubuntu  text-[36px] font-[700] mb-5">Modules</p>
//     <hr className="border-secondary mb-7" />
//     <p className="font-ubuntu text-secondary text-[20px] font-[700] mb-1">
//       Course Modules
//     </p>

//     <Accordion className="">
//       <AccordionPanel >
//         {/* Accordion Title with custom background and text color, no change on hover */}
//         <AccordionTitle className=" bg-[#6E3117] text-white hover:bg-[#8f401e] hover:text-white rounded-lg border-none">
//           <div className="inline-block text-start w-[120%] lg:w-[150%] xl:w-[200%]">
//             {/* <ProgressBar percent={35} /> */}
//             <span className="block text-lg font-semibold mt-3">
//               English classes
//             </span>
//             <span className="block text-sm font-normal mt-1">12 modules</span>
//           </div>
//         </AccordionTitle>
//         {/* Accordion Content with custom background color */}
//         <AccordionContent className="bg-[#F6DBAC] ">
//           <div className="flex-col flex gap-6 h-64 overflow-y-scroll no-scrollbar">
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.4)] rounded-full border-2 p-3 border-[#263238] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#160845" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[#150744]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[#150744]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#00BF41] border-4"></div>
//                 <div className="rounded-md border-[#919191] border-4"></div>
//               </div>
//             </div>

//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//           </div>
//         </AccordionContent>
//       </AccordionPanel>

//       <AccordionPanel>
//         <AccordionTitle className="bg-[#6E3117] mt-5 text-white hover:bg-[#8f401e] hover:text-white rounded-lg border-none">
//           <div className="inline-block text-start">
//             <span className="block text-lg font-semibold">
//               Mathematic classes
//             </span>
//             <span className="block text-sm font-normal mt-2">12 modules</span>
//           </div>
//         </AccordionTitle>
//         {/* Accordion Content with custom background color */}
//         <AccordionContent className="bg-[#F6DBAC] ">
//           <div className="flex-col flex gap-6 h-64 overflow-y-scroll no-scrollbar">
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.4)] rounded-full border-2 p-2 border-[#263238] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#160845" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[#150744]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[#150744]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#00BF41] border-4"></div>
//                 <div className="rounded-md border-[#919191] border-4"></div>
//               </div>
//             </div>

//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//           </div>
//         </AccordionContent>
//       </AccordionPanel>

//       <AccordionPanel>
//         <AccordionTitle className="bg-[#6E3117] mt-5 text-white hover:bg-[#8f401e] hover:text-white rounded-lg border-none">
//           <div className="inline-block text-start">
//             <span className="block text-lg font-semibold">
//               Physical classes
//             </span>
//             <span className="block text-sm font-normal mt-2">12 modules</span>
//           </div>
//         </AccordionTitle>
//         {/* Accordion Content with custom background color */}
//         <AccordionContent className="bg-[#F6DBAC] ">
//           <div className="flex-col flex gap-6 h-64 overflow-y-scroll no-scrollbar">
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.4)] rounded-full border-2 p-2 border-[#263238] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#160845" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[#150744]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[#150744]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#00BF41] border-4"></div>
//                 <div className="rounded-md border-[#919191] border-4"></div>
//               </div>
//             </div>

//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//           </div>
//         </AccordionContent>
//       </AccordionPanel>

//       <AccordionPanel>
//         <AccordionTitle className="bg-[#6E3117] mt-5 text-white hover:bg-[#8f401e] hover:text-white rounded-lg border-none">
//           <div className="inline-block text-start">
//             <span className="block text-lg font-semibold">English classes</span>
//             <span className="block text-sm font-normal mt-2">12 modules</span>
//           </div>
//         </AccordionTitle>
//         {/* Accordion Content with custom background color */}
//         <AccordionContent className="bg-[#F6DBAC] ">
//           <div className="flex-col flex gap-6 h-64 overflow-y-scroll no-scrollbar">
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.4)] rounded-full border-2 p-2 border-[#263238] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#160845" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[#150744]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[#150744]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#00BF41] border-4"></div>
//                 <div className="rounded-md border-[#919191] border-4"></div>
//               </div>
//             </div>

//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//           </div>
//         </AccordionContent>
//       </AccordionPanel>

//       <AccordionPanel>
//         <AccordionTitle className="bg-[#6E3117] mt-5 text-white hover:bg-[#8f401e] hover:text-white rounded-lg border-none">
//           <div className="inline-block text-start">
//             <span className="block text-lg font-semibold">
//               Mathematic classes
//             </span>
//             <span className="block text-sm font-normal mt-2">12 modules</span>
//           </div>
//         </AccordionTitle>
//         {/* Accordion Content with custom background color */}
//         <AccordionContent className="bg-[#F6DBAC] ">
//           <div className="flex-col flex gap-6 h-64 overflow-y-scroll no-scrollbar">
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.4)] rounded-full border-2 p-2 border-[#263238] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#160845" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[#150744]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[#150744]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#00BF41] border-4"></div>
//                 <div className="rounded-md border-[#919191] border-4"></div>
//               </div>
//             </div>

//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//           </div>
//         </AccordionContent>
//       </AccordionPanel>

//       <AccordionPanel>
//         <AccordionTitle className="bg-[#6E3117] mt-5 text-white hover:bg-[#8f401e] hover:text-white rounded-lg border-none">
//           <div className="inline-block text-start">
//             <span className="block text-lg font-semibold">
//               Physical classes
//             </span>
//             <span className="block text-sm font-normal mt-2">12 modules</span>
//           </div>
//         </AccordionTitle>
//         {/* Accordion Content with custom background color */}
//         <AccordionContent className="bg-[#F6DBAC] ">
//           <div className="flex-col flex gap-6 h-64 overflow-y-scroll no-scrollbar">
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.4)] rounded-full border-2 p-2 border-[#263238] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#160845" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[#150744]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[#150744]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#00BF41] border-4"></div>
//                 <div className="rounded-md border-[#919191] border-4"></div>
//               </div>
//             </div>

//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <div className="bg-[rgba(255,255,255,0.5)] rounded-full border-2 p-2 border-[rgba(255,255,255,0.5)] flex items-center justify-center">
//                 <span>
//                   <FaPlay size={20} color="#FFFFFF" />
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   Introduction to the User
//                 </p>
//                 <p className="font-ubuntu font-semibold text-[15px] text-[rgba(0,0,0,0.4)]">
//                   03:36
//                 </p>
//               </div>
//               <div className="flex justify-between space-x-2">
//                 <div className="rounded-md border-[#919191] border-4"></div>
//                 <div className="rounded-md border-[#FD2E2E] border-4"></div>
//               </div>
//             </div>
//           </div>
//         </AccordionContent>
//       </AccordionPanel>
//     </Accordion>
//   </div>
// );

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* <div className="block lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="text-white bg-primary hover:dark focus:outline-none focus:ring-1 focus:ring-secondary font-medium rounded-lg border-none text-sm px-5 py-2.5 me-2 mb-2"
        >
          <FaBars color="#6E3117" size={25} />
        </button>

        <Drawer open={isOpen} onClose={handleClose}>
          <Drawer.Header title="Course" />
          <Drawer.Items>{CourseSidebar}</Drawer.Items>
        </Drawer>
      </div>
      <div className="hidden lg:block">{CourseSidebar}</div> */}
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="border border-[#AC2CA8] p-4 px-6 rounded-xl w-full"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="custom-accordion-trigger">
            <div className="w-full">
              <div className="flex justify-end">
                <AlignJustify color="#AC2CA8" />
              </div>
              <div>
                <h1 className="border-b pb-5 text-4xl text-start">Modules</h1>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <h1 className="text-lg pt-4">Courses Modules</h1>
            <div className="flex flex-col gap-4">
              {[...Array(4)].map((_, index) => (
                <Accordion
                  type="single"
                  defaultValue={index === 0 ? "item-1" : undefined} // Open only the first item by default
                  collapsible
                  className="border rounded-lg"
                  key={index}
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="px-8 pl-12 border-b">
                      <div className="flex flex-col  justify-start items-start gap-2 rounded-lg">
                        <div>English Classes</div>
                        <div>12 modules</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs">
                      {[...Array(4)].map((_, subIndex) => (
                        <div
                          className="flex justify-between px-4 py-4  items-center"
                          key={subIndex}
                        >
                          <div className="flex items-center gap-2">
                            <div>
                              <Image
                                src={"/assets/play.png"}
                                alt="play"
                                width={30}
                                height={30}
                              />
                            </div>
                            <div>
                              <h1>Introduction to the User</h1>
                              <h1>3:36</h1>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
