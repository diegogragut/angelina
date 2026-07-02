import { MenuItem, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'pollo-caribe',
    name: 'Pollo Angelina en Salsa Caribeña',
    description: 'Pechuga de pollo sumamente jugosa bañada en una aromática salsa caribeña tradicional con leche de coco y especias limonenses. Servido con fresca ensalada de kale, garbanzos, dados de mango y yuca dorada al mojo.',
    price: 7000,
    category: 'main',
    badge: 'Especialidad',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pulled-pork',
    name: 'Sándwich Pulled Pork',
    description: 'Carne de cerdo cocida lentamente a baja temperatura por horas, deshilachada y mezclada con nuestra salsa barbacoa artesanal. Servido en pan brioche suave con queso mozzarella derretido, lechuga fresca, tomate y mayonesa de ajo. Acompañado de chips de yuca y camote.',
    price: 6000,
    category: 'main',
    badge: 'Recomendado',
    image: 'https://images.unsplash.com/photo-1527324688151-0e627063f2b1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'queque-amapola',
    name: 'Queque de Semillas de Amapola',
    description: 'Deliciosa rebanada de queque artesanal con semillas de amapola que aportan una textura crocante única. Terminado con un glaseado sutil y balanceado que no empalaga.',
    price: 2500,
    category: 'pastry',
    badge: 'Ideal con café',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'user-maps-1',
    author: 'Raquel Cascante',
    rating: 4,
    text: 'Cafetería agradable con una amplia zona verde. La decoración interior es encantadora. La repostería estuvo muy buena, al igual que los sándwiches y las tostadas. La leche dorada tenía grumos, lo que afectó la calidad. El área verde es bastante grande, pero creemos que necesita más mantenimiento. El servicio fue un poco lento, pero de igual forma fueron muy amables.',
    source: 'Google Maps',
    date: 'Hace 4 días',
    image: 'https://lh3.googleusercontent.com/grass-cs/ANxoTn3m8f294FDr44EEyk5QvVTUJ6QiHZ0bv7KaFINLZFrLw-jqQ3vDbJ6VWwY81rDFxm3UdGdr5aKPcWxLEbNHUizdKk3FMc9Y4WiNGSVLHlwlyyVFAHlDd1eaWvtv603ylNNMjqYZENiC1wY=s1600'
  },
  {
    id: 'user-maps-2',
    author: 'Ariana Montiel',
    rating: 5,
    text: 'La comida estuvo deliciosa. Pedí el pollo Angelina. Todo estuvo increíblemente rico, con un agradable toque de sabor a coco. El postre de milhojas fue lo mejor: delicioso y perfectamente equilibrado, una combinación perfecta de dulce y ácido.',
    source: 'Google Maps',
    date: 'Hace 2 meses',
    image: 'https://lh3.googleusercontent.com/grass-cs/ANxoTn0j4C1xqeEyVkcb7gD8HPB5ipd9rsJiX3jnN6zo93OSbcSe7KBn8kPmtqevkLzi7GUWq-z7TElDuOS8dp_NRj1NLWpYw5pDkPNqhTNj-BkHRIQGjKLtLW6Ui7JonamiyGvOoBVkbdIxuJMb=s1600'
  },
  {
    id: 'user-maps-3',
    author: 'Brandon Dix',
    rating: 5,
    text: 'Un pedacito encantador de Costa Rica. Excelente comida, postres y café. El capuchino y el mocha frío estuvieron excelentes. El queque glaseado de semillas de amapola y limón también estuvo delicioso. Una hermosa vista de las montañas desde el patio abierto y un lindo sendero para caminar que baja hacia la copa del bosque. Mesas de picnic con sombrillas debajo de la terraza. Muy recomendado.',
    source: 'Google Maps',
    date: 'Hace 11 meses',
    image: 'https://lh3.googleusercontent.com/grass-cs/ANxoTn2wRg1P_H1xeEMmFh4qxS2X1WeHWlgKb2IcQAhsGLvuwjIlTxw3u4HgbcsDt55joyaBRZNEFXtHuyboipISgptaUUpxV7M_DXd7os_DMqYiTBalBESD0sUYpQglZHDaX25RvwQ448DQAeU=s1600'
  },
  {
    id: 'user-maps-4',
    author: 'O. Ebanks',
    rating: 5,
    text: 'Me gusta mucho el ambiente de este restaurante. Es casual y relajado, el servicio es excelente y la comida en general es deliciosa. Recomiendo hacer una reservación porque el espacio es limitado. ¡Que lo disfruten!',
    source: 'Google Maps',
    date: 'Hace 4 meses',
    image: 'https://lh3.googleusercontent.com/grass-cs/ANxoTn0OUbJn0ZBA2mh7-zuat3PMKx2_LGmjv5ruLpir44mN04ctiXOTan7QARUhII5j7AUnrPzvIAPfYI_7DWUXXwosLuZSCNjWCT2j1wcWsabasAcXZlhJzrsSE30OnBgBAw45O9KeyTghuKBb=s1600'
  },
  {
    id: 'user-maps-5',
    author: 'Sofía Rojas',
    rating: 5,
    text: 'Hermoso, delicioso, excelente vista. ¡Nos encantó! El gin tonic de uchuva dorada estuvo espectacular.',
    source: 'Google Maps',
    date: 'Hace 4 días',
    image: 'https://lh3.googleusercontent.com/grass-cs/ANxoTn29wuzBHw2pKkw6bRicdTyv3CLH24HPkbAf38DvncOiIBd4OYhghAoKWOOGW2Ks48Yv6_UyuxkZWMBuQ8P23synvkWwOzw9odPtP1uTlQV7UGf86bn4kqRctlerwjC3jaWslhUatW0RS2ye=s1600'
  }
];

export const CAFE_INFO = {
  name: 'Angelina Café',
  location: 'Guayabos de Curridabat, Costa Rica',
  address: 'De Más x Menos Guayabos, 200 metros al este, mano derecha.',
  phone: '7187-9414',
  instagram: '@Angelinacafecr',
  coordinates: {
    lat: 9.9266544,
    lng: -84.0167048
  },
  schedule: {
    monThu: '8:00 AM - 8:00 PM',
    friSat: '8:00 AM - 10:00 PM',
    sun: '8:00 AM - 7:00 PM'
  },
  mapsLink: 'https://maps.app.goo.gl/75vX8dpJrW9Rz5bF6'
};
