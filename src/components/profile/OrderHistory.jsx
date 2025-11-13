'use client'

import { Truck } from "lucide-react";
import SectionTitle from "../shared/SectionTitle";
import CancelOrder from "./CancelOrder"
import RescheduleOrder from "./RescheduleOrder"
import { useSelector } from "react-redux";



const buttonclass = " bg-prim px-4 py-2 rounded-lg text-white-1 hover:opacity-90  "

export default function OrderHistory({ order }) {

    const { user } = useSelector((state) => state.user)

    return (
        <main className="" >

            <SectionTitle text={`welcome ${user?.name}`} />
            <p>Lorem ipsum dolor sit amet consectetur. </p>

            {/* orders history  */}
            <div className="flex flex-col gap-4 mt-4" >
                <h3 className="h4 font-semibold" >Order History</h3>

                {/* order preview */}
                {order?.map((item, id) => {
                    return (
                        <div key={id} className="grid grid-cols-12 shadow border  p-4 " >
                            <div className="left col-span-8 ">
                                <label className="flex gap-2" ><Truck />Order Id: <span>{item?.id}</span>  </label>
                                {/* date, to and from */}
                                <div className="flex flex-col gap-2 mt-4" >
                                    <span>Date: {item?.from_date.split(" ")[0]}</span>
                                    <span>To: {item.pick_address}</span>
                                    <span>From: {item?.drop_point?.drop_address}</span>
                                </div>

                            </div>
                            <div className="right col-start-9 col-span-3  flex flex-col  justify-center ">
                                <span>Price:{`2000`}</span>
                                {/* button */}
                                <div className="flex  gap-4 mt-4 " >
                                    <RescheduleOrder buttonclass={buttonclass} OrderId={item.id} />
                                    <CancelOrder buttonclass={buttonclass} OrderId={item.id} />
                                </div>

                            </div>


                        </div>
                    )
                })}
            </div>

        </main>
    )
}