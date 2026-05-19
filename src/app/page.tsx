import { About } from "@/sections/About";
import { Credibility } from "@/sections/Credibility";
import { Differentials } from "@/sections/Differentials";
import { Hero } from "@/sections/Hero";
import { Marketplaces } from "@/sections/Marketplaces";
import { OperationsGallery } from "@/sections/OperationsGallery";
import { Services } from "@/sections/Services";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Differentials />
      <Services />
      <OperationsGallery />
      <About compact />
      <Credibility />
      <Marketplaces />
    </main>
  );
}
