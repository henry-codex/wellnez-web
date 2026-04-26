export interface Company {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  logoUrl: string;
  mapEmbedUrl?: string;
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number; // GHS
  category?: string;
  stock?: number;
  featured?: boolean;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  duration: string; // e.g. "60 min"
  price: number; // GHS
  imageUrl?: string;
  featured?: boolean;
}

export interface Appointment {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  createdAt?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id?: string;
  paymentMethod?: "pay_on_delivery" | "pay_at_salon" | "mobile_money";
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    region: string;
  };
  items: {
    productId: string;
    title: string;
    price: number;
    quantity: number;
  }[];
  total: number; // GHS
  status: "pending" | "processing" | "completed" | "cancelled";
  createdAt?: string;
}
