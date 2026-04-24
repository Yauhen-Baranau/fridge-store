import { Metadata } from "next";
import { Faq } from "@src/app/faq/components";

export const metadata: Metadata = {
  title: 'Частозадаваемые вопросы о ремонте холодильников',
  description: 'Частозадаваемые вопросы о ремонте холодильников: диагностика, ремонт, замена деталей, стоимость и сроки работ. Ответы от профессиональных мастеров. +375 (44) 5581940',
  alternates: {
    canonical: 'https://holodcentr.by/faq',
  },
};

export default function FaqPage() {
  return (<Faq/>);
}
