"use client";

import { StoreModal } from "@/components/modals/store-modal";
import { useEffect, useState } from "react";

// preventing hydration error between server and client
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
