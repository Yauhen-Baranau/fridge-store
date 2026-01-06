import Image from "next/image";

export const listItemContentFactory = ({
  title,
  text,
  index,
  styles,
}: {
  title: string,
  text: string,
  index: number,
  styles: Record<string, string>,
}) => {
  return <>
    <div className={styles['list-item-upper-row']}>
      <Image src={`/icons/number-${index + 1}.svg`} width={24} height={24} alt={`${index}`} />
      <h3 className={styles['list-item-title']}>{title}</h3>
    </div>
    <p className={styles.plaintext}>{text}</p>
  </>;
}