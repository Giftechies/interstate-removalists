"use client";
import { memo } from "react";

export default function FormSidebar({ formData }) {
  if (!formData?.pickup_address) return null;

  const {
    pickup_address,
    drop_address,
    property_type,
    bed_room,
    place_type,
    pick_variation,
    pick_variation_meter,
    pick_flights,
    drop_place_type,
    drop_variation,
    drop_variation_meter,
    drop_flights,
    calendar,
    Inventory,
  } = formData;

  const hasDelivery = !!drop_address;
  const hasDates = calendar?.dates?.length > 0;
  const hasInventory = Inventory?.items?.length > 0;

  return (
    <aside
      className="sticky top-30 hidden h-fit w-full overflow-y-auto self-start 
                 rounded-xl border bg-white p-8 shadow-md lg:block navbar-dropdown-scrollbar"
      aria-label="Move summary"
    >
      <h2 className="text-xl font-semibold text-zinc-800">Your Move</h2>

      {/* Timeline */}
      <section className="relative mt-6" aria-label="Move timeline">
        <TimelinePoint label="Pickup" showLine={hasDelivery}>
          <LocationBlock
            address={pickup_address}
            property_type={property_type}
            bed_room={bed_room}
            place_type={place_type}
            variation={pick_variation}
            variation_meter={pick_variation_meter}
            flights={pick_flights}
          />
        </TimelinePoint>

        {hasDelivery && (
          <TimelinePoint label="Delivery">
            <LocationBlock
              address={drop_address}
              place_type={drop_place_type}
              variation={drop_variation}
              variation_meter={drop_variation_meter}
              flights={drop_flights}
            />
          </TimelinePoint>
        )}
      </section>

      {/* Pickup Date */}
      {hasDates && (
        <Section title="Pickup Date">
          <span className="text-sm text-zinc-600">
            {calendar?.dates?.join(", ")}
          </span>
        </Section>
      )}

      {/* Inventory */}
      {hasInventory && (
        <Section title="Inventory" scrollable>
          {Inventory.items.map((item) => (
            <InventoryRow key={item.name} name={item.name} quantity={item.quantity} />
          ))}
        </Section>
      )}
    </aside>
  );
}

/* ------------------------ SUBCOMPONENTS ------------------------ */

const TimelinePoint = memo(({ label, children, showLine = false }) => {
  return (
    <div className="relative mb-6 pl-6">
      {/* Circle */}
      <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-zinc-700 bg-white z-10" />

      {/* Vertical Line */}
      {showLine && (
        <div className="absolute left-[7.4px] top-[2rem] bottom-0 w-[2px] bg-zinc-300 z-0" />
      )}

      {/* Content */}
      <div className="relative z-10">
        <h4 className="text-md mb-2 font-semibold text-zinc-700">{label}</h4>
        <div className="rounded-lg bg-zinc-50 p-3 shadow-sm border border-zinc-100">
          {children}
        </div>
      </div>
    </div>
  );
});

const LocationBlock = memo(
  ({
    address,
    property_type,
    bed_room,
    place_type = [],
    variation = [],
    variation_meter,
    flights,
  }) => {
    const tags = [
      ...place_type.map((p) =>
        p === "Stairs" ? `Stairs - ${flights || 0} Flights` : p
      ),
      ...variation,
      variation_meter ? `${variation_meter} m` : null,
    ].filter(Boolean);

    return (
      <div>
        <p className="font-medium capitalize text-zinc-800">{address}</p>

        {(property_type || bed_room) && (
          <p className="mt-1 text-sm text-zinc-600">
            {[property_type, bed_room && `${bed_room} Bedroom`]
              .filter(Boolean)
              .join(" • ")}
          </p>
        )}

        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2 border-t border-dashed border-zinc-200 pt-2">
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
      </div>
    );
  }
);

const Tag = memo(({ children }) => (
  <span className="inline-block rounded-md bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700">
    {children}
  </span>
));

const Section = memo(({ title, children, scrollable = false }) => (
  <section
    className={`mt-6 border-t border-zinc-200 pt-4 ${
      scrollable ? "max-h-96 overflow-y-auto formsidebar-scrollbar px-4" : ""
    }`}
    data-lenis-prevent={scrollable || undefined}
  >
    <h3 className="mb-2 text-lg font-medium text-zinc-700">{title}</h3>
    <div className="space-y-1">{children}</div>
  </section>
));

const InventoryRow = memo(({ name, quantity }) => (
  <div className="flex justify-between border-b border-dashed border-zinc-200 py-1 text-sm text-zinc-600">
    <span>{name}</span>
    <span>{quantity}</span>
  </div>
));
