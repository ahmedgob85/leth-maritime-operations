import { createFileRoute } from "@tanstack/react-router";

import { ModulePage } from "@/components/layout/module-page";
import { pageHead } from "@/lib/navigation";

export const Route = createFileRoute("/users")({
  head: () => pageHead("Users & Permissions", "System users, roles and access control for LETH Operations."),
  component: () => <ModulePage moduleKey="users" />,
});
