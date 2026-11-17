import { createFileRoute } from "@tanstack/react-router";

import { ModulePage } from "@/components/layout/module-page";
import { pageHead } from "@/lib/navigation";

export const Route = createFileRoute("/drivers")({
  head: () => pageHead("Drivers", "Driver records, availability and licence compliance for the LETH fleet."),
  component: () => <ModulePage moduleKey="drivers" />,
});
