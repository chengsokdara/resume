import FAB from "@/components/layout/fab";

export default function ResumeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex bg-white w-[64rem] min-h-screen flex-row pb-5">
      {children}
      {/* <FAB /> */}
    </main>
  );
}
