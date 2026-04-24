
import { Metadata } from "next";
import { Problems } from "@src/app/common-fridge-problems/components";

export const metadata: Metadata = {
  title: 'Частые проблемы с холодильником | holodcentr.by',
  description: 'Частые проблемы с холодильником: основные неисправности, причины поломок и способы их устранения. Полезная информация от мастеров по ремонту холодильников. +375 (44) 5581940',
  alternates: {
    canonical: 'https://holodcentr.by/common-fridge-problems',
  },
};

export default function CommonFridgeProblemsPage() {
  return <Problems/>;
}
