"use client";

import { useState, useEffect, useMemo } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { setCalendar } from "@/app/store/reducers/formSlice";
import { CalendarIcon } from "@heroicons/react/24/outline";

// --- Configuration ---
const MODES = ["On", "Between", "I'm unsure"];
const ON_RANGE_OPTIONS = ["Exact date", "± 3 days", "± a week", "± a fortnight"];
const UNSURE_RANGE_OPTIONS = ["In 3 months", "In 6 months", "In a year"];

// Helper to get the default range based on the mode
const getDefaultRange = (mode) =>
  mode === "I'm unsure" ? UNSURE_RANGE_OPTIONS[0] : ON_RANGE_OPTIONS[0];

// --- Main Component ---
export default function Calendar({ setValue }) {
  const dispatch = useDispatch();
  const stored = useSelector((state) => state.form.calendar);

  // --- State Setup ---
  const [mode, setMode] = useState(stored?.mode || "On");
  const [range, setRange] = useState(stored?.range || getDefaultRange(mode));
  const [selected, setSelected] = useState((stored?.dates || []).map((d) => dayjs(d)));
  // Start with the earliest selected date, or today
  const [month, setMonth] = useState(
    selected.length > 0 ? selected[0].startOf('month') : dayjs().startOf('month')
  );

  // --- Date Selection Logic ---
  const handleSelect = (day) => {
    if (day.isBefore(dayjs(), "day") || mode === "I'm unsure") return;

    if (mode === "Between") {
      if (selected.length < 1) return setSelected([day]);
      if (selected.length === 1)
        return setSelected([selected[0], day].sort((a, b) => a.valueOf() - b.valueOf()));
      setSelected([day]); // Reset to new start date
    } else { // mode === "On"
      setSelected([day]);
    }
  };

  // --- Check if a date is selected ---
  const isPicked = (day) => {
    if (mode === "Between" && selected.length === 2) {
      const [start, end] = selected;
      return (
        day.isSame(start, "day") ||
        day.isSame(end, "day") ||
        (day.isAfter(start, "day") && day.isBefore(end, "day"))
      );
    }
    return selected.some((d) => d.isSame(day, "day"));
  };

  // --- Calendar Day Generation (Two Months for "Between", One for "On") ---
  const days = useMemo(() => {
    const numMonths = mode === "Between" ? 2 : 1;
    const result = [];
    
    // Generate 6 weeks (42 days) of grid data for each month
    for (let i = 0; i < numMonths; i++) {
      const startMonth = month.add(i, 'month');
      const startOfGrid = startMonth.startOf('month').startOf('week');
      
      for (let j = 0; j < 42; j++) {
        result.push(startOfGrid.add(j, 'day'));
      }
    }
    return result;
  }, [month, mode]);


  // --- Mode Change Handler ---
  const handleModeChange = (m) => {
    setMode(m);
    setSelected([]); // Clear dates
    setRange(getDefaultRange(m)); // Set default range for new mode
    setMonth(dayjs().startOf('month')); // Reset calendar view
  };

  // --- Sync Redux + RHF ---
  useEffect(() => {
    let formattedDates = [];
    
    if (mode === "On" && selected.length === 1) {
      // Format: "25/10/2025"
      formattedDates = [selected[0].format("DD/MM/YYYY")];
    } else if (mode === "Between" && selected.length === 2) {
      // Format: "30/10/2025 - 05/11/2025"
      formattedDates = [`${selected[0].format("DD/MM/YYYY")} - ${selected[1].format("DD/MM/YYYY")}`];
    } 

    const payload = {
      mode,
      range,
      // Store the formatted string(s) for the date property
      dates: formattedDates,
    };

    // Simple check to prevent re-dispatch if data is unchanged
    const isSame =
      stored?.mode === payload.mode &&
      stored?.range === payload.range &&
      JSON.stringify(stored?.dates) === JSON.stringify(payload.dates);

    if (!isSame) {
      dispatch(setCalendar(payload));
      setValue("Calendar", payload);
    }
  }, [mode, range, selected, stored, dispatch, setValue]);

  // --- UI Components for Clarity ---

  // Component for a single day in the calendar grid
  const DayButton = ({ day, monthContext }) => {
    const isPast = day.isBefore(dayjs(), "day");
    const isOutside = day.month() !== monthContext.month();
    const isDisabled = isPast || isOutside || mode === "I'm unsure";

    return (
      <button
        type="button"
        disabled={isDisabled}
        onClick={() => handleSelect(day)}
        className={`w-8 h-8 mx-auto rounded-full text-sm transition relative ${
          isPicked(day)
            ? "bg-zinc-700 text-white"
            : isOutside || mode === "I'm unsure"
            ? "text-gray-400"
            : isPast
            ? "text-gray-300 cursor-not-allowed"
            : "hover:bg-gray-200"
        } 
        ${
          (mode === "Between" && selected.length === 2 && isPicked(day) && !day.isSame(selected[0], "day") && !day.isSame(selected[1], "day"))
            ? "rounded-none" 
            : ""
        }`}
      >
        {day.date()}
      </button>
    );
  };

  // Component for a single month's grid
  const MonthGrid = ({ startDayIndex, monthContext }) => (
    <div className="w-full">
      <div className="font-semibold text-center mb-2">{monthContext.format("MMMM YYYY")}</div>
      <div className="grid grid-cols-7 text-center font-semibold mb-2 text-sm">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center">
        {days.slice(startDayIndex, startDayIndex + 42).map((day, i) => (
          <DayButton key={i} day={day} monthContext={monthContext} />
        ))}
      </div>
    </div>
  );

  // --- Render Functions for main modes ---

  const renderCalendar = () => (
    <div className={`border rounded-lg p-4 w-full relative ${mode === "On" ? 'max-w-sm' : ''}`}>
      {/* Calendar Grid(s) */}
      {mode === "On" ? (
        // Single Month for "On" mode
        <>
          <div className="flex justify-between items-center mb-4">
            <button onClick={() => setMonth(month.subtract(1, "month"))} disabled={month.isSame(dayjs(), 'month')}>
              &lt;
            </button>
            <span className="font-semibold">{month.format("MMMM YYYY")}</span>
            <button onClick={() => setMonth(month.add(1, "month"))}>
              &gt;
            </button>
          </div>
          <MonthGrid startDayIndex={0} monthContext={month} />
        </>
      ) : (
        // Two Months for "Between" mode
        <>
          <div className="flex justify-between gap-4">
            <MonthGrid startDayIndex={0} monthContext={month} />
            <MonthGrid startDayIndex={42} monthContext={month.add(1, 'month')} />
          </div>
          {/* External navigation for two-month view */}
          <button className="absolute left-1 top-1/2 -translate-y-1/2 p-2 text-xl" onClick={() => setMonth(month.subtract(1, "month"))} disabled={month.isSame(dayjs(), 'month')}>
            &lt;
          </button>
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 text-xl" onClick={() => setMonth(month.add(1, "month"))}>
            &gt;
          </button>
        </>
      )}

      {/* Range Options: ONLY visible for "On" mode */}
      {mode === "On" && (
        <div className="flex gap-2 mt-4 flex-wrap">
          {ON_RANGE_OPTIONS.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRange(r)}
              className={`px-4 py-2 rounded-full border text-sm transition ${
                range === r
                  ? "bg-zinc-700 text-white border-zinc-700"
                  : "bg-white text-black border-gray-300"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  // --- Render Function for "I'm unsure" mode ---
  const renderUnsureOptions = () => (
    <div className="flex flex-col gap-4 border rounded-lg p-4 w-full">
      <div className="flex gap-4">
        {UNSURE_RANGE_OPTIONS.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRange(r)}
            className={`flex flex-col items-center justify-center p-4 border rounded-lg w-1/3 transition ${
              range === r
                ? "bg-gray-200 border-zinc-700"
                : "bg-white border-gray-300 hover:bg-gray-50"
            }`}
          >
            <CalendarIcon className="w-6 h-6 mb-2 text-zinc-700" />
            <span className="text-sm font-medium">{r}</span>
          </button>
        ))}
      </div>
    </div>
  );

  // --- Main Render ---
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-1">When is your move?</h2>
      <p className="text-gray-500 mb-4">
        Select all that apply and give details where possible.
      </p>

      {/* Modes Selection */}
      <div className="flex gap-2 mb-4">
        {MODES.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => handleModeChange(m)}
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

      {/* Conditional Content */}
      {mode === "I'm unsure" ? renderUnsureOptions() : renderCalendar()}
    </div>
  );
}