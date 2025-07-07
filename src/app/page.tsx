import AgentCatalogPage from "@/components/modules/AgentCatalog";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 pt-8">
        <header className="text-center ">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ArkLab AI Agent Catalog
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover and explore our comprehensive catalog of AI agents designed
            to enhance your business operations across various domains.
          </p>
        </header>
      </div>
      <AgentCatalogPage />
    </div>
  );
};

export default HomePage;
