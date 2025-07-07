import FilterSidebar from "./FilterSidebar";
import SearchBar from "./SearchBar";
import AgentList from "./AgentList";
import agents from "@/data/mock-agents.json";

export default async function AgentCatalogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-1/4">
          <FilterSidebar />
        </aside>
        {/* Main */}
        <main className="flex-1">
          <SearchBar />
          <AgentList agents={agents} />
        </main>
      </div>
    </div>
  );
}
