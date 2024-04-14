import SectionHeading from "@/components/commons/headings/section-heading";
import EducationDiploma from "@/components/resume/education/diploma";
import EducationSchool from "@/components/resume/education/school";
import data from "@/data";

export default function Education() {
  return (
    <>
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
    </>
  );
}
