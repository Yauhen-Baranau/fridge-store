import { Routes } from "@constants/routes";
import { NavigationConfig } from "../types/navigation-config";

export const navigationConfig: NavigationConfig = [
  {
    label: 'Услуги по ремонту холодильников',
    categoryId: '1',
    subItems: [
      { subcategoryId: '1', label: 'Замена и ремонт компонентов системы охлаждения' },
      { subcategoryId: '2', label: 'Ремонт и замена электрических компонентов' },
      { subcategoryId: '3', label: 'Замена элементов системы No Frost' },
      { subcategoryId: '4', label: 'Замена и ремонт механических узлов' },
      { subcategoryId: '5', label: 'Ремонт дверей и корпуса' },
      { subcategoryId: '6', label: 'Прочие услуги' },
    ],
  },
  {
    label: 'Виды холодильников',
    categoryId: '2',
    subItems: [
      { subcategoryId: '7', label: 'Ремонт бытовых холодильников' },
      { subcategoryId: '8', label: 'Ремонт коммерческих холодильников' },
      { subcategoryId: '9', label: 'Ремонт специальных холодильных установок' },
      { subcategoryId: '10', label: 'Ремонт промышленных систем охлаждения' },
    ],
  },
  {
    label: 'Цены',
    route: Routes.Prices,
  },
  {
    label: 'Оплата',
    route: Routes.Payment,
  },
  {
    label: 'Отзывы',
    route: Routes.Reviews,
  },
  {
    label: 'О компании',
    route: Routes.AboutUs,
  },
  {
    label: 'Контакты',
    route: Routes.Contacts,
  },
];