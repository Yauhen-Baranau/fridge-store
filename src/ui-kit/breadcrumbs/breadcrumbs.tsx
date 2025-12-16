'use client';

import Link from 'next/link';
import './breadcrumbs.scss';
import React from 'react';
import { usePathname } from 'next/navigation';
import composeClassName from '@src/helpers/compose-class-name';
import { Routes } from '@constants/routes';
import Image from 'next/image';
import { useHrefHelper } from '@contexts/href-context';
import { useCategoryData } from '@contexts/category-data-context';

interface Breadcrumb {
  label: string,
  redirectTo: string,
}

const routeToLabelMap = new Map([
  [Routes.Prices, 'Цены'],
  [Routes.Payment, 'Оплата'],
  [Routes.AboutUs, 'О компании'],
  [Routes.Contacts, 'Контакты'],
  [Routes.CommonFridgeProblems, 'Частые проблемы с холодильником'],
  [Routes.Reviews, 'Отзывы'],
  [Routes.FAQ, 'Популярные вопросы'],
]);

export default function Breadcrumbs({ customClass }: { customClass?: string }) {
  const pathname = usePathname();
  const { getCategoryHref, getSubcategoryHref, getServiceHref, getPageHref } = useHrefHelper();
  const { getCategoryById, getSubcategoryById, getServiceById } = useCategoryData();

  const getBreadcrumbs = (): Array<Breadcrumb> => {
    const breadcrumbs = [{ label: 'Главная', redirectTo: '/' }];

    const [categoryIdOrPage, subcategoryId, serviceId] = pathname.split('/').filter(Boolean);
    const nonCategoryBreadcrumbLabel = routeToLabelMap.get(categoryIdOrPage as Routes);
    if (nonCategoryBreadcrumbLabel) {
      breadcrumbs.push({ label: nonCategoryBreadcrumbLabel, redirectTo: getPageHref(categoryIdOrPage as Routes) });
    }
    else {
      const addBreadcrumbIfIdInPath = (
        getEntityById: (id: string) => { label: string } | null,
        getHrefById: (id: string) => string,
        id?: string,
      ) => {
        if (!id) {
          return;
        }
        const entity = getEntityById(id);
        if (entity) {
          breadcrumbs.push({ label: entity.label, redirectTo: getHrefById(id) });
        }
      }
      addBreadcrumbIfIdInPath(getCategoryById, getCategoryHref, categoryIdOrPage);
      addBreadcrumbIfIdInPath(getSubcategoryById, getSubcategoryHref, subcategoryId);
      addBreadcrumbIfIdInPath(getServiceById, getServiceHref, serviceId);
    }

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