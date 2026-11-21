import { Starburst } from "./Decor";

const words = ["Torra fresca", "Aroma intenso", "Sabor profundo", "Cold brew", "Matcha cerimonial", "Feito à mão"];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div aria-hidden className="relative z-10 overflow-hidden bg-espresso py-5 text-cream">
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((w, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl uppercase tracking-wide sm:text-3xl">{w}</span>
            <Starburst className="size-8 text-honey" points={10} />
          </div>
        ))}
      </div>
    </div>
  );
}
