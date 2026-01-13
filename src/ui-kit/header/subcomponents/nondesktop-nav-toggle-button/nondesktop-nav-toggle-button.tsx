import composeClassName from "@helpers/compose-class-name";
import Button from "@ui-kit/button/button";
import DialogForm from "@ui-kit/dialog-form/dialog-form";
import Navigation from "@ui-kit/navigation/navigation";
import { useState } from "react";
import { useDialog } from "@contexts/dialog/dialog-context";
import useResponsive from "@hooks/use-responsive";
import styles from './nondesktop-nav-toggle-button.module.scss';
import MobileNavMenuContacts from "../mobile-nav-menu-contacts/mobile-nav-menu-contacts";

export default function NondesktopNavToggleButton() {
  const { isMobile } = useResponsive();
  const { showDialog } = useDialog();
  const [navigationDialogOpen, setNavigationDialogOpen] = useState(false);

  return <Button
    customClass={composeClassName(
      styles["navigation-dialog-toggle-button"],
      navigationDialogOpen && styles.toggled,
    )}
    style="text-only"
    icon={{
      path: navigationDialogOpen
        ? "/icons/cross.svg"
        : "/icons/menu.svg",
      width: isMobile ? 20 : 25,
      height: isMobile ? 20 : 25,
    }}
    onClick={() => {
      showDialog(
        <div className={styles["dialog-content"]}>
          <Navigation withContacts={!isMobile} />
          {isMobile && <MobileNavMenuContacts />}
          <Button
            customClass={styles["call-me-back-dialog-button"]}
            text="Заказать звонок"
            icon={
              !isMobile
                ? undefined
                : {
                  path: "/icons/phone-4.svg",
                  width: 24,
                  height: 24,
                }
            }
            onClick={() => {
              showDialog(<DialogForm />);
              setNavigationDialogOpen(false);
            }}
          />
        </div>,
        {
          withCloseButton: false,
          transparentBackdrop: true,
          withBackdropClose: true,
          customPosition: {
            top: 80,
            right: isMobile ? 30 : 20,
          },
          onClose: () => setNavigationDialogOpen(false),
        },
      );
      setNavigationDialogOpen(true);
    }}
  />
}