import { Suspense } from 'react';
import { Inter } from "next/font/google";
import Image from "next/image";
import { ProfileCard } from "@/app/ui/profile/profile-card";
import { fetchExperience, fetchProjects } from "@/app/lib/data";
import { ExperienceSkeleton } from "@/app/ui/skeletons";
import ProjectCard from "./ui/projects/project-card";

const inter = Inter({ subsets: ["latin"] });

export default async function Page() {
  return (
    <div className={`${inter.className} max-w-4xl mx-auto py-8 px-4`}>
      <TitleSection className="mb-8" />
      <AboutSection className="mb-8" />
      <EducationSection className="mb-8" />

      <Suspense fallback={<ExperienceSkeleton />}>
        <ExperienceSection className="mb-8" />
      </Suspense>

      <ProjectsSection className="mb-8" />
    </div>
  );
}

async function ProjectsSection({ className }: { className?: string }) {
  const projects = await fetchProjects();

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Featured Projects
        </h2>
        <a
          href="/projects"
          className="text-gray-600 hover:text-black text-sm font-medium flex items-center gap-1.5 px-2 py-1 rounded transition-colors"
        >
          See all projects
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            status={project.status}
            tech={project.tech}
            description={project.description}
            link={project.link}
            preview={project.preview}
          />
        ))}
      </div>
    </div>
  );
}

function TitleSection({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-8">
        {/* Profile Photo */}
        <div className="relative mb-4 sm:mb-0">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/profile-photo.jpg"
              alt="Profile photo"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center sm:text-left flex-grow">
          <h1 className="text-4xl font-bold">Colby Haskell</h1>
          <p className="text-gray-600 mt-2 text-lg mb-2">
            Software Engineer | Full Stack Developer
          </p>
          {/* Open to Work Badge */}
          <div className="hidden relative sm:flex bg-green-50 px-2.5 py-1 rounded-md text-xs font-medium border border-green-200 shadow-[0_2px_8px_-2px_rgba(22,101,52,0.25)] whitespace-nowrap items-center gap-1.5 hover:bg-green-100 transition-colors overflow-hidden w-fit">
            <div className="absolute inset-0 bg-gradient-radial from-green-200/50 via-transparent to-transparent opacity-75" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_6px_0px_rgba(22,101,52,0.5)]"></span>
            </span>
            <span className="relative text-green-700">Open to Work</span>
          </div>
        </div>
      </div>
    </div>
  );
}

async function EducationSection({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Education</h2>
      <ProfileCard
        title="B.S. Computer Engineering and Computer Science"
        subtitle="University of Southern California"
        date="2019 - 2022"
        link="https://www.cs.usc.edu"
        image={
          <Image
            src="/usc-logo.png"
            alt="USC logo"
            width={48}
            height={48}
            className="object-contain"
          />
        }
      >
        <p>Presidential Scholar • Cum Laude</p>
      </ProfileCard>
    </div>
  );
}

function AboutSection({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="text-black leading-relaxed text-[30] font-light font-inter">
        <span className="block mb-2 font-bold">Hey! 👋</span>
        <span className="font-bold">
          I'm Colby, a Full-Stack Software Engineer with a background in real-time
          Linux and embedded systems development.
        </span>
      </p>
    </div>
  );
}

async function ExperienceSection({ className }: { className?: string }) {
  const experienceData = await fetchExperience();

  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Experience</h2>
      <div className="space-y-4">
        {experienceData.map((experience) => (
          <ProfileCard
            key={experience.title}
            title={experience.title}
            subtitle={experience.subtitle}
            date={experience.date}
            link={experience.link}
          >
            <ul className="mt-2 text-gray-600 text-sm space-y-1">
              {experience.children.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </ProfileCard>
        ))}
      </div>
    </div>
  );
}
