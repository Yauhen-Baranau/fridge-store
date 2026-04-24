import { Contacts } from "@src/app/contacts/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты мастерской по ремонту холодильников",
  description:
    "Контакты мастерской по ремонту холодильников в Минске: телефон, адрес и режим работы. Срочный вызов мастера и консультация по неисправностям. +375 (44) 5581940",
  alternates: {
    canonical: "https://holodcentr.by/contacts",
  },
};

export default function ContactsPage() {
  return <Contacts />;
}
