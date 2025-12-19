'use client';

import Dialog from "@ui-kit/dialog/dialog";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState } from "react";

interface ShowDialogParams {
  withCloseButton?: boolean,
  withBackdropClose?: boolean,
  withBackdropShadow?: boolean,
  transparentBackdrop?: boolean,
}

interface DialogContextProps {
  showDialog: (content?: React.ReactNode, params?: ShowDialogParams) => void,
  setDialogContent: (content: React.ReactNode) => void,
  closeDialog: () => void,
}

const DialogContext = createContext<DialogContextProps>({
  showDialog: () => {},
  setDialogContent: () => {},
  closeDialog: () => {},
});

export const DialogContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [dialogContent, setDialogContent] = useState<React.ReactNode>(<></>);
  const [dialogParams, setDialogParams] = useState<ShowDialogParams>({
    withCloseButton: true,
    withBackdropClose: false,
    withBackdropShadow: false,
    transparentBackdrop: false,
  });
  const dialogRef = useRef<HTMLDialogElement>(null);

  const pathname = usePathname();
  useEffect(() => dialogRef?.current?.close(), [pathname]);

  return <DialogContext.Provider value={{
    showDialog: (content?: React.ReactNode, params?: ShowDialogParams) => {
      if (content) {
        setDialogContent(content);
      }
      if (params) {
        setDialogParams(params);
      }
      dialogRef?.current?.showModal();
    },
    setDialogContent,
    closeDialog: () => dialogRef?.current?.close(),
  }}>
    {children}
    <Dialog dialogRef={dialogRef} {...dialogParams}>{dialogContent}</Dialog>
  </DialogContext.Provider>
}

export const useDialog = () => useContext(DialogContext);