import type { ExperienceProjectDataType } from "@/types";

type ExperienceDutyPropType = {
  data: ExperienceProjectDataType;
};

export default function ExperienceProjectDuty({
  data,
}: ExperienceDutyPropType) {
  return (
    <ul className="list-disc space-y-2 ps-5 mt-2 font-medium text-2xs marker:text-black/50">
      {data.duties.map((duty, idx3) =>
        typeof duty === "object" && duty.tasks ? (
          <li key={idx3}>
            {duty.description}
            <ul className="list-disc space-y-1 ps-5 mt-2 font-normal marker:text-black/25">
              {duty.tasks.map((task, idx4) => (
                <li key={idx4}>{task}</li>
              ))}
            </ul>
          </li>
        ) : typeof duty === "object" && duty.description ? (
          <li key={idx3}>{duty.description}</li>
        ) : typeof duty === "string" ? (
          <li key={idx3}>{duty}</li>
        ) : null,
      )}
    </ul>
  );
}
