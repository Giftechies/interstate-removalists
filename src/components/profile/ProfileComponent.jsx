'use client'
import { useCallback, useEffect, useState } from "react";
import ProfileSidebar from "./ProfileSidebar";
import OrderHistory from "./OrderHistory";
import ChangePassword from "./ChangePassword";
import { useSelector } from "react-redux";
import { Orders } from "@/data/formdata";
import Cookies from 'js-cookie'
import toast from "react-hot-toast";

export default function ProfileComponent() {
    const {user} = useSelector((state)=>state.user)
  
    
    const [step, setStep] = useState(0)
    const component = [OrderHistory, ChangePassword]
    const CurrentComponent = component[step]
    const [order,setOrder] = useState([])
    const token = Cookies.get('authToken')
    const fetchOrder = useCallback( async ()=>{
        try {
               const res = await Orders(token)
        console.log(res,'profile components res');
        if(res.success){
            console.log(res.data.data,'profile components res');
            setOrder(res?.data?.data)

        }
            
        } catch (error) {
            toast.error(error.message || 'Order not load. Please try again!')
            
        }
     
    },[token])
    useEffect(()=>{
        if(token) fetchOrder()
    },[token,fetchOrder])

    const stepHandler = (step)=>{
        setStep(step)
        

    }


    return (
        <section className=" pt-8 pb-10 " >
            <div className="container grid grid-cols-12 gap-4 "  >
                {/* slidebar */}
                <aside className=" col-span-3 " >
                    <ProfileSidebar stepHandler={stepHandler} currentStep={step} user={user} />
                </aside>
                <main className="col-span-9">
                    <CurrentComponent order={order}  />
                </main>

                {/* main content */}

            </div>

        </section>



    )
}