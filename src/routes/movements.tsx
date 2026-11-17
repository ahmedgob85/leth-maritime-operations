import { createFileRoute } from "@tanstack/react-router";

import { ModulePage } from "@/components/layout/module-page";
import { pageHead } from "@/lib/navigation";

export const Route = createFileRoute("/movements")({
  head: () => pageHead("Movement Management", "Plan and coordinate crew sign-on, sign-off and transfer movements for LETH Agencies."),
  component: () => <ModulePage moduleKey="movements" />,
});
