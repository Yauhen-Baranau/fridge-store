'use client';

import { CSSProperties, RefObject, useMemo, useRef } from 'react';
import Button from '../button/button';
import styles from './dialog.module.scss';
import composeClassName from '@helpers/compose-class-name';
import { useDialog } from '@contexts/dialog-context';

export default function Dialog({
  children,
  dialogRef,
  withCloseButton = true,
  withBackdropClose = false,
  withBackdropShadow = false,
  transparentBackdrop = false,
  customPosition
}: {
  children: React.ReactNode,
  dialogRef: RefObject<HTMLDialogElement | null>,
  withCloseButton?: boolean,
  withBackdropClose?: boolean,
  withBackdropShadow?: boolean,
  transparentBackdrop?: boolean,
  customPosition?: { top?: number, right?: number, bottom?: number, left?: number }
}) {
  const { closeDialog } = useDialog();
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const contentWrapperStyles: CSSProperties = useMemo(() => {
    if (!contentWrapperRef?.current || !customPosition) {
      return {};
    }
    return {
      position: 'absolute',
      top: (customPosition.top !== undefined) ? `${customPosition.top}px` : 'unset',
      right: (customPosition.right !== undefined) ? `${customPosition.right}px` : 'unset',
      bottom: (customPosition.bottom !== undefined) ? `${customPosition.bottom}px` : 'unset',
      left: (customPosition.left !== undefined) ? `${customPosition.left}px` : 'unset',
    }
  }, [customPosition, children]);

  return <dialog
    ref={dialogRef}
    className={composeClassName(
      styles.dialog,
      !withCloseButton && styles['no-close-button'],
      withBackdropShadow && styles['with-backdrop-shadow'],
      transparentBackdrop && styles['transparent-backdrop'],
    )}
    onClick={() => withBackdropClose && closeDialog()}
  >
    <div
      ref={contentWrapperRef}
      className={styles['dialog-content-wrapper']}
      onClick={e => e.stopPropagation()}
      style={contentWrapperStyles}
    >
      {withCloseButton && <Button
        customClass={styles['close-button']}
        icon={{ path: '/icons/cross.svg', width: 32, height: 32 }}
        onClick={closeDialog}
      />}
      <div className={styles['dialog-content']}>{children}</div>
    </div>
  </dialog>
}