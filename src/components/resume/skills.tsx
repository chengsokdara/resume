import SectionHeading from "@/components/commons/headings/section-heading";
import data from "@/data";

export default function Skills() {
  return (
    <>
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
    </>
  );
}
