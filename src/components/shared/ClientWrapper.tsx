"use client";

import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import SmoothScroll from "@/components/animations/SmoothScroll";
import ScrollProgressButton from "@/components/shared/scroll-top/ScrollProgressButton";
import { Toaster } from "react-hot-toast";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <SmoothScroll />
      {children}
      <Toaster position="top-right" reverseOrder={false} />
      <ScrollProgressButton />
    </Provider>
  );
}
