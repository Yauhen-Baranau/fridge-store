// not using css modules because this component has a lot of
// nested components that need custom styling
import './navigation.scss';
import List from '@src/ui-kit/list/list';

export default function Navigation() {
  return <nav className='nav'>
    <List
      customClass='nav-list'
      direction='horizontal'
      nestedItemsStyle='popup'
      items={[
        {
          text: 'УСЛУГИ ПО РЕМОНТУ ХОЛОДИЛЬНИКОВ',
          iconPath: 'chevron-down.webp',
          iconPosition: 'after',
          subItems: [
            { iconPath: 'square-small.webp', text: 'ЗАМЕНА И РЕМОНТ КОМПОНЕНТОВ СИСТЕМЫ ОХЛАЖДЕНИЯ' },
            { iconPath: 'square-small.webp', text: 'РЕМОНТА И ЗАМЕНА ЭЛЕКТРИЧЕСКИХ КОМПОНЕНТОВ' },
            { iconPath: 'square-small.webp', text: 'ЗАМЕНА ЭЛЕМЕНТОВ СИСТЕМЫ NO FROST' },
            { iconPath: 'square-small.webp', text: 'ЗАМЕНА И РЕМОНТ МЕХАНИЧЕСКИХ УЗЛОВ' },
            { iconPath: 'square-small.webp', text: 'РЕМОНТ ДВЕРЕЙ И КОРПУСА' },
            { iconPath: 'square-small.webp', text: 'ПРОЧИЕ УСЛУГИ' },
          ],
        },
        {
          text: 'ВИДЫ ХОЛОДИЛЬНИКОВ',
          iconPath: 'chevron-down.webp',
          iconPosition: 'after',
          subItems: [
            { iconPath: 'square-small.webp', text: 'РЕМОНТ БЫТОВЫХ ХОЛОДИЛЬНИКОВ' },
            { iconPath: 'square-small.webp', text: 'РЕМОНТ КОММЕРЧЕСКИХ ХОЛОДИЛЬНИКОВ' },
            { iconPath: 'square-small.webp', text: 'РЕМОНТ СПЕЦИАЛЬНЫХ ХОЛОДИЛЬНЫХ УСТАНОВОК' },
            { iconPath: 'square-small.webp', text: 'РЕМОНТ ПРОМЫШЛЕННЫХ СИСТЕМ ОХЛАЖДЕНИЯ' },
          ],
        },
        {
          text: 'ЦЕНЫ',
        },
        {
          text: 'ОПЛАТА',
        },
        {
          text: 'ОТЗЫВЫ',
        },
        {
          text: 'О КОМПАНИИ',
        },
        {
          text: 'КОНТАКТЫ',
        },
      ]} />
  </nav>
}