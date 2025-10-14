"use client";
import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInventory } from "@/app/store/reducers/formSlice";

const Inventory = ({ inventorydata = [] }) => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.form.Inventory) || [];

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(
    inventorydata?.[0]?.title || ""
  );

  // Flatten all items (category + subcategory)
  const allItems = useMemo(() => {
    return inventorydata.flatMap((cat) =>
      (cat.subcategories || []).map((sub) => ({
        id: sub.id,
        name: sub.title,
        category: cat.title,
      }))
    );
  }, [inventorydata]);

  // Merge with redux inventory quantities
  const mergedItems = useMemo(() => {
    return allItems.map((item) => ({
      ...item,
      quantity: inventory.find((inv) => inv.id === item.id)?.quantity || 0,
    }));
  }, [allItems, inventory]);

  // Compute per-category item counts
  const categories = useMemo(() => {
    return inventorydata.map((cat) => {
      const total = mergedItems
        .filter((i) => i.category === cat.title)
        .reduce((sum, i) => sum + i.quantity, 0);
      return { name: cat.title, count: total };
    });
  }, [inventorydata, mergedItems]);

  // Filter items for main list
  const filteredItems = useMemo(() => {
    if (searchTerm.trim()) {
      return mergedItems.filter((i) =>
        i.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return mergedItems.filter((i) => i.category === activeCategory);
  }, [searchTerm, mergedItems, activeCategory]);

  // Handle quantity updates
  const updateQuantity = (id, change) => {
    const updated = mergedItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity + change) }
        : item
    );

    // Persist to Redux (only non-zero quantities)
    dispatch(setInventory(updated.filter((i) => i.quantity > 0)));
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      {/* Search */}
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full rounded-lg text-[16px]"
      />

      <div className="flex gap-6 mt-6">
        {/* Sidebar */}
        <div className="w-1/4 border-r pr-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`cursor-pointer py-2 px-2 rounded-md ${
                activeCategory === cat.name
                  ? "bg-gray-200 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {cat.name} {cat.count > 0 && `(${cat.count})`}
            </div>
          ))}
        </div>

        {/* Items List */}
        <div className="flex-1">
          {filteredItems.length === 0 ? (
            <p className="text-gray-500">No items found.</p>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-3"
              >
                <div>
                  {item.name}
                  {searchTerm && (
                    <span className="ml-2 text-sm bg-gray-100 px-2 py-[2px] rounded">
                      {item.category}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {item.quantity > 0 && (
                    <>
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-1 border rounded hover:bg-gray-200"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                    </>
                  )}
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 py-1 border rounded hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
