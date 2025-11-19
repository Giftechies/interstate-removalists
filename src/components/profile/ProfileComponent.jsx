'use client'
import { useCallback, useEffect, useState } from "react";
import ProfileSidebar from "./ProfileSidebar";
import OrderHistory from "./OrderHistory";
import ChangePassword from "./ChangePassword";
import { useSelector } from "react-redux";
import { Orders } from "@/data/formdata";
import Cookies from 'js-cookie'
import toast from "react-hot-toast";
import PersonalInfo from './PersonalInfo'

export default function ProfileComponent() {
    const {user} = useSelector((state)=>state.user)
    const [step, setStep] = useState(0)
    const component = [PersonalInfo,ChangePassword,OrderHistory]
    const CurrentComponent = component[step]
    const [order,setOrder] = useState([])
    const token = Cookies.get('authToken')
    

    // functions
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

console.log(order);

    return (
        <section className=" pt-8 pb-10 " >
            <div className="container grid grid-cols-12 gap-12 "  >
                {/* slidebar */}
                <aside className=" col-span-3 " >
                    <ProfileSidebar stepHandler={stepHandler} currentStep={step} user={user} />
                </aside>
                {/* main content */}
                <main className=" col-start-4 col-span-8">
                    <CurrentComponent order={order} user={user}  />
                </main>


            </div>

        </section>



    )
}