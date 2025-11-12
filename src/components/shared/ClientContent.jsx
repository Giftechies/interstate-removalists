"use client";

import SmoothScroll from "@/components/animations/SmoothScroll";
import ScrollProgressButton from "@/components/shared/scroll-top/ScrollProgressButton";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserProfile } from "@/app/store/reducers/userSlice";
import Cookies from 'js-cookie'

export default function ClientContent({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);

  // Detect open dialogs (for SmoothScroll toggle)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isOpen = !!document.querySelector('[data-state="open"]');
      setModalOpen(isOpen);
    });

    observer.observe(document.body, { subtree: true, attributes: true });
    return () => observer.disconnect();
  }, []);

  // Fetch user profile on app load if token exists
 useEffect(() => {
  const token = Cookies.get("authToken");

  console.log(token,'token');
  
 console.log(user,"user in clietn");
 
  
  if (token && !user) {
    console.log(token,'calling client');
    
    dispatch(UserProfile(token));
  }
}, [user]);




  return (
    <>
      {!modalOpen && <SmoothScroll />}
      {children}
      <Toaster position="top-right" reverseOrder={false} />
      <ScrollProgressButton />
    </>
  );
}
