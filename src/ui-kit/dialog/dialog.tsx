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
}: {
  children: React.ReactNode,
  dialogRef: RefObject<HTMLDialogElement | null>,
  withCloseButton?: boolean,
  withBackdropClose?: boolean,
  withBackdropShadow?: boolean,
  transparentBackdrop?: boolean,
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