"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className='flex gap-10'>
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>MySQL</li>
        <li>TypeScript</li>
        <li>MongoDB</li>
        <li>Python</li>
      </ul>
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Next (Page Router, App Router)</li>
        <li>Redux toolkit</li>
        <li>material UI</li>
        <li>TailWind CSS</li>
      </ul>
      </div>
    ),
  },
  {
    title: "Other tool",
    id: "tool",
    content: (
      <ul className="list-disc pl-2">
        <li>Git hub</li>
        <li>Figma</li>
        <li>Jira</li>
        <li>Postman</li>
        <li>Trello</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        
        <li> {`Thammasat University (Bachelor's degree)`}</li>
      </ul>
    ),
  },
];

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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="grid grid-cols-1 gap-4 text-base lg:text-lg">
            <div>Name: Ponlaput Petlorm</div>
            <div>Nickname: Chut</div>
            <div>Age: 23 years old</div>
            <div>Phone: 083-042-3655</div>
            <div>Email: pponlaput@gmail.com, peechud@hotmail.com</div>
            <div>
              GitHub:{" "}
              <a
                href="https://github.com/Ponlaput"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Ponlaput
              </a>
            </div>
          </div>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tool")}
              active={tab === "tool"}
            >
              {" "}
              Other tool{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
