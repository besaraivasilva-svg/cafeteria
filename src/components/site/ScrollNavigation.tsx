import { useEffect, useState } from "react";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sections = [
  { id: "ritual", label: "Ritual" },
  { id: "cardapio", label: "Cardápio" },
  { id: "destaques", label: "Assinaturas" },
  { id: "visite", label: "Visite" },
];

export function ScrollNavigation() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const update = () => {
      let current = "";
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 140) current = id;
      });
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav aria-label="Navegação das seções" className="sticky top-0 z-40 border-y border-espresso/15 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:px-5">
        <a href="#inicio" aria-label="Bruma Café — início" className="hidden items-center gap-2 font-display text-xl sm:inline-flex"><Coffee className="size-5" /> Bruma Café</a>
        <div className="flex w-full items-center justify-between gap-1 sm:w-auto sm:gap-3">
          {sections.map(({ id, label }) => <Button key={id} variant="ghost" size="sm" asChild className={cn("rounded-full px-3 text-xs sm:text-sm", active === id && "bg-honey text-espresso")}><a href={`#${id}`} aria-current={active === id ? "location" : undefined}>{label}</a></Button>)}
        </div>
      </div>
    </nav>
  );
}