import React from "react";

export default function useModal() {
  const [isOpen, setOpen] = React.useState<boolean>(true);

  const open = () => {
    isOpen === false ? setOpen(true) : setOpen(isOpen);
  };

  const close = () => {
    isOpen === true ? setOpen(false) : setOpen(isOpen);
  };

  return {
    isOpen,
    open,
    close,
  };
}
