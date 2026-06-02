export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Chaat Specials' | 'Snacks' | 'Fast Food' | 'Beverages';
  imageUrl: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  spicyLevel?: 0 | 1 | 2 | 3; // 0 = mild, 3 = very spicy
}

export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  avatarInitials: string;
  rating: number;
  description: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  phone: string;
  message: string;
  date: string;
  isRead: boolean;
}
