"use client";

import "./popup.scss";
import composeClassName from "@src/helpers/compose-class-name";

export default function PopupWrapper({
  children,
  popupContent,
  customClass,
}: {
  children: React.ReactNode;
  popupContent: React.ReactNode;
  customClass?: string;
}) {
  return (
    <div className={composeClassName("popup-outer-wrapper", customClass)}>
      <div className="popup-trigger-wrapper">{children}</div>
      <div className="popup-content-wrapper">{popupContent}</div>
    </div>
  );
}
