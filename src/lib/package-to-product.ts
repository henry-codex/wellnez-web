import type { Product, Service } from "@/types";

const FALLBACK_PACKAGE_IMAGE = "/assets/imgnew/beautiful-african-woman-smiling-resting-relaxing-spa-salon.jpg";

export function serviceToPackageProduct(service: Service): Product {
  return {
    id: `svc-${service.id}`,
    slug: `package-${service.slug}`,
    title: service.name,
    description: service.description,
    imageUrl: FALLBACK_PACKAGE_IMAGE,
    price: service.price,
    category: "Service Package",
  };
}
