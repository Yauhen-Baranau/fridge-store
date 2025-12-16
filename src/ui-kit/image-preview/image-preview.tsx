'use client';

import styles from './image-preview.module.scss';
import { useDialog } from '@contexts/dialog-context';
import Image from 'next/image';

export default function ImagePreview({
  path,
  previewWidth,
  previewHeight,
  fullWidth,
  fullHeight,
}: {
  path: string,
  previewWidth: number,
  previewHeight: number,
  fullWidth: number,
  fullHeight: number,
}) {
  const { showDialog } = useDialog();

  return <div
    className={styles.wrapper}
    style={{ width: `${previewWidth}px`, height: `${previewHeight}px` }}
    onClick={() => showDialog(<Image src={path} width={fullWidth} height={fullHeight} alt='Картинка' />)}
  >
    <div
      className={styles['preview-image-wrapper']}
      style={{ width: `${previewWidth}px`, height: `${previewHeight}px` }}
    >
      <Image
        className={styles['image-preview']}
        src={path}
        alt='Превью картинки'
        fill={true}
        sizes="100vw"
      />
    </div>
    <Image className={styles['expand-icon']} src='/icons/expand.svg' width={44} height={44} alt='Раскрыть' />
  </div>
}