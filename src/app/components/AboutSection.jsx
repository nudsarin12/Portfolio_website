"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <h2 className="uppercase text-xl font-bold md:text-3xl ml-2">About Me</h2>
      <div className="md:grid md:grid-cols-2 gap-4 items-start py-8 px-4 xl:gap-8 sm:py-16 xl:px-16">
        <Image 
          src="/images/nudsarin.png" 
          width={400} 
          height={400} 
          alt="Portrait of Nudsarin Khambaomueang" 
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">WHO AM I ?</h2>
          <p className="text-sm lg:text-base indent-8">
            Hello! My name is Nudsarin Khambaomueang (Nuch), I am a recent
            Information Technology graduate, and I am excited to step into the
            world of
            <span className="text-pink-400 font-semibold mx-1">
              Front-end development.
            </span>
          </p>
          <p className="text-sm lg:text-base indent-8 pt-2">
            I am currently looking for a
            <span className="text-pink-400 font-semibold mx-1">
              Frontend Developer
            </span>
            position and aim to develop my coding skills and productivity in
            this field. In addition to my technical skills, I am also committed
            to developing problem-solving skills and fostering effective
            collaboration within a team. My long-term ambition is to succeed in
            the programming field and further develop my career.
          </p>
          <span className="uppercase text-xl font-bold md:text-3xl flex items-center mt-8">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge mr-2"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="SchoolIcon"
              width="40"
              height="40"
              fill="white"
            >
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"></path>
            </svg>
            Education
          </span>
          <div className="mt-2">
            <div className="grid grid-cols-3 gap-4 mt-5">
              <Image
                src="/images/rmu.png"
                width={100}
                height={100}
                className="ml-4"
                alt="Rajabhat Maha Sarakham University logo"
              />
              <div className="col-span-2 pl-4">
                <p className="font-small mb-1">2020 - 2024</p>
                <p className="mb-1 font-bold">
                  Bachelor of Science in Information Technology
                </p>
                <p className="font-small mb-1">
                  Faculty of Information Technology Rajabhat Maha Sarakham University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;