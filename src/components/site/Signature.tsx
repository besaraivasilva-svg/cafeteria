import cappuccino from "@/assets/sig-cappuccino.webp";
import matcha from "@/assets/sig-matcha.webp";
import coldBrew from "@/assets/sig-coldbrew.webp";
import { formatPrice } from "@/lib/menu";
import { cn } from "@/lib/utils";
import { Starburst } from "./Decor";

const picks = [
  { img: cappuccino, name: "Cappuccino da casa", desc: "Dose dupla do nosso blend e espuma aveludada.", price: 13, tilt: "-rotate-3", tag: "Mais pedido" },
  { img: matcha, name: "Matcha gelado", desc: "Matcha cerimonial em camadas com leite gelado.", price: 18, tilt: "rotate-2 md:translate-y-8", tag: "Novo" },
  { img: coldBrew, name: "Cold Brew laranja", desc: "18 horas de extração a frio e um twist cítrico.", price: 16, tilt: "-rotate-2", tag: "Favorito" },
];

export function Signature() {
  return (
    <section id="destaques" className="grain relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="relative font-display text-[clamp(2.25rem,5.5vw,4rem)] leading-[0.95] text-espresso">
            Os que fazemos
            <br />
            um pouco{" "}
            <span className="relative inline-block">
              diferente
              <span className="absolute -right-6 -top-7 rotate-12 rounded-full border-2 border-espresso bg-honey px-3 py-1 font-sans text-[10px] font-extrabold uppercase tracking-widest text-espresso shadow-stamp-sm sm:-right-10">
                Assinatura
              </span>
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-muted-foreground">
            Três receitas que viraram a cara da Bruma. Peça uma vez, volte sempre.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {picks.map((p, i) => (
            <article
              key={p.name}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={cn(
                "reveal group relative rounded-[2rem] border-[2.5px] border-espresso bg-cream p-3 shadow-stamp transition-transform duration-500 hover:rotate-0 hover:-translate-y-2",
                p.tilt,
              )}
            >
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img src={p.img} alt={p.name} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-cream px-3 py-1 text-xs font-bold text-espresso">{p.tag}</span>
              </div>
              <div className="flex items-start justify-between gap-3 px-2 pb-2 pt-4">
                <div className="min-w-0">
                  <h3 className="font-display text-2xl text-espresso">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <div className="relative grid size-16 shrink-0 place-items-center">
                  <Starburst className="absolute inset-0 text-honey transition-transform duration-700 group-hover:rotate-45" points={12} />
                  <span className="relative font-display text-xs leading-none text-espresso">{formatPrice(p.price)}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
