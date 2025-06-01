'use client';
import { BorderBeam } from "@/components/magicui/border-beam";
import { FlipText } from "@/components/magicui/flip-text";
import { Particles } from "@/components/magicui/particles";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { Code, Folder, GraduationCap, User } from 'lucide-react';
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="relative overflow-hidden bg-neutral-100 flex justify-center py-5">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color="#be185d"
        refresh
      />
      <Terminal className="min-w-[400px] min-h-[250px]">
        <TypingAnimation>&gt; initializing portfolio...</TypingAnimation>
        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ System check completed</span>
        </AnimatedSpan>
        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Loading creative assets</span>
        </AnimatedSpan>
        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Connecting to developer profile</span>
        </AnimatedSpan>
        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Preparing user interface</span>
        </AnimatedSpan>
        <AnimatedSpan delay={3500} className="text-blue-500">
          <span>ℹ Launching portfolio environment</span>
        </AnimatedSpan>
        <TypingAnimation delay={4000} className="text-muted-foreground">
          Welcome to my portfolio 👋
        </TypingAnimation>
      </Terminal>
    </div>
  );
};

const techstack = [
  { name: "Next.js", icon: "/techstack/next.png" },
  { name: "Typescript", icon: "/techstack/typescript.png" },
  { name: "Tailwind", icon: "/techstack/tailwind.png" },
  { name: "Bootstrap", icon: "/techstack/bootstrap.png" },
  { name: "React", icon: "/techstack/react.png" },
  { name: "JavaScript", icon: "/techstack/js.png" },
  { name: "HTML 5", icon: "/techstack/html.png" },
  { name: "CSS", icon: "/techstack/css.png" },
  { name: "PHP", icon: "/techstack/php.png" },
  { name: "FLutter", icon: "/techstack/flutter.png" },
  { name: "Dart", icon: "/techstack/dart.png" },
  { name: "MySQL", icon: "/techstack/mysql.png" },
  { name: "Supabase", icon: "/techstack/supabase.png" },
  { name: "Firebase", icon: "/techstack/firebase.png" }
];

const webProjects = [
  {
    id: 1,
    title: "El Salvador City Waterworks Billing System",
    description: "A custom-built billing system designed for El Salvador City’s water services, streamlining payment tracking, customer management, and report generation.\nBuilt using HTML, Bootstrap, PHP, JavaScript, and MySQL.",
    image: "/webproject/elsal.png",
  },
  {
    id: 2,
    title: "Inventory Management System",
    description: "A full-featured inventory management system for tracking products, stock levels, and sales.\nBuilt using Next.js, TailwindCSS, PHP, and MySQL.",
    image: "/webproject/inventory.png",
  },
  {
    id: 3,
    title: "IT Resume Maker",
    description: "A user-friendly platform that helps IT professionals create polished, customizable resumes tailored for tech careers.\nBuilt using Next.js, TailwindCSS, PHP, and MySQL.",
    image: "/webproject/resume.png",
  },
  {
    id: 4,
    title: "Portfolio",
    description: "A minimalist, lightweight portfolio built using Next.js and TailwindCSS, focused on clean UI, smooth user experience, and clear presentation of projects and skills.",
    image: "/webproject/portfolio.png",
  },
];

const mobileProjects = [
  {
    id: 1,
    title: "Math for Kids App",
    description: "An interactive learning app built with Flutter and Dart to help children improve their math skills through games and quizzes. The backend is built with PHP, and data is managed using MySQL.",
    image: "/mobileproject/math.png",
  },
  {
    id: 2,
    title: "Greenwich Ordering App",
    description: "A food ordering system developed with Flutter and Dart, allowing users to browse menus and place orders. The backend is built with PHP, and data is managed using MySQL.",
    image: "/mobileproject/green.png",
  },
  {
    id: 3,
    title: "Quiz Game App with QR",
    description: "A gamified quiz application using Flutter and Dart where users scan QR codes to unlock questions. Firebase is used for backend services and data handling.",
    image: "/mobileproject/quizgame.png",
  },
  {
    id: 4,
    title: "Social Media App",
    description: "A Flutter and Dart-based social media platform that enables users to share posts, connect with others, and engage in real-time communication. Backend and data handling powered by Supabase.",
    image: "/mobileproject/socialmedia.png",
  },
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("Web");
  const [selectedProject, setSelectedProject] = useState<null | typeof webProjects[0]>(null);
  const projects = selectedTab === "Web" ? webProjects : mobileProjects;
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 7000); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-neutral-100">
        <Loading />
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-neutral-100 flex justify-center  min-h-screen py-5">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color="#be185d"
        refresh
      />
      <div className="sm:w-2/4 w-full flex flex-col items-center p-5 pointer-events-none z-10 whitespace-pre-wrap leading-none">
        {/* Profile Header */}
        <div className="flex flex-col items-center w-full mb-6">
          <div className="transition-transform duration-300 ease-in-out hover:scale-110">
            <Image
              src="/prof.png"
              alt="Profile"
              className="w-40 h-40 object-cover rounded-full border-4 border-gray-500 mb-4"
              height={300}
              width={300}
            />
            
          </div>
          <FlipText className="font-medium text-xl -tracking-normal  text-black dark:text-white ">
            Kide Guile Compo
          </FlipText>
        </div>
        {/* Social Links */}
        <div className="flex space-x-6 w-full mb-8 justify-center pointer-events-auto">
          <a
            href="https://github.com/Guilecompo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-neutral-700 hover:text-black transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <FaGithub className="w-5 h-5" />
            <span className="text-xs mt-1">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kideguilecompo/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-blue-700 hover:text-blue-900 transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="text-xs mt-1">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/guile.compo/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-pink-600 hover:text-pink-800 transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <FaInstagram className="w-5 h-5" />
            <span className="text-xs mt-1">Instagram</span>
          </a>
              <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kideguilecompo30@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-green-700 hover:text-green-900 transition-transform duration-300 ease-in-out hover:scale-110"
              >
              <FaEnvelope className="w-5 h-5" />
              <span className="text-xs mt-1">Email</span>
              </a>
        </div>
        {/* About Me */}
        <div className="w-full mb-4">
          <h3 className="mb-2 flex items-center gap-2">
            <User size={20} />
            <span className="text-lg font-semibold">About Me</span>
          </h3>
          <Card>
            <CardContent>
              <p className="text-neutral-700 text-md">
                I&apos;m a dedicated full-stack developer from the Philippines with a strong focus on creating web and mobile applications.<br /><br />Leveraging modern technologies, I strive to design minimalist and engaging digital experiences. 
              </p>
            </CardContent>
          </Card>
        </div>
        {/* Education */}
        <div className="w-full mb-4 ">
          <h3 className="mb-2 flex items-center gap-2 ">
            <GraduationCap size={20} />
            <span className="text-lg font-semibold">Education</span>
          </h3>
          <Card>
            <CardContent>
              <p className="text-neutral-700 text-md font-bold">
                Bachelor of Science in Information Technology
              </p>
              <p className="text-neutral-500 text-sm ">
                PHINMA Cagayan de Oro College • 2021-2025
              </p>
            </CardContent>
          </Card>
        </div>
        {/* Tech Stack */}
        <div className="w-full mb-4">
          <h3 className="mb-2 flex items-center gap-2">
            <Code size={20} />
            <span className="text-lg font-semibold">Tech Stack</span>
          </h3>
          <Card className="relative overflow-hidden">
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {techstack.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-neutral-200 px-3 py-1 rounded text-sm font-medium flex flex-col items-center group transition-transform duration-300 ease-in-out hover:scale-110 pointer-events-auto"
                  >
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 mb-1"
                    />
                    {tool.name}
                  </span>
                ))}
              </div>
              <BorderBeam duration={8} size={100} />
            </CardContent>
            
          </Card>
        </div>

        {/* Projects Section */}
        
        <div className="w-full mb-4">
          <h3 className="mb-4 flex items-center gap-2">
            <Folder size={20} />
            <span className="text-lg font-semibold">Projects</span>
          </h3>

          {/* Tab Buttons */}
          <div className="flex w-full justify-between mb-6 pointer-events-auto">
            {["Web", "Mobile"].map((tab) => (
              <button
                key={tab}
                className={`flex-1 px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors duration-200 ${
                  selectedTab === tab
                    ? "border-pink-500 text-pink-600 bg-white shadow"
                    : "border-transparent text-neutral-400 bg-neutral-100"
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-transform duration-500 ease-in-out hover:scale-103 pointer-events-auto"
                onClick={() => setSelectedProject(project)}
              >
                
                {/* Container with fixed height to prevent card growth */}
                <div className="relative w-full h-64 overflow-hidden">
                  
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-1">{project.title}</h4>
                  <p className="text-sm text-neutral-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedProject && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 pointer-events-auto"
              onClick={() => setSelectedProject(null)}
            >
              <div
                className="rounded-lg max-w-lg w-full max-h-[90vh] p-6 relative flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-xl"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                >
                  ×
                </button>

                <div className="relative w-full h-[90vh] max-w-full">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    style={{ objectFit: "contain" }}
                    className="rounded"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

              </div>
            </div>
          )}
        </div>
        {/* Credits */}
        <div className="w-full mt-8 flex justify-center">
          <span className="text-xs font-bold text-neutral-500">© Kide Guile Compo</span>
        </div>
      </div>
    </div>
  );
}
