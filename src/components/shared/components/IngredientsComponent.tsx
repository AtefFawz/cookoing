"use client";
import { useState, useId, type ReactNode } from "react";

export default function IngredientsComponent({
  data,
  desc,
}: {
  data?: string;
  desc: string;
}) {
  const [something, setSomething] = useState(false);

  const uniqueId = useId();

  function handleChange(): void {
    setSomething(!something);
  }

  return (
    <div className="border-b-[1px]">
      <div className="flex   items-center gap-2 lg:gap-4   border-gray-700 py-6">
        <input
          id={uniqueId}
          type="checkbox"
          checked={something}
          onChange={handleChange}
        />

        <label
          htmlFor={uniqueId}
          className={`text-lg font-medium md:text-sm lg:text-xl ${
            something ? "line-through text-gray-400" : ""
          } cursor-pointer`}
        >
          {data}
        </label>
      </div>
      {desc && (
        <p
          style={{ padding: "16px " }}
          className="text-gray-500 lg:max-w-[70%]"
        >
          {desc}
        </p>
      )}
    </div>
  );
}
