export type MenuItem = { name: string; description: string; price: number };
export type MenuCategory = {
  id: string;
  title: string;
  tagline: string;
  hours: string;
  items: MenuItem[];
};

export const formatPrice = (value: number) =>
  `R$ ${value.toFixed(2).replace(".", ",")}`;

export const menu: MenuCategory[] = [
  {
    id: "classicos",
    title: "Clássicos quentes",
    tagline: "O ritual de sempre, feito com capricho.",
    hours: "07h — 18h",
    items: [
      { name: "Espresso", description: "Curto, encorpado, crema dourada.", price: 7 },
      { name: "Americano", description: "Espresso alongado com água quente.", price: 9 },
      { name: "Cappuccino", description: "Espresso, leite vaporizado e espuma.", price: 13 },
      { name: "Flat White", description: "Dose dupla com leite sedoso.", price: 14 },
      { name: "Latte", description: "Suave, cremoso e reconfortante.", price: 13 },
    ],
  },
  {
    id: "especiais",
    title: "Especiais da casa",
    tagline: "Receitas que só existem aqui.",
    hours: "08h — 18h",
    items: [
      { name: "Latte de mel e aveia", description: "Mel de laranjeira e bebida de aveia.", price: 18 },
      { name: "Latte de doce de leite", description: "Doce de leite artesanal e canela.", price: 18 },
      { name: "Mocha 70%", description: "Cacau 70% e espresso da casa.", price: 17 },
      { name: "Latte de baunilha", description: "Fava de baunilha de verdade.", price: 16 },
      { name: "Chocolate quente", description: "Denso, cremoso, com chantilly.", price: 15 },
    ],
  },
  {
    id: "gelados",
    title: "Gelados",
    tagline: "Para os dias mais ensolarados.",
    hours: "09h — 20h",
    items: [
      { name: "Cold Brew", description: "Extração a frio por 18 horas.", price: 16 },
      { name: "Iced Latte", description: "Espresso, leite gelado e gelo.", price: 15 },
      { name: "Americano gelado", description: "Leve, refrescante e intenso.", price: 12 },
      { name: "Espresso tônica", description: "Tônica, espresso e casca de laranja.", price: 17 },
      { name: "Mocha gelado", description: "Cacau, espresso e leite gelado.", price: 18 },
    ],
  },
  {
    id: "matcha",
    title: "Matcha",
    tagline: "Suave, terroso e fácil de amar.",
    hours: "09h — 18h",
    items: [
      { name: "Matcha clássico", description: "Batido no chasen, puro e vibrante.", price: 14 },
      { name: "Matcha latte", description: "Matcha cerimonial com leite.", price: 17 },
      { name: "Matcha gelado", description: "Camadas de matcha, leite e gelo.", price: 18 },
      { name: "Matcha de baunilha", description: "Um toque doce de baunilha.", price: 19 },
      { name: "Matcha com morango", description: "Purê de morango fresco no fundo.", price: 21 },
    ],
  },
  {
    id: "filtrados",
    title: "Métodos filtrados",
    tagline: "Para quando você tem tempo de sobra.",
    hours: "08h — 15h",
    items: [
      { name: "Coado da casa", description: "Nosso blend no filtro de pano.", price: 10 },
      { name: "V60", description: "Grão do dia, notas florais.", price: 16 },
      { name: "Aeropress", description: "Limpo, doce e aveludado.", price: 15 },
      { name: "Prensa francesa", description: "Corpo cheio e textura densa.", price: 14 },
      { name: "Chemex (2 pessoas)", description: "Para dividir sem pressa.", price: 28 },
    ],
  },
  {
    id: "sem-cafe",
    title: "Sem café",
    tagline: "Delícias para quem quer variar.",
    hours: "07h — 20h",
    items: [
      { name: "Chai latte", description: "Especiarias, gengibre e leite.", price: 16 },
      { name: "Chá de hibisco gelado", description: "Hibisco, maçã e hortelã.", price: 11 },
      { name: "Limonada de capim-santo", description: "Cítrica e perfumada.", price: 12 },
      { name: "Suco de laranja", description: "Espremido na hora.", price: 12 },
    ],
  },
  {
    id: "acompanhar",
    title: "Para acompanhar",
    tagline: "Assados do dia, saídos do forno.",
    hours: "07h — 18h",
    items: [
      { name: "Pão de queijo", description: "Porção com 4, queijo canastra.", price: 8 },
      { name: "Croissant amanteigado", description: "Massa folhada, manteiga francesa.", price: 14 },
      { name: "Bolo de cenoura", description: "Com cobertura de brigadeiro.", price: 15 },
      { name: "Cookie de chocolate", description: "Crocante por fora, macio por dentro.", price: 11 },
      { name: "Torrada de fermentação natural", description: "Manteiga, mel e flor de sal.", price: 19 },
    ],
  },
  {
    id: "graos",
    title: "Grãos para levar",
    tagline: "Leve o café que você ama para casa. 250 g.",
    hours: "07h — 20h",
    items: [
      { name: "Blend da casa", description: "Chocolate, caramelo e castanhas.", price: 49 },
      { name: "Sazonal", description: "Microlote que muda a cada estação.", price: 59 },
      { name: "Origem única Mantiqueira", description: "Frutas amarelas e mel.", price: 69 },
      { name: "Descafeinado", description: "Todo o sabor, sem a cafeína.", price: 55 },
    ],
  },
];
