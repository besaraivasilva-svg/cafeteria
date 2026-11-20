import { useEffect, useState } from "react";
import { Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "ritual", label: "Ritual" },
  { id: "cardapio", label: "Cardápio" },
  { id: "destaques", label: "Assinaturas" },
  { id: "visite", label: "Visite" },
];

export function ScrollNavigation() {
  const [active, setActive] = useState("");
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = "";
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
      const hero = document.getElementById("inicio");
      setStuck(!!hero && hero.getBoundingClientRect().bottom <= 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      aria-label="Navegação das seções"
      className={cn(
        "sticky top-0 z-40 border-y border-espresso/15 bg-background/95 backdrop-blur-md transition-shadow duration-500 ease-brand",
        stuck && "shadow-lift",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-2 py-2 sm:px-5">
        <a
          href="#inicio"
          aria-label="Bruma Café — voltar ao início"
          className="group hidden items-center gap-2 rounded-full font-display text-xl text-espresso sm:inline-flex"
        >
          <Coffee className="size-5 transition-transform duration-500 ease-brand group-hover:-rotate-12" /> Bruma Café
        </a>
        <div className="flex w-full items-center justify-between gap-1 sm:w-auto sm:gap-2">
          {sections.map(({ id, label }) => {
            const on = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={on ? "location" : undefined}
                className={cn(
                  "inline-flex h-11 items-center rounded-full px-3 text-[13px] font-semibold text-espresso transition-colors duration-300 ease-brand sm:h-10 sm:px-4 sm:text-sm",
                  on ? "bg-honey" : "link-underline text-espresso/70 hover:text-espresso",
                )}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
