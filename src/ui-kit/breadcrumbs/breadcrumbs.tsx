'use client';
import Link from 'next/link';
import './breadcrumbs.scss';
import React from 'react';
import { usePathname } from 'next/navigation';
import composeClassName from '@src/helpers/compose-class-name';
import { Routes } from '@constants/routes';
import Image from 'next/image';

interface Breadcrumb {
  label: string,
  redirectTo: string,
}

const routeToLabelMap = new Map([
  [Routes.FridgeRepairServices, 'Услуги по ремонту холодильников'],
  [Routes.Prices, 'Цены'],
  [Routes.Payment, 'Оплата'],
  [Routes.AboutUs, 'О компании'],
  [Routes.Contacts, 'Контакты'],
  [Routes.CoolingSystemComponentReplacementAndRepairs, 'Замена и ремонт компонентов системы охлаждения'],
  [Routes.ElectricComponentRepairsAndReplacement, 'Ремонт и замена электрических компонентов'],
  [Routes.NofrostSystemElementReplacement, 'Замена элементов системы No Frost'],
  [Routes.MechanicalNodesReplacementAndRepairs, 'Замена и ремонт механических узлов'],
  [Routes.DoorAndHullRepairs, 'Ремонт дверей и корпуса'],
  [Routes.OtherServices, 'Прочие услуги'],
  [Routes.CompressorReplacement, 'Замена компрессора'],
  [Routes.FAQ, 'Популярные вопросы'],
]);

export default function Breadcrumbs({ customClass }: { customClass?: string }) {
  const pathname = usePathname();

  const getBreadcrumbs = (): Array<Breadcrumb> => {
    const pathFragments = pathname.split('/').filter(Boolean);
    const breadcrumbs = [{ label: 'Главная', redirectTo: '/' }];
    let currPath = '';
    pathFragments.forEach(fragment => {
      currPath += `/${fragment}`;
      breadcrumbs.push({ label: routeToLabelMap.get(fragment as Routes) || '', redirectTo: currPath })
    });
    return breadcrumbs;
  }

  const breadcrumbFactory = ({
    breadcrumb,
    isFirst = false,
    isLast = false,
  }: {
    breadcrumb: Breadcrumb,
    isFirst?: boolean,
    isLast?: boolean
  }) => {
    return <Link
      className={composeClassName('breadcrumb', isLast && 'disabled')}
      href={breadcrumb.redirectTo}
      aria-disabled={isLast}
    >
      {isFirst && <Image className='breadcrumb-arrow-icon' src='/icons/home.svg' width={16} height={16} alt='Дом' />}
      <span className='breadcrumb-label'>{breadcrumb.label}</span>
      {!isLast && <Image className='breadcrumb-arrow-icon' src='/icons/narrow-arrow-right.svg' width={24} height={24} alt='Стрелка' />}
    </Link>
  };

  const breadcrumbs = getBreadcrumbs();
  return breadcrumbs.length > 1 && <div className={composeClassName('breadcrumbs', customClass)}>
    {getBreadcrumbs().map((breadcrumb, index, arr) => <React.Fragment key={index}>
      {breadcrumbFactory({
        breadcrumb,
        isFirst: index === 0,
        isLast: index === arr.length - 1
      })}
    </React.Fragment>)}
  </div>;
}