import { useRef, type CSSProperties, type PointerEvent } from "react";
import { ArrowDownRight, Clock, Coffee, MapPin } from "lucide-react";
import icedLatte from "@/assets/iced-latte.webp";
import coldBrew from "@/assets/sig-coldbrew.webp";
import { Button } from "@/components/ui/button";
import { Bean, CurlyArrow, Logo, RotatingBadge, Starburst } from "./Decor";

const nav = [
  { href: "#ritual", label: "Ritual" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#visite", label: "Visite" },
];

/** depth = how many px the element drifts with the pointer */
const depth = (n: number): CSSProperties => ({
  translate: `calc(var(--mx, 0) * ${n}px) calc(var(--my, 0) * ${n}px)`,
  transition: "translate 0.6s cubic-bezier(0.2, 0.7, 0.2, 1)",
});

const line1 = ["Café", "feito", "para"];
const line2 = ["seus", "momentos", "de", "todo", "dia"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
    el.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
  };

  let w = 0;
  const word = (t: string) => {
    const delay = 520 + w++ * 65; // typography starts once the drink is on stage
    const isKey = t === "momentos";
    return (
      <span key={t + delay} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
        <span className="animate-word inline-block" style={{ animationDelay: `${delay}ms` }}>
          {isKey ? (
            <span className="relative inline-block">
              {t}
              <svg viewBox="0 0 300 20" className="animate-draw absolute -bottom-1 left-0 h-4 w-full fill-none stroke-honey" aria-hidden>
                <path d="M4 14 C 80 2, 200 2, 296 12" strokeWidth="7" strokeLinecap="round" pathLength={1} />
              </svg>
            </span>
          ) : (
            t
          )}
        </span>
      </span>
    );
  };

  return (
    <section id="inicio" ref={ref} onPointerMove={onMove} className="relative overflow-hidden">
      {/* ribbon */}
      <div className="animate-drop bg-espresso text-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 overflow-hidden whitespace-nowrap px-4 py-2 text-[11px] font-semibold tracking-wide sm:gap-6 sm:text-xs">
          <span className="flex items-center gap-1.5"><Coffee className="size-3.5" /> Sua cafeteria de todo dia</span>
          <span className="hidden items-center gap-1.5 sm:flex"><Clock className="size-3.5" /> Aberto todos os dias, 07h — 20h</span>
          <span className="hidden items-center gap-1.5 md:flex"><Starburst className="size-3.5 text-honey" /> Cafés especiais, matcha e cold brew</span>
        </div>
      </div>

      {/* header */}
      <header className="animate-drop relative z-20 mx-auto [animation-delay:120ms] grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 md:grid-cols-[1fr_auto_1fr]">
        <Logo />
        <nav aria-label="Principal" className="hidden items-center gap-2 md:flex">
          {nav.map((n) => (
            <Button key={n.href} variant="pill" size="sm" asChild className="px-5">
              <a href={n.href}>{n.label}</a>
            </Button>
          ))}
        </nav>
        <div className="flex justify-end">
          <Button variant="honey" size="sm" asChild className="h-10 px-5">
            <a href="#visite">
              Como chegar <MapPin />
            </a>
          </Button>
        </div>
      </header>

      {/* vertical side marks */}
      <p className="animate-veil absolute left-5 top-1/2 hidden [animation-delay:1500ms] -translate-y-1/2 -rotate-90 origin-left text-[11px] font-bold uppercase tracking-[0.35em] text-muted-foreground lg:block">
        Est. 2019 — São Paulo
      </p>
      <p className="animate-veil absolute right-5 top-1/2 hidden [animation-delay:1500ms] translate-x-1/2 -translate-y-1/2 rotate-90 text-[11px] font-bold uppercase tracking-[0.35em] text-muted-foreground lg:block">
        Torra fresca · toda semana
      </p>

      {/* hero body */}
      <div className="relative mx-auto max-w-6xl px-5 pt-6 text-center md:pt-10">
        {/* 1 · atmosphere */}
        <div className="animate-veil pointer-events-none absolute inset-0">
          <div className="bg-glow animate-breathe absolute left-1/2 top-40 h-[520px] w-[720px] -translate-x-1/2" />
        </div>

        <h1 className="relative font-display text-[clamp(2.75rem,8vw,6.25rem)] leading-[0.95] tracking-tight text-espresso">
          <span className="sr-only">Café feito para seus momentos de todo dia</span>
          <span aria-hidden>
            {line1.map((t, i) => (
              <span key={t}>{word(t)}{i < line1.length - 1 ? " " : ""}</span>
            ))}
            <br />
            {line2.map((t, i) => (
              <span key={t}>{word(t)}{i < line2.length - 1 ? " " : ""}</span>
            ))}
          </span>
        </h1>

        <p className="animate-rise mx-auto mt-6 max-w-md text-base text-muted-foreground [animation-delay:1100ms] sm:text-lg">
          Grãos torrados toda semana, leite vaporizado com carinho e um cantinho para você ficar.
        </p>

        <div className="animate-rise mt-8 flex justify-center [animation-delay:1220ms]">
          <Button variant="honey" size="xl" asChild>
            <a href="#cardapio">
              Ver o cardápio <ArrowDownRight className="size-5!" />
            </a>
          </Button>
        </div>

        {/* floating beans (parallax layers) */}
        <div style={depth(-18)} className="animate-veil pointer-events-none absolute inset-0 [animation-delay:1600ms]">
          <Bean className="animate-float left-[4%] top-[46%] w-14 sm:w-20" rotate={-30} />
          <Bean className="animate-float right-[6%] top-[62%] w-10 sm:hidden" rotate={35} />
        </div>
        <div style={depth(10)} className="animate-veil pointer-events-none absolute inset-0 [animation-delay:1700ms]">
          <Bean className="animate-float-slow left-[22%] top-[2%] hidden w-8 opacity-90 sm:block" rotate={40} />
          <Bean className="animate-float-slow right-[20%] top-[6%] hidden w-9 sm:block" rotate={-60} />
          <Bean className="animate-float right-[3%] top-[0%] hidden w-7 md:block" rotate={20} />
        </div>

        {/* product stage */}
        <div className="relative mx-auto mt-10 h-[340px] max-w-4xl sm:h-[420px]">
          <div style={depth(-6)} className="absolute inset-0">
            <img
              src={icedLatte}
              alt="Iced latte com gelo e leite cremoso"
              width={493}
              height={1100}
              fetchPriority="high"
              className="animate-focus-in absolute bottom-0 left-1/2 w-[170px] -translate-x-1/2 translate-y-[38%] drop-shadow-2xl [animation-delay:250ms] sm:w-[230px]"
            />
          </div>

          {/* handwritten note */}
          <div className="animate-rise absolute bottom-24 left-0 hidden -rotate-6 text-left [animation-delay:1350ms] md:block">
            <p className="font-serif text-3xl italic text-espresso">torra da casa,</p>
            <p className="font-serif text-3xl italic text-muted-foreground">desde 2019</p>
            <CurlyArrow className="ml-24 mt-1 w-28 text-espresso" />
          </div>

          {/* rotating seal */}
          <div style={depth(14)} className="animate-veil absolute -bottom-2 left-[19%] hidden [animation-delay:1500ms] lg:block">
            <RotatingBadge text="feito à mão • com calma • com amor • " className="size-28 text-espresso">
              <Starburst className="size-9 text-honey" points={10} />
            </RotatingBadge>
          </div>

          {/* sticker card */}
          <div style={depth(12)} className="animate-rise absolute right-0 top-4 hidden [animation-delay:1450ms] sm:block">
            <CurlyArrow className="absolute -left-28 top-16 w-24 -scale-y-100 text-espresso" />
            <div className="relative rotate-6 rounded-3xl border-[2.5px] border-espresso bg-cream p-3 shadow-stamp transition-[rotate,box-shadow] duration-500 ease-brand hover:rotate-0 hover:shadow-stamp-lg">
              <div className="relative grid size-36 place-items-center">
                <Starburst className="animate-spin-slow absolute inset-0 text-honey" points={16} />
                <img src={coldBrew} alt="Cold brew com casca de laranja" width={96} height={96} loading="lazy" decoding="async" className="relative size-24 rounded-full object-cover" />
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 -rotate-6 whitespace-nowrap rounded-full border-2 border-espresso bg-honey px-4 py-1 text-center font-display text-sm leading-tight text-espresso shadow-stamp-sm">
                Cold Brew
                <span className="block text-xs">R$ 16,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
