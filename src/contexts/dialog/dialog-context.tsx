"use client";

import Dialog from "@ui-kit/dialog/dialog";
import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { DialogContextProps, ShowDialogParams } from "./interfaces";

const DialogContext = createContext<DialogContextProps>({
  showDialog: () => {},
  setDialogContent: () => {},
  closeDialog: () => {},
  isOpen: false,
});

export const DialogContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState<React.ReactNode>(<></>);
  const [dialogParams, setDialogParams] = useState<ShowDialogParams>({
    withCloseButton: true,
    withBackdropClose: false,
    withBackdropShadow: false,
    transparentBackdrop: false,
    onClose: () => {},
  });

  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeDialog = useCallback(() => {
    dialogRef?.current?.close();
    dialogParams.onClose?.();
    setDialogParams({});
    setIsOpen(false);
  }, [dialogRef, dialogParams.onClose]);

  const pathname = usePathname();
  useEffect(() => closeDialog(), [pathname]);

  return (
    <DialogContext.Provider
      value={{
        showDialog: (content?: React.ReactNode, params?: ShowDialogParams) => {
          if (content) {
            setDialogContent(content);
          }
          if (params) {
            setDialogParams(params);
          }
          dialogRef?.current?.showModal();
          setIsOpen(true);
        },
        setDialogContent,
        closeDialog,
        isOpen,
      }}
    >
      {children}
      <Dialog dialogRef={dialogRef} {...dialogParams}>
        {dialogContent}
      </Dialog>
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);
