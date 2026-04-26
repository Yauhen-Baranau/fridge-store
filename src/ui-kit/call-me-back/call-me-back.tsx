"use client";

import Button from "@ui-kit/button/button";
import styles from "./call-me-back.module.scss";
import Form from "@ui-kit/form/form";
import composeClassName from "@src/helpers/compose-class-name";
import { contactHrefs, contactInfo } from "@constants/contact-info";
import { Validators } from "../form/validators";
import { useDialog } from "@contexts/dialog/dialog-context";
import WeWillCallYouBack from "@ui-kit/we-will-call-you-back/we-will-call-you-back";
import useResponsive from "@hooks/use-responsive";
import { validationRegexes } from "@constants/validation-regexes";
import BackgroundSnowflakes from "@ui-kit/background-snowflakes/background-snowflakes";
import { Body, useApi } from "@hooks/useApi";
import { useEffect } from "react";
import Sorry from "@ui-kit/sorry/sorry";

export default function CallMeBack({ customClass }: { customClass?: string }) {
  const { showDialog } = useDialog();
  // const { isMobile } = useResponsive();

  const { request, error, success } = useApi();

  useEffect(() => {
    if (error) {
      showDialog(<Sorry />);
    }
    if (success) {
      showDialog(<WeWillCallYouBack />);    }
  }, [success, error]);


  const handleClick = async <T,>(formValue: T): Promise<void> => {
    await request(formValue as Body);
  };

  // if (loading) {
  //   return  <div className="lds-hourglass"></div>
  // }

  return (
    <section className={composeClassName(styles["call-me-back"], customClass)}>
      <div className={styles["call-me-back-left-block"]}>
        <h2 className={styles["call-me-back-title"]}>Остались вопросы?</h2>
        <p className={styles["call-me-back-text"]}>
          Оставьте контактный телефон и в ближайшее время с вами свяжется наш
          специалист
        </p>
        <p className={styles["call-me-back-text"]}>
          Или позвоните по этому номеру:
        </p>
        <p className={styles["call-me-back-phone"]}>
          {contactInfo.phoneNumber}
        </p>
        <Button
          customClass={styles["call-me-back-button"]}
          text="Позвонить"
          icon={{
            path: "/icons/phone-2.svg",
            width: 24,
            height: 24,
          }}
          hoverIcon={{
            path: "/icons/phone-3.svg",
            width: 24,
            height: 24,
          }}
          style="text-only"
          onClick={() => window.open(contactHrefs.phone)}
        />
      </div>
      <Form
        customClass={styles["call-me-back-form"]}
        submitButtonText="Получить консультацию"
        // preSubmitButtonContent={
        //   <p className={styles["privacy-policy-notice"]}>
        //     Оставляя заявку Вы соглашаетесь на обработку{" "}
        //     <span className={styles.blue}>персональных данных</span>
        //   </p>
        // }
        config={{
          fieldConfigs: [
            {
              type: "text",
              name: "name",
              placeholder: "Имя",
              validators: [
                Validators.required,
                Validators.minLength(3),
                Validators.pattern(validationRegexes.name),
              ],
            },
            {
              type: "tel",
              name: "phone",
              placeholder: "Телефон",
              validators: [
                Validators.required,
                Validators.pattern(validationRegexes.phone),
              ],
            },
          ],
        }}
        submitCallback={handleClick}
      />
      <BackgroundSnowflakes snowflakes={[
        {
          snowflakeParams: { width: 118, height: 114, left: 22, top: 20, rotation: -30, opacity: 0.15 },
          desktop: true,
          ipad: true,
        },
        {
          snowflakeParams: { width: 118, height: 114, left: 22, bottom: 23, rotation: -30, opacity: 0.15 },
          desktop: true,
          ipad: true,
        },
        {
          snowflakeParams: { width: 58, height: 57, left: 22, top: 20, rotation: -30, opacity: 0.15 },
          mobile: true,
        },
        {
          snowflakeParams: { width: 58, height: 57, right: 22, top: 20, rotation: -30, opacity: 0.15 },
          mobile: true,
        },
      ]} />
    </section>
  );
}
