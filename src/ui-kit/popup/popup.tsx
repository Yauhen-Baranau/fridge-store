import styles from './popup.module.scss';

export default function PopupWrapper({
  children,
  popupContent
}: {
  children: React.ReactNode,
  popupContent: React.ReactNode
}) {
  return <div className={styles['outer-wrapper']}>
    <div className={styles['popup-trigger-wrapper']}>
      {children}
    </div>
    <div className={styles['popup-content-wrapper']}>
      {popupContent}
    </div>
  </div>
}