import { RefObject } from 'react';
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
  // because dialog context's inner state needs to be updated
  // when closing the dialog
  const { closeDialog } = useDialog();

  return <dialog
    ref={dialogRef}
    className={composeClassName(
      styles.dialog,
      !withCloseButton && styles['no-close-button'],
      withBackdropShadow && styles['with-backdrop-shadow'],
      transparentBackdrop && styles['transparent-backdrop'],
    )}
    style={{
      top: (customPosition?.top !== undefined) ? `${customPosition.top}px` : 'unset',
      right: (customPosition?.right !== undefined) ? `${customPosition.right}px` : 'unset',
      bottom: (customPosition?.bottom !== undefined) ? `${customPosition.bottom}px` : 'unset',
      left: (customPosition?.left !== undefined) ? `${customPosition.left}px` : 'unset',
      width: customPosition ? 'fit-content' : 'revert',
      height: customPosition ? 'fit-content' : 'revert',
    }}
    onClick={() => withBackdropClose && closeDialog()}
  >
    <div className={styles['dialog-content-wrapper']} onClick={e => e.stopPropagation()}>
      {withCloseButton && <Button
        customClass={styles['close-button']}
        icon={{ path: '/icons/cross.svg', width: 32, height: 32 }}
        onClick={closeDialog}
      />}
      <div className={styles['dialog-content']}>{children}</div>
    </div>
  </dialog>
}