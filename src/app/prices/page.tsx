import { Metadata } from "next";
import { Prices } from "@src/app/prices/components";

export const metadata: Metadata = {
  title: 'Цены на ремонт холодильников в Минске',
  description: 'Актуальные цены на ремонт холодильников в Минске. Доступные тарифы, выезд мастера на дом, ремонт всех брендов с гарантией и без скрытых платежей. +375 (44) 5581940',
  alternates: {
    canonical: 'https://holodcentr.by/prices',
  },
};

export default function PricesPage() {
  return <Prices />
}
