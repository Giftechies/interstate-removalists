"use client";

import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import SmoothScroll from "@/components/animations/SmoothScroll";
import ScrollProgressButton from "@/components/shared/scroll-top/ScrollProgressButton";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      {/* <SmoothScroll /> */}
      {children}
      <ScrollProgressButton />
    </Provider>
  );
}
