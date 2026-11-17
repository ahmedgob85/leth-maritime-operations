import { createFileRoute } from "@tanstack/react-router";

import { ModulePage } from "@/components/layout/module-page";
import { pageHead } from "@/lib/navigation";

export const Route = createFileRoute("/maintenance")({
  head: () => pageHead("Maintenance", "Preventive and corrective maintenance for the LETH vehicle fleet."),
  component: () => <ModulePage moduleKey="maintenance" />,
});
