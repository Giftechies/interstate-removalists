"use client";

import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCalendar } from "@/app/store/reducers/formSlice";
import { Calendar as ShadcnCalendar } from "@/components/ui/calendar";
import { CalendarIcon } from "@heroicons/react/24/outline";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(customParseFormat);
dayjs.extend(isBetween);

// --- Config ---
const MODES = ["On", "Between", "I'm unsure"];
const ON_RANGE_OPTIONS = ["Exact date", "± 3 days", "± a week", "± a fortnight"];
const UNSURE_RANGE_OPTIONS = ["In 3 months", "In 6 months", "In a year"];
const DATE_FORMAT = "DD-MM-YYYY"; // ✅ new format

const getDefaultRange = (m) => m === "I'm unsure" ? UNSURE_RANGE_OPTIONS[0] : ON_RANGE_OPTIONS[0];

// --- Main Component ---
export default function Calendar({ setValue }) {
  const dispatch = useDispatch();
  const stored = useSelector((state) => state.form.calendar);

  const [mode, setMode] = useState(stored?.mode || "On");
  const [range, setRange] = useState(stored?.range || getDefaultRange(mode));

  // --- Parse stored dates ---
  const initialDates = useMemo(() => {
    const storedDates = stored?.dates;
    if (!storedDates?.length || storedDates[0] === "Invalid Date") return [];

    const dateString = storedDates[0];
    const storedMode = stored?.mode || mode;

    if (storedMode === "On") {
      const date =
        dayjs(dateString, DATE_FORMAT).isValid()
          ? dayjs(dateString, DATE_FORMAT)
          : dayjs(dateString, "DD/MM/YYYY"); // fallback for legacy data
      return date.isValid() ? [date.toDate()] : [];
    }
   console.log(storedDates,storedMode);
   
    if (storedMode === "Between" && dateString.includes(" - ")) {
      const [fromStr, toStr] = dateString.split(" - ");
      const from =
        dayjs(fromStr, DATE_FORMAT).isValid()
          ? dayjs(fromStr, DATE_FORMAT)
          : dayjs(fromStr, "DD/MM/YYYY");
      const to =
        dayjs(toStr, DATE_FORMAT).isValid()
          ? dayjs(toStr, DATE_FORMAT)
          : dayjs(toStr, "DD/MM/YYYY");

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
    initialDates[0] || dayjs().toDate()
  );

  const selected = useMemo(() => {
    if (mode === "Between") {
      
      console.log("initialDates in select",initialDates);
      console.log("dates in select",dates);
      if (dates.length === 2) return { from: dates[0], to: dates[1] };
      // if (dates.length === 1) return { from: dates[0], to: undefined };
      return undefined;
    }
    if (mode === "On" && dates.length === 1) return dates[0];
    return undefined;
  }, [dates, mode]);

  const handleSelect = (val) => {
    let newDates = [];
    if (mode === "Between") {
      // val is an object: { from: Date, to: Date | undefined }
      if (val?.from) {
        newDates.push(val.from);
      }
      if (val?.to) {
        newDates.push(val.to);
      }
      // Sort to ensure the order is correct
      newDates.sort((a, b) => a.getTime() - b.getTime());
    } else {
      // val is a single Date object
      newDates = val ? [val] : [];
    }
    setDates(newDates);
    // ❗ Only move month AFTER range is complete
    if (mode !== "Between" || newDates.length === 2) {
      const latestDate = newDates[newDates.length - 1];
      setVisibleMonth(latestDate);
    }

  };

  // --- Sync Redux + RHF ---
  useEffect(() => {
    let formatted = [];
    const validDates = dates.filter(
      (d) => d instanceof Date && !isNaN(d.getTime())
    );

    if (mode === "On" && validDates.length === 1) {
      formatted = [dayjs(validDates[0]).format(DATE_FORMAT)];
    } else if (mode === "Between" && validDates.length === 2) {
      const [from, to] = validDates.sort((a, b) => a.getTime() - b.getTime());
      formatted = [
        `${dayjs(from).format(DATE_FORMAT)} - ${dayjs(to).format(DATE_FORMAT)}`,
      ];
    }

    const payload = { mode, range, dates: formatted };

    const isSame =
      stored?.mode === payload.mode &&
      stored?.range === payload.range &&
      JSON.stringify(stored?.dates) === JSON.stringify(payload.dates);
    const isSameDate =
      dates?.length === 2 &&
      dayjs(dates[0]).format(DATE_FORMAT) === dayjs(dates[1]).format(DATE_FORMAT);

    if (mode === "Between" && isSameDate) {
      return; // 🚫 stop Redux update
    }

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
    setVisibleMonth(dayjs().toDate());
  };

  const handleMonthChange = (month) => {
    setVisibleMonth(month);
  };

  const isBetweenMode = mode === "Between";
  const numberOfMonths = isBetweenMode ? 2 : 1;
  console.log("select ",selected);
  
  return (
    <div className="w-full  ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        When is your move?
      </h2>

      <p className="text-sm text-gray-500 mb-4">
        Select all that apply and give details where possible.
      </p>

      {/* Mode Buttons */}
      <div className="mb-4 flex gap-2">
        {MODES.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => handleModeChange(m)}
            className={`rounded-full border px-4 py-2 text-sm transition font-medium whitespace-nowrap ${mode === m
              ? "bg-black-3 text-white-1 shadow-md"
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
        <div className="w-full rounded-xl border border-gray-200 p-4 shadow-sm bg-white-1">
          <div
            className={`w-fit mx-auto ${isBetweenMode ? "overflow-x-auto md:overflow-x-visible" : ""
              }`}
          >
            <ShadcnCalendar
              mode={isBetweenMode ? "range" : "single"}
              selected={selected}
              onSelect={handleSelect}
              disabled={(date) => date < dayjs().startOf("day").toDate()}
              numberOfMonths={numberOfMonths}
              className="w-full mx-auto"
            />

          </div>

          {mode === "On" && (
            <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-gray-100">
              {ON_RANGE_OPTIONS.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRange(r)}
                  className={`rounded-full border px-4 py-2 text-sm transition font-medium whitespace-nowrap ${range === r
                    ? "bg-black-3 text-white-1 shadow-sm"
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

// --- UnsureOptions Component ---
function UnsureOptions({ range, setRange }) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl border border-gray-200 p-4 shadow-sm bg-white">
      <div className="flex flex-col sm:flex-row gap-4">
        {["In 3 months", "In 6 months", "In a year"].map((r) => (
          <button
            type="button"
            key={r}
            onClick={() => setRange(r)}
            className={`flex flex-col items-center justify-center rounded-lg border p-4 transition text-center w-full sm:w-1/3 ${range === r
              ? "border-gray-300 bg-black-3 text-white-1 shadow-md"
              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
          >
            <CalendarIcon
              className={`mb-2 h-6 w-6 ${range === r ? "text-white-1" : ""}`}
            />
            <span className="text-sm tracking-wide font-medium">{r}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
