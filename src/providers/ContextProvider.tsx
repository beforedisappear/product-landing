"use client";

import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
  type PropsWithChildren,
} from "react";

interface Props extends PropsWithChildren {}

type ContextValue = {
  showContactUsModal: boolean;
  setShowContactUsModal: Dispatch<SetStateAction<boolean>>;
};

export const Context = createContext<ContextValue | null>(null);

export function ContextProvider({ children }: Props) {
  const [showContactUsModal, setShowContactUsModal] = useState(false);

  return (
    <Context value={{ showContactUsModal, setShowContactUsModal }}>
      {children}
    </Context>
  );
}
