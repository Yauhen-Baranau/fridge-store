import Image from 'next/image';
import styles from './page.module.scss';
import CallMeBackForm from '@ui-kit/call-me-back-form/call-me-back-form';
import List from '@ui-kit/list/list';
import Accordion from '@ui-kit/accordion/accordion';

export default async function CommonFridgeProblemsPage() {
  const problemsListItemFactory = ({
    title,
    items,
  }: {
    title: string,
    items: Array<{
      title: string,
      titleComment?: string,
      tell: string,
      cause: string
    }>,
  }) => {
    return {
      content: <Accordion
        toggleAreaCustomClass={styles['problem-category-toggle-area']}
        toggleAreaContent={<span className={styles['problem-category-title']}>{title}</span>}
        contentWrapperCustomClass={styles['problem-category-content-wrapper']}
        content={<table>
          <tbody>
            {items.map((item, index) => <tr key={index}>
              <td>
                <p className={styles['problem-title']}>{item.title}</p>
                {item.titleComment && <p className={styles['problem-title-comment']}>{item.titleComment}</p>}
              </td>
              <td>
                <span className={styles['problem-small-heading']}>Признак:</span>
                <br /><br />
                <span className={styles['problem-plaintext']}>{item.tell}</span>
              </td>
              <td>
                <span className={styles['problem-small-heading']}>Возможные причины:</span>
                <br /><br />
                <span className={styles['problem-plaintext']}>{item.cause}</span>
              </td>
            </tr>)}
          </tbody>
        </table>}
      />
    }
  };

  return <main className={styles['common-fridge-problems']}>
    <h1 className={styles.title}>Частые проблемы с&nbsp;холодильником</h1>
    <div className={styles['image-wrapper']}>
      <Image className={styles.image} src='/water-bottles.webp' fill alt='Бутылки с водой' />
    </div>
    <CallMeBackForm
      title='Не нашли решение своей проблемы?'
      submitButtonText='Вызвать мастера'
      customClass={styles['call-me-back-form']}
    />
    <List customClass={styles['problems-list']} items={[
      {
        title: 'ПРОБЛЕМЫ С ОХЛАЖДЕНИЕМ',
        items: [
          {
            title: 'Не морозит',
            titleComment: '(морозильная камера не набирает температуру)',
            tell: 'В морозильной камере температура выше нормы, продукты размораживаются.',
            cause: 'Утечка фреона, неисправность компрессора, засор капиллярной трубки, поломка термостата.',
          },
          {
            title: 'Плохо морозит',
            titleComment: '(температура выше нормы)',
            tell: 'Охлаждение слабее, чем должно быть, продукты портятся быстрее.',
            cause: 'Засор конденсатора, недостаток фреона, поломка терморегулятора, неисправность вентилятора.',
          },
          {
            title: 'Перемораживает',
            titleComment: '(основная камера или морозилка слишком холодные)',
            tell: 'Температура ниже заданной, продукты замерзают даже в основной камере.',
            cause: 'Сбой в работе термостата, неисправность датчика температуры, неполадки в плате управления.',
          },
          {
            title: 'Неравномерное охлаждение',
            titleComment: '(разные температуры в камерах)',
            tell: 'В разных отделениях холодильника разная температура, может быть перегрев в одной зоне и переохлаждение в другой.',
            cause: 'Засор воздушных каналов, поломка вентилятора, неисправность системы No Frost.',
          },
          {
            title: 'Покрывается льдом или снегом',
            titleComment: '(образуется наледь)',
            tell: 'В морозильной или холодильной камере появляется слой льда или снега.',
            cause: 'Засор дренажа, неисправность нагревателя оттайки, износ уплотнителя двери.',
          },
          {
            title: 'Основная камера не охлаждает',
            tell: 'Морозильная камера работает, но в холодильном отделении температура слишком высокая.',
            cause: 'Поломка вентилятора, засор дренажа, неисправность датчиков температуры.',
          },
          {
            title: 'Морозилка не охлаждает',
            tell: 'Основная камера работает нормально, а морозильное отделение не замораживает.',
            cause: 'Утечка фреона, неисправность компрессора, проблемы с клапаном переключения.',
          },
        ]
      },
      {
        title: 'ПРОБЛЕМЫ С РАБОТОЙ ХОЛОДИЛЬНИКА',
        items: [],
      },
      {
        title: 'ШУМЫ И ПОСТОРОННИЕ ЗВУКИ',
        items: [],
      },
      {
        title: 'ПРОБЛЕМЫ С УТЕЧКАМИ И ПРОТЕКАНИЕМ',
        items: [],
      },
      {
        title: 'ПРОБЛЕМЫ С КОМПЛЕКТУЮЩИМИ',
        items: [],
      },
    ].map(problemsListItemFactory)} />
  </main>
}