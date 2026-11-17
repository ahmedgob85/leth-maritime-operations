import { createFileRoute } from "@tanstack/react-router";

import { ModulePage } from "@/components/layout/module-page";
import { pageHead } from "@/lib/navigation";

export const Route = createFileRoute("/reports")({
  head: () => pageHead("Reports", "Operational and financial reports for LETH Agencies crew transport."),
  component: () => <ModulePage moduleKey="reports" />,
});
