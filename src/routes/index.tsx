import { createFileRoute } from "@tanstack/react-router";

import { DashboardView } from "@/components/dashboard/dashboard-view";
import { pageHead } from "@/lib/navigation";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Dashboard",
      "Operations overview of crew movements, trips and fleet status for LETH Agencies.",
    ),
  component: DashboardView,
});
