"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  applyFilters,
  clearFilters,
  setCategoryFilter,
  setPricingModel,
  setStatusFilter,
} from "@/redux/features/agentSlice";
import { AppDispatch, RootState } from "@/redux/store";

const statuses = ["Active", "Beta", "Archived"];
const categories = [
  "Customer Service",
  "Operations",
  "Marketing",
  "Data Analysis",
  "Development",
  "Human Resources",
  "Finance",
  "Legal",
];
const pricingModels = ["Free Tier", "Subscription", "Per-Use"];

export default function FilterSidebar() {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedStatus, selectedCategories, selectedPricingModel } =
    useSelector((state: RootState) => state.agent);

  const [status, setStatus] = useState<string[]>(selectedStatus);
  const [category, setCategory] = useState<string[]>(selectedCategories);
  const [pricing, setPricing] = useState<string>(selectedPricingModel);

  const toggleArrayValue = (array: string[], value: string): string[] =>
    array.includes(value)
      ? array.filter((v) => v !== value)
      : [...array, value];

  useEffect(() => {
    dispatch(setStatusFilter(status));
    dispatch(setCategoryFilter(category));
    dispatch(setPricingModel(pricing));
    dispatch(applyFilters());
  }, [status, category, pricing, dispatch]);

  const handleClear = () => {
    setStatus([]);
    setCategory([]);
    setPricing("");
    dispatch(clearFilters());
  };

  const hasFilters = status.length > 0 || category.length > 0 || pricing !== "";

  return (
    <aside className="w-full max-w-xs p-4 border rounded-2xl bg-white space-y-6 shadow-sm">
      <h3 className="text-xl font-semibold">Filters</h3>
      <hr />

      {/* Active Filters */}
      {hasFilters && (
        <div className="mb-4">
          <h4 className="text-lg font-bold mb-2">Active Filters:</h4>
          <div className="flex flex-wrap gap-2">
            {/* Status */}
            {status.map((s) => (
              <span
                key={s}
                className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm cursor-pointer"
                onClick={() => setStatus((prev) => prev.filter((v) => v !== s))}
                title="Click to remove"
              >
                Status: {s} ×
              </span>
            ))}

            {/* Category */}
            {category.map((c) => (
              <span
                key={c}
                className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm cursor-pointer"
                onClick={() =>
                  setCategory((prev) => prev.filter((v) => v !== c))
                }
                title="Click to remove"
              >
                Category: {c} ×
              </span>
            ))}

            {/* Pricing */}
            {pricing && (
              <span
                className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm cursor-pointer"
                onClick={() => setPricing("")}
                title="Click to remove"
              >
                Pricing: {pricing} ×
              </span>
            )}
          </div>
        </div>
      )}

      <Accordion type="multiple" className="w-full">
        {/* Status Accordion */}
        <AccordionItem value="status">
          <AccordionTrigger className="text-lg cursor-pointer hover:bg-gray-100 px-2 py-1 my-3 rounded-md transition">
            Status
          </AccordionTrigger>
          <AccordionContent>
            {statuses.map((s) => (
              <div key={s} className="flex items-center gap-2 mb-2 my-3">
                <Checkbox
                  id={s}
                  checked={status.includes(s)}
                  onCheckedChange={() => setStatus(toggleArrayValue(status, s))}
                />
                <Label htmlFor={s}>{s}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Category Accordion */}
        <AccordionItem value="category">
          <AccordionTrigger className="text-lg cursor-pointer hover:bg-gray-100 px-2 py-1 my-3 rounded-md transition">
            Category
          </AccordionTrigger>
          <AccordionContent>
            {categories.map((c) => (
              <div key={c} className="flex items-center gap-2 mb-2 my-3">
                <Checkbox
                  id={c}
                  checked={category.includes(c)}
                  onCheckedChange={() =>
                    setCategory(toggleArrayValue(category, c))
                  }
                />
                <Label htmlFor={c}>{c}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Pricing Accordion */}
        <AccordionItem value="pricing">
          <AccordionTrigger className="text-lg cursor-pointer hover:bg-gray-100 px-2 py-1 my-3 rounded-md transition">
            Pricing Model
          </AccordionTrigger>
          <AccordionContent>
            {pricingModels.map((model) => (
              <div key={model} className="flex items-center gap-2 mb-2 my-3">
                <input
                  type="radio"
                  id={model}
                  name="pricing"
                  value={model}
                  checked={pricing === model}
                  onChange={() => setPricing(model)}
                  className="form-radio text-3xl"
                />
                <Label htmlFor={model}>{model}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button
        variant="secondary"
        onClick={handleClear}
        disabled={!hasFilters}
        className={`w-full text-white font-medium rounded-md transition 
    ${
      hasFilters
        ? "bg-gray-700 hover:bg-gray-800"
        : "bg-gray-500 cursor-not-allowed"
    }`}
      >
        Clear All Filters
      </Button>
    </aside>
  );
}
