import Image from "next/image";

export const faqListItemFactory = ({
  question,
  answer,
  styles,
}: {
  question: string,
  answer: string,
  styles: Record<string, string>,
}) => {
  return {
    content: <details className={styles['faq-list-item']}>
      <summary className={styles['faq-list-item-question']}>
        {question}
        <Image className={styles['plus-icon']} src='/icons/plus.svg' width={24} height={24} alt='Плюс' />
      </summary>
      <p className={styles['faq-list-item-answer']}>{answer}</p>
    </details>
  }
};