import Notebook from "../assets/product1.png"
import Smartphones from "../assets/iphone.png"
import Audio from "../assets/headphone.png"
import SmartHome from "../assets/smarthome.png"
import Games from "../assets/teclado.png"

// src/data/products.ts
export interface Product {
  id: number
  name: string
  price: number
  category: string
  image: string
}
  
  const products: Product[] = [
    // Notebooks
    {
      id: 1,
      name: "Notebook Dell Inspiron 15",
      price: 3500,
      category: "notebooks",
      image: `${Notebook}`, // Imagem de notebook
    },
    {
      id: 2,
      name: "Notebook Acer Aspire 5",
      price: 3200,
      category: "notebooks",
      image: `${Notebook}`, // Imagem de notebook
    },
    {
      id: 3,
      name: "Notebook Lenovo Ideapad",
      price: 2800,
      category: "notebooks",
      image: `${Notebook}`, // Imagem de notebook
    },
    {
      id: 4,
      name: "Notebook Samsung Galaxy Book S",
      price: 4000,
      category: "notebooks",
      image: `${Notebook}`, // Imagem de notebook
    },
    {
      id: 5,
      name: "Notebook Apple MacBook Air",
      price: 7500,
      category: "notebooks",
      image: `${Notebook}`, // Imagem de notebook
    },
    {
      id: 6,
      name: "Notebook HP Pavilion",
      price: 3300,
      category: "notebooks",
      image: `${Notebook}`, // Imagem de notebook
    },
  
    // Periféricos de games
    {
      id: 7,
      name: "Teclado Mecânico Redragon",
      price: 250,
      category: "Periféricos de games",
      image: `${Games}`, // Teclado mecânico
    },
    {
      id: 8,
      name: "Mouse Gamer Logitech G502",
      price: 300,
      category: "Periféricos de games",
      image: `${Games}`, // Mouse gamer
    },
    {
      id: 9,
      name: "Headset Gamer HyperX Cloud Stinger",
      price: 400,
      category: "Periféricos de games",
      image: `${Games}`, // Headset gamer
    },
    {
      id: 10,
      name: "Cadeira Gamer DT3",
      price: 1200,
      category: "Periféricos de games",
      image: `${Games}`, // Cadeira gamer
    },
    {
      id: 11,
      name: "Controle Xbox Series",
      price: 400,
      category: "Periféricos de games",
      image: `${Games}`, // Controle Xbox
    },
    {
      id: 12,
      name: "Mousepad Gamer Razer",
      price: 120,
      category: "Periféricos de games",
      image: `${Games}`, // Mousepad gamer
    },
  
    // Celulares e Tablets
    {
      id: 13,
      name: "iPhone 13",
      price: 7000,
      category: "Celulares e Tablets",
      image: `${Smartphones}`, // iPhone 13
    },
    {
      id: 14,
      name: "Samsung Galaxy S21",
      price: 5000,
      category: "Celulares e Tablets",
      image: `${Smartphones}`, // Samsung Galaxy S21
    },
    {
      id: 15,
      name: "iPad Pro 11",
      price: 8500,
      category: "Celulares e Tablets",
      image: `${Smartphones}`, // iPad Pro 11
    },
    {
      id: 16,
      name: "Tablet Samsung Galaxy Tab S7",
      price: 4000,
      category: "Celulares e Tablets",
      image: `${Smartphones}`, // Samsung Galaxy Tab
    },
    {
      id: 17,
      name: "Xiaomi Redmi Note 10",
      price: 2000,
      category: "Celulares e Tablets",
      image: `${Smartphones}`, // Xiaomi Redmi Note
    },
    {
      id: 18,
      name: "Motorola Edge 20",
      price: 3500,
      category: "Celulares e Tablets",
      image: `${Smartphones}`, // Motorola Edge
    },
  
    // Smart Home
    {
      id: 19,
      name: "Echo Dot 4ª Geração",
      price: 400,
      category: "Smart Home",
      image: `${SmartHome}`, // Echo Dot
    },
    {
      id: 20,
      name: "Google Nest Mini",
      price: 350,
      category: "Smart Home",
      image: `${SmartHome}`, // Google Nest
    },
    {
      id: 21,
      name: "Lâmpada Inteligente Philips Hue",
      price: 250,
      category: "Smart Home",
      image: `${SmartHome}`, // Lâmpada inteligente
    },
    {
      id: 22,
      name: "Câmera de Segurança Blink",
      price: 300,
      category: "Smart Home",
      image: `${SmartHome}`, // Câmera Blink
    },
    {
      id: 23,
      name: "Tomada Inteligente Positivo",
      price: 150,
      category: "Smart Home",
      image: `${SmartHome}`, // Tomada inteligente
    },
    {
      id: 24,
      name: "Sensor de Movimento Inteligente",
      price: 200,
      category: "Smart Home",
      image: `${SmartHome}`, // Sensor de movimento
    },
  
    // Equipamentos de áudio
    {
      id: 25,
      name: "Fone de Ouvido JBL",
      price: 300,
      category: "Equipamentos de áudio",
      image: `${Audio}`, // Fone de ouvido JBL
    },
    {
      id: 26,
      name: "Caixa de Som Bluetooth JBL",
      price: 500,
      category: "Equipamentos de áudio",
      image: `${Audio}`, // Caixa de som JBL
    },
    {
      id: 27,
      name: "Headset Bose QuietComfort",
      price: 1200,
      category: "Equipamentos de áudio",
      image: `${Audio}`, // Headset Bose
    },
    {
      id: 28,
      name: "Microfone Condensador Blue Yeti",
      price: 600,
      category: "Equipamentos de áudio",
      image: `${Audio}`, // Microfone Blue Yeti
    },
    {
      id: 29,
      name: "Soundbar Samsung",
      price: 800,
      category: "Equipamentos de áudio",
      image: `${Audio}`, // Soundbar Samsung
    },
    {
      id: 30,
      name: "Fone de Ouvido Sony WH-1000XM4",
      price: 1400,
      category: "Equipamentos de áudio",
      image: `${Audio}`, // Fone Sony WH-1000XM4
    },
  ];
  
export default products;
  