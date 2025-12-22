import Image from 'next/image';
import styles from './background-snowflake.module.scss';

export default function BackgroundSnowflake({
  width, height, rotation, top, right, bottom, left, color, opacity, zIndex
}: {
  width: number,
  height: number,
  top?: number,
  right?: number,
  bottom?: number,
  left?: number,
  rotation?: number,
  color?: string,
  opacity?: number,
  zIndex?: number,
}) {
  const colorToCssFilterMap = new Map<string, string>([
    ['main-blue', 'brightness(0) saturate(100%) invert(45%) sepia(38%) saturate(4293%) hue-rotate(185deg) brightness(99%) contrast(98%)'],
    ['light-blue', 'brightness(0) saturate(100%) invert(90%) sepia(19%) saturate(207%) hue-rotate(191deg) brightness(105%) contrast(99%)'],
    ['main-white', 'brightness(0) saturate(100%) invert(100%) sepia(27%) saturate(200%) hue-rotate(236deg) brightness(107%) contrast(101%)'],
    ['dark-gray', 'brightness(0) saturate(100%) invert(40%) sepia(4%) saturate(0%) hue-rotate(174deg) brightness(95%) contrast(86%)'],
    ['light-gray', 'brightness(0) saturate(100%) invert(95%) sepia(90%) saturate(71%) hue-rotate(267deg) brightness(116%) contrast(94%)'],
  ]);

  return <Image
    className={styles.snowflake}
    src='/snowflake.webp'
    width={width}
    height={height}
    alt='Снежинка'
    style={{
      top: (top !== undefined && !isNaN(top)) ? `${top - height / 2}px` : 'unset',
      right: (right !== undefined && !isNaN(right)) ? `${right - width / 2}px` : 'unset',
      bottom: (bottom !== undefined && !isNaN(bottom)) ? `${bottom - height / 2}px` : 'unset',
      left: (left !== undefined && !isNaN(left)) ? `${left - width / 2}px` : 'unset',
      transform: rotation ? `rotate(${rotation}deg)` : undefined,
      filter: color && colorToCssFilterMap.get(color),
      opacity,
      zIndex,
    }}
  />
}