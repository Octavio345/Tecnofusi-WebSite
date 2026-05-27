import { Differentials } from "@/sections/Differentials";
import { Hero } from "@/sections/Hero";
import { HomePathways } from "@/sections/HomePathways";
import { Marketplaces } from "@/sections/Marketplaces";
import { OperationsGallery } from "@/sections/OperationsGallery";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HomePathways />
      <Differentials />
      <OperationsGallery />
      <Marketplaces />
    </main>
  );
}
