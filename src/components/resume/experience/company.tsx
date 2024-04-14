import type { ExperienceDataType } from "@/types";

type ExperienceCompanyPropType = {
  data: ExperienceDataType;
};

export default function ExperienceCompany({ data }: ExperienceCompanyPropType) {
  return (
    <div className="flex flex-col mb-2">
      <p className="font-mont text-lg">
        <a className="text-primary underline" href={data.company.website}>
          {`${data.company.name}`}
        </a>
        {" | "}
        <span className="text-black text-xs no-underline">
          {data.company.location}
        </span>
      </p>
      <p className="font-mont text-2xs">
        {data.company.date.from} - {data.company.date.to} (
        {data.company.date.duration})
      </p>
    </div>
  );
}
