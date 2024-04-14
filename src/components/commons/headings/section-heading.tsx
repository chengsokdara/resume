import { type ReactNode } from "react";

export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-mont-sub font-bold text-xl mb-2 mt-4">{children}</h3>
  );
}
