import Accordion from "@ui-kit/accordion/accordion";
import styles from './footer-section.module.scss';
import useResponsive from "@hooks/use-responsive";

export default function FooterSection({
  title,
  content,
  footerContent,
  isContacts = false,
}: {
  title: string;
  content: React.ReactNode;
  footerContent: React.ReactNode;
  isContacts?: boolean;
}) {
  const { isMobile } = useResponsive();

  const titleJsx = <h3 className={styles["footer-column-title"]}>{title}</h3>;
  const contentJsx = (
    <div className={styles["footer-column-content"]}>{content}</div>
  );
  const footerContentJsx = (
    <div className={styles["footer-column-footer"]}>{footerContent}</div>
  );

  return !isMobile || isContacts ? (
    <div className={styles["footer-column"]}>
      {titleJsx}
      {contentJsx}
      {footerContentJsx}
    </div>
  ) : (
    <Accordion
      toggleAreaContent={titleJsx}
      content={
        <>
          {contentJsx}
          {footerContentJsx}
        </>
      }
      toggleAreaCustomClass={styles["footer-accordion-toggle-area"]}
      contentWrapperCustomClass={styles["footer-accordion-content-wrapper"]}
      buttonStyle="chevron"
    />
  );
};
