'use client';

import './button.scss';
import composeClassName from '@src/helpers/compose-class-name';

export default function Button({
  iconPath,
  hoverIconPath,
  text = 'Кнопка',
  type = 'button',
  style = 'default',
  onClick = () => {},
  customClass
}: {
  iconPath?: string,
  hoverIconPath?: string,
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
      hoverIconPath && 'with-hover-icon',
      style,
      customClass
    )}
    onClick={onClick}
  >
    {iconPath && <img className='icon' src={iconPath} alt='Иконка' />}
    {hoverIconPath && <img className='hover-icon' src={hoverIconPath} alt='Иконка' />}
    <span className='button-text'>{text}</span>
  </button>;
}