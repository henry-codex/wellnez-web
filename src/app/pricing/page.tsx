import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Smartsale Spa",
  description: "Explore our full menu of spa services and packages.",
};

export default async function PricingPage() {
  redirect("/services");
}

