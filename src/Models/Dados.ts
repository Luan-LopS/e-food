import sushi from '../Assets/image/restaurent/imagem.png'
import camarao from '../Assets/image/restaurent/camarao.png'
import pizza  from  '../Assets/image/restaurent/pizza.png'

export interface FoodItems {
    id: number
    title: string
    description: string
    price: number
    image: string
}

export interface RestaurentModel {
    id: number
    title: string
    description: string
    image: string
    rating: number
    link: string
    type: string,
    emphasis: boolean,
    menu: FoodItems[]
}

export const restaurents: RestaurentModel[] = [
    {
      "id": 1,
      "title": "Hioki Sushi",
      "image": sushi,
      "description": "Descubra o sabor da autêntica culinária japonesa no conforto de casa! Sushis frescos, sashimis selecionados e pratos quentes preparados com cuidado chegam até você com rapidez, qualidade e embalagens eficientes.",
      "link": "Hioki-Sushi",
      "type": "Japonesa",
      "rating": 4.9,
      "emphasis": true,
      "menu": [
        {
          "id": 101,
          "title": "Sunomono",
          "price": 14.90,
          "image": sushi,
          "description": "Tradicional salada japonesa feita com pepino finamente fatiado, temperado com vinagre suave, gergelim, um toque adocicado, efrescante e leve."
        },
        {
          "id": 102,
          "title": "Guioza",
          "price": 22.90,
          "image": sushi,
          "description": "Guiozas artesanais recheadas com carne e legumes, seladas na chapa e cozidas ao vapor para manter suculência. Acompanhadas de molho especial, textura e tradição oriental."
        },
        {
          "id": 103,
          "title": "Sashimi de Salmão",
          "price": 39.90,
          "image": sushi,
          "description": "Fatias de salmão fresco cortadas no ponto ideal para realçar textura e sabor. Um prato clássico que proporciona experiência pura e leve, perfeito para quem aprecia de alta qualidade."
        },
        {
          "id": 104,
          "title": "Combinado 20 peças",
          "price": 69.90,
          "image": sushi,
          "description": "Seleção completa com sushis, sashimis e peças variadas, combinando frescor e variedade. Ideal para quem busca explorar diferentes sabores e texturas da culinária japonesa."
        },
        {
          "id": 105,
          "title": "Sashimi de Salmão",
          "price": 39.90,
          "image": sushi,
          "description": "Fatias de salmão fresco cortadas no ponto ideal para realçar textura e sabor. Um prato clássico que proporciona experiência pura e leve, perfeito para quem aprecia de alta qualidade."
        },
        {
          "id": 106,
          "title": "Combinado 20 peças",
          "price": 69.90,
          "image": sushi,
          "description": "Seleção completa com sushis, sashimis e peças variadas, combinando frescor e variedade. Ideal para quem busca explorar diferentes sabores e texturas da culinária japonesa."
        }
      ]
    },

    {
      "id": 2,
      "title": "La Dolce Vita Trattoria",
      "image": camarao,
      "description": "A La Dolce Vita traz o melhor da culinária italiana até você. Massas artesanais, risotos cremosos e pizzas saborosas chegam quentinhos e bem embalados, oferecendo praticidade e uma experiência cheia de tradição.",
      "link": "La-Dolce-Vita-Trattoria",
      "type": "Italiana",
      "rating": 4.4,
      "emphasis": false,
      "menu": [
        {
          "id": 301,
          "title": "Spaghetti Carbonara",
          "price": 49.90,
          "image": pizza,
          "description": "Spaghetti cozido no ponto ideal, envolvido em molho carbonara clássico feito com ovos, pancetta, queijo e pimenta-do-reino. Cremoso, aromático e tradicional."
        },
        {
          "id": 302,
          "title": "Fettuccine Alfredo",
          "price": 44.90,
          "image": camarao,
          "description": "Fettuccine artesanal servido com molho Alfredo cremoso preparado com manteiga, creme de leite e parmesão. Uma combinação suave e marcante, que entrega sabor rico e textura."
        },
        {
          "id": 401,
          "title": "Risoto de Camarão",
          "price": 59.90,
          "image": camarao,
          "description": "Risoto preparado com arroz arbóreo cozido lentamente em caldo aromático e finalizado com camarões suculentos. Uma experiência refinada com sabores intensos e marcantes."
        }
      ]
    },

    {
      "id": 3,
      "title": "La Dolce Vita Trattoria",
      "image": camarao,
      "description": "Sabores clássicos da culinária italiana preparados com ingredientes selecionados e técnicas tradicionais. Massas frescas, molhos encorpados e receitas autênticas entregam qualidade e uma experiência irresistível.",
      "link": "La-Dolce-Vita-Trattoria",
      "type": "Italiana",
      "rating": 4.9,
      "emphasis": false,
      "menu": [
        {
          "id": 303,
          "title": "Lasagna Bolonhesa",
          "price": 52.90,
          "image": camarao,
          "description": "Camadas de massa artesanal com molho bolonhesa encorpado e queijo derretido. A receita clássica italiana combina textura, sabor e aconchego, tornando a lasanha escolha certa."
        },
        {
          "id": 304,
          "title": "Penne ao Pesto",
          "price": 42.90,
          "image": camarao,
          "description": "Penne al dente misturado com pesto tradicional de manjericão, azeite, pinoli e queijo. Aromático e leve, traz equilíbrio perfeito entre frescor e intensidade."
        },
        {
          "id": 402,
          "title": "Pizza Margherita",
          "price": 39.90,
          "image": camarao,
          "description": "Pizza clássica com molho de tomate fresco, mussarela derretida e folhas de manjericão. Simples, aromática e saborosa, representa a tradição italiana em sua forma mais autêntica."
        }
      ]
    },

    {
      "id": 4,
      "title": "La Dolce Vita Trattoria",
      "image": camarao,
      "description": "Culinária italiana autêntica entregue com sabor marcante e praticidade. Pratos preparados com carinho, ingredientes selecionados e embalagens cuidadosas garantem uma refeição deliciosa e cheia de tradição.",
      "link": "La-Dolce-Vita-Trattoria",
      "type": "Italiana",
      "rating": 4.3,
      "emphasis": false,
      "menu": [
        {
          "id": 501,
          "title": "Parmegiana",
          "price": 54.90,
          "image": camarao,
          "description": "Clássico filé à parmegiana empanado, coberto com molho de tomate e queijo gratinado. Combina crocância, sabor e cremosidade, entregando uma refeição cheia de tradição."
        }
      ]
    },

    {
      "id": 5,
      "title": "La Dolce Vita Trattoria",
      "image": camarao,
      "description": "Massas artesanais, risotos cremosos e sobremesas italianas entregues com rapidez e qualidade. Cada receita carrega tradição, técnica e sabor, proporcionando refeições marcantes e experiências especiais para você e sua familia.",
      "link": "La-Dolce-Vita-Trattoria",
      "type": "Italiana",
      "rating": 4.5,
      "emphasis": false,
      "menu": [
        {
          "id": 601,
          "title": "Tiramisù",
          "price": 24.90,
          "image": camarao,
          "description": "Sobremesa clássica feita com creme de mascarpone, biscoitos embebidos em café forte e toque de cacau. Leve, elegante e equilibrada, oferece um sabor sofisticado."
        },
        {
          "id": 602,
          "title": "Panna Cotta",
          "price": 19.90,
          "image": camarao,
          "description": "Panna cotta cremosa preparada com creme fresco e finalizada com calda de frutas vermelhas. Delicada e refrescante, entrega textura suave e sabor levemente adocicado."
        }
      ]
    },

    {
      "id": 6,
      "title": "La Dolce Vita Trattoria",
      "image": camarao,
      "description": "Receitas especiais do chef, preparadas com ingredientes selecionados e técnicas tradicionais. Sabores marcantes, molhos intensos e pratos cuidadosamente elaborados transformam sua refeição em uma experiência única.",
      "link": "La-Dolce-Vita-Trattoria",
      "type": "Italiana",
      "rating": 4.7,
      "emphasis": false,
      "menu": [
        {
          "id": 701,
          "title": "Ravioli de Ricota",
          "price": 57.90,
          "image": camarao,
          "description": "Raviolis artesanais recheados com ricota temperada, servidos com molho tradicional. Massas frescas, textura delicada e sabores equilibrados criam um prato marcante perfeito."
        },
        {
          "id": 702,
          "title": "Gnocchi ao Sugo",
          "price": 48.90,
          "image": camarao,
          "description": "Nhoque artesanal de batata servido com molho sugo fresco e aromático. Combina leveza e sabor autêntico, oferecendo uma refeição tradicional."
        },
        {
          "id": 703,
          "title": "Ravioli de Ricota",
          "price": 57.90,
          "image": camarao,
          "description": "Raviolis artesanais recheados com ricota temperada, servidos com molho tradicional. Massas frescas, textura delicada e sabores equilibrados criam um prato marcante perfeito."
        },
        {
          "id": 704,
          "title": "Gnocchi ao Sugo",
          "price": 48.90,
          "image": camarao,
          "description": "Nhoque artesanal de batata servido com molho sugo fresco e aromático. Combina leveza e sabor autêntico, oferecendo uma refeição tradicional."
        },
        {
          "id": 705,
          "title": "Ravioli de Ricota",
          "price": 57.90,
          "image": camarao,
          "description": "Raviolis artesanais recheados com ricota temperada, servidos com molho tradicional. Massas frescas, textura delicada e sabores equilibrados criam um prato marcante perfeito."
        },
        {
          "id": 706,
          "title": "Gnocchi ao Sugo",
          "price": 48.90,
          "image": camarao,
          "description": "Nhoque artesanal de batata servido com molho sugo fresco e aromático. Combina leveza e sabor autêntico, oferecendo uma refeição tradicional."
        }
      ]
    }
  ]