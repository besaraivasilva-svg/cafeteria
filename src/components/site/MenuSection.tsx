import { formatPrice, menu } from "@/lib/menu";

export function MenuSection() {
  return (
    <section id="cardapio" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-2xl italic text-muted-foreground">o nosso</p>
            <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.85] text-espresso">Cardápio</h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Leites vegetais sem custo extra. Pergunte ao barista pelo grão do dia.
          </p>
        </div>

        {/* category chips */}
        <nav className="sticky top-3 z-30 -mx-5 mt-10 overflow-x-auto px-5 pb-2 [scrollbar-width:none]">
          <ul className="flex w-max gap-2 rounded-full border-2 border-espresso bg-background/90 p-1.5 shadow-stamp-sm backdrop-blur">
            {menu.map((c) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold text-espresso transition-colors hover:bg-honey"
                >
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 grid gap-x-12 gap-y-14 md:grid-cols-2">
          {menu.map((c) => (
            <div key={c.id} id={c.id} className="reveal scroll-mt-24">
              <div className="flex items-end justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-display text-2xl uppercase tracking-wide text-espresso">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>
                </div>
                <span className="text-outline shrink-0 font-display text-xl tracking-wider sm:text-2xl">{c.hours}</span>
              </div>
              <ul className="mt-5 space-y-4 rounded-[1.75rem] border-[2.5px] border-espresso bg-background p-6 shadow-stamp">
                {c.items.map((item) => (
                  <li key={item.name} className="group">
                    <div className="flex items-baseline gap-3">
                      <span className="font-bold text-espresso transition-colors group-hover:text-honey">{item.name}</span>
                      <span className="leader" aria-hidden />
                      <span className="shrink-0 font-bold tabular-nums text-espresso">{formatPrice(item.price)}</span>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
