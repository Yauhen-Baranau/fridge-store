import Accordion from "@ui-kit/accordion/accordion";
import React from "react";

export const problemsListItemFactory = ({
  title,
  items,
  isMobile,
  styles,
}: {
  title: string;
  items: Array<{
    title: string;
    titleComment?: string;
    tell: string;
    cause: string;
  }>;
  isMobile: boolean;
  styles: Record<string, string>;
}) => {
  return {
    content: (
      <Accordion
        toggleAreaCustomClass={styles["problem-category-toggle-area"]}
        toggleAreaContent={
          <span className={styles["problem-category-title"]}>{title}</span>
        }
        contentWrapperCustomClass={styles["problem-category-content-wrapper"]}
        content={
          <table>
            <tbody>
              {items.map((item, index) => {
                const titleContent = (
                  <>
                    <p className={styles["problem-title"]}>{item.title}</p>
                    {item.titleComment && (
                      <p className={styles["problem-title-comment"]}>
                        {item.titleComment}
                      </p>
                    )}
                  </>
                );
                const tellContent = (
                  <>
                    <span className={styles["problem-small-heading"]}>
                      Признак:
                    </span>
                    <br />
                    <br />
                    <span className={styles["problem-plaintext"]}>
                      {item.tell}
                    </span>
                  </>
                );
                const causeContent = (
                  <>
                    <span className={styles["problem-small-heading"]}>
                      Возможные причины:
                    </span>
                    <br />
                    <br />
                    <span className={styles["problem-plaintext"]}>
                      {item.cause}
                    </span>
                  </>
                );
                return !isMobile ? (
                  <tr key={index}>
                    <td>{titleContent}</td>
                    <td>{tellContent}</td>
                    <td>{causeContent}</td>
                  </tr>
                ) : (
                  <React.Fragment key={index}>
                    <tr>
                      <td>{titleContent}</td>
                    </tr>
                    <tr>
                      <td>{tellContent}</td>
                    </tr>
                    <tr>
                      <td>{causeContent}</td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        }
      />
    ),
  };
};
