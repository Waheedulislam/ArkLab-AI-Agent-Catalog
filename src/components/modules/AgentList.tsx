"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AgentCard from "./AgentCard";
import { motion } from "framer-motion";
import { Agent, applyFilters, setAgents } from "@/redux/features/agentSlice";
import { AppDispatch, RootState } from "@/redux/store";

interface Props {
  agents: Agent[];
}

export default function AgentList({ agents }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const filteredAgents = useSelector(
    (state: RootState) => state.agent.filteredAgents
  );

  useEffect(() => {
    dispatch(setAgents(agents));
    dispatch(applyFilters());
  }, [dispatch, agents]);

  return (
    <section className="px-4 py-6">
      <p className="text-muted-foreground mb-6">
        Showing {filteredAgents.length} of {agents.length} agents
      </p>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredAgents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </motion.div>
    </section>
  );
}
