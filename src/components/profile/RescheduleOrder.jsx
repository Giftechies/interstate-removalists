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
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import { OrderReschedule } from "@/data/formdata";
import Cookies from "js-cookie";

export default function RescheduleOrder({ buttonclass, OrderId }) {
  const [loading, setLoading] = useState(false);
  const [reason, setReason] = useState("");
  const [newDate, setNewDate] = useState();

  const handleReschedule = async () => {
    if (!reason.trim()) return toast.error("Please enter a reason.");
    if (!newDate) return toast.error("Please select a new date.");

    const token = Cookies.get("authToken");
    if (!token) return toast.error("Please login first.");

    setLoading(true);

    try {
      const formattedDate = dayjs(newDate).format("YYYY-MM-DD");
      const res = await OrderReschedule(OrderId, reason, formattedDate, token);

      if (res?.success) {
        toast.success(res.message || "Move rescheduled successfully!");
      } else {
        toast.error(res?.message || "Failed to reschedule.");
      }
    } catch (error) {
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

      <DialogContent className="w-[90vw] max-w-md rounded-2xl p-6 shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Reschedule Move
          </DialogTitle>
          <DialogDescription className="text-sm">
            Select a new date and provide a short reason.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-5">
          {/* Reason input */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Reason</label>
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter reason..."
              className="rounded-lg border px-3 py-2 text-sm outline-none 
                         focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Calendar */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Choose New Date</label>
            <div className="rounded-lg border overflow-hidden">
              <Calendar
                mode="single"
                selected={newDate}
                onSelect={setNewDate}
                disabled={(date) => date < new Date()}
                className="rounded-md"
              />
            </div>
          </div>
        </div>

        <DialogFooter className="mt-6 flex justify-end gap-3">
          <DialogClose asChild>
            <button
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 
                        hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </DialogClose>

          <button
            onClick={handleReschedule}
            disabled={loading}
            className={`px-4 py-2 rounded-lg bg-blue-600 text-white 
                        hover:bg-blue-700 transition 
                        ${loading && "opacity-70 cursor-not-allowed"}`}
          >
            {loading ? "Rescheduling..." : "Confirm"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
