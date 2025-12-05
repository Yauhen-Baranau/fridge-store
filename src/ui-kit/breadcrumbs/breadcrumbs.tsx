'use client';
import Link from 'next/link';
import './breadcrumbs.scss';
import React from 'react';
import { usePathname } from 'next/navigation';
import composeClassName from '@src/helpers/compose-class-name';

interface Breadcrumb {
  label: string,
  redirectTo: string,
}

export default function Breadcrumbs({ customClass }: { customClass?: string }) {
  const pathname = usePathname();

  const getBreadcrumbs = (): Array<Breadcrumb> => {
    const pathFragments = pathname.split('/').filter(Boolean);
    const breadcrumbs = [{ label: 'Главная', redirectTo: '/' }];
    let currPath = '';
    pathFragments.forEach(fragment => {
      currPath += `/${fragment}`;
      breadcrumbs.push({ label: fragment, redirectTo: currPath })
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
      {isFirst && <img className='breadcrumb-arrow-icon' src='icons/home.webp' width={16} height={16} />}
      <span className='breadcrumb-label'>{breadcrumb.label}</span>
      {!isLast && <img className='breadcrumb-arrow-icon' src='icons/narrow-arrow-right.webp' width={24} height={24} />}
    </Link>
  };

  return <div className={composeClassName('breadcrumbs', customClass)}>
    {getBreadcrumbs().map((breadcrumb, index, arr) => <React.Fragment key={index}>
      {breadcrumbFactory({
        breadcrumb,
        isFirst: index === 0,
        isLast: index === arr.length - 1
      })}
    </React.Fragment>)}
  </div>;
}