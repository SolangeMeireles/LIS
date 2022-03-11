const/**
 * Foi criado uma constante que são guardada as informações em um JSON do javascript com propriedades id, nome e description.
 * Através dos link do bootstrap pode interligar de maneira automaticas as linguagens ao html.
 */
console.log('teste');
const dataset = [
  {
    id: 1,
    name: 'Hambúrguer',
    description:
      'Um hambúrguer é um sanduíche que consiste em um ou mais hambúrgueres cozidos de carne moída, geralmente carne bovina, colocados dentro de um pão ou pão fatiado. O hambúrguer pode ser frito, grelhado, defumado ou grelhado',
    preco: 8.0,
    image: 'imagem/hamburguer.jpeg',
  },
  {
    id: 2,
    name: 'Sanduíche',
    description:
      'O sanduíche (do inglês sandwich), também popularmente chamado de sanduba (português brasileiro) ou sandes (português europeu), é um tipo de alimento que consiste em duas fatias de um pão inteiro, entre as quais é colocada carne, queijo ou outro tipo de alimento.Os sanduíches são, habitualmente, consumidos ao lanche ou como uma refeição rápida, durante o almoço ou o jantar.',
    preco: 8.5,
    image: 'imagem/sanduiche.jpeg',
  },
  {
    id: 3,
    name: 'Café',
    description:
      'O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalmente quente, mas também pode ser consumido gelado. O café é um estimulante, por possuir cafeína — geralmente 80 a 140 mg para cada 207 ml dependendo do método de preparação.',
    preco: 1.5,
    image: 'imagem/cafe.jpeg',
  },
  {
    id: 4,
    name: 'Suco',
    description:
      'Um suco (português brasileiro) ou sumo (português europeu) é uma bebida produzida do líquido extraído de frutos. Além dos frutos, sucos também podem ser obtidos pelo processamento de outras partes dos vegetais, tais como folhas, talos ou raízes.',
    preco: 2.0,
    image: 'imagem/suco.jpeg',
  },
];

/**
 * Exportação padrão do módulo dataset.
 */
export default dataset;
