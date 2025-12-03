// not using css modules because this component has a lot of
// nested components that need custom styling
import composeClassName from '@src/helpers/compose-class-name';
import './navigation.scss';
import List from '@src/ui-kit/list/list';

export default function Navigation({ customClass }: { customClass?: string }) {
  return <nav className={composeClassName('nav', customClass)}>
    <List
      customClass='nav-list'
      direction='horizontal'
      nestedItemsStyle='popup'
      items={[
        {
          content: 'УСЛУГИ ПО РЕМОНТУ ХОЛОДИЛЬНИКОВ',
          // TO DO: hovering above icon doesn't trigger popup
          iconPath: 'icons/chevron-down.webp',
          iconPosition: 'after',
          subItems: [
            { iconPath: 'icons/square-small.webp', content: 'ЗАМЕНА И РЕМОНТ КОМПОНЕНТОВ СИСТЕМЫ ОХЛАЖДЕНИЯ' },
            { iconPath: 'icons/square-small.webp', content: 'РЕМОНТА И ЗАМЕНА ЭЛЕКТРИЧЕСКИХ КОМПОНЕНТОВ' },
            { iconPath: 'icons/square-small.webp', content: 'ЗАМЕНА ЭЛЕМЕНТОВ СИСТЕМЫ NO FROST' },
            { iconPath: 'icons/square-small.webp', content: 'ЗАМЕНА И РЕМОНТ МЕХАНИЧЕСКИХ УЗЛОВ' },
            { iconPath: 'icons/square-small.webp', content: 'РЕМОНТ ДВЕРЕЙ И КОРПУСА' },
            { iconPath: 'icons/square-small.webp', content: 'ПРОЧИЕ УСЛУГИ' },
          ],
        },
        {
          content: 'ВИДЫ ХОЛОДИЛЬНИКОВ',
          iconPath: 'icons/chevron-down.webp',
          iconPosition: 'after',
          subItems: [
            { iconPath: 'icons/square-small.webp', content: 'РЕМОНТ БЫТОВЫХ ХОЛОДИЛЬНИКОВ' },
            { iconPath: 'icons/square-small.webp', content: 'РЕМОНТ КОММЕРЧЕСКИХ ХОЛОДИЛЬНИКОВ' },
            { iconPath: 'icons/square-small.webp', content: 'РЕМОНТ СПЕЦИАЛЬНЫХ ХОЛОДИЛЬНЫХ УСТАНОВОК' },
            { iconPath: 'icons/square-small.webp', content: 'РЕМОНТ ПРОМЫШЛЕННЫХ СИСТЕМ ОХЛАЖДЕНИЯ' },
          ],
        },
        {
          content: 'ЦЕНЫ',
        },
        {
          content: 'ОПЛАТА',
        },
        {
          content: 'ОТЗЫВЫ',
        },
        {
          content: 'О КОМПАНИИ',
        },
        {
          content: 'КОНТАКТЫ',
        },
      ]} />
  </nav>
}