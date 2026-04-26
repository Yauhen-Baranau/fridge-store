import Image from '@ui-kit/static-image/static-image';
import styles from './difference.module.scss';

export default function Difference({
  content,
  iconPath,
  iconAlt,
}: {
  content: React.ReactNode,
  iconPath: string,
  iconAlt: string,
}) {
  return <div className={styles.difference}>
    <Image src={iconPath} width={46} height={46} alt={iconAlt} />
    <p className={styles["difference-text"]}>{content}</p>
  </div>
}