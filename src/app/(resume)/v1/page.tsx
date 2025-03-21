import Education from "@/components/resume/education/education";
import Experience from "@/components/resume/experience/experience";
import Header from "@/components/resume/header";
import Opensource from "@/components/resume/opensource";
import Profile from "@/components/resume/profile";
import Project from "@/components/resume/project";
import Skills from "@/components/resume/skills";

export default function ResumeV1() {
  return (
    <>
      <section className="flex flex-col flex-1 pr-0 sm:pr-5">
        <aside className="sm:hidden">
          <Profile />
        </aside>
        <Header />
        <div className="flex flex-col px-5 sm:px-0">
          {/* WORK EXPERIENCE */}
          <Experience />
          {/* PERSONAL ANDROID APPS */}
          <Project />
          {/* OPENSOURCE LIBRARIES */}
          <Opensource />
          <div className="sm:hidden flex flex-col">
            {/* EDUCATION */}
            <Education />
            {/* SKILLS */}
            <Skills />
          </div>
        </div>
      </section>
      <aside className="hidden sm:flex flex-col w-[13.75rem]">
        <Profile />
        <div className="flex flex-col pl-5">
          {/* EDUCATION */}
          <Education />
          {/* SKILLS */}
          <Skills />
        </div>
      </aside>
    </>
  );
}
