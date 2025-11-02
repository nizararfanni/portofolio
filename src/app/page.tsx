import DetailsMore from "@/components/sections/DetailsMore";
import HeroText from "@/components/sections/HeroText";
import LanguageLearned from "@/components/sections/LanguageLearned";
import LatestsProjects from "@/components/sections/LatestsProjects";

export default function Home() {
  return (
    <main className="flex flex-col px-10 py-20 ">
      {/* Hero section remains centered */}
      <div className="flex flex-col items-center mb-16 md:px-56 md:py-28">
        <HeroText />
      </div>
      <LatestsProjects />
      <DetailsMore />
      <LanguageLearned />
    </main>
  );
}
