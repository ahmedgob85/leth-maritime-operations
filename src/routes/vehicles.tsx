import { createFileRoute } from "@tanstack/react-router";

import { ModulePage } from "@/components/layout/module-page";
import { pageHead } from "@/lib/navigation";

export const Route = createFileRoute("/vehicles")({
  head: () => pageHead("Vehicles", "Fleet register with vehicle details, capacity and operational status."),
  component: () => <ModulePage moduleKey="vehicles" />,
});
