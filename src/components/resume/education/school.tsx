import { EducationDataType } from "@/types";

type EducationSchoolPropType = {
  data: EducationDataType;
};

export default function EducationSchool({ data }: EducationSchoolPropType) {
  return Array.isArray(data.schools) ? (
    <ul className="list-disc space-y-1 ps-5 text-xs text-back/75 marker:text-black/50">
      {data.schools.map((school, idx2) => (
        <li key={idx2}>
          {typeof school === "object" ? (
            <a className="underline" href={school.website}>
              {school.name}
            </a>
          ) : (
            school
          )}
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-xs">{data.schools}</p>
  );
}
