import Notebook1 from "../assets/products/notebook-1.png";
import Notebook2 from "../assets/products/notebook-2.png";
import Notebook3 from "../assets/products/notebook-3.png";
import Notebook4 from "../assets/products/notebook-4.png";
import Notebook5 from "../assets/products/notebook-5.png";
import Notebook6 from "../assets/products/notebook-6.png";

import Smartphones1 from "../assets/products/smartphone-1.png";
import Smartphones2 from "../assets/products/smartphone-2.png";
import Smartphones3 from "../assets/products/smartphone-3.png";
import Smartphones4 from "../assets/products/smartphone-4.png";
import Smartphones5 from "../assets/products/smartphone-5.png";
import Smartphones6 from "../assets/products/smartphone-6.png";

import Audio1 from "../assets/products/audio-1.png";
import Audio2 from "../assets/products/audio-2.png";
import Audio3 from "../assets/products/audio-3.png";
import Audio4 from "../assets/products/audio-4.png";
import Audio5 from "../assets/products/audio-5.png";
import Audio6 from "../assets/products/audio-6.png";

import SmartHome1 from "../assets/products/smarthome-1.png";
import SmartHome2 from "../assets/products/smarthome-2.png";
import SmartHome3 from "../assets/products/smarthome-3.png";
import SmartHome4 from "../assets/products/smarthome-4.png";
import SmartHome5 from "../assets/products/smarthome-5.png";
import SmartHome6 from "../assets/products/smarthome-6.png";

import Games1 from "../assets/products/games-1.png";
import Games2 from "../assets/products/games-2.png";
import Games3 from "../assets/products/games-3.png";
import Games4 from "../assets/products/games-4.png";
import Games5 from "../assets/products/games-5.png";
import Games6 from "../assets/products/games-6.png";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

const products: Product[] = [
  // Notebooks
  {
    id: 1,
    name: "Notebook Dell Inspiron 15",
    price: 3500,
    category: "notebooks",
    image: `${Notebook1}`,
    description: "Notebook com processador Intel Core i5, 8GB de RAM e SSD de 256GB.",
  },
  {
    id: 2,
    name: "Notebook Acer Aspire 5",
    price: 3200,
    category: "notebooks",
    image: `${Notebook2}`,
    description: "Equipado com Intel Core i3, 4GB de RAM e armazenamento de 1TB HDD.",
  },
  {
    id: 3,
    name: "Notebook Lenovo Ideapad",
    price: 2800,
    category: "notebooks",
    image: `${Notebook3}`,
    description: "Tela de 15.6 polegadas, AMD Ryzen 3, 4GB de RAM e SSD de 128GB.",
  },
  {
    id: 4,
    name: "Notebook Samsung Galaxy Book S",
    price: 4000,
    category: "notebooks",
    image: `${Notebook4}`,
    description: "Ultraleve com processador Intel Core i5 e tela touch Full HD.",
  },
  {
    id: 5,
    name: "Notebook Apple MacBook Air",
    price: 7500,
    category: "notebooks",
    image: `${Notebook5}`,
    description: "Processador Apple M1, 8GB de RAM e armazenamento SSD de 256GB.",
  },
  {
    id: 6,
    name: "Notebook HP Pavilion",
    price: 3300,
    category: "notebooks",
    image: `${Notebook6}`,
    description: "Potência e estilo com Intel Core i5, 8GB de RAM e HDD de 1TB.",
  },

  // Periféricos de Games
  {
    id: 7,
    name: "Teclado Mecânico Redragon",
    price: 250,
    category: "Periféricos de games",
    image: `${Games1}`,
    description: "Teclado com switches mecânicos e iluminação RGB personalizável.",
  },
  {
    id: 8,
    name: "Mouse Gamer Logitech G502",
    price: 300,
    category: "Periféricos de games",
    image: `${Games2}`,
    description: "Mouse de alta precisão com sensor Hero 25K e 11 botões programáveis.",
  },
  {
    id: 9,
    name: "Headset Gamer HyperX Cloud Stinger",
    price: 400,
    category: "Periféricos de games",
    image: `${Games3}`,
    description: "Headset leve e confortável com drivers de 50mm e som imersivo.",
  },
  {
    id: 10,
    name: "Cadeira Gamer DT3",
    price: 1200,
    category: "Periféricos de games",
    image: `${Games4}`,
    description: "Design ergonômico com ajustes de altura e apoio para lombar.",
  },
  {
    id: 11,
    name: "Controle Xbox Series",
    price: 400,
    category: "Periféricos de games",
    image: `${Games5}`,
    description: "Controle sem fio com gatilhos táteis e conectividade Bluetooth.",
  },
  {
    id: 12,
    name: "Mousepad Gamer Razer",
    price: 120,
    category: "Periféricos de games",
    image: `${Games6}`,
    description: "Superfície ampla e texturizada para maior precisão nos movimentos.",
  },

  // Celulares e Tablets
  {
    id: 13,
    name: "iPhone 13",
    price: 7000,
    category: "Celulares e Tablets",
    image: `${Smartphones1}`,
    description: "Chip A15 Bionic, câmera dupla e tela Super Retina XDR.",
  },
  {
    id: 14,
    name: "Samsung Galaxy S21",
    price: 5000,
    category: "Celulares e Tablets",
    image: `${Smartphones2}`,
    description: "Processador Exynos 2100, câmera de 108MP e tela AMOLED de 120Hz.",
  },
  {
    id: 15,
    name: "iPad Pro 11",
    price: 8500,
    category: "Celulares e Tablets",
    image: `${Smartphones3}`,
    description: "Tela Liquid Retina, Chip M1 e suporte a Apple Pencil.",
  },
  {
    id: 16,
    name: "Tablet Samsung Galaxy Tab S7",
    price: 4000,
    category: "Celulares e Tablets",
    image: `${Smartphones4}`,
    description: "Tela AMOLED de 120Hz, Snapdragon 865+ e caneta S Pen inclusa.",
  },
  {
    id: 17,
    name: "Xiaomi Redmi Note 10",
    price: 2000,
    category: "Celulares e Tablets",
    image: `${Smartphones5}`,
    description: "Câmera de 48MP, bateria de 5000mAh e tela AMOLED Full HD+.",
  },
  {
    id: 18,
    name: "Motorola Edge 20",
    price: 3500,
    category: "Celulares e Tablets",
    image: `${Smartphones6}`,
    description: "Tela OLED de 144Hz, Snapdragon 778G e câmera tripla de 108MP.",
  },

  // Áudio
  {
    id: 19,
    name: "Fone de Ouvido JBL Tune 500BT",
    price: 250,
    category: "Equipamentos de áudio",
    image: `${Audio1}`,
    description: "Fone de ouvido sem fio com bateria de até 16 horas e som puro JBL.",
  },
  {
    id: 20,
    name: "Caixa de Som Bluetooth JBL Flip 5",
    price: 450,
    category: "Equipamentos de áudio",
    image: `${Audio2}`,
    description: "Compacta e potente, com som estéreo e resistência à água (IPX7).",
  },
  {
    id: 21,
    name: "Fone de Ouvido Sony WH-1000XM4",
    price: 1200,
    category: "Equipamentos de áudio",
    image: `${Audio6}`,
    description: "Cancelamento de ruído líder da categoria e qualidade de som superior.",
  },
  {
    id: 22,
    name: "Soundbar Samsung HW-T450",
    price: 800,
    category: "Equipamentos de áudio",
    image: `${Audio4}`,
    description: "Sistema de som 2.1 canais com subwoofer para graves poderosos.",
  },
  {
    id: 23,
    name: "Home Theater LG XBOOM",
    price: 1500,
    category: "Equipamentos de áudio",
    image: `${Audio5}`,
    description: "Sistema de áudio com 5.1 canais e conectividade Bluetooth.",
  },
  {
    id: 24,
    name: "Fone de Ouvido Bose QuietComfort 35 II",
    price: 1300,
    category: "Equipamentos de áudio",
    image: `${Audio3}`,
    description: "Cancelamento de ruído avançado e som equilibrado em todas as frequências.",
  },

  // Smart Home
  {
    id: 25,
    name: "Amazon Echo Dot 4ª Geração",
    price: 300,
    category: "Smart Home",
    image: `${SmartHome1}`,
    description: "Assistente virtual Alexa com design esférico e som aprimorado.",
  },
  {
    id: 26,
    name: "Google Nest Hub",
    price: 600,
    category: "Smart Home",
    image: `${SmartHome2}`,
    description: "Tela inteligente com assistente Google e controle de dispositivos.",
  },
  {
    id: 27,
    name: "Câmera de Segurança Xiaomi Mi Home",
    price: 250,
    category: "Smart Home",
    image: `${SmartHome4}`,
    description: "Câmera Wi-Fi com visão noturna e armazenamento na nuvem.",
  },
  {
    id: 28,
    name: "Interruptor Inteligente Sonoff",
    price: 100,
    category: "Smart Home",
    image: `${SmartHome5}`,
    description: "Controle de iluminação por aplicativo ou comando de voz.",
  },
  {
    id: 29,
    name: "Fechadura Digital Intelbras FR 320",
    price: 800,
    category: "Smart Home",
    image: `${SmartHome6}`,
    description: "Fechadura com biometria e senha numérica para maior segurança.",
  },
  {
    id: 30,
    name: "Lâmpada Inteligente Philips Hue",
    price: 200,
    category: "Smart Home",
    image: `${SmartHome3}`,
    description: "Controle de cores e brilho por aplicativo ou assistente virtual.",
  },
];
  
export default products;
  