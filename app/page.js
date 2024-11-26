import Image from "next/image";
import TimelineMenuLayout from "./components/timeline-menu/layout";
import TimelineLayout from "./components/timeline/layout";

export default function Home() {
  return (
    <div className="items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row">
        <TimelineMenuLayout />
        <TimelineLayout />
      </main>
    </div>
  );
}
