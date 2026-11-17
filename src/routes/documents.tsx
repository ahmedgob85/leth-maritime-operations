import { createFileRoute } from "@tanstack/react-router";

import { ModulePage } from "@/components/layout/module-page";
import { pageHead } from "@/lib/navigation";

export const Route = createFileRoute("/documents")({
  head: () => pageHead("Documents & Permits", "Port access permits, licences and vehicle documents with expiry control."),
  component: () => <ModulePage moduleKey="documents" />,
});
