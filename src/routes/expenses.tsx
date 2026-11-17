import { createFileRoute } from "@tanstack/react-router";

import { ModulePage } from "@/components/layout/module-page";
import { pageHead } from "@/lib/navigation";

export const Route = createFileRoute("/expenses")({
  head: () => pageHead("Expenses", "Fuel, tolls, parking and other operating expenses for crew transport."),
  component: () => <ModulePage moduleKey="expenses" />,
});
