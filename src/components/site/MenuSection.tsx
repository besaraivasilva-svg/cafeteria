import { useState } from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import classicos from "@/assets/sig-cappuccino.webp";
import especiais from "@/assets/cat-especiais.webp";
import gelados from "@/assets/sig-coldbrew.webp";
import matcha from "@/assets/sig-matcha.webp";
import filtrados from "@/assets/cat-filtrados.webp";
import semCafe from "@/assets/cat-semcafe.webp";
import acompanhar from "@/assets/cat-acompanhar.webp";
import graos from "@/assets/cat-graos.webp";
import { formatPrice, menu } from "@/lib/menu";
import { cn } from "@/lib/utils";
import { Starburst } from "./Decor";
import { Button } from "@/components/ui/button";
import { productImages } from "@/lib/product-images";

const images: Record<string, string> = {
  classicos,
  especiais,
  gelados,
  matcha,
  filtrados,
  "sem-cafe": semCafe,
  acompanhar,
  graos,
};

const pad = (n: number) => String(n).padStart(2, "0");

export function MenuSection() {
  const [active, setActive] = useState(menu[0]?.id ?? "");
  const index = Math.max(0, menu.findIndex((c) => c.id === active));
  const cat = menu[index];
  const next = menu[index + 1];
  if (!cat) return null;

  return (
    <section id="cardapio" className="relative scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-2xl italic text-muted-foreground">o nosso</p>
            <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.85] text-espresso">Cardápio</h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Escolha uma categoria e explore. Leites vegetais sem custo extra — pergunte ao barista pelo grão do dia.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
          {/* index */}
          <div role="tablist" aria-label="Categorias do cardápio" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:sticky lg:top-8 lg:mx-0 lg:block lg:self-start lg:overflow-visible lg:px-0">
            {menu.map((c, i) => {
              const on = c.id === active;
              return (
                <Button
                  variant="ghost"
                  id={`tab-${c.id}`}
                  key={c.id}
                  role="tab"
                  aria-selected={on}
                  aria-controls="menu-panel"
                  onClick={() => setActive(c.id)}
                  className={cn(
                    "group flex h-auto shrink-0 justify-start items-baseline gap-3 rounded-full border-2 px-4 py-2 text-left transition-all duration-300 lg:w-full lg:rounded-none lg:border-0 lg:border-b-[1.5px] lg:border-espresso/20 lg:px-0 lg:py-3.5",
                    on ? "border-espresso bg-honey lg:bg-transparent" : "border-espresso/25 hover:border-espresso",
                  )}
                >
                  <span className={cn("hidden font-display text-sm tabular-nums transition-colors lg:inline", on ? "text-honey" : "text-muted-foreground")}>
                    {pad(i + 1)}
                  </span>
                  <span
                    className={cn(
                      "whitespace-nowrap font-semibold text-espresso transition-all duration-300 lg:font-display lg:text-2xl",
                      on ? "lg:translate-x-2" : "lg:opacity-55 lg:group-hover:translate-x-1 lg:group-hover:opacity-100",
                    )}
                  >
                    {c.title}
                  </span>
                  {on && <ArrowUpRight className="ml-auto hidden size-5 self-center text-honey lg:block" />}
                </Button>
              );
            })}
          </div>

          {/* panel */}
          <div id="menu-panel" role="tabpanel" aria-labelledby={`tab-${cat.id}`} aria-live="polite" className="relative min-w-0">
            <div key={cat.id} className="animate-rise">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-5 sm:items-end sm:gap-8">
                <div className="min-w-0">
                  <p className="font-display text-sm tracking-widest text-muted-foreground">
                    {pad(index + 1)} <span className="opacity-50">/ {pad(menu.length)}</span>
                  </p>
                  <h3 className="mt-2 break-words font-display text-3xl leading-tight text-espresso sm:text-5xl">{cat.title}</h3>
                  <p className="mt-3 font-serif text-2xl italic text-muted-foreground">{cat.tagline}</p>
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full border-[1.5px] border-espresso px-3 py-1 text-xs font-bold uppercase tracking-widest text-espresso">
                    <Clock className="size-3.5" /> {cat.hours}
                  </p>
                </div>
                <div className="relative w-24 sm:w-52">
                  <Starburst className="animate-spin-slow absolute -right-3 -top-3 size-10 text-honey sm:-right-5 sm:-top-5 sm:size-16" points={14} />
                  <div className="rotate-3 overflow-hidden rounded-2xl border-[2.5px] sm:rounded-[1.75rem] border-espresso shadow-stamp transition-transform duration-500 hover:rotate-0">
                    <img src={images[cat.id]} alt={cat.title} loading="lazy" className="aspect-square w-full object-cover" />
                  </div>
                </div>
              </div>

              <ul className="mt-10 grid gap-6 sm:grid-cols-2">
                {cat.items.map((item, i) => (
                  <li
                    key={item.name}
                    style={{ animationDelay: `${120 + i * 60}ms` }}
                    className="animate-rise group overflow-hidden rounded-lg border border-espresso/15 bg-background shadow-soft"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={productImages[item.name]} alt={item.name} width={640} height={640} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <h4 className="font-display text-2xl leading-tight text-espresso">{item.name}</h4>
                      <p className="mt-2 min-h-10 text-sm text-muted-foreground">{item.description}</p>
                      <p className="mt-4 font-display text-xl tabular-nums text-espresso">{formatPrice(item.price)}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">Preços em reais. Consulte opções sem lactose e sem glúten.</p>
                {next && (
                  <Button variant="link"
                    onClick={() => setActive(next.id)}
                    className="group h-auto whitespace-normal p-0 text-left font-display text-lg text-espresso"
                  >
                    Próximo: {next.title}
                    <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
