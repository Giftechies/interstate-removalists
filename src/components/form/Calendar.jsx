"use client";

import { useState, useEffect, useMemo } from "react";
import dayjs from "dayjs";
// Import dayjs plugins for week and comparison utility
import isBetween from 'dayjs/plugin/isBetween';
import week from 'dayjs/plugin/weekOfYear';

dayjs.extend(isBetween);
dayjs.extend(week);

import { useDispatch, useSelector } from "react-redux";
import { setCalendar } from "@/app/store/reducers/formSlice";

export default function Calendar({ register, setValue }) {
  const dispatch = useDispatch();
  const storedDate = useSelector((state) => state.form.calendar);

  const [mode, setMode] = useState(storedDate?.mode || "On");
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  // Helper to safely parse any date input into a valid dayjs object,
  // standardizing it to the start of the day (crucial for comparison).
  const safeParseDayjs = (dateInput) => {
    if (!dateInput) return null;
    const parsed = dayjs(dateInput).startOf('day'); // FIX: Standardize time
    return parsed.isValid() ? parsed : null;
  };

  const [selectedDates, setSelectedDates] = useState(() => {
    if (storedDate?.dates && Array.isArray(storedDate.dates)) {
      // Ensure all stored dates are parsed into valid dayjs objects
      return storedDate.dates.map(date => safeParseDayjs(date)).filter(Boolean);
    }
    return [];
  });

  const [range, setRange] = useState(storedDate?.range || "Exact date");

  // Use useMemo for calendar grid calculation
  const daysInMonth = useMemo(() => {
    const startOfMonth = currentMonth.startOf("month");
    const endOfMonth = currentMonth.endOf("month");
    const days = [];
    // Adjust to start on Monday if locale is not set (assuming Mo is first day)
    let date = startOfMonth.startOf("week"); 

    while (date.isBefore(endOfMonth.endOf("week"))) {
      days.push(date);
      date = date.add(1, "day");
    }
    return days;
  }, [currentMonth]);
  
  // Get start of the current day for consistent comparison
  const today = dayjs().startOf('day'); 

  const handleDateClick = (day) => {
    // FIX: Standardize the clicked day to the start of the day
    const clickedDay = day.startOf('day');

    // Do not allow selection of past dates
    if (clickedDay.isBefore(today, 'day')) {
      return; // Exit if the date is in the past
    }

    if (mode === "Between") {
      if (selectedDates.length === 0) {
        setSelectedDates([clickedDay]);
      } else if (selectedDates.length === 1) {
        // FIX: The array being sorted contains already standardized dayjs objects
        const sorted = [selectedDates[0], clickedDay].sort((a, b) =>
          a.isAfter(b) ? 1 : -1
        );
        setSelectedDates(sorted);
      } else {
        // If two dates are already selected and a new one is clicked, start a new range
        setSelectedDates([clickedDay]);
      }
    } else { // "On" or "I'm unsure" modes
      // Toggle off if already selected in single-select modes
      const isAlreadySelected = selectedDates.some((d) => d.isSame(clickedDay, "day"));
      setSelectedDates(isAlreadySelected ? [] : [clickedDay]);
    }
  };

  const isSelected = (day) => {
    // FIX: Standardize the day object being checked to the start of the day
    const checkDay = day.startOf('day');
    
    // Check for range selection
    if (mode === "Between" && selectedDates.length === 2) {
      const [start, end] = selectedDates;
      // Using dayjs.plugin.isBetween for clean range checking
      return checkDay.isBetween(start, end, 'day', '[]'); // '[]' includes start and end dates
    }
    
    // Check for single selection
    return selectedDates.some((d) => d.isSame(checkDay, "day"));
  };

  // Sync with Redux & react-hook-form automatically
  useEffect(() => {
    // Convert dayjs objects to ISO strings for serialization
    const serializableDates = selectedDates.map(day => day.toISOString());
    const payload = { mode, dates: serializableDates, range };

    // Use a deep comparison for simplicity to prevent unnecessary updates
    if (JSON.stringify(storedDate) !== JSON.stringify(payload)) {
      dispatch(setCalendar(payload));
      setValue("Calendar", payload);
    }
  }, [mode, selectedDates, range, storedDate, dispatch, setValue]);


  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-1">When is your move?</h2>
      <p className="text-gray-500 mb-4">
        Select all that apply and give details where possible.
      </p>

      {/* Mode Buttons */}
      <div className="flex gap-2 mb-4">
        {["On", "Between", "I'm unsure"].map((m) => (
          <button
            key={m}
            type="button"
            className={`px-4 py-2 rounded-full border ${
              mode === m
                ? "bg-zinc-600 text-white-1" 
                : "bg-white text-black border-gray-300"
            }`}
            onClick={() => {
              setMode(m);
              // Clear dates only if mode is changing or if the new mode is "I'm unsure"
              if (mode !== m || m === "I'm unsure") {
                 setSelectedDates([]);
              }
            }}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Calendar */}
      {(mode === "On" || mode === "Between") && (
        <div className="border rounded-lg p-4 inline-block w-full">
          {/* Month Nav */}
          <div className="flex justify-between items-center mb-2">
            <button
              type="button"
              // Disable previous month button if the previous month is entirely in the past
              disabled={currentMonth.subtract(1, "month").endOf("month").isBefore(today, 'day')}
              onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
              className={currentMonth.subtract(1, "month").endOf("month").isBefore(today, 'day') ? "text-gray-400 cursor-not-allowed" : "text-black"}
            >
              ←
            </button>
            <span className="font-semibold">
              {currentMonth.format("MMMM YYYY")}
            </span>
            <button
              type="button"
              onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
            >
              →
            </button>
          </div>

          {/* Weekday Headers */}
          <div className="grid grid-cols-7 text-center font-semibold mb-2">
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 text-center ">
            {daysInMonth.map((day, idx) => {
              // Standardize day for comparison
              const checkDay = day.startOf('day');
              const isPastDate = checkDay.isBefore(today, 'day'); // Use standardized 'today'

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleDateClick(day)}
                  disabled={isPastDate} // Disable past dates
                  className={`w-8 h-8 mx-auto rounded-full text-sm transition-colors duration-150 ${
                    isSelected(checkDay)
                      ? "bg-gray-600 text-white-1"
                      : day.month() === currentMonth.month()
                      ? isPastDate
                        ? "text-gray-300 cursor-not-allowed" // Past date style
                        : "text-black hover:bg-gray-200" // Future date style
                      : "text-gray-400 cursor-not-allowed" // Outside month style
                  }`}
                >
                  {day.date()}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Quick Select */}
      {mode !== "I'm unsure" && (
        <div className="flex gap-2 mt-4 flex-wrap">
          {["Exact date", "± 3 days", "± a week", "± a fortnight"].map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setRange(label)}
              className={`px-4 py-2 rounded-full border ${
                range === label
                  ? "bg-zinc-600 text-white-1 border-black"
                  : "bg-white text-black border-gray-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
      
      {/* Hidden input for react-hook-form registration when mode is "I'm unsure" */}
      {mode === "I'm unsure" && (
        <input 
          type="hidden" 
          value={mode} 
          {...register("Calendar")} 
        />
      )}
    </div>
  );
}