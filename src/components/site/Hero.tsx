import { ArrowDownRight, Clock, Coffee, MapPin } from "lucide-react";
import icedLatte from "@/assets/iced-latte.webp";
import coldBrew from "@/assets/sig-coldbrew.webp";
import { Button } from "@/components/ui/button";
import { Bean, CurlyArrow, Logo, Starburst } from "./Decor";

const nav = [
  { href: "#destaques", label: "Destaques" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#visite", label: "Visite" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* ribbon */}
      <div className="bg-espresso text-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 overflow-hidden whitespace-nowrap px-4 py-2 text-[11px] font-semibold tracking-wide sm:gap-6 sm:text-xs">
          <span className="flex items-center gap-1.5"><Coffee className="size-3.5" /> Sua cafeteria de todo dia</span>
          <span className="hidden items-center gap-1.5 sm:flex"><Clock className="size-3.5" /> Aberto todos os dias, 07h — 20h</span>
          <span className="hidden items-center gap-1.5 md:flex"><Starburst className="size-3.5 text-honey" /> Cafés especiais, matcha e cold brew</span>
        </div>
      </div>

      {/* header */}
      <header className="relative z-20 mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 md:grid-cols-[1fr_auto_1fr]">
        <Logo />
        <nav className="hidden items-center gap-2 md:flex">
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

      {/* hero body */}
      <div className="relative mx-auto max-w-6xl px-5 pt-6 text-center md:pt-10">
        <div className="bg-glow pointer-events-none absolute left-1/2 top-40 h-[520px] w-[720px] -translate-x-1/2" />

        <h1 className="animate-rise relative font-display text-[clamp(2.75rem,8vw,6.25rem)] leading-[0.92] tracking-tight text-espresso">
          Café feito para
          <br />
          seus <span className="relative inline-block">
            momentos
            <svg viewBox="0 0 300 20" className="absolute -bottom-2 left-0 h-4 w-full fill-none stroke-honey" aria-hidden>
              <path d="M4 14 C 80 2, 200 2, 296 12" strokeWidth="7" strokeLinecap="round" />
            </svg>
          </span>{" "}
          de todo dia
        </h1>

        <p className="animate-rise mx-auto mt-6 max-w-md text-base text-muted-foreground [animation-delay:120ms] sm:text-lg">
          Grãos torrados toda semana, leite vaporizado com carinho e um cantinho para você ficar.
        </p>

        <div className="animate-rise mt-8 flex justify-center [animation-delay:220ms]">
          <Button variant="honey" size="xl" asChild>
            <a href="#cardapio">
              Ver o cardápio <ArrowDownRight className="size-5!" />
            </a>
          </Button>
        </div>

        {/* floating beans */}
        <Bean className="animate-float right-[6%] top-[62%] w-10 sm:hidden" rotate={35} />
        <Bean className="animate-float left-[4%] top-[46%] w-14 sm:w-20" rotate={-30} />
        <Bean className="animate-float-slow left-[22%] top-[2%] hidden w-8 opacity-90 sm:block" rotate={40} />
        <Bean className="animate-float-slow right-[20%] top-[6%] hidden w-9 sm:block" rotate={-60} />
        <Bean className="animate-float right-[3%] top-[0%] hidden w-7 md:block" rotate={20} />

        {/* product stage */}
        <div className="relative mx-auto mt-10 h-[340px] max-w-4xl sm:h-[420px]">
          <img
            src={icedLatte}
            alt="Iced latte com gelo e leite cremoso"
            width={493}
            height={1100}
            className="animate-rise absolute bottom-0 left-1/2 w-[170px] -translate-x-1/2 translate-y-[38%] drop-shadow-2xl [animation-delay:300ms] sm:w-[230px]"
          />

          {/* handwritten note */}
          <div className="absolute bottom-24 left-0 hidden -rotate-6 text-left md:block">
            <p className="font-serif text-3xl italic text-espresso">torra da casa,</p>
            <p className="font-serif text-3xl italic text-muted-foreground">desde 2019</p>
            <CurlyArrow className="ml-24 mt-1 w-28 text-espresso" />
          </div>

          {/* sticker card */}
          <div className="absolute right-0 top-4 hidden sm:block">
            <CurlyArrow className="absolute -left-28 top-16 w-24 -scale-y-100 text-espresso" />
            <div className="relative rotate-6 rounded-3xl border-[2.5px] border-espresso bg-cream p-3 shadow-stamp transition-transform duration-500 hover:rotate-0">
              <div className="relative grid size-36 place-items-center">
                <Starburst className="animate-spin-slow absolute inset-0 text-honey" points={16} />
                <img src={coldBrew} alt="Cold brew com casca de laranja" className="relative size-24 rounded-full object-cover" />
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 -rotate-6 rounded-full border-2 border-espresso bg-honey whitespace-nowrap px-4 py-1 text-center font-display text-sm leading-tight text-espresso shadow-stamp-sm">
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
