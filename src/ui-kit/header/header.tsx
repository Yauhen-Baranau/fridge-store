"use client";

import Button from "@ui-kit/button/button";
import styles from "./header.module.scss";
import composeClassName from "@src/helpers/compose-class-name";
import DialogForm from "../dialog-form/dialog-form";
import { useDialog } from "@contexts/dialog/dialog-context";
import useResponsive from "@hooks/use-responsive";
import Logo from "./subcomponents/logo/logo";
import NondesktopIcons from "./subcomponents/nondesktop-icons/nondesktop-icons";
import Contacts from "./subcomponents/contacts/contacts";

export default function Header({ customClass }: { customClass?: string }) {
  const { showDialog } = useDialog();
  const { isDesktop, isIpad, isMobile, initialResizeSettled } = useResponsive();

  return (
    initialResizeSettled && (
      <header className={composeClassName(styles.header, customClass)} itemScope itemType='https://schema.org/WPHeader'>
        <Logo />
        {!isMobile && <Contacts />}
        {isDesktop && (
          <Button
            customClass={styles["call-me-back-button"]}
            text="Заказать звонок"
            onClick={() => showDialog(<DialogForm />)}
          />
        )}
        {(isIpad || isMobile) && <NondesktopIcons />}
      </header>
    )
  );
}
