import { About } from "@/sections/About";
import { Credibility } from "@/sections/Credibility";
import { Differentials } from "@/sections/Differentials";
import { Hero } from "@/sections/Hero";
import { Marketplaces } from "@/sections/Marketplaces";
import { Services } from "@/sections/Services";
import { Suppliers } from "@/sections/Suppliers";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Differentials />
      <Services />
      <About compact />
      <Credibility />
      <Marketplaces />
      <Suppliers />
    </main>
  );
}
