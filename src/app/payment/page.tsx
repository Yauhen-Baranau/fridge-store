import { Metadata } from "next";
import { Payment } from "@src/app/payment/components";

export const metadata: Metadata = {
  title: 'Способы оплаты ремонта холодильников в Минске',
  description: 'Удобные способы оплаты ремонта холодильников в Минске: наличные, банковская карта и безналичный расчет. Оплата после выполнения работ и проверки результата. +375 (44) 5581940',
  alternates: {
    canonical: 'https://icefix.by/payment',
  },
};

export default function PaymentPage() {
  return <Payment/>
}
