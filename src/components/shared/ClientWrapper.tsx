"use client";

import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import SmoothScroll from "@/components/animations/SmoothScroll";
import ScrollProgressButton from "@/components/shared/scroll-top/ScrollProgressButton";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);

  // Detect Radix Dialog state globally
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isOpen = !!document.querySelector('[data-state="open"]');
      setModalOpen(isOpen);
    });

    observer.observe(document.body, { subtree: true, attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <Provider store={store}>
      {/* Only apply smooth scroll when no dialog is open */}
      {!modalOpen && <SmoothScroll />}

      {children}
      <Toaster position="top-right" reverseOrder={false} />
      <ScrollProgressButton />
    </Provider>
  );
}
