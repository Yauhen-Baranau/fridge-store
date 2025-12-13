import { RefObject } from 'react';
import Button from '../button/button';
import styles from './dialog.module.scss';

export default function Dialog({
  children,
  dialogRef,
}: {
  children: React.ReactNode,
  dialogRef: RefObject<HTMLDialogElement | null>
}) {
  return <dialog ref={dialogRef} className={styles.dialog}>
    <div className={styles['dialog-content-wrapper']}>
      <Button
        customClass={styles['close-button']}
        icon={{ path: '/icons/cross.svg', width: 32, height: 32 }}
        onClick={() => dialogRef?.current?.close()}
      />
      <div className={styles['dialog-content']}>{children}</div>
    </div>
  </dialog>
}