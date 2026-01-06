export interface ShowDialogParams {
  withCloseButton?: boolean;
  withBackdropClose?: boolean;
  withBackdropShadow?: boolean;
  transparentBackdrop?: boolean;
  customPosition?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  onClose?: () => void;
}

export interface DialogContextProps {
  showDialog: (content?: React.ReactNode, params?: ShowDialogParams) => void;
  setDialogContent: (content: React.ReactNode) => void;
  closeDialog: () => void;
  isOpen: boolean;
}
