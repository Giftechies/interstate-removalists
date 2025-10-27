"use client";

import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCalendar } from "@/app/store/reducers/formSlice";
import { Calendar as ShadcnCalendar } from "@/components/ui/calendar";
import { CalendarIcon } from "@heroicons/react/24/outline";

// --- Dayjs Configuration ---
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat'; 
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(customParseFormat);
dayjs.extend(isBetween);

// --- Configuration ---
const MODES = ["On", "Between", "I'm unsure"];
const ON_RANGE_OPTIONS = ["Exact date", "± 3 days", "± a week", "± a fortnight"];
const UNSURE_RANGE_OPTIONS = ["In 3 months", "In 6 months", "In a year"];

// Helper to get the default range based on the mode
const getDefaultRange = (m) =>
  m === "I'm unsure" ? UNSURE_RANGE_OPTIONS[0] : ON_RANGE_OPTIONS[0];

// --- Main Component ---
export default function Calendar({ setValue }) {
  const dispatch = useDispatch();
  const stored = useSelector((state) => state.form.calendar);

  // --- State Setup ---
  const [mode, setMode] = useState(stored?.mode || "On");
  const [range, setRange] = useState(stored?.range || getDefaultRange(mode));

  // FIX 1: Robust parsing of stored date strings into native Date objects
  const initialDates = useMemo(() => {
    const storedDates = stored?.dates;
    if (!storedDates?.length || storedDates[0] === 'Invalid Date') return [];
    
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
      
      return dates.length === 2 ? dates.sort((a, b) => a.getTime() - b.getTime()) : [];
    }

    return [];
  }, [stored]); 

  // State holds native Date objects
  const [dates, setDates] = useState(initialDates);

  // ✅ NEW STATE: Controls the visible month in the calendar view
  const [visibleMonth, setVisibleMonth] = useState(
    initialDates[0] || dayjs().toDate() // Start on first selected date or today
  );

  // Memoized object shape for ShadcnCalendar 'selected' prop
  const selected = useMemo(() => {
    if (mode === "Between") {
      if (dates.length === 2) return { from: dates[0], to: dates[1] };
      if (dates.length === 1) return { from: dates[0], to: undefined };
      return undefined;
    }
    if (mode === "On" && dates.length === 1) return dates[0];
    return undefined;
  }, [dates, mode]);

  // ✅ FIX 2: Update visibleMonth when a date is selected
  const handleSelect = (val) => {
    let newDates = [];

    if (mode === "Between") {
      if (!val?.from) newDates = [];
      else if (val?.from && !val?.to) newDates = [val.from];
      else if (val?.from && val?.to) newDates = [val.from, val.to].sort((a, b) => a.getTime() - b.getTime());
    } else { // mode === "On"
      newDates = val ? [val] : [];
    }
    
    setDates(newDates);
    
    // Jump the calendar view to the latest selected date
    if (newDates.length > 0) {
        // Get the latest selected date (the last element in the array)
        const latestDate = newDates[newDates.length - 1];
        setVisibleMonth(latestDate);
    }
  };

  // --- Sync Redux + RHF ---
  useEffect(() => {
    let formatted = [];
    
    const validDates = dates.filter(d => d instanceof Date && !isNaN(d.getTime()));

    if (mode === "On" && validDates.length === 1) {
      formatted = [dayjs(validDates[0]).format("DD/MM/YYYY")];
    } else if (mode === "Between" && validDates.length === 2) {
      const [from, to] = validDates.sort((a, b) => a.getTime() - b.getTime());
      formatted = [
        `${dayjs(from).format("DD/MM/YYYY")} - ${dayjs(to).format(
          "DD/MM/YYYY"
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
  }, [mode, range, dates, stored, dispatch, setValue]);

  // --- Mode Change ---
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
 

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-1">When is your move?</h2>
      <p className="text-gray-500 mb-4">
        Select all that apply and give details where possible.
      </p>

      {/* Mode Buttons */}
      <div className="flex gap-2 mb-4">
        {MODES.map((m) => (
          <button
            key={m}
            onClick={() => handleModeChange(m)}
            className={`px-4 py-2 rounded-full border transition ${
              mode === m
                ? "bg-zinc-700 text-white-1 border-zinc-700"
                : "bg-white text-black border-gray-300"
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
        <div className="border rounded-lg p-4 inline-block">
          <ShadcnCalendar
                // Control which month is visible
                month={visibleMonth} 
                onMonthChange={handleMonthChange}
            mode={mode === "Between" ? "range" : "single"}
            selected={selected}
            onSelect={handleSelect}
            disabled={(date) => date < dayjs().startOf('day').toDate()}
            numberOfMonths={mode === "Between" ? 2 : 1}
  classNames={{
    day_selected: "bg-zinc-400 text-white-1 hover:bg-zinc-700 hover:text-white-1", // ✅ Single date selection color
    day_today: "border border-zinc-400", // ✅ Optional: outline today
    day_range_start: "bg-zinc-800 text-white-1 hover:bg-zinc-700", // ✅ Start of range
    day_range_end: "bg-zinc-800 text-white-1 hover:bg-zinc-700",   // ✅ End of range
    day_range_middle: "bg-zinc-300 text-zinc-900",               // ✅ In-between range
    day_disabled: "text-gray-300 opacity-50 cursor-not-allowed", // Optional disabled style
  }}
          />

          {mode === "On" && (
            <div className="flex gap-2 mt-4 flex-wrap">
              {ON_RANGE_OPTIONS.map((r) => (
                <button
                  key={r}
                  onClick={() => setRange(r)}
                  className={`px-4 py-2 rounded-full border text-sm transition ${
                    range === r
                      ? "bg-zinc-700 text-white-1 border-zinc-700"
                      : "bg-white text-black border-gray-300"
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
    <div className="flex flex-col gap-4 border rounded-lg p-4 w-full">
      <div className="flex gap-4">
        {UNSURE_RANGE_OPTIONS.map((r) => (
          <button
            key={r}
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
}