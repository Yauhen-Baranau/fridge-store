import composeClassNames from '@src/helpers/compose-class-name';
import styles from './button.module.scss';

export default function Button({
  iconPath,
  text = 'Кнопка',
  rounded = true,
  width = 100,
  fontSize,
  style = 'default',
}: {
  iconPath?: string,
  text?: string,
  rounded?: boolean,
  width?: number | string,
  fontSize?: number,
  style?: 'default' | 'monochrome' | 'light',
}) {
  return <button
    className={composeClassNames(
      styles.button,
      styles[style],
      rounded && styles.rounded,
    )}
    style={{
      width: !isNaN(+width) ? `${width}px` : width,
      fontSize: fontSize && !isNaN(+fontSize) ? `${fontSize}px` : '',
    }}
  >
    {iconPath && <img src={iconPath} alt='Иконка' />}
    <span>{text}</span>
  </button>;
}