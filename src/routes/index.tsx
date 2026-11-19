import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Signature } from "@/components/site/Signature";
import { Ritual } from "@/components/site/Ritual";
import { MenuSection } from "@/components/site/MenuSection";
import { Closing } from "@/components/site/Closing";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bruma Café — Cardápio digital" },
      {
        name: "description",
        content: "Cafés especiais, matcha, cold brew e assados do dia. Veja o cardápio completo da Bruma Café com preços.",
      },
      { property: "og:title", content: "Bruma Café — Cardápio digital" },
      {
        property: "og:description",
        content: "Cafés especiais, matcha, cold brew e assados do dia. Veja o cardápio completo com preços.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Marquee />
      <Ritual />
      <Signature />
      <MenuSection />
      <Closing />
    </main>
  );
}
