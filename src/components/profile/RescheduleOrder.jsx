"use client";
import { useState } from "react";
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

} from "../../components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import { OrderReschedule } from "@/data/formdata";
import Cookies from 'js-cookie'

export default function RescheduleOrder({ buttonclass, OrderId }) {
  const [loading, setLoading] = useState(false);
  const [reason, setReason] = useState("");
  const [newDate, setNewDate] = useState();

  const handleReschedule = async () => {
    if (!reason.trim()) return toast.error("Please enter a reason.");
    if (!newDate) return toast.error("Please select a new date.");

    const token = Cookies.get("authToken");
    console.log(token,'rescheduleorder');
    
    if (!token) return toast.error("Please login first.");

    setLoading(true);
    try {
      const formattedDate = dayjs(newDate).format("YYYY-MM-DD");
      console.log(formattedDate);
      
      const res = await OrderReschedule(OrderId, reason, formattedDate, token);

      if (res?.success) {
        toast.success(res.message || "Move rescheduled successfully!");
      } else {
        toast.error(res?.message || "Failed to reschedule.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={`profileButton`}>Reschedule</button>
      </DialogTrigger>
                    <DialogOverlay className="fixed inset-0 bg-black-4/40 backdrop-blur-sm transition-all duration-300" />
      <DialogContent className="w-[90vw] max-w-sm rounded-xl p-4 sm:p-6 shadow-md">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-lg font-semibold">
            Reschedule Move
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Select a new date and briefly explain why.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 mt-3">
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter reason..."
            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-500"
          />

          <div>
            <label className="text-xs text-gray-600 mb-1 block">
              Choose new date:
            </label>
            <div className="border rounded-md overflow-hidden">
              <Calendar
                mode="single"
                selected={newDate}
                onSelect={setNewDate}
                disabled={(date) => date < new Date()}
                className="max-w-full"
              />
            </div>
          </div>
        </div>

        <DialogFooter className="mt-4 flex justify-end gap-2">
          <DialogClose asChild>
            <button
              type="button"
              className={`${buttonclass} bg-gray-200 text-gray-700 hover:bg-gray-300`}
            >
              Cancel
            </button>
          </DialogClose>
          <button
            onClick={handleReschedule}
            disabled={loading}
            className={`${buttonclass} ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? "Rescheduling..." : "Confirm"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
