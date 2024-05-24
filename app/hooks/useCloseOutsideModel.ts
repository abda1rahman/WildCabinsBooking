import { MutableRefObject, useEffect, useRef } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const useCloseOutsideModel = ({
  isOpen,
  setIsOpen,
}: Props): MutableRefObject<HTMLDivElement | null> => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isOpen, setIsOpen]);

  return menuRef;
};

export default useCloseOutsideModel;
