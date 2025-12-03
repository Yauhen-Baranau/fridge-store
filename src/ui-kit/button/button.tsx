import './button.scss';
import composeClassName from '@src/helpers/compose-class-name';

export default function Button({
  iconPath,
  text = 'Кнопка',
  style = 'default',
  customClass
}: {
  iconPath?: string,
  text?: string,
  style?: 'default' | 'monochrome' | 'text-only',
  customClass?: string,
}) {
    className={composeClassName('button', customClass, style)}
    {iconPath && <img src={iconPath} alt='Иконка' />}
    <span>{text}</span>
  </button>;
}