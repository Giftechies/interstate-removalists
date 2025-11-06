"use client";

import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
// Assuming these paths are correct in your project
import { setCalendar } from "@/app/store/reducers/formSlice";
import { Calendar as ShadcnCalendar } from "@/components/ui/calendar";
import { CalendarIcon } from "@heroicons/react/24/outline";

// --- Dayjs Configuration ---
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(customParseFormat);
dayjs.extend(isBetween);

// --- Configuration ---
const MODES = ["On", "Between", "I'm unsure"];
const ON_RANGE_OPTIONS = [
  "Exact date",
  "± 3 days",
  "± a week",
  "± a fortnight",
];
const UNSURE_RANGE_OPTIONS = ["In 3 months", "In 6 months", "In a year"];

// Helper to get the default range based on the mode
const getDefaultRange = (m) =>
  m === "I'm unsure" ? UNSURE_RANGE_OPTIONS[0] : ON_RANGE_OPTIONS[0];

// --- Main Component ---
export default function Calendar({ setValue }) {
  const dispatch = useDispatch();
  const stored = useSelector((state) => state.form.calendar); // --- State Setup ---

  const [mode, setMode] = useState(stored?.mode || "On");
  const [range, setRange] = useState(stored?.range || getDefaultRange(mode)); 

  const initialDates = useMemo(() => {
    const storedDates = stored?.dates;
    if (!storedDates?.length || storedDates[0] === "Invalid Date") return [];
    const dateString = storedDates[0];
    const storedMode = stored?.mode || "On";

    if (storedMode === "On") {
      const date = dayjs(dateString, "DD/MM/YYYY");
      return date.isValid() ? [date.toDate()] : [];
    }
    if (storedMode === "Between" && dateString.includes(" - ")) {
      const [fromStr, toStr] = dateString.split(" - ");
      const from = dayjs(fromStr, "DD/MM/YYYY");
      const to = dayjs(toStr, "DD/MM/YYYY");
      const dates = [];
      if (from.isValid()) dates.push(from.toDate());
      if (to.isValid()) dates.push(to.toDate());
      return dates.length === 2
        ? dates.sort((a, b) => a.getTime() - b.getTime())
        : [];
    }

    return [];
  }, [stored]); 

  const [dates, setDates] = useState(initialDates);

  const [visibleMonth, setVisibleMonth] = useState(
    initialDates[0] || dayjs().toDate(), 
  ); 

  const selected = useMemo(() => {
    if (mode === "Between") {
      if (dates.length === 2) return { from: dates[0], to: dates[1] };
      if (dates.length === 1) return { from: dates[0], to: undefined };
      return undefined;
    }
    if (mode === "On" && dates.length === 1) return dates[0];
    return undefined;
  }, [dates, mode]); 

  const handleSelect = (val) => {
    let newDates = [];

    if (mode === "Between") {
      if (!val?.from) newDates = [];
      else if (val?.from && !val?.to) newDates = [val.from];
      else if (val?.from && val?.to)
        newDates = [val.from, val.to].sort((a, b) => a.getTime() - b.getTime());
    } else {
      // mode === "On"
      newDates = val ? [val] : [];
    }

    setDates(newDates);

    if (newDates.length > 0) {
      const latestDate = newDates[newDates.length - 1];
      setVisibleMonth(latestDate);
    }
  }; // --- Sync Redux + RHF ---

  useEffect(() => {
    let formatted = [];
    const validDates = dates.filter(
      (d) => d instanceof Date && !isNaN(d.getTime()),
    );

    if (mode === "On" && validDates.length === 1) {
      formatted = [dayjs(validDates[0]).format("DD/MM/YYYY")];
    } else if (mode === "Between" && validDates.length === 2) {
      const [from, to] = validDates.sort((a, b) => a.getTime() - b.getTime());
      formatted = [
        `${dayjs(from).format("DD/MM/YYYY")} - ${dayjs(to).format(
          "DD/MM/YYYY",
        )}`,
      ];
    }

    const payload = { mode, range, dates: formatted };

    const isSame =
      stored?.mode === payload.mode &&
      stored?.range === payload.range &&
      JSON.stringify(stored?.dates) === JSON.stringify(payload.dates);

    if (!isSame) {
      dispatch(setCalendar(payload));
      setValue("Calendar", payload);
    }
  }, [mode, range, dates, stored, dispatch, setValue]); // --- Mode Change ---

  const handleModeChange = (m) => {
    setMode(m);
    setDates([]);
    setRange(getDefaultRange(m));
    // Reset view to current month when switching modes
    setVisibleMonth(dayjs().toDate());
  };

  // --- Handle month change from ShadcnCalendar UI controls ---
  const handleMonthChange = (month) => {
    setVisibleMonth(month);
  };
  
  // 💡 NEW: Responsive number of months for 'Between' mode
  const isBetweenMode = mode === "Between";
  // Show 2 months on screens lg and up, 1 month otherwise.
  // Note: This needs a utility or library to check screen size, 
  // but for a simple component, we often rely on CSS/Tailwind for true responsiveness.
  // We'll set it to 2 by default and use Tailwind to manage the overflow/sizing.
  // For better UX, setting it to 1 on small screens is common, but we will leave 
  // it at a maximum of 2 and fix the container.

  // 💡 IMPROVED: Determine number of months for responsiveness
  // A cleaner approach is to use 1 month on small screens and 2 on larger ones.
  // Since we cannot reliably get the screen width inside the component without 
  // an additional hook, we will use a max of 2 and ensure the container is responsive.
  // For the purpose of a static fix, we'll enforce 1 month on small screens.
  // For true responsiveness without a screen hook, it's often better to let the
  // user control scroll or only show one month. Let's keep 2 months for desktop and 
  // wrap it in a container that allows scroll/shrinks the calendar on mobile.
  
  const numberOfMonths = isBetweenMode ? 2 : 1;

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">When is your move?</h2>
      
      <p className="text-sm text-gray-500 mb-4">
        Select all that apply and give details where possible. 
      </p>
      {/* Mode Buttons */} 
      <div className="mb-4 flex gap-2">
        {MODES.map((m) => (
          <button
            key={m}
            onClick={() => handleModeChange(m)}
            // Standardized Tailwind classes
            className={`rounded-full border px-4 py-2 text-sm transition font-medium whitespace-nowrap ${
              mode === m
                ? " bg-black-3 text-white-1 shadow-md"
                : "bg-white-1 text-black-3 border-gray-300 hover:bg-gray-50"
            }`}
          >
            {m}
          </button>
        ))}
      </div>
      {/* --- Mode-Specific Content --- */}
      {mode === "I'm unsure" ? (
        <UnsureOptions range={range} setRange={setRange} />
      ) : (
        <div className="w-fit rounded-xl border border-gray-200 p-4 shadow-sm bg-white-1">
          
          {/* 💡 FIX: Responsive container for the calendar */}
          <div 
            className={`w-fit mx-auto ${isBetweenMode ? 'overflow-x-auto md:overflow-x-visible' : ''}`}
          >
            <ShadcnCalendar
              month={visibleMonth}
              onMonthChange={handleMonthChange}
              mode={isBetweenMode ? "range" : "single"}
              selected={selected}
              onSelect={handleSelect}
              disabled={(date) => date < dayjs().startOf("day").toDate()}
              // Use 2 months for 'Between' mode, but let the parent container manage sizing
              // We'll add a class to prevent the calendar from shrinking its containers
              numberOfMonths={numberOfMonths}
              className={`w-full mx-auto`}
            />
          </div>
          
          {mode === "On" && (
            <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-gray-100">
              {ON_RANGE_OPTIONS.map((r) => (
                <button
                  key={r}
                  onClick={() => setRange(r)}
                  // Standardized Tailwind classes
                  className={`rounded-full border px-4 py-2 text-sm transition font-medium whitespace-nowrap ${
                    range === r
                      ? " bg-black-3 text-white-1 shadow-sm"
                      : "bg-white-1 text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                    {r}      
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// --- UnsureOptions Component (Extracted for cleanliness) ---
function UnsureOptions({ range, setRange }) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl border border-gray-200 p-4 shadow-sm bg-white">
      <div className="flex flex-col sm:flex-row gap-4">
        {UNSURE_RANGE_OPTIONS.map((r) => (
          <button
            key={r}
            onClick={() => setRange(r)}
            // Standardized Tailwind classes
            className={`flex flex-col items-center justify-center rounded-lg border p-4 transition text-center w-full sm:w-1/3 ${
              range === r
                ? "border-indigo-600 bg-indigo-600 text-white shadow-md"
                : "bg-white border-gray-300 text-gray-800 hover:bg-gray-50"
            }`}
          >
              {/* Conditional color for the icon */}
              <CalendarIcon className={`mb-2 h-6 w-6 ${range === r ? "text-white" : "text-indigo-600"}`} />
              <span className="text-sm tracking-wide font-medium">{r}</span> 
          </button>
        ))}
      </div>
    </div>
  );
}