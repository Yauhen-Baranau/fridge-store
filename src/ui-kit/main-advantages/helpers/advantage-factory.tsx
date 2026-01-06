import Accordion from "@ui-kit/accordion/accordion";
import List from "@ui-kit/list/list";
import { ListItem } from "@ui-kit/list/list-item-interface";
import Image from "next/image";

export const advantageFactory = ({
  imagePath,
  title,
  subtitle,
  items,
  isMobile,
  styles,
}: {
  imagePath: string;
  title: string;
  subtitle?: string;
  items: Array<ListItem>;
  isMobile: boolean;
  styles: Record<string, string>;
}) => {
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
    <List customClass={styles["advantage-content"]} items={items} />
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
