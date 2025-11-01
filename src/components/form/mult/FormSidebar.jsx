"use client";

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

  return (
    <aside className="sticky top-30 hidden h-fit navbar-dropdown-scrollbar w-full overflow-y-auto self-start rounded-xl border bg-white p-8 shadow-md lg:block">
      <h2 className="text-xl font-semibold text-zinc-800">Your Move</h2>

      {/* Timeline Wrapper */}
      <div className="relative mt-6 pl-6">
        {/* Vertical Line */}
    {  drop_address &&    <div className="absolute left-1/2 top-[calc(100%+0.25rem)] bottom-[calc(100%-4rem)] w-[2px] bg-zinc-300 -translate-x-1/2 z-0" />}

        {/* Pickup */}
        <TimelinePoint label="Pickup">
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

        {/* Delivery */}
        {drop_address && (
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
      </div>

      {/* Pickup Date */}
      {calendar?.dates?.length > 0 && (
        <section className="mt-6 border-t border-zinc-200 pt-4">
          <h3 className="text-lg font-medium text-zinc-700 mb-2 flex justify-between ">
            Pickup Date   <span className=" h6 text-zinc-600 mt-1">{calendar.dates.join(", ")}</span>
          </h3>
        
        </section>
      )}

      {/* Inventory */}
      {Inventory.length >0 && (
        <section className="mt-6 border-t border-zinc-200 pt-4 ">
          <h3 className="text-lg font-medium text-zinc-700 mb-2">Inventory</h3>
          <div className="space-y-1">
            {Inventory.items?.map((item, i) => (
              <div
                key={i}
                className="flex justify-between text-sm text-zinc-600 border-b border-dashed border-zinc-200 py-1"
              >
                <span>{item.name}</span>
                <span>{item.quantity}</span>
              </div>
            ))}
         
          </div>
        </section>
      )}
    </aside>
  );
}

/* ------------------------ SUBCOMPONENTS ------------------------ */

function TimelinePoint({ label, children }) {
  return (
    <div className="relative mb-8 last:mb-0">
      {/* Circle */}
      <div className="absolute -left-[19px]  top-2 h-3 w-3 rounded-full border-2 border-zinc-700 bg-white-1" />
      {/* Label */}
      <h4 className="mb-2 text-md font-semibold text-zinc-700">{label}</h4>
      {children} 
    </div>
  );
}

function LocationBlock({
  address,
  property_type,
  bed_room,
  place_type = [],
  variation = [],
  variation_meter,
  flights,
}) {
  return (
    <div className="rounded-lg bg-zinc-50 p-4 shadow-sm">
      <p className="text-zinc-800 font-medium capitalize ">{address}</p>

      {(property_type || bed_room) && (
        <p className="text-sm text-zinc-600 mt-1">
          {property_type && <span>{property_type}</span>}
          {property_type && bed_room && <span className="mx-1">•</span>}
          {bed_room && <span>{bed_room} Bedroom</span>}
        </p>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        {place_type?.map((p, i) => (
          <Tag key={i}>
            {p === "Stairs" ? `Stairs - ${flights || 0} Flights` : p}
          </Tag>
        ))}
        {variation?.map((v, i) => (
          <Tag key={i}>{v}</Tag>
        ))}
        {variation_meter && <Tag>{variation_meter} m</Tag>}
      </div>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-block rounded-md bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700">
      {children}
    </span>
  );
}
