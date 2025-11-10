"use client";

import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import ClientContent from "./ClientContent";

export default function ClientWrapper({ children }) {
  return (
    <Provider store={store}>
      <ClientContent>{children}</ClientContent>
    </Provider>
  );
}
