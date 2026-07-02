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
    author: 'Mariela Castro',
    rating: 5,
    text: 'La repostería fina de este lugar es de otro mundo. Pedimos un queque espectacular y el café filtrado estaba en su punto perfecto. Además, el diseño y el ambiente fresco de la terraza hacen que uno quiera quedarse toda la tarde.',
    source: 'Google Maps',
    date: 'Hace 3 días',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFGKYKjJB7PA7ch_z2-OMN_N1nQR1jZcSqwOr_0kslTXK9yZC6kjjLJAVieD_x-UIIv9r-3hadC09OWjU7wW5jaxlPRSBn9TdPThb1YzANmGSrszVAFDjhBThb2cH1UY_6YT8Rx80mTkNy9=s1600'
  },
  {
    id: 'user-maps-2',
    author: 'Carolina Brenes',
    rating: 5,
    text: 'Un lugar precioso, la terraza es súper fresca y tranquila en Guayabos. Los platos tienen una presentación impecable y un sabor espectacular. ¡La atención es de primera calidad!',
    source: 'Google Maps',
    date: 'Hace 5 días',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH0CwoKW1-B_go-JSdur3qu11M3I0Fyh_y95sUo-P3myCdGFTnKzRjBrirD0ZVohDUsD8npbONoTtxrcaUmNPoJ74qbr-5q14Nj1qbeVyI4abeHMXpYv9imje9nyZA7gvqIdMXaaFdflBo=s1600'
  },
  {
    id: 'user-maps-3',
    author: 'José Daniel Mora',
    rating: 5,
    text: 'El Pollo Angelina en Salsa Caribeña es una completa delicia. Todo sumamente fresco y lleno de sabor artesanal. Definitivamente se ha convertido en mi cafetería favorita para almorzar.',
    source: 'Google Maps',
    date: 'Hace 1 semana',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGQFyramMuIh0XLnXUbJ0EZsb1raKVqyzuF69MGFQsKW6tG8ZtSg6YEBVo7lmG7Vk6s1UCcf8ZgACpL89k4TeK5rL_btwap3sJwUyc7KCsCQ2e7YnLR1AdoGkgWPHf7O9dRET83s6W3pR1F=s1600'
  },
  {
    id: 'user-maps-4',
    author: 'Andrés Vargas',
    rating: 5,
    text: 'Excelente café de especialidad preparado a la perfección. Las opciones para brunchear o pasar un rato agradable son deliciosas. El ambiente abierto de la terraza es verdaderamente inigualable.',
    source: 'Google Maps',
    date: 'Hace 2 semanas',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHZP-dK4OlKI7WdY4-s_zR2gQXiNUyAYDz06s0ZKaFniHJE-QcuyCqqm8hBGnV3rP8JwwdF4r-QyQ6BppTDagXhuAAEY2uuACZGDbXsQs_zl2B4xVwQDB0KoL_q7RiHN3crP2m-O6NsNhMW=s1600'
  },
  {
    id: 'user-maps-5',
    author: 'Valeria Solano',
    rating: 5,
    text: 'La terraza al aire libre es súper acogedera e iluminada. Ideal para disfrutar un brunch dominical delicioso o trabajar un rato sintiendo la brisa fresca de Guayabos.',
    source: 'Google Maps',
    date: 'Hace 2 semanas',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH1MY3p48gvdSTHZ7emRsOzokHrtOy_Z5XTy8KiWtg3PSwn1P4gcw2sFU9j_l5C45cwAsa1WFMvPKtyYLCe4XbQxh7-bmLhtNPsbm_fTTnugYp_NZ0hzpkpqwtJF55IanXWag-8by1T724K=s1600'
  },
  {
    id: 'user-maps-6',
    author: 'Eduardo Castro',
    rating: 5,
    text: 'Un café de especialidad increíble servido con un esmero impecable. Las tazas, la vajilla y cada detalle estético de la terraza te transportan a un espacio de paz.',
    source: 'Google Maps',
    date: 'Hace 3 semanas',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFIgPOxHXDXjG4K5K9_wNwoh8nMPyyXXY-VShF0fKg0sRKbDEeBE5uDeOrx2q2ibmTz0dVpqWDhGTvjfTUwswLlFDkD54yUIXB1JxSY_dn6s7erwmdDsi8Gj9SynZ9SuDytz1qgemwOIHRV=s1600'
  },
  {
    id: 'user-maps-7',
    author: 'Esteban Méndez',
    rating: 5,
    text: 'La repostería de almendra y las bebidas frías son espectaculares. Un oasis escondido en Curridabat para tardear con buena compañía en una terraza fresca y rodeada de verde.',
    source: 'Google Maps',
    date: 'Hace 1 mes',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEwXdV-SDifCjgr9N5rdcp8mjq_7Ez5if-WEdHdU3Fj9v84P8ydfnrjENM8rM4LESqrm2x8pF2zhREfCE3JjTmCPZx4IIldox85u8GT_x3vDRnFRJyP1CTPJ1VdutktVouZWPqPWb_PxN8=s1600'
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
