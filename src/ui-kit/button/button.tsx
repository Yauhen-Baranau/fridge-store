import './button.scss';
import composeClassName from '@src/helpers/compose-class-name';

export default function Button({
  iconPath,
  text = 'Кнопка',
  customClass
}: {
  iconPath?: string,
  text?: string,
  customClass?: string,
}) {
  return <button className={composeClassName('button', customClass)}>
    {iconPath && <img src={iconPath} alt='Иконка' />}
    <span>{text}</span>
  </button>;
}