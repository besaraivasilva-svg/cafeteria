import { useRef, useState, type KeyboardEvent } from "react";
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
import { FadeImage } from "./FadeImage";

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
  const listRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const index = Math.max(0, menu.findIndex((c) => c.id === active));

  /** Switch category and keep the change in view: the chip slides into the strip, the panel top stays on screen. */
  const select = (id: string, { focus = false } = {}) => {
    setActive(id);
    const list = listRef.current;
    const tab = document.getElementById(`tab-${id}`);
    if (focus) tab?.focus({ preventScroll: true });
    if (list && tab && list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2, behavior: "smooth" });
    }
    const panel = panelRef.current;
    if (panel && panel.getBoundingClientRect().top < 80) {
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    let to: number | null = null;
    const step = keys[e.key];
    if (step !== undefined) to = (index + step + menu.length) % menu.length;
    if (e.key === "Home") to = 0;
    if (e.key === "End") to = menu.length - 1;
    const target = to === null ? undefined : menu[to];
    if (!target) return;
    e.preventDefault();
    select(target.id, { focus: true });
  };
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
          <div ref={listRef} onKeyDown={onKey} role="tablist" aria-label="Categorias do cardápio" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:sticky lg:top-8 lg:mx-0 lg:block lg:self-start lg:overflow-visible lg:px-0">
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
                  tabIndex={on ? 0 : -1}
                  onClick={() => select(c.id)}
                  className={cn(
                    "group flex h-11 shrink-0 justify-start items-center gap-3 rounded-full border-2 px-4 text-left transition-all duration-300 ease-brand lg:h-auto lg:items-baseline lg:w-full lg:rounded-none lg:border-0 lg:border-b-[1.5px] lg:border-espresso/20 lg:px-0 lg:py-3.5",
                    on ? "border-espresso bg-honey lg:bg-transparent" : "border-espresso/25 hover:border-espresso",
                  )}
                >
                  <span className={cn("hidden font-display text-sm tabular-nums transition-colors lg:inline", on ? "text-honey" : "text-muted-foreground")}>
                    {pad(i + 1)}
                  </span>
                  <span
                    className={cn(
                      "whitespace-nowrap font-semibold text-espresso transition-all duration-300 ease-brand lg:font-display lg:text-2xl",
                      on ? "lg:translate-x-2" : "lg:opacity-55 lg:group-hover:translate-x-1 lg:group-hover:opacity-100",
                    )}
                  >
                    {c.title}
                  </span>
                  <ArrowUpRight className={cn("ml-auto hidden size-5 self-center text-honey transition-all duration-300 ease-brand lg:block", on ? "opacity-100" : "-translate-x-2 opacity-0")} />
                </Button>
              );
            })}
          </div>

          {/* panel */}
          <div ref={panelRef} id="menu-panel" role="tabpanel" tabIndex={-1} aria-labelledby={`tab-${cat.id}`} aria-live="polite" className="relative min-w-0 scroll-mt-24 outline-none">
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
                  <div className="animate-focus-in rotate-3 overflow-hidden rounded-2xl border-[2.5px] border-espresso bg-honey-soft shadow-stamp transition-[rotate] duration-500 ease-brand hover:rotate-0 sm:rounded-[1.75rem]">
                    <FadeImage src={images[cat.id]} alt={cat.title} className="aspect-square w-full object-cover" />
                  </div>
                </div>
              </div>

              <ul className="mt-10 grid gap-6 sm:grid-cols-2">
                {cat.items.map((item, i) => (
                  <li
                    key={item.name}
                    style={{ animationDelay: `${120 + i * 60}ms` }}
                    className="animate-rise group overflow-hidden rounded-[1.5rem] border border-espresso/15 bg-background shadow-soft transition-[translate,box-shadow,border-color] duration-500 ease-brand hover:border-espresso/40 hover:shadow-lift motion-safe:hover:-translate-y-1.5"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-honey-soft">
                      <FadeImage src={productImages[item.name]} alt={item.name} width={640} height={640} className="h-full w-full object-cover duration-700 motion-safe:group-hover:scale-105" />
                      {/* detail revealed on hover */}
                      <span aria-hidden className="absolute bottom-3 left-3 translate-y-2 rounded-full bg-cream/95 px-3 py-1 font-display text-xs tracking-wide text-espresso opacity-0 shadow-stamp-sm transition-all duration-500 ease-brand group-hover:translate-y-0 group-hover:opacity-100">
                        Nº {pad(i + 1)} · {cat.title}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-baseline justify-between gap-3">
                        <h4 className="font-display text-2xl leading-tight text-espresso">{item.name}</h4>
                        <span className="h-0.5 w-6 shrink-0 rounded-full bg-honey transition-[width] duration-500 ease-brand group-hover:w-10" aria-hidden />
                      </div>
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
                    onClick={() => select(next.id)}
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
