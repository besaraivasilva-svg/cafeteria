import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Signature } from "@/components/site/Signature";
import { Ritual } from "@/components/site/Ritual";
import { MenuSection } from "@/components/site/MenuSection";
import { Closing } from "@/components/site/Closing";
import { useReveal } from "@/hooks/use-reveal";
import { ScrollNavigation } from "@/components/site/ScrollNavigation";

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
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: "Bruma Café",
          description: "Cafés especiais, matcha, cold brew e assados do dia.",
          servesCuisine: ["Café", "Matcha", "Padaria"],
          priceRange: "R$",
          hasMenu: "/#cardapio",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="overflow-x-clip">
      <Hero />
      <ScrollNavigation />
      <Marquee />
      <Ritual />
      <MenuSection />
      <Signature />
      <Closing />
    </main>
  );
}
