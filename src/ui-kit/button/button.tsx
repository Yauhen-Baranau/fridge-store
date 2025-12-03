'use client';

import './button.scss';
import composeClassName from '@src/helpers/compose-class-name';

export default function Button({
  iconPath,
  text = 'Кнопка',
  type = 'button',
  style = 'default',
  onClick = () => {},
  customClass
}: {
  iconPath?: string,
  text?: string,
  type?: 'button' | 'submit' | 'reset',
  style?: 'default' | 'monochrome' | 'text-only',
  onClick?: () => void,
  customClass?: string,
}) {
  return <button
    type={type}
    className={composeClassName('button', customClass, style)}
    onClick={onClick}
  >
    {iconPath && <img src={iconPath} alt='Иконка' />}
    <span>{text}</span>
  </button>;
}