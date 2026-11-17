import { createFileRoute } from "@tanstack/react-router";

import { ModulePage } from "@/components/layout/module-page";
import { pageHead } from "@/lib/navigation";

export const Route = createFileRoute("/trips")({
  head: () => pageHead("Trips", "Crew transport trips between ports, airports, hotels and offices."),
  component: () => <ModulePage moduleKey="trips" />,
});
