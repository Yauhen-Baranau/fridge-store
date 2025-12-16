'use client';

import Dialog from "@ui-kit/dialog/dialog";
import { createContext, useContext, useRef, useState } from "react";

interface DialogContextProps {
  showDialog: (content?: React.ReactNode) => void,
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
  const dialogRef = useRef<HTMLDialogElement>(null);

  return <DialogContext.Provider value={{
    showDialog: (content?: React.ReactNode) => {
      if (content) {
        setDialogContent(content);
      }
      dialogRef?.current?.showModal();
    },
    setDialogContent,
    closeDialog: () => dialogRef?.current?.close(),
  }}>
    {children}
    <Dialog dialogRef={dialogRef}>{dialogContent}</Dialog>
  </DialogContext.Provider>
}

export const useDialog = () => useContext(DialogContext);