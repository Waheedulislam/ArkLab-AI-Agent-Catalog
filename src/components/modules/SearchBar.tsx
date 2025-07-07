"use client";

import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { debounce } from "lodash";
import { AppDispatch } from "@/redux/store";
import { applyFilters, setSearchQuery } from "@/redux/features/agentSlice";
import { Search } from "lucide-react"; // 👈 lucide-react icon

export default function SearchBar() {
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = useCallback(
    debounce((value: string) => {
      dispatch(setSearchQuery(value));
      dispatch(applyFilters());
    }, 300),
    []
  );

  return (
    <div className="relative w-full max-w-full mb-4">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
      <Input
        type="text"
        placeholder="Search agents by name or description..."
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-10 rounded-sm h-12"
      />
    </div>
  );
}
