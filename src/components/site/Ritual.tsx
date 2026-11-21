import type { CSSProperties } from "react";
import barista from "@/assets/ritual-barista.webp";
import bean from "@/assets/coffee-bean.webp";
import cappuccino from "@/assets/sig-cappuccino.webp";
import pourOver from "@/assets/cat-filtrados.webp";
import { RotatingBadge, Starburst } from "./Decor";

const steps = [
  { n: "01", title: "Origem", text: "Grãos de pequenos produtores da Mantiqueira e do Cerrado, escolhidos a dedo." },
  { n: "02", title: "Torra", text: "Torramos em lotes pequenos toda segunda-feira. Nada fica mais de 30 dias na prateleira." },
  { n: "03", title: "Xícara", text: "Cada bebida é preparada na hora, no seu tempo, do jeito que você gosta." },
];

function InlinePic({ src, className }: { src: string; className?: string }) {
  return (
    <>
      <span className="sr-only"> </span>
      <span
        aria-hidden
        className={`mx-1 inline-block h-[0.78em] w-[1.6em] translate-y-[0.06em] overflow-hidden rounded-full border-2 border-espresso align-baseline sm:mx-2 ${className ?? ""}`}
    >
        <img src={src} alt="" loading="lazy" decoding="async" className="size-full object-cover" />
      </span>
      <span className="sr-only"> </span>
    </>
  );
}

export function Ritual() {
  return (
    <section id="ritual" className="relative overflow-hidden py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <p className="reveal flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-10 bg-espresso" /> O nosso ritual
        </p>

        <h2 className="reveal mt-8 max-w-5xl font-display text-[clamp(2rem,5.2vw,4.25rem)] leading-[1.08] text-espresso">
          Cada xícara começa
          <InlinePic src={bean} className="bg-cream [&_img]:object-contain [&_img]:p-0.5" />
          muito antes de chegar até você. Escolhemos o grão, torramos
          <InlinePic src={pourOver} />
          toda semana e servimos <span className="font-serif font-normal italic text-honey">com calma</span>
          <InlinePic src={cappuccino} />
          porque café bom não tem pressa.
        </h2>

        <div className="mt-20 grid items-start gap-14 md:grid-cols-[1fr_1.15fr] md:gap-20">
          <div className="reveal relative mx-auto w-full max-w-xs sm:max-w-sm md:mx-0">
            <div className="overflow-hidden rounded-t-full rounded-b-card shadow-lift">
              <div className="reveal-image">
                <img src={barista} alt="Barista servindo um cappuccino com latte art" loading="lazy" decoding="async" className="aspect-[3/4] w-full object-cover" />
              </div>
            </div>
            <RotatingBadge
              text="bruma café • desde 2019 • são paulo • "
              className="absolute -bottom-10 -right-6 size-32 rounded-full bg-honey text-espresso shadow-stamp-sm sm:-right-10"
            >
              <Starburst className="size-8 text-espresso" points={10} />
            </RotatingBadge>
          </div>

          <ol className="md:pt-10">
            {steps.map((s, i) => (
              <li
                key={s.n}
                style={{ "--reveal-delay": `${i * 120}ms` } as CSSProperties}
                className="reveal group grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-t-[1.5px] border-espresso/25 py-8 last:border-b-[1.5px]"
              >
                <span className="text-outline font-display text-5xl leading-none transition-colors duration-500 group-hover:text-honey sm:text-6xl">
                  {s.n}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-3xl text-espresso">{s.title}</h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
