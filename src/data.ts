import { MenuItem, Testimonial, GalleryItem, WhyChooseUsItem } from './types';

// Import the custom-generated images using relative paths to ensure Vite resolves them correctly
import heroImage from './assets/images/hero_chaat_house_1780406477157.png';
import dahiPuriImage from './assets/images/dahi_puri_plate_1780406498649.png';
import hygienicPrepImage from './assets/images/hygienic_prep_1780406516114.png';
import samosaBajjiImage from './assets/images/samosa_bajji_1780406534863.png';
import paniPuriImage from './assets/images/pani_puri_1780459311481.png';
import masalaPuriImage from './assets/images/masala_puri_1780459336003.png';
import ragadaChaatImage from './assets/images/ragada_chaat_1780459355989.png';
import mirchiBajjiImage from './assets/images/mirchi_bajji_1780459381079.png';
import onionPakodiImage from './assets/images/onion_pakodi_1780459399993.png';

export const HERO_IMAGE = heroImage;
export const DAHI_PURI_IMAGE = dahiPuriImage;
export const HYGIENIC_PREP_IMAGE = hygienicPrepImage;
export const SAMOSA_BAJJI_IMAGE = samosaBajjiImage;
export const PANI_PURI_IMAGE = paniPuriImage;
export const MASALA_PURI_IMAGE = masalaPuriImage;
export const RAGADA_CHAAT_IMAGE = ragadaChaatImage;
export const MIRCHI_BAJJI_IMAGE = mirchiBajjiImage;
export const ONION_PAKODI_IMAGE = onionPakodiImage;

export const MENU_ITEMS: MenuItem[] = [
  // --- CHAAT SPECIALS ---
  {
    id: 'chaat-1',
    name: 'Pani Puri',
    description: 'Crispy hollow puris filled with spicy mint water, tangy tamarind chutney, and a perfect potato-chickpea stuffing.',
    price: 40,
    category: 'Chaat Specials',
    imageUrl: PANI_PURI_IMAGE,
    isPopular: true,
    isVegetarian: true,
    spicyLevel: 3,
  },
  {
    id: 'chaat-2',
    name: 'Special Dahi Puri',
    description: 'Crispy puris stuffed with spiced potatoes, loaded with fresh sweetened yogurt, sweet & sour chutneys, and fine sev.',
    price: 60,
    category: 'Chaat Specials',
    imageUrl: DAHI_PURI_IMAGE,
    isPopular: true,
    isVegetarian: true,
    spicyLevel: 1,
  },
  {
    id: 'chaat-3',
    name: 'Sev Puri',
    description: 'Flat crispy puris layered with potato cubes, chopped onions, tomato slices, topped with dynamic chutneys and a heavy shower of sev.',
    price: 50,
    category: 'Chaat Specials',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80',
    isVegetarian: true,
    spicyLevel: 2,
  },
  {
    id: 'chaat-4',
    name: 'Masala Puri',
    description: 'Crushed crispy puris drenched in a spiced piping hot green peas gravy, garnished with raw carrots, coriander, and sev.',
    price: 50,
    category: 'Chaat Specials',
    imageUrl: MASALA_PURI_IMAGE,
    isVegetarian: true,
    spicyLevel: 2,
  },
  {
    id: 'chaat-5',
    name: 'Bhel Puri',
    description: 'A light, crisp mix of puffed rice, roasted peanuts, diced onions, raw mango (seasonal), mixed sweet-spicy chutneys, and sev.',
    price: 40,
    category: 'Chaat Specials',
    imageUrl: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&auto=format&fit=crop&q=80',
    isVegetarian: true,
    spicyLevel: 2,
  },
  {
    id: 'chaat-6',
    name: 'Special Ragada Chaat',
    description: 'Warm thick yellow peas model cooked with Hyderabad rich spices, topped with onions, coriander, curd, and papdi.',
    price: 60,
    category: 'Chaat Specials',
    imageUrl: RAGADA_CHAAT_IMAGE,
    isVegetarian: true,
    spicyLevel: 2,
  },

  // --- SNACKS ---
  {
    id: 'snack-1',
    name: 'Special Aloo Samosa (2 Pcs)',
    description: 'Crispy triangular flaky pastry sheet filled with highly seasoned green peas and mashed aloo stuffing. Served with sweet dates chutney.',
    price: 30,
    category: 'Snacks',
    imageUrl: SAMOSA_BAJJI_IMAGE,
    isPopular: true,
    isVegetarian: true,
    spicyLevel: 1,
  },
  {
    id: 'snack-2',
    name: 'Samosa Ragada / Kachori Chaat',
    description: 'Crushed hand-made samosa or kachori loaded with hot ragada gravy, whipped yogurt, and multi-layered chutneys.',
    price: 60,
    category: 'Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=60',
    isVegetarian: true,
    spicyLevel: 2,
  },
  {
    id: 'snack-3',
    name: 'Mirchi Bajji (3 Pcs)',
    description: 'Famous local Hyderabad long green chillies battered in spiced gram flour, deep fried, slit open and stuffed with seasoned lemon onions.',
    price: 40,
    category: 'Snacks',
    imageUrl: MIRCHI_BAJJI_IMAGE,
    isPopular: true,
    isVegetarian: true,
    spicyLevel: 3,
  },
  {
    id: 'snack-4',
    name: 'Hyderabad Punugulu',
    description: 'Golden crispy, soft-inside deep-fried small fritters made of fermented rice-urad dal batter, served with spicy ginger chutney.',
    price: 40,
    category: 'Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=40',
    isVegetarian: true,
    spicyLevel: 2,
  },
  {
    id: 'snack-5',
    name: 'Onion Pakodi Platter',
    description: 'Crispy, crunchy deep fried onion fritters infused with green chillies, curry leaves, and chickpea flour. Perfect evening snack.',
    price: 40,
    category: 'Snacks',
    imageUrl: ONION_PAKODI_IMAGE,
    isVegetarian: true,
    spicyLevel: 2,
  },

  // --- FAST FOOD ---
  {
    id: 'fast-1',
    name: 'Veg Hakka Noodles',
    description: 'High-flame wok-tossed noodles loaded with crunchy cabbage, julienned carrots, bell peppers, soy sauce, and mild white pepper.',
    price: 90,
    category: 'Fast Food',
    imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=80',
    isVegetarian: true,
    spicyLevel: 1,
  },
  {
    id: 'fast-2',
    name: 'Veg Fried Rice',
    description: 'Stir-fried long grain basmati rice tossed with aromatic celery, finely chopped garden vegetables, soy sauce, and spring onions.',
    price: 90,
    category: 'Fast Food',
    imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=80',
    isVegetarian: true,
    spicyLevel: 1,
  },
  {
    id: 'fast-3',
    name: 'Veg Manchuria (Dry / Gravy)',
    description: 'Savory fried vegetable grated balls tossed in an iconic spicy tang-infused soy-garlic-chilli Manchurian glaze.',
    price: 100,
    category: 'Fast Food',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80',
    isPopular: true,
    isVegetarian: true,
    spicyLevel: 2,
  },
  {
    id: 'fast-4',
    name: 'Bombay Masala Cheese Sandwich',
    description: 'Three-deck toasted sandwich layered with spiced potato mixture, cucumber, tomatoes, onions, coriander chutney, and overflowing Amul cheese.',
    price: 80,
    category: 'Fast Food',
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&auto=format&fit=crop&q=80',
    isVegetarian: true,
    spicyLevel: 1,
  },
  {
    id: 'fast-5',
    name: 'Spicy Veg Aloo Burger',
    description: 'Crispy golden potato patty nestled inside warm toasted sesame buns with fresh lettuce, sliced onions, juicy tomatoes, and tandoori spread.',
    price: 70,
    category: 'Fast Food',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80',
    isVegetarian: true,
    spicyLevel: 2,
  },

  // --- BEVERAGES ---
  {
    id: 'bev-1',
    name: 'Fresh Lime Soda (Sweet & Salt)',
    description: 'Bubbly, refreshing muddled fresh lime juice combined with chilled soda water and custom sweet-salty syrup.',
    price: 40,
    category: 'Beverages',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=80',
    isPopular: true,
    isVegetarian: true,
    spicyLevel: 0,
  },
  {
    id: 'bev-2',
    name: 'Soft Drinks (Thums Up / Limca)',
    description: 'Chilled carbonated soft drinks, perfect to balance the rich spicy tastes of traditional chaats.',
    price: 25,
    category: 'Beverages',
    imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=80',
    isVegetarian: true,
    spicyLevel: 0,
  },
  {
    id: 'bev-3',
    name: 'Hyderabad Special Ginger Chai',
    description: 'Warm milk tea brewed with fresh grated ginger, cardamom pods, and premium tea leaves for the perfect refreshing finish.',
    price: 15,
    category: 'Beverages',
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=80',
    isVegetarian: true,
    spicyLevel: 0,
  },
  {
    id: 'bev-4',
    name: 'Filter Coffee',
    description: 'Traditional hot South Indian filter coffee brewed with rich chicory blend and frothy fresh whole milk.',
    price: 20,
    category: 'Beverages',
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=80',
    isVegetarian: true,
    spicyLevel: 0,
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'wcu-1',
    title: 'Fresh Ingredients',
    description: 'We source fresh vegetables daily and handcraft our pure spices to ensure top-notch flavor profiles in each plate.',
    icon: 'Utensils'
  },
  {
    id: 'wcu-2',
    title: 'Hygienic Preparation',
    description: 'Cleanliness is our top mandate. Our staff wear gloves, clean our workspace hourly, and use pure RO drinking water.',
    icon: 'ShieldCheck'
  },
  {
    id: 'wcu-3',
    title: 'Authentic Taste',
    description: 'Enjoy true Hyderabad-style street flavors, curated from traditional family-perfected secrets and ratios.',
    icon: 'Sparkles'
  },
  {
    id: 'wcu-4',
    title: 'Affordable Prices',
    description: 'Savor amazing, delicious snacks without burning a hole in your pocket. Outstanding value for students and families.',
    icon: 'IndianRupee'
  },
  {
    id: 'wcu-5',
    title: 'Quick Service',
    description: 'Freshly prepared hot chaat and speedy custom fast food orders without making you wait. Fast and delicious.',
    icon: 'Clock'
  },
  {
    id: 'wcu-6',
    title: 'Family Friendly Environment',
    description: 'A cozy, clean, warm dining space perfect for families and children to gather and share chat sessions together.',
    icon: 'Users'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    author: 'Rajesh K.',
    role: 'Suchitra Resident',
    avatarInitials: 'RK',
    rating: 5,
    description: 'Best chat center in Suchitra area. Amazing taste and great service. The hot ragada is prepared freshly and tastes incredible.',
    date: 'May 20, 2026'
  },
  {
    id: 'rev-2',
    author: 'Sneha Reddy',
    role: 'Food Blogger',
    avatarInitials: 'SR',
    rating: 5,
    description: 'The pani puri and dahi puri are absolutely delicious. Super crisp puris, chilled yogurt, and sweet spicy syrups matching pure hygiene!',
    date: 'April 14, 2026'
  },
  {
    id: 'rev-3',
    author: 'Anil Kumar',
    role: 'Regular Diner',
    avatarInitials: 'AK',
    rating: 5,
    description: 'Clean environment, affordable prices, and excellent food quality. Shri The Chat House is our absolute favorite weekend family spot.',
    date: 'June 01, 2026'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Crispy Golden Pani Puri',
    imageUrl: PANI_PURI_IMAGE,
    category: 'Pani Puri'
  },
  {
    id: 'gal-2',
    title: 'Special Loaded Dahi Puri',
    imageUrl: DAHI_PURI_IMAGE,
    category: 'Dahi Puri'
  },
  {
    id: 'gal-3',
    title: 'Savory Sev Puri Platter',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80',
    category: 'Sev Puri'
  },
  {
    id: 'gal-4',
    title: 'Hot Crispy Samosas & Bajji',
    imageUrl: SAMOSA_BAJJI_IMAGE,
    category: 'Snacks'
  },
  {
    id: 'gal-5',
    title: 'Hygienic Preparation Quality',
    imageUrl: HYGIENIC_PREP_IMAGE,
    category: 'Restaurant'
  },
  {
    id: 'gal-6',
    title: 'Authentic Street Cooking',
    imageUrl: 'https://images.unsplash.com/photo-1517244683807-7ae58e2b152e?w=800&auto=format&fit=crop&q=80',
    category: 'Happy Customers'
  }
];
