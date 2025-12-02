import styles from './popup.module.scss';

export default function PopupWrapper({
  popupToggleNode,
  popupContent
}: {
  popupToggleNode: React.ReactNode,
  popupContent: React.ReactNode
}) {
  return <div className={styles['outer-wrapper']}>
    {popupToggleNode}
    <div className={styles['popup-content-wrapper']}>
      {popupContent}
    </div>
  </div>
}