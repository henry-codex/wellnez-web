import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  query,
  where,
  limit,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import type { Company, Product, Service, Appointment, Order } from "@/types";

// ─── Fallback / seed data (shown when Firebase is not yet configured) ──────────
export const FALLBACK_COMPANY: Company = {
  name: "Smartsale",
  tagline: "Experience the Art of Relaxation",
  address: "14 Independence Ave, Accra, Ghana",
  phone: "+233 24 000 0000",
  email: "hello@smartsale.com",
  logoUrl: "/assets/img/logo.svg",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.773539348635!2d-0.18697098522875!3d5.603716995935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuNCJOIDDCsDExJzEzLjEiVw!5e0!3m2!1sen!2sgh!4v1600000000000!5m2!1sen!2sgh",
  socials: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
};

export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "luxe-body-oil",
    title: "Luxe Body Oil",
    description:
      "A nourishing blend of natural oils that leaves skin silky smooth and radiant.",
    imageUrl: "/assets/img/product/p-2-1.png",
    price: 180,
    category: "Body Care",
    featured: true,
  },
  {
    id: "2",
    slug: "glow-face-cream",
    title: "Glow Face Cream",
    description:
      "A deeply hydrating face cream enriched with shea butter and vitamin C.",
    imageUrl: "/assets/img/product/p-2-2.png",
    price: 230,
    category: "Skincare",
    featured: true,
  },
  {
    id: "3",
    slug: "argan-hair-serum",
    title: "Argan Hair Serum",
    description: "Restore shine and strength to your hair with pure argan oil.",
    imageUrl: "/assets/img/product/p-2-3.png",
    price: 155,
    category: "Hair Care",
    featured: false,
  },
  {
    id: "4",
    slug: "charcoal-face-mask",
    title: "Charcoal Face Mask",
    description: "Deep-cleansing activated charcoal mask for radiant skin.",
    imageUrl: "/assets/img/product/p-2-4.png",
    price: 120,
    category: "Skincare",
    featured: true,
  },
  {
    id: "5",
    slug: "lavender-bath-salts",
    title: "Lavender Bath Salts",
    description: "Himalayan salt and lavender blend for the ultimate bath soak.",
    imageUrl: "/assets/img/product/p-2-5.png",
    price: 95,
    category: "Body Care",
    featured: false,
  },
  {
    id: "6",
    slug: "spa-candle-set",
    title: "Spa Candle Set",
    description:
      "Hand-poured soy wax candles in calming jasmine and sandalwood.",
    imageUrl: "/assets/img/product/p-2-6.png",
    price: 200,
    category: "Aromatherapy",
    featured: false,
  },
];

export const FALLBACK_SERVICES: Service[] = [
  {
    id: "1",
    slug: "hot-stone-massage",
    name: "Hot Stone Massage",
    description:
      "Smooth, heated stones are placed on key points of the body to ease muscle stiffness and improve circulation.",
    duration: "75 min",
    price: 450,
    imageUrl:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
    featured: true,
  },
  {
    id: "2",
    slug: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    description:
      "Targets chronic muscle tension with firm, slow strokes. Ideal for stress relief and recovery.",
    duration: "60 min",
    price: 380,
    imageUrl:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80",
    featured: true,
  },
  {
    id: "3",
    slug: "radiance-facial",
    name: "Radiance Facial",
    description:
      "A brightening facial treatment using natural botanicals to reveal glowing, even-toned skin.",
    duration: "60 min",
    price: 350,
    imageUrl:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    featured: true,
  },
  {
    id: "4",
    slug: "aromatherapy-massage",
    name: "Aromatherapy Massage",
    description:
      "A soothing full-body massage using essential oil blends chosen for your mood and needs.",
    duration: "90 min",
    price: 500,
    imageUrl:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80",
    featured: false,
  },
  {
    id: "5",
    slug: "luxury-body-wrap",
    name: "Luxury Body Wrap",
    description:
      "Detoxify and hydrate with our signature herbal body wrap, leaving skin soft and luminous.",
    duration: "90 min",
    price: 520,
    imageUrl:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
    featured: false,
  },
  {
    id: "6",
    slug: "manicure-pedicure",
    name: "Manicure & Pedicure",
    description:
      "Complete nail care with exfoliation, massage, and polish for hands and feet.",
    duration: "90 min",
    price: 280,
    imageUrl:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    featured: false,
  },
];

// ─── Helpers ───────────────────────────────────────────────────────────────────

function isFirebaseConfigured() {
  return !!(
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  );
}

// ─── Company ───────────────────────────────────────────────────────────────────

export async function getCompany(): Promise<Company> {
  if (!isFirebaseConfigured()) return FALLBACK_COMPANY;
  try {
    const snap = await getDoc(doc(db, "company", "main"));
    return snap.exists() ? (snap.data() as Company) : FALLBACK_COMPANY;
  } catch {
    return FALLBACK_COMPANY;
  }
}

// ─── Products ──────────────────────────────────────────────────────────────────

export async function getProducts(): Promise<Product[]> {
  if (!isFirebaseConfigured()) return FALLBACK_PRODUCTS;
  try {
    const snap = await getDocs(collection(db, "products"));
    if (snap.empty) return FALLBACK_PRODUCTS;
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Product));
  } catch {
    return FALLBACK_PRODUCTS;
  }
}

export async function getFeaturedProducts(n = 4): Promise<Product[]> {
  if (!isFirebaseConfigured())
    return FALLBACK_PRODUCTS.filter((p) => p.featured).slice(0, n);
  try {
    const q = query(
      collection(db, "products"),
      where("featured", "==", true),
      limit(n)
    );
    const snap = await getDocs(q);
    if (snap.empty)
      return FALLBACK_PRODUCTS.filter((p) => p.featured).slice(0, n);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Product));
  } catch {
    return FALLBACK_PRODUCTS.filter((p) => p.featured).slice(0, n);
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const fallback = FALLBACK_PRODUCTS.find((p) => p.slug === slug) ?? null;
  if (!isFirebaseConfigured()) return fallback;
  try {
    const q = query(
      collection(db, "products"),
      where("slug", "==", slug),
      limit(1)
    );
    const snap = await getDocs(q);
    if (snap.empty) return fallback;
    const d = snap.docs[0];
    return { id: d.id, ...d.data() } as Product;
  } catch {
    return fallback;
  }
}

// ─── Services ──────────────────────────────────────────────────────────────────

export async function getServices(): Promise<Service[]> {
  if (!isFirebaseConfigured()) return FALLBACK_SERVICES;
  try {
    const snap = await getDocs(collection(db, "services"));
    if (snap.empty) return FALLBACK_SERVICES;
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Service));
  } catch {
    return FALLBACK_SERVICES;
  }
}

export async function getFeaturedServices(n = 4): Promise<Service[]> {
  if (!isFirebaseConfigured())
    return FALLBACK_SERVICES.filter((s) => s.featured).slice(0, n);
  try {
    const q = query(
      collection(db, "services"),
      where("featured", "==", true),
      limit(n)
    );
    const snap = await getDocs(q);
    if (snap.empty)
      return FALLBACK_SERVICES.filter((s) => s.featured).slice(0, n);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Service));
  } catch {
    return FALLBACK_SERVICES.filter((s) => s.featured).slice(0, n);
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const fallback = FALLBACK_SERVICES.find((s) => s.slug === slug) ?? null;
  if (!isFirebaseConfigured()) return fallback;
  try {
    const q = query(
      collection(db, "services"),
      where("slug", "==", slug),
      limit(1)
    );
    const snap = await getDocs(q);
    if (snap.empty) return fallback;
    const d = snap.docs[0];
    return { id: d.id, ...d.data() } as Service;
  } catch {
    return fallback;
  }
}

// ─── Appointments ──────────────────────────────────────────────────────────────

export async function saveAppointment(
  data: Omit<Appointment, "createdAt">
): Promise<void> {
  if (!isFirebaseConfigured()) {
    console.log("Firebase not configured. Appointment data:", data);
    return;
  }
  await addDoc(collection(db, "appointments"), {
    ...data,
    createdAt: serverTimestamp(),
  });
}

// ─── Orders ────────────────────────────────────────────────────────────────────

export async function createOrder(
  order: Omit<Order, "id" | "createdAt">
): Promise<string> {
  if (!isFirebaseConfigured()) {
    console.log("Firebase not configured. Order data:", order);
    return "DEMO-ORDER-001";
  }
  const ref = await addDoc(collection(db, "orders"), {
    ...order,
    createdAt: serverTimestamp(),
  });
  return ref.id;
}
