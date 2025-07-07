import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Agent {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
}

interface AgentState {
  allAgents: Agent[];
  filteredAgents: Agent[];
  searchQuery: string;
  selectedStatus: string[];
  selectedCategories: string[];
  selectedPricingModel: string;
}

const initialState: AgentState = {
  allAgents: [],
  filteredAgents: [],
  searchQuery: "",
  selectedStatus: [],
  selectedCategories: [],
  selectedPricingModel: "",
};

const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    setAgents(state, action: PayloadAction<Agent[]>) {
      state.allAgents = action.payload;
      state.filteredAgents = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setStatusFilter(state, action: PayloadAction<string[]>) {
      state.selectedStatus = action.payload;
    },
    setCategoryFilter(state, action: PayloadAction<string[]>) {
      state.selectedCategories = action.payload;
    },
    setPricingModel(state, action: PayloadAction<string>) {
      state.selectedPricingModel = action.payload;
    },
    clearFilters(state) {
      state.selectedStatus = [];
      state.selectedCategories = [];
      state.selectedPricingModel = "";
      state.searchQuery = "";
      state.filteredAgents = state.allAgents;
    },
    applyFilters(state) {
      const query = state.searchQuery.toLowerCase();

      state.filteredAgents = state.allAgents.filter((agent) => {
        const matchesQuery =
          agent.name.toLowerCase().includes(query) ||
          agent.description.toLowerCase().includes(query);

        const matchesStatus =
          state.selectedStatus.length === 0 ||
          state.selectedStatus.includes(agent.status);

        const matchesCategory =
          state.selectedCategories.length === 0 ||
          state.selectedCategories.includes(agent.category);

        const matchesPricing =
          state.selectedPricingModel === "" ||
          agent.pricingModel === state.selectedPricingModel;

        return (
          matchesQuery && matchesStatus && matchesCategory && matchesPricing
        );
      });
    },
  },
});

export const {
  setAgents,
  setSearchQuery,
  setStatusFilter,
  setCategoryFilter,
  setPricingModel,
  clearFilters,
  applyFilters,
} = agentSlice.actions;

export default agentSlice.reducer;
