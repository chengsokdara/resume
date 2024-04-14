import SectionHeading from "@/components/commons/headings/section-heading";
import data from "@/data";

export default function Opensource() {
  return (
    <>
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
    </>
  );
}
