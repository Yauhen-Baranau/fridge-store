import { RefObject, useRef } from 'react';
import Button from '../button/button';
import styles from './dialog.module.scss';
import composeClassName from '@helpers/compose-class-name';
import useClickOutsideListener from '@hooks/use-click-outside-listener';

export default function Dialog({
  children,
  dialogRef,
  withCloseButton = true,
  withBackdropClose = false,
  withBackdropShadow = false,
  transparentBackdrop = false,
}: {
  children: React.ReactNode,
  dialogRef: RefObject<HTMLDialogElement | null>,
  withCloseButton?: boolean,
  withBackdropClose?: boolean,
  withBackdropShadow?: boolean,
  transparentBackdrop?: boolean,
}) {
  const dialogContentWrapperRef = useRef<HTMLDivElement>(null);
  useClickOutsideListener(dialogContentWrapperRef, () => {
    withBackdropClose && dialogRef?.current?.close();
  });
  return <dialog ref={dialogRef} className={composeClassName(
    styles.dialog,
    !withCloseButton && styles['no-close-button'],
    withBackdropShadow && styles['with-backdrop-shadow'],
    transparentBackdrop && styles['transparent-backdrop'],
  )}>
    <div ref={dialogContentWrapperRef} className={styles['dialog-content-wrapper']}>
      {withCloseButton && <Button
        customClass={styles['close-button']}
        icon={{ path: '/icons/cross.svg', width: 32, height: 32 }}
        onClick={() => dialogRef?.current?.close()}
      />}
      <div className={styles['dialog-content']}>{children}</div>
    </div>
  </dialog>
}