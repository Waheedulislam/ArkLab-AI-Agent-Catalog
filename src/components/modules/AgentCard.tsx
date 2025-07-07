// components/AgentCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { Agent } from "@/redux/features/agentSlice";

interface Props {
  agent: Agent;
}

const statusColors: Record<string, string> = {
  Active: "bg-green-100 text-green-800",
  Beta: "bg-yellow-100 text-yellow-800",
  Archived: "bg-gray-100 text-gray-700",
};

export default function AgentCard({ agent }: Props) {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="shadow-md h-full rounded-2xl">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <Bot className="w-5 h-5 text-gray-500" />
            </div>
            <h2 className="font-semibold text-lg">{agent.name}</h2>
          </div>
          <p className="text-gray-600 text-sm">{agent.description}</p>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Status:</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  statusColors[agent.status]
                }`}
              >
                {agent.status}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Category:</span>
              <Badge variant="outline">{agent.category}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Pricing:</span>
              <Badge
                className={
                  agent.pricingModel === "Free Tier"
                    ? "bg-blue-100 text-blue-700"
                    : agent.pricingModel === "Subscription"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-orange-100 text-orange-700"
                }
              >
                {agent.pricingModel}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
