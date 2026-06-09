// Centralized content + imagery for 饭冰冰烧烤 — The BBQ & Spicy Hot Pot House.
// Photos are the restaurant's own assets, imported so Vite fingerprints them
// and they resolve correctly under the GitHub Pages base path.

import hero1 from './assets/hero-1.jpg' // BBQ skewers, beer & shrimp
import hero2 from './assets/hero-2.jpg' // Changle icy rice
import hero3 from './assets/hero-3.jpg' // split mala hot pot
import food1 from './assets/food-1.webp' // lamb skewers
import food2 from './assets/food-2.webp' // shiitake skewers
import food3 from './assets/food-3.webp' // spicy crayfish
import food4 from './assets/food-4.webp' // mala tang tray
import food5 from './assets/food-5.webp' // spicy clams
import food6 from './assets/food-6.webp' // sliced beef, golden broth
import food7 from './assets/food-7.webp' // luncheon meat, chili broth
import venue1 from './assets/venue-1.webp' // dining room
import venue2 from './assets/venue-2.webp' // table feast

// Hero background slider — fire (skewers), ice (icy rice), spice (hot pot).
export const heroSlides = [
  { src: hero1, alt: 'Cumin lamb skewers, shrimp and cold beer' },
  { src: hero3, alt: 'Split mala and bone-broth hot pot' },
  { src: hero2, alt: 'Bowls of Changle icy rice' },
]

export const images = {
  about: food6,
  quote: food7,
  // menu
  skewers: food1,
  malatang: food4,
  crayfish: food3,
  clams: food5,
  // gallery
  grill: food2,
  room: venue1,
  feast: venue2,
}

// Brand identity
export const brand = {
  mark: '饭冰冰烧烤',
  name: 'The BBQ And Spicy Hotpot House',
}

export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#reserve' },
]

export const stats = [
  { value: '2AM', label: 'Open Late' },
  { value: '7', label: 'Nights a Week' },
  { value: '3', label: 'House Specialties' },
]

export const dishes = [
  {
    cn: '烤串',
    name: 'BBQ Skewers',
    price: '$2.50',
    desc: 'Cumin-dusted lamb & shiitake, charcoal-grilled to order.',
    img: images.skewers,
  },
  {
    cn: '麻辣烫',
    name: 'Spicy Mala Tang',
    price: '$13',
    desc: 'Build-your-own hot pot in a numbing Sichuan broth.',
    img: images.malatang,
  },
  {
    cn: '小龙虾',
    name: 'Spicy Crayfish',
    price: '$26',
    desc: 'Wok-tossed crayfish swimming in fiery mala sauce.',
    img: images.crayfish,
  },
  {
    cn: '花甲',
    name: 'Spicy Clams',
    price: '$15',
    desc: 'Fresh clams, minced garlic, chili oil & scallion.',
    img: images.clams,
  },
]

export const gallery = [
  {
    title: 'The Grill',
    desc: 'Skewers straight off the coals.',
    img: images.grill,
  },
  {
    title: 'The Room',
    desc: 'Where the late nights happen.',
    img: images.room,
  },
  {
    title: 'The Feast',
    desc: 'Crayfish, clams & cold beer.',
    img: images.feast,
  },
]

export const reviews = [
  {
    name: 'Carlos Chan',
    meta: 'Local Guide · 20 reviews',
    when: '6 months ago',
    stars: 5,
    text: "My wife and I discovered this spot near our home, and it's quickly become one of our favorites. The food is consistently good, with a nice variety to choose from — every dish flavorful and well-prepared.",
  },
  {
    name: 'Samson Li',
    meta: '1 review',
    when: '5 months ago',
    stars: 5,
    text: "Huge portions and seriously tasty. They're open late, which is perfect for someone like me who gets home late and wants something to eat. Next time I'll try their BBQ. Highly recommend!",
  },
  {
    name: 'Zhu Eric',
    meta: '2 photos',
    when: '6 months ago',
    stars: 5,
    text: 'Really nice dessert!! Never tried it before — especially the taro ball, omg so squishy 😋 The grilled fish was also super flavorful.',
  },
  {
    name: 'Lourdes Sy',
    meta: '5 reviews',
    when: 'a week ago',
    stars: 5,
    text: 'Amazing BBQ, full of flavor, with friendly and attentive service.',
  },
]

export const details = [
  { label: 'Address', value: '158-14 Northern Blvd, Suite LL1, Flushing, NY 11358' },
  { label: 'Phone', value: '(929) 200-7017' },
  { label: 'Weeknights', value: 'Mon–Fri · 5pm – 2am' },
  { label: 'Weekends', value: 'Sat–Sun · 2pm – 2am' },
]
