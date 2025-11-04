"use client"
import { useState } from "react"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogOverlay
} from "../../components/ui/dialog"
import { OrderCancel } from "@/data/formdata"
import toast from "react-hot-toast"
import { Loader2 } from "lucide-react"

export default function CancelOrder({ buttonclass, OrderId }) {

    const [loading, setloading] = useState(false)
    const [reason, setresion] = useState()
  

    const CancelHandle = async ()=>{
       if (!reason?.trim()) {
  toast.error("Please enter a reason before cancelling.");
  return;
}
  const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to cancel this order.");
      return;
    }

        setloading(true)
        try {
            console.log("cancel",OrderId);

            const res = await OrderCancel(OrderId,reason,token)
        
                  if (res?.success) {
        toast.success("Move cancelled successfully!");
        // Optional: trigger revalidation or refresh
      } else {
        toast.error(res?.message || "Failed to cancel the move.");
      }
    
        } catch (error) {
            
        }finally{
            setloading(false)
        }
    }
    




    return (
        <Dialog>
            <DialogTrigger asChild >
                <button className={`${buttonclass}`} >
                    cancel
                </button>

            </DialogTrigger>
              <DialogOverlay className="fixed inset-0 bg-black-4/40 backdrop-blur-sm transition-all duration-300" />
            <DialogContent  >
                <DialogHeader>


                    <DialogTitle>Are you sure to cancel this Move?</DialogTitle>
                    <DialogDescription>
                        Help us improve by sharing a short reason.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <input onChange={(e) => setresion(e.target.value)} type="text" name="reason" className="formInput" placeholder="Please enter your reason." />
                    
                </div>


                {/* buttons */}
                <DialogFooter>
                    


                    <div className="flex gap-3" >
                        <button onClick={() =>{CancelHandle()}} className={` ${loading?"cursor-not-allowed opacity-70 ":`${buttonclass}`} `}  >{loading?Confirm:(<> <Loader2 className="animation-spin" />  </>)}</button>
                        <DialogClose asChild >
                            <button type="button" className={`${buttonclass}`}  >Cancel</button>
                        </DialogClose>
                    </div>
                </DialogFooter>


            </DialogContent>
        </Dialog>
    )
}