
import DetailsMore from "@/components/sections/DetailsMore";
import HeroText from "@/components/sections/HeroText";
import LangauageLearned from "@/components/sections/LangauageLearned";
import LatestsProjects from "@/components/sections/LatestsProjects";

export default function Home() {
  return (
    <main className="flex flex-col mx-10 py-20 md:px-56 md:py-28">
      {/* Hero section remains centered */}
      <div className="flex flex-col items-center mb-16">
        <HeroText />
      </div>
      <LatestsProjects />
      <DetailsMore/>
      <LangauageLearned />
    </main>
  );
}
