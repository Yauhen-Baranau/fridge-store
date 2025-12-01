'use client';

import { useState } from 'react';
import styles from './accordion.module.scss';
import composeClassName from '@src/helpers/compose-class-names';

export default function Accordion({
  children
}: {
  children: React.ReactNode
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const toggleRevealed = () => setIsRevealed(!isRevealed);

  return <div className={styles['outer-wrapper']}>
    <div className={styles['toggle-area']} onClick={toggleRevealed}>
      toggle
    </div>
    <div className={composeClassName(
      styles['content-wrapper'],
      isRevealed && styles.revealed
    )}>{children}</div>
  </div>
}