import useResponsive from "@hooks/use-responsive";
import Accordion from "@ui-kit/accordion/accordion";
import List from "@ui-kit/list/list";
import { ListItem } from "@ui-kit/list/list-item-interface";
import Image from "next/image";
import styles from './advantage.module.scss';

export default function Advantage({
  imagePath,
  title,
  subtitle,
  items,
}: {
  imagePath: string;
  title: string;
  subtitle?: string;
  items: Array<ListItem>;
}) {
  const { isMobile } = useResponsive();

  const advantageHeader = (
    <div className={styles["advantage-header"]}>
      <Image src={imagePath} width={46} height={46} alt="Иконка" />
      <h2 className={styles["advantage-title"]}>
        {title}
        {subtitle && (
          <>
            <br />
            <span className={styles["advantage-subtitle"]}>{subtitle}</span>
          </>
        )}
      </h2>
    </div>
  );
  const advantageContent = (
    <List customClass={styles["advantage-content"]} items={items.map(item => ({
      ...item,
      icon: {
        path: "/icons/circle.svg",
        width: 7,
        height: 7,
      },
    }))} />
  );
  return !isMobile ? (
    <div className={styles.advantage}>
      {advantageHeader}
      {advantageContent}
    </div>
  ) : (
    <Accordion
      customClass={styles.advantage}
      toggleAreaContent={advantageHeader}
      content={advantageContent}
      toggleAreaCustomClass={styles["advantage-toggle-area"]}
      contentWrapperCustomClass={styles["advantage-content-wrapper"]}
      buttonStyle="chevron"
    />
  );
};