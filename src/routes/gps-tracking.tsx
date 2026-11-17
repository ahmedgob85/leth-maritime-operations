import { createFileRoute } from "@tanstack/react-router";

import { ModulePage } from "@/components/layout/module-page";
import { pageHead } from "@/lib/navigation";

export const Route = createFileRoute("/gps-tracking")({
  head: () => pageHead("GPS Tracking", "Live vehicle positions and route history for crew transport operations."),
  component: () => <ModulePage moduleKey="gps" />,
});
