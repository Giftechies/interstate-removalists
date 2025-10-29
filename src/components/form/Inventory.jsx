"use client";
import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInventory } from "@/app/store/reducers/formSlice";

const Inventory = ({ inventorydata = [] }) => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.form.Inventory.items) || [];

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(
    inventorydata?.[0]?.title || ""
  );

  // 🔹 Flatten all products with price & category
  const allItems = useMemo(() => {
    return inventorydata.flatMap((cat) =>
      (cat.products || []).map((product) => ({
        id: product.id,
        name: product.title,
        price: parseFloat(product.price) || 0,
        category: cat.title,
      }))
    );
  }, [inventorydata]);

  // 🔹 Merge with Redux quantities
  const mergedItems = useMemo(() => {
    return allItems.map((item) => {
      const existing = inventory.find((inv) => inv.id === item.id);
      const quantity = existing?.quantity || 0;
      return {
        ...item,
        quantity,
        total_price: item.price * quantity,
      };
    });
  }, [allItems, inventory]);

  // 🔹 Compute per-category totals
  const categories = useMemo(() => {
    return inventorydata.map((cat) => {
      const total = mergedItems
        .filter((i) => i.category === cat.title)
        .reduce((sum, i) => sum + i.quantity, 0);
      return { name: cat.title, count: total };
    });
  }, [inventorydata, mergedItems]);

  // 🔹 Filter items (by category or search)
  const filteredItems = useMemo(() => {
    if (searchTerm.trim()) {
      return mergedItems.filter((i) =>
        i.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return mergedItems.filter((i) => i.category === activeCategory);
  }, [searchTerm, mergedItems, activeCategory]);

  // 🔹 Compute total price across all selected items
  const totalInventoryPrice = useMemo(() => {
    return mergedItems.reduce((sum, item) => sum + item.total_price, 0);
  }, [mergedItems]);

  // 🔹 Handle quantity changes
  const updateQuantity = (id, change) => {
    const updated = mergedItems.map((item) => {
      if (item.id !== id) return item;

      const newQty = Math.max(0, item.quantity + change);
      return {
        ...item,
        quantity: newQty,
        price: item.price * newQty,
      };
    });

    const inventoryToPersist = updated.filter((i) => i.quantity > 0);
    const total_price = inventoryToPersist.reduce(
      (sum, i) => sum + i.total_price,
      0
    );

    dispatch(
      setInventory({
        items: inventoryToPersist,
        total_price,
      })
    );
  };

  return (
    <div className="bg-white rounded-lg border p-4 shadow-sm">
      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-lg border p-2 text-[16px]"
      />

      <div className="mt-6 flex gap-6">
        {/* 🧭 Sidebar */}
        <div className="sticky top-24 h-[400px] w-1/4 overflow-y-auto border-r pr-4">
          {!searchTerm &&
            categories.map((cat) => (
              <div
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`cursor-pointer rounded-md px-2 py-2 ${
                  activeCategory === cat.name
                    ? "bg-gray-200 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                {cat.name} {cat.count > 0 && `(${cat.count})`}
              </div>
            ))}
          {searchTerm && (
            <p className="italic text-gray-500">Searching all items...</p>
          )}
        </div>

        {/*  Item List */}
        <div className="flex-1">
          {filteredItems.length === 0 ? (
            <p className="text-gray-500">No items found.</p>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-3"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                 
                    {searchTerm && (
                      <span className="ml-2 rounded bg-gray-100 px-2 py-[2px] text-sm">
                        {item.category}
                      </span>
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="rounded border px-2 py-1 hover:bg-gray-200"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="rounded border px-2 py-1 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}

          {/* 💰 Total Price Summary */}
          <div className="mt-4 text-right font-semibold border-t pt-3">
            {/* Total Price: ₹{totalInventoryPrice.toFixed(2)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
