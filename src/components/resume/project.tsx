import SectionHeading from "@/components/commons/headings/section-heading";
import data from "@/data";

export default function Project() {
  return (
    <>
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
    </>
  );
}
