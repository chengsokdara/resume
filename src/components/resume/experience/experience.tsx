import SectionHeading from "@/components/commons/headings/section-heading";
import ExperienceCompany from "@/components/resume/experience/company";
import ExperienceProject from "@/components/resume/experience/project";
import data from "@/data";

export default function Experience() {
  return (
    <>
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
    </>
  );
}
