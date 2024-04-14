import type { EducationDataType } from "@/types";

type EducationDiplomaPropType = {
  data: EducationDataType;
};

export default function EducationDiploma({ data }: EducationDiplomaPropType) {
  return Array.isArray(data.diplomas) ? (
    <ul className="list-disc ps-5 font-semibold text-sm mb-1">
      {data.diplomas.map((diploma, idx2) => (
        <li key={idx2}>{diploma}</li>
      ))}
    </ul>
  ) : (
    <p className="font-semibold text-sm mb-1">{data.diplomas}</p>
  );
}
