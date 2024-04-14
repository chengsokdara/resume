import SectionHeading from "@/components/commons/headings/section-heading";
import EducationDiploma from "@/components/resume/education/diploma";
import EducationSchool from "@/components/resume/education/school";
import ExperienceCompany from "@/components/resume/experience/company";
import ExperienceProject from "@/components/resume/experience/project";
import Header from "@/components/resume/header";
import Profile from "@/components/resume/profile";
import data from "@/data";

export default function ResumeV1() {
  return (
    <>
      <section className="flex flex-col flex-1 pr-5">
        <Header />
        {/* WORK EXPERIENCE */}
        <SectionHeading>Work Experience</SectionHeading>
        {data.experiences.map((experience, idx) => (
          <article key={idx} className="flex flex-col mb-5">
            <h4 className="font-mont font-semibold text-lg mb-1">
              {experience.title}
            </h4>
            <ExperienceCompany data={experience} />
            <ExperienceProject data={experience} />
          </article>
        ))}
        {/* PERSONAL ANDROID APPS */}
        <SectionHeading>Personal Android Apps</SectionHeading>
        {data.projects.map((project, idx1) => (
          <ul key={idx1} className="list-disc mb-2 ps-5 font-mont text-xs">
            <li>
              {project.website ? (
                <a className="underline" href={project.website}>
                  {project.name}
                </a>
              ) : (
                project.name
              )}
              <ul className="list-disc ps-5 mt-1">
                {project.descriptions.map((description, idx2) => (
                  <li key={idx2}>
                    {typeof description === "object" ? (
                      <a className="underline" href={description.website}>
                        {description.name}
                      </a>
                    ) : (
                      description
                    )}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        ))}
        {/* OPENSOURCE LIBRARIES */}
        <SectionHeading>OpenSource Libraries</SectionHeading>
        <ul className="list-disc space-y-1 ps-5 font-mont text-xs">
          {data.opensources.map((opensource, idx) => (
            <li key={idx}>
              <a className="underline" href={opensource.website}>
                {opensource.name}
              </a>
              : {opensource.description}
            </li>
          ))}
        </ul>
      </section>
      <aside className="flex flex-col w-[11.25rem]">
        <Profile />
        <div className="flex flex-col pl-5">
          {/* EDUCATION */}
          <SectionHeading>Education</SectionHeading>
          <div className="flex flex-col gap-5">
            {data.educations.map((education, idx1) => (
              <div key={idx1} className="font-mont">
                <p className="text-2xs text-black/75 mb-1">{education.year}</p>
                <EducationDiploma data={education} />
                <EducationSchool data={education} />
              </div>
            ))}
          </div>
          {/* SKILLS */}
          <SectionHeading>Skills</SectionHeading>
          {data.skills.map((skill, idx1) =>
            typeof skill === "object" ? (
              <div key={idx1} className="font-mont text-2xs mb-2">
                <h5 className="font-semibold">{skill.name}</h5>
                <ul className="list-disc ps-5">
                  {skill.libraries.map((library, idx2) => (
                    <li key={idx2}>{library}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <h5 key={idx1} className="font-mont font-semibold text-2xs">
                {skill}
              </h5>
            ),
          )}
        </div>
      </aside>
    </>
  );
}
