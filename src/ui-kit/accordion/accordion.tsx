'use client';

import './accordion.scss';
import { useState } from 'react';
import composeClassName from '@src/helpers/compose-class-name';

export default function Accordion({
  children,
  customClass,
}: {
  children: React.ReactNode,
  customClass?: string,
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const toggleRevealed = () => setIsRevealed(!isRevealed);

  return <div className={composeClassName('outer-accordion-wrapper', customClass)}>
    <div className='accordion-toggle-area' onClick={toggleRevealed}>
      toggle
    </div>
    <div className={composeClassName(
      'content-wrapper',
      isRevealed && 'revealed'
    )}>{children}</div>
  </div>
}