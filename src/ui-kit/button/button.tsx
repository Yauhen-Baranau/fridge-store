'use client';

import Image from 'next/image';
import './button.scss';
import composeClassName from '@src/helpers/compose-class-name';

interface IconData {
  path: string,
  width: number,
  height: number,
}

export default function Button({
  icon,
  hoverIcon,
  text,
  type = 'button',
  style = 'default',
  onClick = () => {},
  customClass
}: {
  icon?: IconData,
  hoverIcon?: IconData,
  text?: string,
  type?: 'button' | 'submit' | 'reset',
  style?: 'default' | 'monochrome' | 'text-only',
  onClick?: () => void,
  customClass?: string,
}) {
  return <button
    type={type}
    className={composeClassName(
      'button',
      hoverIcon && 'with-hover-icon',
      style,
      customClass
    )}
    onClick={onClick}
  >
    {icon && <Image className='icon' src={icon.path} width={icon.width} height={icon.height} alt='Иконка' />}
    {hoverIcon && <Image className='hover-icon' src={hoverIcon.path} width={hoverIcon.width} height={hoverIcon.height} alt='Иконка' />}
    {text && <span className='button-text'>{text}</span>}
  </button>;
}