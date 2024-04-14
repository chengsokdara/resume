import ExperienceProjectDuty from "@/components/resume/experience/project-duty";
import type { ExperienceDataType } from "@/types";

type ExperienceProjectPropType = {
  data: ExperienceDataType;
};

export default function ExperienceProject({ data }: ExperienceProjectPropType) {
  return (
    <ul className="list-disc space-y-5 ps-5 font-mont text-xs">
      {data.projects.map((project, idx2) => (
        <div key={idx2} className="flex flex-col">
          <li className="font-semibold">
            {project.website ? (
              <a className="text-primary underline" href={project.website}>
                {project.name}
              </a>
            ) : (
              project.name
            )}{" "}
            ({project.technology})
          </li>
          <p className="text-2xs text-black/75">{project.skills}</p>
          <ExperienceProjectDuty data={project} />
        </div>
      ))}
    </ul>
  );
}
