import { Clock, Heart, Instagram, MapPin, Plus } from "lucide-react";
import icedLatte from "@/assets/iced-latte.webp";
import { Button } from "@/components/ui/button";
import { Bean, CurlyArrow, Logo, Starburst } from "./Decor";

export function Closing() {
  return (
    <section id="visite" className="bg-sunset relative overflow-hidden pt-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="reveal relative font-serif text-[clamp(3.5rem,11vw,9rem)] italic leading-[0.9] tracking-tight text-espresso">
          Obrigado <span className="text-honey">pela</span> visita.
          <span className="absolute -top-4 right-[8%] hidden rotate-12 items-center gap-2 rounded-full bg-cream py-1.5 pl-1.5 pr-4 font-sans text-base not-italic leading-normal tracking-normal text-espresso shadow-soft sm:inline-flex">
            <span className="grid size-8 place-items-center rounded-full bg-honey"><Heart className="size-4 fill-current" /></span>
            Volte sempre
          </span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="absolute -bottom-6 left-[22%] hidden -rotate-6 items-center gap-2 rounded-full bg-cream py-1.5 pl-1.5 pr-4 font-sans text-base not-italic leading-normal tracking-normal text-espresso shadow-soft transition-transform hover:rotate-0 sm:inline-flex"
          >
            <span className="grid size-8 place-items-center rounded-full bg-honey"><Plus className="size-4" /></span>
            Siga a gente
          </a>
        </h2>

        <div className="mt-20 grid items-end gap-12 pb-0 md:grid-cols-[1.1fr_1fr]">
          <div className="reveal pb-16">
            <p className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] italic leading-tight text-honey">
              Pronto para o seu
              <br />
              próximo café?
            </p>
            <CurlyArrow className="mt-2 w-24 rotate-12 text-honey" />

            <ul className="mt-6 space-y-3 text-espresso">
              <li className="flex items-center gap-3"><MapPin className="size-5 shrink-0" /> Rua das Laranjeiras, 214 — Vila Madalena, São Paulo</li>
              <li className="flex items-center gap-3"><Clock className="size-5 shrink-0" /> Todos os dias, das 07h às 20h</li>
              <li className="flex items-center gap-3"><Instagram className="size-5 shrink-0" /> @brumacafe</li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="espresso" size="xl" asChild>
                <a href="https://maps.google.com/?q=Vila+Madalena+São+Paulo" target="_blank" rel="noreferrer">
                  Como chegar <MapPin className="size-5!" />
                </a>
              </Button>
              <Button variant="pill" size="xl" asChild>
                <a href="#cardapio">Ver cardápio</a>
              </Button>
            </div>
          </div>

          <div className="reveal relative mx-auto h-[380px] w-full max-w-md sm:h-[460px]">
            <div className="absolute inset-x-6 bottom-0 top-10 rotate-3 rounded-t-[3rem] border-[2.5px] border-b-0 border-espresso bg-cream" />
            <Starburst className="animate-spin-slow absolute right-4 top-0 size-24 text-honey" points={16} />
            <span className="absolute right-10 top-8 rotate-12 font-display text-sm leading-tight text-espresso">
              feito
              <br />
              com amor
            </span>
            <img src={icedLatte} alt="" aria-hidden loading="lazy" className="absolute bottom-0 left-1/2 w-[180px] -translate-x-1/2 drop-shadow-2xl sm:w-[210px]" />
            <Bean className="animate-float left-2 top-24 w-14" rotate={-20} />
            <Bean className="animate-float-slow bottom-24 right-2 w-10" rotate={50} />
          </div>
        </div>
      </div>

      <footer className="relative z-10 bg-espresso text-cream">
        <div className="mx-auto grid max-w-6xl gap-8 border-b border-cream/20 px-5 py-12 sm:grid-cols-3">
          <div><p className="font-display text-3xl">Bruma Café</p><p className="mt-3 max-w-xs text-sm text-cream/80">Uma pausa boa. Uma xícara feita com calma. Seu próximo encontro é aqui.</p></div>
          <nav aria-label="Navegação do rodapé" className="flex flex-col items-start gap-3">
            <p className="font-display text-xl text-honey">Explore a Bruma</p>
            <a className="hover:underline" href="#ritual">Nosso ritual</a>
            <a className="hover:underline" href="#cardapio">Cardápio</a>
            <a className="hover:underline" href="#destaques">Assinaturas</a>
          </nav>
          <div><p className="font-display text-xl text-honey">Fique mais um pouco</p><p className="mt-3 text-sm">São Paulo · Vila Madalena</p><p className="mt-2 text-sm text-cream/80">Todos os dias · 07h às 20h</p><a href="#inicio" className="mt-4 inline-flex items-center gap-2 text-sm hover:underline">Voltar ao início ↑</a></div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm sm:flex-row">
          <Logo className="text-cream [&_path]:stroke-espresso" />
          <p className="opacity-80">© {new Date().getFullYear()} Bruma Café · Feito com grãos e carinho</p>
        </div>
      </footer>
    </section>
  );
}
