"use client";

import { useState, useEffect, useMemo } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { setCalendar } from "@/app/store/reducers/formSlice";

export default function Calendar({ setValue }) {
  const dispatch = useDispatch();
  const stored = useSelector((state) => state.form.calendar);

  // --- State Setup ---
  const [mode, setMode] = useState(stored?.mode || "On");
  const [range, setRange] = useState(stored?.range || "Exact date");
  const [selected, setSelected] = useState(
    (stored?.dates || []).map((d) => dayjs(d))
  );
  const [month, setMonth] = useState(dayjs());

  // --- Derived Data (for rendering the month grid) ---
  const days = useMemo(() => {
    const start = month.startOf("month").startOf("week");
    const end = month.endOf("month").endOf("week");
    const result = [];
    for (let d = start; d.isBefore(end); d = d.add(1, "day")) result.push(d);
    return result;
  }, [month]);

  // --- Date Selection Logic ---
  const handleSelect = (day) => {
    if (day.isBefore(dayjs(), "day")) return; // prevent past dates

    if (mode === "Between") {
      if (selected.length < 1) return setSelected([day]);
      if (selected.length === 1)
        return setSelected([selected[0], day].sort((a, b) => a - b));
      setSelected([day]); // reset when 2 already selected
    } else {
      setSelected([day]);
    }
  };

  // --- Check if a date is selected ---
  const isPicked = (day) => {
    if (mode === "Between" && selected.length === 2)
      return (
        day.isSame(selected[0], "day") ||
        day.isSame(selected[1], "day") ||
        (day.isAfter(selected[0], "day") && day.isBefore(selected[1], "day"))
      );
    return selected.some((d) => d.isSame(day, "day"));
  };

  // --- Sync Redux + RHF ---
  useEffect(() => {
    const payload = {
      mode,
      range,
      dates: selected.map((d) => d.toISOString()),
    };
    dispatch(setCalendar(payload));
    setValue("Calendar", payload);
  }, [mode, range, selected, dispatch, setValue]);

  // --- UI ---
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-1">When is your move?</h2>
      <p className="text-gray-500 mb-4">
        Select all that apply and give details where possible.
      </p>

      {/* Modes */}
      <div className="flex gap-2 mb-4">
        {["On", "Between", "I'm unsure"].map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => {
              setMode(m);
              setSelected([]);
            }}
            className={`px-4 py-2 rounded-full border transition ${
              mode === m
                ? "bg-zinc-700 text-white border-zinc-700"
                : "bg-white text-black border-gray-300"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Calendar */}
      <div className="border rounded-lg p-4 w-full inline-block">
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <button onClick={() => setMonth(month.subtract(1, "month"))}>←</button>
          <span className="font-semibold">{month.format("MMMM YYYY")}</span>
          <button onClick={() => setMonth(month.add(1, "month"))}>→</button>
        </div>

        {/* Weekdays */}
        <div className="grid grid-cols-7 text-center font-semibold mb-2">
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 text-center">
          {days.map((day, i) => {
            const isPast = day.isBefore(dayjs(), "day");
            const isOutside = day.month() !== month.month();

            return (
              <button
                key={i}
                type="button"
                disabled={isPast || isOutside}
                onClick={() => handleSelect(day)}
                className={`w-8 h-8 mx-auto rounded-full text-sm transition ${
                  isPicked(day)
                    ? "bg-zinc-700 text-white"
                    : isOutside
                    ? "text-gray-400"
                    : isPast
                    ? "text-gray-300 cursor-not-allowed"
                    : "hover:bg-gray-200"
                }`}
              >
                {day.date()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Range Options */}
      <div className="flex gap-2 mt-4 flex-wrap">
        {["Exact date", "± 3 days", "± a week", "± a fortnight"].map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRange(r)}
            className={`px-4 py-2 rounded-full border ${
              range === r
                ? "bg-zinc-700 text-white border-zinc-700"
                : "bg-white text-black border-gray-300"
            }`}
          >
            {r}
          </button>
        ))}
      </div>
    </div>
  );
}
